import React from "react";

function Todo({
    id="1",
    handleRemove,
    task = "Do the laundry in the morning"
}) {

    return (
        <div>
            <li>{task}</li>
            <button onClick={() => handleRemove(id)}>X</button>
        </div>
    )
}

export default Todo;