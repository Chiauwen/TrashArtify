import cv2
from ultralytics import YOLO
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

model = YOLO("trash.pt").to(device)

classNames = ["BIODEGRADABLE", "CARDBOARD", "GLASS", "METAL", "PAPER", "PLASTIC"]

cap = cv2.VideoCapture(0)


def main(data):

    if data == "image":
        print("Image received")
        data = "user_upload/user.jpg"
        trashes_info_generator = image(data)

        # Convert generator to list
        trashes_info_list = list(trashes_info_generator)

        for info in trashes_info_list:
            class_id = info['class_id']
            print(
                f"Class ID: {class_id}, Recyclable Type: {info['recyclable_type']}, Trash Type: {info['trash_type']}"
            )

            
    elif data == "frame":
        print("frame receive")
        
    print("CHECK")
    return trashes_info_list
        
    
def classify_trash(class_ids):
    trash_info = []

    for class_id in class_ids:
        if class_id == 0:
            recyclable_type = "recyclable"
            trash_type = "biodegradable"
        elif class_id == 1:
            recyclable_type = "recyclable"
            trash_type = "cardboard"
        elif class_id == 2:
            recyclable_type = "recyclable"
            trash_type = "glass"
        elif class_id == 3:
            recyclable_type = "non-recyclable"
            trash_type = "metal"
        elif class_id == 4:
            recyclable_type = "recyclable"
            trash_type = "paper"
        elif class_id == 5:
            recyclable_type = "recyclable"
            trash_type = "plastic"
        else:
            recyclable_type = "unknown"
            trash_type = "unknown"

        class_info = {
            "class_id": class_id,
            "recyclable_type": recyclable_type,
            "trash_type": trash_type,
        }

        trash_info.append(class_info)

    return trash_info


def image(data):
    results = model(data, show=True, conf=0.7, save=True, project='user_upload')

    class_ids = []

    for r in results:
        for x in r:
            cls = x.boxes.cls
            cls_value = int(cls.item())
            class_ids.append(cls_value)

    print("All Class IDs:", class_ids)

    trash_info = classify_trash(class_ids)
    
    return trash_info

# def webcam(data):
#     while True:
#         ret, frame = cap.read()

#         results = model(frame)[0]

#         for result in results.boxes.data.tolist():
#             x1, y1, x2, y2, score, class_id = result

#             threshold = 0.8

#             if score > threshold:
#                 cv2.rectangle(
#                     frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 4
#                 )
#                 cv2.putText(
#                     frame,
#                     results.names[int(class_id)],
#                     (int(x1), int(y1 - 10)),
#                     cv2.FONT_HERSHEY_SIMPLEX,
#                     1.3,
#                     (0, 255, 0),
#                     3,
#                     cv2.LINE_AA,
#                 )

#             classify_trash(class_id, frame)
#         cv2.imshow("Webcam", frame)

#         if cv2.waitKey(1) == ord("q"):
#             break

#     cap.release()
#     cv2.destroyAllWindows()
