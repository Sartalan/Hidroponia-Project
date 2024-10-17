#include <WiFi.h>
#include <WebSocketClient.h>


const char* ssid = "TP-LINK_3C90";
const char* password = "yBxwCV3AryoFqJ8RHfYU";
char path[] = "/";
char host[] = "192.168.50.105";
char texto = ' ';

//---------------
//wifi del colegio
//Estudiantes
//educar_2018
//10.0.14.24
//---------------
//Wifi de mi casa
//TP-LINK_3C90
//yBxwCV3AryoFqJ8RHfYU
//ip: 192.168.50.104
  
WebSocketClient webSocketClient;

// Use WiFiClient class to create TCP connections
WiFiClient client;

void setup() {
  Serial.begin(115200);
  delay(10);

  // We start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  delay(5000);
  

  // Connect to the websocket server
  if (client.connect(host, 5000)) {
    Serial.println("Connected");
  } else {
    Serial.println("Connection failed.");
    while(1) {
      // Hang on failure
    }
  }

  // Handshake with the server
  webSocketClient.path = path;
  webSocketClient.host = host;
  if (webSocketClient.handshake(client)) {
    Serial.println("Handshake successful");
  } else {
    Serial.println("Handshake failed.");
    while(1) {
      // Hang on failure
    }  
  }

}


void loop() {
  String data;

   if(Serial.available() != 0){
    texto = Serial.read();
    if(texto == '1'){
      Serial.println("Soy la cocina");
      webSocketClient.sendData("Kitchen");
    }

    else if(texto == '2'){
      Serial.println("Soy el comedor");
      webSocketClient.sendData("Living Room");

    }


     else if(texto == '3'){
      Serial.println("Soy la habitación");
      webSocketClient.sendData("Bedroom");
    }
  }

  if (client.connected()) {
    
    webSocketClient.getData(data);
    if (data.length() > 0) {
      Serial.print("Received data: ");
      Serial.println(data);
    }
   
    data = "hello from esp32";
    
    webSocketClient.sendData(data);

    
  } else {
    Serial.println("Client disconnected.");
    while (1) {
      // Hang on disconnect.
    }
  }
  
  // wait to fully let the client disconnect
  delay(3000);
  
}

