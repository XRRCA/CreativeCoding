# Streetview Movie

Downloads the images needed from Google Streetview Static API for generating a video of driving between two places. Requires a Google Maps Javascript API key.

This example is a WIP. Still left to be done:

- [ ] face the right direction
- [ ] add web ui

## Generating output

```sh
# Concatenate png files into an H264 mp4
ffmpeg -r 20 -f image2 -s 640x640 -i "path/to/images-%d.png" -vcodec libx264 -crf 25 -pix_fmt yuv420p output.mp4 -y

# Remove duplicate frames
ffmpeg -i output.mp4 -vf mpdecimate,setpts=N/FRAME_RATE/TB  -vsync vfr output-clean.mp4
```
