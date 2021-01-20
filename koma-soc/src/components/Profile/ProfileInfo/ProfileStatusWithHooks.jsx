import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'
import { setStatus } from './../../../redux/profile-reducer';



const ProfileStatusWithHooks = (props) => {

    let [editMode, SetEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    const activateEditMode = () => {
        SetEditMode(true);
    }

    const deactivateEditMode = () => {
        SetEditMode(false);
        props.updateStatus(status);

    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        
            }
   
        return (
            <div>
                {!editMode &&
                    <div className={classes.status}>
                        <span onDoubleClick={activateEditMode} >{props.status || "Empty status"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHooks;
