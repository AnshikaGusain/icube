import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
import WonderCard from "./WonderCard";
import { data } from "./wonderData";

export default function Wonder() {
  return (
    <div>
      <Navbar />
      <div className="container my-4" style={{ width: "50rem" }}>
        <h1>Girl Wonder</h1>
        <h4 className="text-muted">
          Relaxed dresses in naive shades, punctuated by romantic details and
          paired with easy footwear: this uplifting capsule takes its cues from
          girlhood and (early) explorations of femininity, balancing childlike
          fantasy with the everyday.
        </h4>
      </div>
      <div
        className="d-inline-flex text-center"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((val, i) => {
          return (
            <WonderCard
              key={i}
              img={val.img}
              brand={val.brand}
              title={val.title}
              price={val.price}
            />
          );
        })}
        ;
      </div>
      <Footer />
    </div>
  );
}
