
# TrashArtify

TrashArtify is all about empowering eco-creativity. Scan recyclables, generate AI craft ideas, and create sustainable handicraft. Join our eco-friendly community, turning waste into creative inspiration and transforming trash into treasure.


## Authors

- [@TSJean45](https://github.com/TSJean45)
- [@Chiauwen](https://github.com/Chiauwen)


## Features

- Multiple Object Detection
- Trash Classification
- Upcycling Suggestion
- Handcraft AI Generator
- Handcraft Marketplace
- Weekly Challenges


## File Details

The object detection model consists of the model after training [Garbage Classification Dataset](https://universe.roboflow.com/material-identification/garbage-classification-3) with YOLOv8 on a 200 epoch.

```bash
   object detection model training.ipynb
```

The Python applications consists of the object detection feature utilising computer/laptop's webcamera.

```bash
   main.py
```

The Stable Diffusion model is a pretrained model from Hugging Face. It takes in prompts and generate images based on the prompt.

```bash
   trash to handicraft.ipynb
```
    
