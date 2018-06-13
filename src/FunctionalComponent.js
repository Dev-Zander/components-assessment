import React from 'react';

function AddNumbers(props){
    let num = Math.floor(Math.random(props.number) * 3948);

    return(

    <div>

My random number is {num}.

    </div>

    ) 
}

export default AddNumbers