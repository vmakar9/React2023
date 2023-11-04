import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

export const useCharacter =()=>{
    const [character,setCharacter] = useContext(Context)
    return{
        character,setCharacter
    }

}
