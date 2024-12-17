import React from 'react';
import partner1 from '../assets/images/partner-1.png';
import partner2 from '../assets/images/partner-2.png';
import partner3 from '../assets/images/partner-3.png';
import partner4 from '../assets/images/partner-4.png';
import partner5 from '../assets/images/partner-5.png';
import partner6 from '../assets/images/partner-6.png';
import partner7 from '../assets/images/partner-7.png';
import partner8 from '../assets/images/partner-8.png';
import partner9 from '../assets/images/partner-9.png';
import partner10 from '../assets/images/partner-10.png';
import partner11 from '../assets/images/partner-11.png';
import partner12 from '../assets/images/partner-12.png';
import partner13 from '../assets/images/partner-13.png';
import partner14 from '../assets/images/partner-14.png';
import partner15 from '../assets/images/partner-15.png';
import partner16 from '../assets/images/partner-16.png';
import partner17 from '../assets/images/partner-17.png';
import partner18 from '../assets/images/partner-18.png';
import partner19 from '../assets/images/partner-19.png';
import partner20 from '../assets/images/partner-20.png';
import partner21 from '../assets/images/partner-21.png';
import partner22 from '../assets/images/partner-22.png';
import partner23 from '../assets/images/partner-23.png';
import partner24 from '../assets/images/partner-24.png';
import partner25 from '../assets/images/partner-25.png';
import partner26 from '../assets/images/partner-26.png';
import partner27 from '../assets/images/partner-27.png';

// Import other partner images here

const Partners = () => {
    const sectionStyle = {
        padding: '2rem',
        backgroundColor: '#f9f9f9',
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridGap: '3rem',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
    };

    // Assuming you have imported 21 partner images, you can create an array to hold them
    const partnerImages = [ partner1, 
                            partner2, 
                            partner3, 
                            partner4, 
                            partner5, 
                            partner6, 
                            partner7, 
                            partner8, 
                            partner9, 
                            partner10, 
                            partner11, 
                            partner12, 
                            partner13, 
                            partner14, 
                            partner15, 
                            partner16, 
                            partner17, 
                            partner18, 
                            partner19,
                            partner20, 
                            partner21, 
                            partner22, 
                            partner23, 
                            partner24, 
                            partner25, 
                            partner26,
                            partner27
                          ];

    return (
        <section style={sectionStyle} className="about" id="about">
            <div className="row">
                <div style={gridContainerStyle} className="content">
                    {partnerImages.map((partner, index) => (
                        <img key={index} src={partner} alt={`Partner ${index + 1}`} style={imageStyle} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;