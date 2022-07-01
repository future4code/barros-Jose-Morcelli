import React from "react";

function InputRemetente (props){
    return(
<div className="Input-Re">
    <div>
        <p>{props.texto}
        <input id="name" type="text" name="name"/></p>
    </div>
</div>

    )
}

export default InputRemetente;