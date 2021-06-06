//import react and reactDom
// import React from 'react';
// import ReactDOM from 'react-dom';

// //component
// const App = () => {
//     const obj = {
//         text: 'This is the text'
//     }
//     const text = 'New Text';
//     return (
//         <div className="element" style={{ color: 'blue' }}>{obj.text}
//             <div className="inner" style={{ color: 'red' }}>{text}</div>
//         </div>

//     );
// }

// //Add this to the DOM
// ReactDOM.render(<App />, document.querySelector('#root'));

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>Hello </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));