import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element
const headerElement = <div className='title'>
    <h1>Hiii H1</h1>
    <h2>Hii H2</h2>
    <h3>Hiii H3</h3>
</div>

const Func =() =>{
    return 2+3;
}

//React Component
const HeaderComponent = () =>{
   return <div className='title'>
    {Func()}
    <br />
    <Func></Func>
    <br/>
    <Func/>
    <h1>Hiii H1</h1>
    <h2>Hii H2</h2>
    <h3>Hiii H3</h3>
</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);

