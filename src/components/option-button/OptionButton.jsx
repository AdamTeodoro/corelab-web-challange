import React from 'react';

import OptionsIcon from '../../icons/OptionsIcon';

import './OptionButton.css';

export default function OptionButton(props) {
    return (
        <div className='option-button'>
            <button className='icon' onClick={() => props.openFormFind()}>
                <OptionsIcon></OptionsIcon>
            </button>
        </div>
    )
}
