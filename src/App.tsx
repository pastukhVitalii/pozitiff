import React, {useState} from 'react';
import './App.scss';
import {Button} from "./components/common/button/Button";
/*import {Main} from "./components/main/Main";
import {Logicom} from "./components/logicom/Logicom";
import {Coral} from "./components/coral/Coral";
import {GoodBody} from "./components/goodbody/GoodBody";*/
import {Form} from "./components/common/form/Form";
import {Universal} from "./components/Universal";


import backImage1 from './img/backImg1.svg';
import backImage2 from './img/backImg2.svg';
import backImage3 from './img/backImg3.svg';
import backImage4 from './img/backImg4.svg';

function App() {

    const [isModalVisible, setModelStatus] = useState<boolean>(false);

    const changeModalStatus = () => {
        setModelStatus(!isModalVisible)
    }

    return (
        <div className="App">

            {/* Item 3 is solved by means of a format SVG
                also, it can be resolved with it`s
            <img src="/images/foo.png" alt="bar" srcset="/images/foo.png 2x" /> */}

            {/* Components Main, Logicom, Coral, GoodBody can delete */}
            <Universal title={'Main'} backImage={backImage1} titleDesc={'Description about project'}
                       description={'Website design & code'}/>
            <Universal title={'Logicom'} backImage={backImage2} titleDesc={'Description about project'}
                       description={'Website design & code'} fixImg={true}/>
            <Universal title={'Coral Coalition'} backImage={backImage3} titleDesc={'Description about project'}
                       description={'Website design & code'}/>
            <Universal title={'GoodBody'} backImage={backImage4} titleDesc={'Description about project'}
                       description={'Website design & code'}/>
            <div className={`modal isModalVisible-${isModalVisible}`}>
                <Form changeModalStatus={changeModalStatus}/>
            </div>
            <div className={'btn_modal'}>
                <Button name={'See more projects'} type={'primary'} onClick={changeModalStatus}/>
            </div>
            {/*<Main/>
            <Logicom/>
            <Coral/>
            <GoodBody/>
            <div className={`modal isModalVisible-${isModalVisible}`}>
                <Form changeModalStatus={changeModalStatus}/>
            </div>
            <div className={'btn_modal'}>
                <Button name={'See more projects'} type={'primary'} onClick={changeModalStatus}/>
            </div>*/}
        </div>
    );
}

export default App;
