import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Button from "./components/Button/Button";
import Features from "./components/Features/Features";

function App() {
  return (
    <div>
      <div className="bg-top">
        <NavBar />
        <Content />
        <Button />
      </div>
      <div className="bg-bottom">
        <Features />
      </div>
    </div>
  );
}

export default App;
