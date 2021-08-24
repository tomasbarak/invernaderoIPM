/*
  Rui Santos
  Complete project details at Complete project details at https://RandomNerdTutorials.com/esp32-http-get-post-arduino/

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files.

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
*/

#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Fibertel WiFi931 2.4GHz";
const char* password = "01428169600";
const int lightSensorPin = 15;
//Your Domain name with URL path or IP address with path
String serverName = "https://coral-newt-2178.twil.io/UpdateSensors";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
unsigned long timerDelay = 500;

void setup() {
  Serial.begin(9600); 
  //pinMode(lightSensorPin, INPUT);
  WiFi.begin(ssid, password);
  //Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    //Serial.print(".");
  }
  //Serial.println("");
  //Serial.print("Connected to WiFi network with IP Address: ");
  //Serial.println(WiFi.localIP());
 
  //Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}
void sendData(String value){
  if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;
      
      // Your Domain name with URL path or IP address with path
      http.begin(serverName);
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      // Send HTTP POST request
      String httpRequestData = "api_key=2eccffee-2a24-4c96-9264-d823fa4e1d86&ah=24.25&value2=49.54&al="+ value +"&at=25&ft=60";
      int httpResponseCode = http.POST(httpRequestData);
      
      if (httpResponseCode>0) {
        //Serial.print("HTTP Response code: ");
        //Serial.println(httpResponseCode);
        String payload = http.getString();
        //Serial.println(payload);
      }
      else {
        //Serial.print("Error code: ");
        //Serial.println(httpResponseCode);
      }
      // Free resources
      http.end();
    }
    else {
      //Serial.println("WiFi Disconnected");
    }
}
void loop() {
  //Send an HTTP POST request every 10 minutes
  //Serial.println(millis() - lastTime);
  if ((millis() - lastTime) > timerDelay) {
      char lightValue;
      String valueFinal;
      while (Serial.available() > 0)
    {
        lightValue = Serial.read();

        // Process message when new line character is recieved
        if (lightValue != '\r' && lightValue != '\n')
        {
            valueFinal += lightValue; 
        }else{
            if(valueFinal != ""){
              sendData(valueFinal);
            }
            valueFinal = ""; // Clear recieved buffer
        }
    }
    //Serial.write(lightValue);
    //Check WiFi connection status
    
    lastTime = millis();
  }
}
