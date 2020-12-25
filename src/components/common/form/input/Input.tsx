import React from 'react';
import './Input.scss';

type OwnPropTypes = {
    value: string
    type: string
    placeholder: string
    onChange: (e: any) => void
    onKeyPress: (e: any) => void
    error?: string | null
}

export const Input = React.memo((props: OwnPropTypes) => {
        let errorClass = props.error ? 'error' : '';
        return (
            <div className={`input ${props.type}`}>
                <input type="text" placeholder={props.placeholder}
                       className={errorClass}
                       value={props.value}
                       onChange={props.onChange}
                       onKeyPress={props.onKeyPress}
                       autoFocus={true}/>
            </div>
        );
    }
)
