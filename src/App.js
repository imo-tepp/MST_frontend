import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import {io} from "socket.io-client";
const ENDPOINT = "https://mst-full-stack-dev-test.herokuapp.com/";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("data-update", data=> {
      setResponse(data);
      console.log(socket.id);
      console.log(data);
    });
}, []);

return(
  <p>
    its {Response}
  </p>
);

}

export default App;
