import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { info, topicHandler, transferHbar } from "./hedera/hedera";

function App() {
  useEffect(() => {
    const httpHandler = async () => {
      await transferHbar();
      await topicHandler();
      await info();
    };
    try {
      httpHandler();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>HI</div>;
}

export default App;
