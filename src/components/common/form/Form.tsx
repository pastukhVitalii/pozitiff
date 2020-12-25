import React, {useCallback, useState} from "react";
import './form.scss';
import {Input} from "./input/Input";

type PropsType = {
    changeModalStatus: () => void
}

export const Form = React.memo((props: PropsType) => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const setNameCallback = useCallback((e) => {
        setName(e.currentTarget.value)
    }, []);
    console.log(name);
    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, []);

    const setNumberCallback = useCallback((e) => {
        setNumber(e.currentTarget.value)
    }, []);

    const setMessageCallback = useCallback((e) => {
        setMessage(e.currentTarget.value)
    }, []);

    return (
        <div className={'form'}>
            <div className={'formHeader'}>
                <div className="formTitle">
                    Send
                </div>
                <div className="formClose" onClick={props.changeModalStatus}>
                    X
                </div>
            </div>
            <div className={'inputs'}>
                <Input type={''} placeholder={'Your Name'} value={name} onChange={setNameCallback}/>
                <Input type={''} placeholder={'Your Email'} value={email} onChange={setEmailCallback}/>
                <Input type={''} placeholder={'Your Contact Phone'} value={number} onChange={setNumberCallback}/>
                <Input type={'higher'} placeholder={''} value={message} onChange={setMessageCallback}/>
            </div>
        </div>
    );
});