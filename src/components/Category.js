import React, { useState, useEffect } from "react";
import Card from "./Card";


const Category =({type})=> {
    const [category,setCategory]=useState([]);
    const getData=(type)=>{
        fetch("https://icube-backend.onrender.com/category", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: type
            })
        })
        .then(data=>data.json())
        .then(value=>{
            setCategory(value);
        })
        
    }
    useEffect(()=>{
        getData(type);
    },[type])
        return (
            <div>
                <div className="mt-2 mb-2 p-4 category"><h4>Shop By Category</h4></div>
                {(category.length===0)
                ?
                <div><h1 className="fw-bold">Loading...</h1></div>
                :
                <div className="mt-2 mb-2 p-4 category">
                    <div className="categoryCard">
                        {category.map((i, index) => {
                            return  <Card title={i.title} img={i.img} key={index} link="products"/>
                            
                            
                        })}
                    </div>
                </div>
                }
            </div>
        );
    
}

export default Category;