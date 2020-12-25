import React, {KeyboardEvent, useCallback, useState} from "react";
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
    const setEmailCallback = useCallback((e) => {
        setEmail(e.currentTarget.value)
    }, []);

    const setNumberCallback = useCallback((e) => {
        setNumber(e.currentTarget.value)
    }, []);

    const setMessageCallback = useCallback((e) => {
        setMessage(e.currentTarget.value)
    }, []);


    let [error, setError] = useState<string | null>(null)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            sentForm();
        }
    }
    const sentForm = () => {

        const data = {
            name: name,
            email: email,
            number: number,
            message: message
        }
        if (name.trim() !== "" && email.trim() !== "") {
            alert(JSON.stringify(data))
        } else {
            setError("Title is required");
            alert('Title is required')
        }
    }
    return (
        <div className={'form'}>
            <div className={'formHeader'}>
                <div className="formTitle" onClick={sentForm}>
                    Send
                </div>
                <div className="formClose" onClick={props.changeModalStatus}>
                    X
                </div>
            </div>
            <div className={'inputs'}>
                <Input type={''} placeholder={'Your Name'} value={name} onChange={setNameCallback}
                       onKeyPress={onKeyPressHandler} error={error}/>
                <Input type={''} placeholder={'Your Email'} value={email} onChange={setEmailCallback}
                       onKeyPress={onKeyPressHandler} error={error}/>
                <Input type={''} placeholder={'Your Contact Phone'} value={number} onChange={setNumberCallback}
                       onKeyPress={onKeyPressHandler}/>
                <Input type={'higher'} placeholder={''} value={message} onChange={setMessageCallback}
                       onKeyPress={onKeyPressHandler}/>
            </div>
        </div>
    );
});