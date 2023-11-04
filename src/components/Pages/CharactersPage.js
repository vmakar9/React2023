import {Characters} from "../CharacterContainer/Characters";
import {useNavigate} from "react-router-dom";

export const CharactersPage=()=>{
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            <Characters/>
        </div>
    );
}