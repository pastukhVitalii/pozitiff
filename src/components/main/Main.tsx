import React, {useState} from 'react';
import './Main.scss';
import {ButtonPlus} from "../common/buttonPlus/ButtonPlus";
import backImage from '../../img/backImg1.svg';
import {Button} from "../common/button/Button";

export const Main = React.memo(() => {

    const [toggle, setToggle] = useState<boolean>(false);
    const showPopup = () => {
        setToggle(!toggle)
        console.log(!toggle);
    };

    return (
        <div className="container" style={{backgroundImage: `url(${backImage})`}}>
            <div className="row">
                <ButtonPlus onClick={showPopup} toggle={toggle}/>
                <div className={'mainTitle'}>Main</div>
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
});
