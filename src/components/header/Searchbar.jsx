import {useGlobalContext} from "../../contexts/GlobalContext"
import {useState} from "react"

const Searchbar = () =>{

    const [query, setQuery] = useState("")
    const fetchMovies = useGlobalContext ();

    const handleSubmit = (event) =>{
        event.preventDefault ();
        fetchMovies (query)
    }
   

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#">BOOLFLIX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <form className="d-flex" role="search" onSubmit={event =>handleSubmit (event)}>
                        <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={(event)=>setQuery(event.target.value)}>
                        
                        </input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Searchbar