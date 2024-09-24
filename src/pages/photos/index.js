import React from "react";
import './style.css';
import Footer from "../../components/footer";
import Header from "../../components/header/header";


function Photos() {
    return (
        <>
            <Header />
            <div className="main">
                <div class="title">
                    <h1 className="title-photos">Photo Gallery</h1>
                </div>
                <div class="photo-container">

                    <div class="photo-content">

                        <div className="foto banner_1">
                        </div>

                        <div className="foto banner_2">
                        </div>

                        <div class="foto banner_3">
                        </div>

                        <div class="foto banner_4">
                        </div>

                        <div class="foto banner_5">
                        </div>

                        <div class="foto banner_6">
                        </div>

                        <div class="foto banner_7">
                        </div>

                        <div class="card banner_8">
                        </div>

                        <div class="card banner_9">
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Photos;