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

def photo():
    
    trashes_info_list = []

    print("Image received")
    data = "user_upload/user.jpg"
    trashes_info_generator = image(data)

    # Convert generator to list
    trashes_info_list = list(trashes_info_generator)

    for info in trashes_info_list:
        class_id = info['class_id']
        print(
            "Class ID: {class_id}, Recyclable Type: {info['recyclable_type']}, Trash Type: {info['trash_type']}"
        )

    print("CHECK PHOTO")
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
            trash_type = "glass jar"
        elif class_id == 3:
            recyclable_type = "non-recyclable"
            trash_type = "metal"
        elif class_id == 4:
            recyclable_type = "recyclable"
            trash_type = "paper"
        elif class_id == 5:
            recyclable_type = "recyclable"
            trash_type = "plastic"
        elif class_id == 6:
            recyclable_type = "recyclable"
            trash_type = "plastic bottle"
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
    result_paper = paper_model(data, show=True, conf=0.7, save=True, project='user_upload')
    result_bottle = bottle_model(data, show=True, conf=0.7, save=True, project='user_upload')

    class_ids = []

    for r in results:
        for x in r:
            cls = x.boxes.cls
            cls_value = int(cls.item())
            class_ids.append(cls_value)
            
    for r in result_paper:
        for x in r:
            cls = x.boxes.cls
            cls_value = 4
            class_ids.append(cls_value)
            
    for r in result_bottle:
        for x in r:
            cls = x.boxes.cls
            cls_value = 6
            class_ids.append(cls_value)

    print("All Class IDs:", class_ids)

    trash_info = classify_trash(class_ids)
    
    return trash_info

