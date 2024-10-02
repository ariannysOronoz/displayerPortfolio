import React from 'react';
import './UserProfileDetails.css';
import VerticalInformation from '../../verticalInformation/VerticalInformation';
import VerticalText from '../../verticalText/VerticalText';


export default function UserProfileDetails(){
    return (
        <div className="bio-container">
            <div className="profile">
                <VerticalInformation 
                    image="https://link_to_image.jpg"
                    name="name"
                    location="location"
                    cvLink=""
                />
            </div>
            <div className="desc-bio">
                <VerticalText description="Prueba" />
            </div>
        </div>
    );
}
