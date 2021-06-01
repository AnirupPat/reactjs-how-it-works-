const DemoOutput = props => {
    console.log('Demo output Component re-rendered!')
    return (
        <p>{props.show ? 'This is brand new' : ''}</p>
    );
}

export default DemoOutput;