import {createContext, useState, useContext} from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    //Chiamata Api per i film
    const [movies, setMovies] = useState ([]);

    //Creazione variabili per l'endpoint e l'API key
    const url = import.meta.env.VITE_API_MOVIES_URL;
    const keyUrl = import.meta.env.VITE_API_KEY ;

    const fetchMovies =() =>{
        axios
        .get (`${url}?api_key=${keyUrl}`)
        .then ((res => setMovies (res.data)));
    }

    //destracturing per il value
    const value ={
        movies,
        fetchMovies,
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