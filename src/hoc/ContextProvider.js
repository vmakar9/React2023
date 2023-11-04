import {createContext, useState} from "react";

export const Context= createContext(null)
export const ContextProvider =({children})=>{
    const state =useState(null)
    return(
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}