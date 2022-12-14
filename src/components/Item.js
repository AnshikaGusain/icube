import React from "react";
import { Link } from "react-router-dom";

const Item = ({ s_no,img, title, brand, previousPrice, price, desc, category}) => {

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <Link to={`/product/${category}/${s_no}`}>
            <div className="card">
                <img src={img} style={{padding:"15px" ,width:"100%",
    maxWidth:"300px",maxHeight:"350px", position:"relative",border:"none"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="brand text-truncate">{brand}</h4>
                <h3 className="card-title text-truncate">{title}</h3>
                    <hr/>
                    
                </div>
            </div>
            </Link>
            
        </div>
    );
}

export default Item;