import "./App.css";
import { IKImage } from "imagekitio-react";
import { Hello } from "./components";

function App() {
  return (
    // <IKImage
    //   urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
    //   path="typescript-in-50-lessons.jpg"
    // />
    <div>
      <Hello>
        Hi, I’m Laura. Welcome to my library of references in Web Development
        and Tech World 👋
      </Hello>
    </div>
  );
}

export default App;
