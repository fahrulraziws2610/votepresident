import React from "react";
import Button from "./Button";

function Card() {

  return (
    <div id="cardone">
      <div className="card ">
        <img src="src/assets/a.jpg" alt="gambar gak muncul" style={{width:"100%"}} />
        <div className="container">
          <h2>Ganjar Prabowo</h2>
          <p>Suka Jalan brohh......</p>
        </div>
        <Button/>
      </div>
      <div className="card ">
        
        <img src="src/assets/b.jpg" alt="gambar gak muncul" style={{width:"100%"}} />
        <div className="container">
          <h2>Prabowo Subianto</h2>
          <p>Suka Jalan brohh......</p>
        </div>
        <Button/>
      </div>
      <div className="card ">
        <img src="src/assets/c.jpg" alt="gambar gak muncul" style={{width:"100%"}} />
        <div className="container">
          <h2>Anispawedan</h2>
          <p>Suka Jalan brohh......</p>
        </div>
        <Button/>
      </div>
    </div>
  );
}

export default Card;
