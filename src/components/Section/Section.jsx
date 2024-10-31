import React from 'react';
import './Secton.css'
import { Link } from 'react-router-dom';
import storeVideo from '../../video/video.mp4'
const Section = () => {
    return (
        <div id='section'>
            <div className="container">
                <div className="section">
                <video autoPlay loop muted src={storeVideo}></video>
                <div className="human">
                <div className="man">
                <Link to='man'><img  className='img'src="https://www.edgeclothing.com.au/cdn/shop/files/EDGE_MAIN_BANNER_MENS_WOMENS_550882db-ecda-4855-a493-f20d908c92e0_1000x.jpg?v=1715566184" alt="" /></Link>
                    </div>
                    <div className="woman">
                      <Link to='/women'> <img className='img' src="https://www.edgeclothing.com.au/cdn/shop/files/EDGE_MAIN_BANNER_MENS_WOMENS2_d07c2c14-e880-48da-822a-932bc4de7612_1000x.jpg?v=1715566213" alt="" /> </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Section;