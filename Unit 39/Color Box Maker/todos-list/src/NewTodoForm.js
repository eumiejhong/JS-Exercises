import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm({ createTodo }) {
    const [formData, setFormData] = useState({
        task: ""
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo({...formData, id: uuidv4()});
        setFormData({task: ""});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task">Task</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="task"
                        value={formData.task}
                        id="task"
                    />
                </div>
                <button id="newTodoButton">Add New Todo!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;