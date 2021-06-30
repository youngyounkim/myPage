import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Tmi from "./components/Tmi";

function App() {
  return (
    <div>
      <Header></Header>
      <Info></Info>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Tmi></Tmi>
    </div>
  );
}

export default App;
