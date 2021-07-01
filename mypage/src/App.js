import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Tmi from "./components/Tmi";
import { useEffect, useState } from "react";

function App() {
  let [board, setBoard] = useState(0);
  const onScroll = (e) => {
    if (e.deltaY < 0) {
      //스크롤 업
      setBoard((el) => el - 1);
    } else {
      setBoard((el) => el + 1);
    }
  };

  useEffect(() => {
    if (board > 4) {
      setBoard(0);
    } else if (board < 0) {
      setBoard(4);
    }
  }, [board]);

  const setBody = () => {
    switch (board) {
      case 0:
        return <Info></Info>;
      case 1:
        return <About></About>;
      case 2:
        return <Skill></Skill>;
      case 3:
        return <Portfolio></Portfolio>;
      case 4:
        return <Tmi></Tmi>;
    }
  };

  useEffect(() => {
    console.log(`object`);
    window.addEventListener("wheel", onScroll, false);
    return () => window.removeEventListener("wheel", onScroll, false);
  }, []);

  return (
    <div onScroll={onScroll}>
      <Header></Header>
      {setBody()}
    </div>
  );
}

export default App;
