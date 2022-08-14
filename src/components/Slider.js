import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {

    return (
        <div className="m-2">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <Link to="/SummerShop">
                     <div className="carousel-item active" data-bs-interval="1000" >
                    
                        <img src="https://images.prismic.io/endource/e80a96f1-87ad-4dbb-8695-35c721dfdad2_NewTemplate_SummerShop_L.jpg?auto=compress,format&rect=0,0,1280,800&w=1200&h=750" className="d-block w-100" alt="..."/>
                    
                    </div>
                    </Link>
                    <div className="carousel-item" data-bs-interval="2000">
                    <a href="https://www.karenmillen.com/womens/autumn?utm_source=awin&utm_medium=affiliates&utm_campaign=Endource+Trading+Limited&utm_term=215843&utm_content=karenmillen&awc=18544_1658238418_0ef4918e35a6814bfc11ea52f9884698">
                        <img src="https://images.prismic.io/endource/bbde0457-001f-46b4-9660-c5a1c2a8e952_Karen_Millen_prefall_D.jpg?auto=compress,format&rect=0,0,5000,2617&w=1200&h=628" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                    </a>
                    </div>
                    <Link to="/Arket">
                    <div className="carousel-item" data-bs-interval="3000" >
                    
                        <img src="https://images.prismic.io/endource/2977f8e2-e75e-44b3-9e88-ba3e69f8ae89_Arket_D.jpg?auto=compress,format&rect=0,0,5334,3334&w=1200&h=750" className="d-block w-100" alt="..."/>
                            
                    
                    </div>
                    </Link>

                    <Link to="/Wonder">
                    <div className="carousel-item" data-bs-interval="4000" >
                    
                        <img src="https://images.prismic.io/endource/d385c6cd-4ceb-413f-a438-a159aedcb76e_06.21_Capsule_L.jpg?auto=compress,format&rect=0,0,1280,800&w=1200&h=750" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                    
                    </div>
                    </Link>                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;