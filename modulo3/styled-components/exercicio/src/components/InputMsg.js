import React from "react";

function InputMsg (props){
    return(
        <div>
            <p>{props.texto}
        <input id="name" type="text" name="name"/> </p>
        </div>
    )
}

export default InputMsg;