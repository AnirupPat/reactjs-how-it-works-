import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
    console.log('Demo output Component re-rendered!')
    return (
        <MyParagraph>{props.show ? 'This is brand new' : ''}</MyParagraph>
    );
}

export default React.memo(DemoOutput);