import React from 'react';
import profileInfo from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img src="https://langformula.ru/wp-content/uploads/2016/05/field-of-poppies_mini.jpg" alt=""/>
            </div>
            <div className={profileInfo.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava_description
            </div>
        </div>
    );
}

export default ProfileInfo;