import {useEffect, useState} from "react";
import {todosService} from "../../services/todos.service";
import {Todo} from "./Todo";

export const Todos=()=>{
    const [todos,setTodos] = useState([])

    useEffect(() => {
        todosService.getAll().then(({data})=>setTodos(data))
    }, []);

    return(<div>
        <div>
            {todos.map(todo=><Todo todo={todo} key={todo.id}/>)}
        </div>
    </div>)
}