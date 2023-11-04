import {useCharacter} from "../../hoocks/useCharacter";
import css from "./Header.module.css"
export const Header=()=>{
    const {character} = useCharacter();
    return(<div className={css.Header}>
        {
            character ?
                <h1>{character}</h1>
                :
                <h1>Rick & Morty</h1>
        }
    </div>)
}