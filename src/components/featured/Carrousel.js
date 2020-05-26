import React from 'react';
import imgArr from '../utils/MyPhotos';
import Slider from "react-slick";

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true, 
        autoplay: true,
        speed: 500
    }

    function showImages() {
        return imgArr.map((i) => (
            <div key={i}>
                <div className="carrousel_image"
                    style={{
                        background: `url(${i})`,
                        backgroundPosition: 'center top',
                        width: '100%',
                        height: `${window.innerHeight}px`,
                    }}
                >
                </div>
            </div>            
        ))
    }
    
    return (
        <div className="carrousel_wrapper"
            style={{
                background:'lightblue',
                height:`${window.innerHeight}px`,
                width:'100%',
                overflow: 'hidden',
            }}
        >
            <Slider {...settings}>
                {showImages()}    
            </Slider>            
        </div>
    );
};

export default Carrousel;