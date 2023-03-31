# [Video Seeking Mouse Interaction](https://xrrca.github.io/creative-js/video-seeking/)

Based on the effect from https://cantouchthis.studio/. [Try it live](https://xrrca.github.io/creative-js/video-seeking/).

## Generating Images

https://stackoverflow.com/questions/40088222/ffmpeg-convert-video-to-images

```
# Get still frames from video, size to 400 width while maintaining aspect ratio, compress
ffmpeg -i video.mp4 -vf fps=1 scale=400:-1 -qscale:v 10 %d.jpg
```
