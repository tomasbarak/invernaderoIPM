void setup() {
 Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int value = analogRead(A0);
  delay(1000);
  Serial.println(value);


}
