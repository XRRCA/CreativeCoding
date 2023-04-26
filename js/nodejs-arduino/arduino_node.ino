int potValue = 0;
int potPrevValue = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  potValue = analogRead(A0);

  if(potValue != potPrevValue) {
    Serial.print("pot1: ");
    Serial.println(potValue);
    potPrevValue = potValue;
  }

  delay(15);
}
