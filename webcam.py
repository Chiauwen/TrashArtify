import cv2
from ultralytics import YOLO
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

model = YOLO("trash.pt").to(device)

classNames = ["BIODEGRADABLE", "CARDBOARD", "GLASS", "METAL", "PAPER", "PLASTIC"]

cap = cv2.VideoCapture(0)
        
    
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

def webcam():
    while True:
        ret, frame = cap.read()

        results = model(frame)[0]

        results = model.track(frame, persist=True, conf=0.6)
        
        annotated_frame = results[0].plot()
        
        # for *box, conf, cls in results.xyxy[0]:
        #     class_label = model.names[int(cls)]
        #     print('Detected:', class_label)
        #     # Use class_label to control the stepper motor

        # classify_trash(class_label)
        cv2.imshow("Webcam", annotated_frame)

        if cv2.waitKey(1) == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()

webcam()