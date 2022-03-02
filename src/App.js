import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { topicHandler, transferHbar } from "./hedera/hedera";

function App() {
  useEffect(() => {
    const httpHandler = async () => {
      await transferHbar();
      await topicHandler();
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
