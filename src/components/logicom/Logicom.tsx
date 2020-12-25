import React, {useState} from 'react';
import '../../components/main/Main.scss';
import {ButtonPlus} from "../common/buttonPlus/ButtonPlus";
import backImage from "../../img/backImg2.svg";
import {Button} from "../common/button/Button";

export const Logicom = React.memo(() => {

    const [toggle, setToggle] = useState<boolean>(false);
    const showPopup = () => {
        setToggle(!toggle)
    };

    return (
        <div className="container"
             style={{backgroundColor: '#BADA6A', backgroundImage: `url(${backImage})`, backgroundSize: '200px'}}>
            <div className={'row'}>
                <ButtonPlus onClick={showPopup} toggle={toggle}/>
                <div className={'logicomTitle'}>Logicom</div>
            </div>
            <div className={`column showDesc-${toggle}`}>
                <div className="titleDescription">
                    Description about project
                </div>
                <div className="description">
                    Website design <br/>& code
                </div>
                <Button name={'Visit project'} type={'secondary'} onClick={() => alert('click)))')}/>
            </div>
        </div>
    );
})

