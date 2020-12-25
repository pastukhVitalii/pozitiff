import React, {useState} from 'react';
import '../../components/main/Main.scss';
import {ButtonPlus} from "../common/buttonPlus/ButtonPlus";
import backImage from "../../img/backImg4.svg";
import {Button} from "../common/button/Button";

export const GoodBody = React.memo(() => {

    const [toggle, setToggle] = useState<boolean>(false);
    const showPopup = () => {
        setToggle(!toggle)
        console.log(!toggle);
    };

    return (
        <div className="container" style={{backgroundImage: `url(${backImage})`}}>
            <div className="row coralBack">
                <ButtonPlus onClick={showPopup} toggle={toggle}/>
                <div className={'goodBodyTitle'}>GoodBody</div>
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

