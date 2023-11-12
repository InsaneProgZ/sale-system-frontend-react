import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  const [selected, setSelected] = useState('Home');
  
  function clickHandler(content: string){
      setSelected(content);
  }

  return (
    <div className="page">
      <Header onClick={(content: string) => clickHandler(content)} />
      <Content selected={selected} />
    </div>
  );
}
