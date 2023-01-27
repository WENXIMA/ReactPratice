

import { useState } from "react";

const defaultInput ={
    note:''

}

const ToDoList =() => {
    const [list, setList] = useState(defaultInput);
    const {note} = list;
    const notelist = ['1'];
    const handleChange =(event) => {
        const {name,value} =event.target;
        setList({
            ...list,
            [name]:value
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(note===''){
            alert('Can not add empty note');
        }
        notelist.push(note);
        console.log(note);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Input your note here" onChange={handleChange} name='note' value={note}/>
            <button type="submit">Submit</button>
            </form>
            <h2>{notelist}</h2>
            
        </div>
    );
};

export default ToDoList;