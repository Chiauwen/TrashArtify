import cv2
from ultralytics import YOLO
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

model = YOLO("trash.pt").to(device)
paper_model = YOLO("paper.pt").to(device)
bottle_model = YOLO("bottle.pt").to(device)


classNames = ["BIODEGRADABLE", "CARDBOARD", "GLASS", "METAL", "PAPER", "PLASTIC"]
class_paper = ["PAPER"]
class_bottle = ["BOTTLE"]

cap = cv2.VideoCapture(0)


def classify_trash(class_ids):
    print(class_ids)
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
        class_ids = []
        ret, frame = cap.read()

        results = model(frame)[0]

        for r in results:
            for box in r.boxes:
                conf = box.conf

                cls = int(box.cls[0])

                currentClass = classNames[cls]

                if (
                    currentClass == "BIODEGRADABLE"
                    or currentClass == "CARDBOARD"
                    or currentClass == "GLASS"
                    or currentClass == "METAL"
                    or currentClass == "PLASTIC"
                ) and conf > 0.7:
                    x1, y1, x2, y2 = box.xyxy[0]
                    cv2.rectangle(
                        frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 4
                    )
                    cv2.putText(
                        frame,
                        results.names[cls].upper(),
                        (int(x1), int(y1 - 10)),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        1.3,
                        (0, 255, 0),
                        3,
                        cv2.LINE_AA,
                    )

                    class_ids.append(cls)

        trash_info = classify_trash(class_ids)

        for info in trash_info:
            class_id = info["class_id"]
            print(
                "Class ID: {class_id}, Recyclable Type: {info['recyclable_type']}, Trash Type: {info['trash_type']}"
            )
        # cv2.imshow("Webcam", frame)
        
        yield frame, trash_info

        if cv2.waitKey(1) == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()


webcam()
