import React from "react";
import './style.css';
import Video from '../../assets/videos/video.mp4'
import { Link } from "react-router-dom";




function Trailer() {
    return (
        <>
            <h1>Welcome to the Island Refuge Lodge</h1>
            <div id="trailer-container">
                <div class="content">
                    <video controls class="trailer">
                        <source src={Video} />
                        Your browser does not support videos
                    </video>
                    <div class="sinopse">
                        <p class="description">
                            Escape to tranquility, nestled in Ireland’s lush countryside. Enjoy
                            comfortable, elegant rooms with stunning views, and savor delicious
                            meals made from local ingredients in our cozy restaurant.
                            Immerse yourself in nature with nearby trails, serene gardens, and a
                            tranquil lake. Perfect for families, our lodge offers spacious
                            accommodations and activities for all ages.
                            Surrounded by rolling hills and verdant forests, Island Refuge Lodge is
                            your ideal getaway. Book your stay today and experience the magic
                            of Ireland’s countryside.
                        </p>
                        <Link className="link" to={'/Contact'}>
                            <button class="button">Book now</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Trailer;