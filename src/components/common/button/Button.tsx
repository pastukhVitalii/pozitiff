import React from 'react';
import './Button.scss';

type OwnPropTypes = {
    name: string
    type?: string
    onClick: () => void
}
export const Button = React.memo((props: OwnPropTypes) => {

    return (
        <button className={`button + ${props.type}`} onClick={props.onClick}>
            {props.name}
        </button>
    )
})
