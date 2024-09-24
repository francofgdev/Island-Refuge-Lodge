
import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner";
import Trailer from "../../components/trailer";
import Cards from "../../components/cards";
import Footer from "../../components/footer";

function Home() {    
    return (
        <>
            <Header />
            <Banner />
            <Trailer />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;