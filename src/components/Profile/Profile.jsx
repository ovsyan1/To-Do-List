import classes from './Profile.module.css';
import React from 'react';

const Profile = (props) => { 
    return(
        <div className={classes.profile_wrapper}>
            <div className={classes.deal}>
                <p>{props.message}</p>
                <input type="checkbox"/>
            </div>
        </div>
    )
}

export default Profile;