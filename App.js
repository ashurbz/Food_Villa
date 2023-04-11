// const heading =React.createElement('h1',{id:"heading"},"Hello World from React");

//     const root = ReactDOM.createRoot(document.getElementById('root'));

//     root.render(heading);

// <div id='parent' >
//     <div id='child'>
//         <h1>Hello H1 Tag</h1>
//         <h2>Hello H2 Tag</h2>
//     </div>
// </div>

// Creating using react

const parent =React.createElement('div' ,{id:'parent'},
    React.createElement('div' ,{id:'child'},
    React.createElement('h1',{}, 'Hello H1 Tag'), React.createElement('h2',{},'Hello H2 tag')
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);