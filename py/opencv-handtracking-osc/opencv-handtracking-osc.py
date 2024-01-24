import cv2
import mediapipe as mp
import math
import time
import itertools
from pythonosc.udp_client import SimpleUDPClient

ip = "127.0.0.1"
port = 9999

client = SimpleUDPClient(ip, port)  # Create client

cap = cv2.VideoCapture(0)

mpHands = mp.solutions.hands
hands = mpHands.Hands(static_image_mode=False,
                      max_num_hands=2,
                      min_detection_confidence=0.5,
                      min_tracking_confidence=0.5)
mpDraw = mp.solutions.drawing_utils

pTime = 0
cTime = 0

while True:
    success, img = cap.read()
    imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(imgRGB)
    #print(results.multi_hand_landmarks)
    circle_color = (255,0,0)

    if results.multi_hand_landmarks:
        for idx, handLms in enumerate(results.multi_hand_landmarks):
            landmark_coords = []
            for id, lm in enumerate(handLms.landmark):
                #print(id,lm)
                h, w, c = img.shape
                cx, cy = int(lm.x *w), int(lm.y*h)
                #if id ==0:
                cv2.circle(img, (cx,cy), 3, (255,0,255), cv2.FILLED)
                landmark_coords.append((lm.x, lm.y))
            if len(landmark_coords) > 0:
                avg = lambda x: sum(x) / len(x)
                avg_x = avg([p[0] for p in landmark_coords])
                avg_y = avg([p[1] for p in landmark_coords])
                # Send all the bone points
                # client.send_message("/handtracking/hand" + str(idx), itertools.chain.from_iterable(landmark_coords))
                # Send an average of the hand location
                client.send_message("/handtracking/hand" + str(idx), [avg_x, avg_y])

            mpDraw.draw_landmarks(img, handLms, mpHands.HAND_CONNECTIONS)


    cTime = time.time()
    fps = 1/(cTime-pTime)
    pTime = cTime

    cv2.putText(img,str(int(fps)), (10,70), cv2.FONT_HERSHEY_PLAIN, 3, (255,0,255), 3)

    cv2.imshow("Image", img)
    cv2.waitKey(1)
