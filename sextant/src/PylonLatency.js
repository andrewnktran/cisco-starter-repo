import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

const PylonLatency = () => {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const client = new Client();
    client.brokerURL = "ws://localhost:55455";
    client.onConnect = (frame) => {
      const subscription = client.subscribe("/topic/packets", (message) => {
        const timestamp = JSON.parse(message.body).timestamp;
        const currentTime = new Date().getTime();
        setLatency(currentTime - timestamp);
      });
    };
    client.activate();
  }, []);

  return (
    <div>
      <h3>Packet Latency: {latency} ms</h3>
    </div>
  );
};

export default PylonLatency;
