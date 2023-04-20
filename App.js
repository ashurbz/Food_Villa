import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element
const heading = <h1>Heading Element</h1>

const HeadingComponent2 =()=>{
    return <h3>Heading component2</h3>
}

const number = 1900900

//React Component
const HeadingComponent =() =>{
    return <>
    <HeadingComponent2/> 
    {heading}
    <h1>React Component</h1>
    </> 
    

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);

