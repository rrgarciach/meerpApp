#include <SoftwareSerial.h>
#include <espduino.h>
#include <mqtt.h>

SoftwareSerial slave(2, 3); // Slave Bluetooth serial communication RX, TX
SoftwareSerial master(3, 4); // Master Bluetooth serial communication RX, TX
SoftwareSerial debugPort(6, 7); // Debugging serial pins RX, TX (for optional device)
ESP esp(&Serial, &debugPort, 5); // ESP serial communication
MQTT mqtt(&esp);
boolean wifiConnected = false;

void wifiCb(void* response)
{
  uint32_t status;
  RESPONSE res(response);

  if(res.getArgc() == 1) {
    res.popArgs((uint8_t*)&status, 4);
    if(status == STATION_GOT_IP) {
      debugPort.println("WIFI CONNECTED");
      mqtt.connect("192.168.100.4", 1883, false);
      wifiConnected = true;
      //or mqtt.connect("host", 1883); /*without security ssl*/
    } else {
      wifiConnected = false;
      mqtt.disconnect();
    }

  }
}

void mqttConnected(void* response)
{
  debugPort.println("Connected");
  // (The last topic's number represents QoS)
  mqtt.publish("/printers/thermal/1/2", data); // Publish to Thermal Printer 1
  mqtt.subscribe("/printers/thermal/1/2"); // Subscribe to Thermal Printer 1

}

void mqttDisconnected(void* response)
{
	// What to do when disconnected.
}

void mqttData(void* response)
{
  // Parse response
  RESPONSE res(response);

  // Send received data to Thermal Printer device
  master.println(res.popString());

  // Send log to debug port
  debugPort.print("Received: topic=");
  String topic = res.popString();
  debugPort.println(topic);

  debugPort.print("data=");
  String data = res.popString();
  debugPort.println(data);

}

void mqttPublished(void* response)
{
	// What to do when published.
}

void setup() {
  // Setup Serial sockets:
  Serial.begin(19200);
  slave.begin(19200);
  master.begin(19200);
  debugPort.begin(19200);

  // Activate ESP devices:
  esp.enable();
  delay(500);
  esp.reset();
  delay(500);
  while(!esp.ready());

  debugPort.println("ARDUINO: setup mqtt client");
  if(!mqtt.begin("DVES_duino", "admin", "Isb_C4OGD4c3", 120, 1)) {
    debugPort.println("ARDUINO: fail to setup mqtt");
    while(1);
  }


  debugPort.println("ARDUINO: setup mqtt lwt");
  mqtt.lwt("/lwt", "offline", 0, 0); //or mqtt.lwt("/lwt", "offline");

/*setup mqtt events */
  mqtt.connectedCb.attach(&mqttConnected);
  mqtt.disconnectedCb.attach(&mqttDisconnected);
  mqtt.publishedCb.attach(&mqttPublished);
  mqtt.dataCb.attach(&mqttData);

  /*setup wifi*/
  debugPort.println("ARDUINO: setup wifi");
  esp.wifiCb.attach(&wifiCb);

  esp.wifiConnect("wifiName","password");


  debugPort.println("ARDUINO: system started");
}

void loop() {
  esp.process();
  if(wifiConnected) {

  }
}
