import "./App.css";
import ChangedText from "./components/marked-text/marked-text";
import Button from "./components/button/button";

function App() {
  return (
    <>
      <ChangedText>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          iste numquam voluptate quas dolor aliquid minima expedita eum animi
          nostrum temporibus explicabo aspernatur cumque delectus maiores
          tempora debitis suscipit repellendus?
        </p>
      </ChangedText>

      <Button label="Baixe aqui"/>
      <Button label="Baixe CV"/>
      <Button label="Download"/>
    </>
  );
}

export default App;
