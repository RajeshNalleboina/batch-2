import React from 'react';

let Greeting=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>this is {props.name} this is my mail {props.mail}</h1>
            {/* {props.children} */}
        </div>
    );
}

export default Greeting;