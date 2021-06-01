const MyParagraph = props => {
    console.log('MyParagraph Component re-rendered!')
    return (
        <p>{props.children}</p>
    );
}

export default MyParagraph;