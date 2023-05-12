import cv2

cap = cv2.VideoCapture(0)
fgbg = cv2.createBackgroundSubtractorMOG2()

while True:
    ret, frame = cap.read()

    fgmask = fgbg.apply(frame)
    # print(type(frame), frame.shape, type(fgmask), fgmask.shape)

    cv2.imshow('fgmask', fgmask)
    cv2.imshow('frame', frame)

    # wait for esc
    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break


cap.release()
cv2.destroyAllWindows()
