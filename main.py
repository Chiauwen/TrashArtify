import cv2
from ultralytics import YOLO
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

model = YOLO("trash.pt").to(device)

classNames = ["BIODEGRADABLE", "CARDBOARD", "GLASS", "METAL", "PAPER", "PLASTIC"]

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()

    results = model(frame)[0]

    for result in results.boxes.data.tolist():
        x1, y1, x2, y2, score, class_id = result

        threshold = 0.8

        if score > threshold:
            cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 4)
            cv2.putText(
                frame,
                results.names[int(class_id)],
                (int(x1), int(y1 - 10)),
                cv2.FONT_HERSHEY_SIMPLEX,
                1.3,
                (0, 255, 0),
                3,
                cv2.LINE_AA,
            )

            if class_id == 0.0:
                cv2.putText(
                    frame,
                    "non-recyclable",
                    (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
                cv2.putText(
                    frame,
                    "type: biodegradeble",
                    (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
            elif class_id == 1.0:
                cv2.putText(
                    frame,
                    "recyclable",
                    (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
                cv2.putText(
                    frame,
                    "type: cardboard",
                    (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
            elif class_id == 2.0:
                cv2.putText(
                    frame,
                    "recyclable",
                    (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
                cv2.putText(
                    frame,
                    "type: glass",
                    (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
            elif class_id == 3.0:
                cv2.putText(
                    frame,
                    "non-recyclable",
                    (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
                cv2.putText(
                    frame,
                    "type: metal",
                    (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
            elif class_id == 4.0:
                cv2.putText(
                    frame,
                    "recyclable",
                    (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
                cv2.putText(
                    frame,
                    "type: paper",
                    (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
            elif class_id == 5.0:
                cv2.putText(
                    frame,
                    "recyclable",
                    (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )
                cv2.putText(
                    frame,
                    "type: plastic",
                    (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (79, 50, 173),
                    2,
                )

    cv2.imshow("Webcam", frame)

    if cv2.waitKey(1) == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
