import React from "react";

export default function WonderCard(props) {
  return (
      <div className="card m-4" style={{width: "18rem"} }>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.brand}</h5>
          <p className="card-text" style={{height: "3rem"} }>{props.title}</p>
        </div >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.price}</li>
          
        </ul>        
      </div>
  );
}
