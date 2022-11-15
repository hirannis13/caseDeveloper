import Head from "next/head";
import Image from "next/image";
import React from "react";
import getDummyData, { Package } from "../getDummyData";
import styles from "../styles/Home.module.css";

export default function Home() {
  const data = getDummyData();

  const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const cards = document.getElementsByClassName("message-wrapper");
    delete data[0];
    delete data[1];
    delete data[2];
    console.log(data);
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
