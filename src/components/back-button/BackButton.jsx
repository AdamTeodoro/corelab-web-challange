import React from "react";

import BackButtonIcon from '../../icons/BackButtonIcon';

export default function BackButton(props)  {
    return  (
        <button className="icon backButton" onClick={() => props.close()}>
            <BackButtonIcon></BackButtonIcon>
        </button>
    )
}
