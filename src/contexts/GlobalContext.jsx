import {createContext, useState, useContext} from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [query, setQuery] = useState("");
    const [movies, setMovies]= useState ([]);
    const [tvs, setTvs] = useState ([]);

    //Creazione variabili per l'endpoint e l'API key
    const url = import.meta.env.VITE_API_MOVIES_URL;
    const keyUrl = import.meta.env.VITE_API_KEY ;

    const HandleSubmit = (event) =>{
        event.preventDefault ();
        axios
        .get (`${url}movie?api_key=${keyUrl}&query=${query}`)
        .then (res=> setMovies(res.data.results))
        .catch((err)=> console.error(err))

        axios
        .get (`${url}tv?api_key=${keyUrl}&query=${query}`)
        .then (res=> setTvs(res.data.results))
        .catch((err)=> console.error(err))
    }


    //destracturing per il value
    const value ={
        query,
        setQuery,
        HandleSubmit,
        movies,
        tvs,
        setTvs
        
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext =() => useContext (GlobalContext)

export {
    GlobalProvider,
    useGlobalContext
}