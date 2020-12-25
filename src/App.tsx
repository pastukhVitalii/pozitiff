import React, {useState} from 'react';
import './App.scss';
import {Main} from "./components/main/Main";
import {Button} from "./components/common/button/Button";
import {Logicom} from "./components/logicom/Logicom";
import {Coral} from "./components/coral/Coral";
import {GoodBody} from "./components/goodbody/GoodBody";
import {Form} from "./components/common/form/Form";

function App() {

    const [isModalVisible, setModelStatus] = useState<boolean>(false);

    const changeModalStatus = () => {
        setModelStatus(!isModalVisible)
    }

    return (
        <div className="App">
            <Main/>
            <Logicom/>
            <Coral/>
            <GoodBody/>
            <div className={`modal isModalVisible-${isModalVisible}`}>
                <Form changeModalStatus={changeModalStatus}/>
            </div>
            <div className={'btn_modal'}>
                <Button name={'See more projects'} type={'primary'} onClick={changeModalStatus}/>
            </div>
        </div>
    );
}

export default App;
