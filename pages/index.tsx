import Head from "next/head";
import Image from "next/image";
import React from "react";
import getDummyData, { Package } from "../getDummyData";
import styles from "../styles/Home.module.css";

export default function Home() {
  const data = getDummyData();
  // function handleEvent() {
  //   var text = document.getElementsByClassName("attributes");
  //   if (text === "none") {
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  // }

  const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const cards = document.getElementsByClassName("message-wrapper");
  };
  return (
    <div className="message-wrapper">
      <h2>My Inbox</h2>
      <h3>Redeem your packs</h3>
      {data.map((d, i) => (
        <div key={i} className="message">
          <Image src={d.image} alt="image" height={60} width={60} />
          <div className="attributes">
            <p className="first-line">{d.message}</p>
            <p className="second-line">{d.name}</p>
            <p className="third-line">{d.value}</p>
          </div>
        </div>
      ))}
      <button onClick={handleEvent}>claim all</button>
    </div>
  );
}
