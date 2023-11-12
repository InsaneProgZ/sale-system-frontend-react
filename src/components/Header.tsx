import { useState } from "react";
import "./Header.css";

function Icon({name, onClick}: {name: string, onClick: (content: string) => any}) {
    return (
      <div onClick={() => onClick(name)} className="icon">
        {name}
      </div>
    );
}

export default function Header({onClick}:{onClick: (content: string) => any}) {

  return (
    <header>
      <div className="logo">Product</div>
      <Icon onClick={(content: string) => onClick(content)} name="Home" />
      <Icon onClick={(content: string) => onClick(content)} name="Product" />
    </header>
  );
}
