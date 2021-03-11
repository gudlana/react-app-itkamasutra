import React from 'react';
import profileInfo from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://langformula.ru/wp-content/uploads/2016/05/field-of-poppies_mini.jpg" alt=""/>
            </div>
            <div className={profileInfo.descriptionBlock}>
                ava_description
            </div>
        </div>
    );
}

export default ProfileInfo;