import torch
from diffusers import DiffusionPipeline

# You can change the name of the HuggingFace model repository here to use a different model
pipeline = DiffusionPipeline.from_pretrained("Lykon/DreamShaper")
pipeline = pipeline.to('mps')
# Device "cpu" is required for Apple Silicon
# You can change the seed here from 0; removing the seed will give you random generations
generator = torch.Generator(device="cpu").manual_seed(0)

# Recommended if your computer has < 64 GB of RAM
pipeline.enable_attention_slicing()

image = pipeline(
	"messiah, Muad'dib, Lisan al Gaib, brave, portrait, film, kodak ultramax, overexposed, 35mm f/2", generator=generator
).images[0]

image.save('test.png')
