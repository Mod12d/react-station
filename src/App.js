// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react';

import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setdogUrl] = useState("https://images.dog.ceo/breeds/otterhound/n02091635_1311.jpg");

  const changeDog = async() =>{
  let response =  await fetch('https://dog.ceo/api/breeds/image/random');
  let commits =  await response.json(); 
  let url = commits.message;
  setdogUrl(url);
  }
  
  return (
    <>
    <header>犬の画像を見せましょう！</header>
    <body>
      <title>可愛い犬の画像です</title>
      <main>
      <img className="dogimage" src={dogUrl} alt="可愛い犬の画像です" />
      <button className="chbutton" onClick={() =>changeDog()}>次の犬</button>
      </main>
    </body>
    <footer/>
    </>
  )
}
