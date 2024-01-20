import mqtt, { IClientOptions, MqttClient } from "mqtt";
import { useEffect, useState } from "react";

interface MQTTHook {
  client: MqttClient | null;
  subscribeToTopic: (
    topic: string,
    callback: (message: string) => void
  ) => void;
  unsubscribeFromTopic: (topic: string) => void;
}
/**
 * Returns an MQTT hook that allows connecting to an MQTT broker,
 * subscribing and unsubscribing to topics, and receiving messages.
 *
 * @return {MQTTHook} The MQTT hook object.
 */
const useMQTT = (): MQTTHook => {
  const [client, setClient] = useState<MqttClient | null>(null);

  useEffect(() => {
    const options: IClientOptions = {
      protocol: "ws",
      host: "localhost",
      port: 8083,
      path: "/mqtt"
    };

    const mqttClient = mqtt.connect(options);

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    setClient(mqttClient);

    // Cleanup on unmount
    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  const subscribeToTopic = (
    topic: string,
    callback: (message: string) => void
  ): void => {
    if (client) {
      client.subscribe(topic);
      client.on("message", (receivedTopic : any, message : any) => {
        if (receivedTopic === topic) {
          callback(message.toString());
        }
      });
    }
  };

  const unsubscribeFromTopic = (topic: string): void => {
    if (client) {
      client.unsubscribe(topic);
    }
  };

  return { client, subscribeToTopic, unsubscribeFromTopic };
};

export default useMQTT;
