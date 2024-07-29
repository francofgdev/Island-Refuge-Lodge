import React from "react";
import './style.css';
import Footer from "../../components/footer";
import Header from "../../components/header/header";


function Photos() {
    return (
        <>
            <Header />
            <div class="title">
                <h1 className="title-photos">Photo Gallery</h1>
            </div>
            <div class="cards-container">

                <div class="cards-content">

                    <div class="card banner1">
                    </div>

                    <div class="card banner2">
                    </div>

                    <div class="card banner3">
                    </div>

                    <div class="card banner4">
                    </div>

                    <div class="card banner5">
                    </div>

                    <div class="card banner6">
                    </div>

                    <div class="card banner7">
                    </div>

                    <div class="card banner8">
                    </div>

                    <div class="card banner9">
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Photos;