import React from 'react';
import './ButtonPlus.scss';

type OwnPropTypes = {
    name?: string
    toggle?: boolean
    onClick: () => void
}

export const ButtonPlus = React.memo((props: OwnPropTypes) => {
    return (
        <button className={'buttonPlus'} onClick={props.onClick}>
            <div className={`toggle toggle-${props.toggle}`}/>
        </button>
    )
})
