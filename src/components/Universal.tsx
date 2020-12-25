import React, {useState} from 'react';
import './Universal.scss';
import {ButtonPlus} from "./common/buttonPlus/ButtonPlus";

import {Button} from "./common/button/Button";

type PropType = {
    title: string
    backImage: string
    titleDesc: string
    description: string
    fixImg?: boolean
}

export const Universal = React.memo((props: PropType) => {

    const [toggle, setToggle] = useState<boolean>(false);
    const showPopup = () => {
        setToggle(!toggle)
    };

    const fix = props.fixImg ? '200px' : '';
    return (
        <div className="container" style={{backgroundImage: `url(${props.backImage})`, backgroundSize: `${fix}`}}>
            <div className="row">
                <ButtonPlus onClick={showPopup} toggle={toggle}/>
                <div className={'mainTitle'}>{props.title}</div>
            </div>
            <div className={`column showDesc-${toggle}`}>
                <div className="titleDescription">
                    {props.titleDesc}
                </div>
                <div className="description">
                    {props.description}
                </div>
                <Button name={'Visit project'} type={'secondary'} onClick={() => alert('click)))')}/>
            </div>
        </div>
    );
});
