import {useGlobalContext} from "../../contexts/GlobalContext"
const Main = () => {

    const {movies, tvs} = useGlobalContext()

    const HandleStars = (vote) => Math.ceil (vote/2)

    return (
        <>
        <main>
            <h2>Movies</h2>
            <ul>
                {
                    movies.map (element => {
                        return(
                            <li key={element.id}>{element.title}
                            -Original tilte:{element.original_title}
                            -lingua: {element.original_language}
                            -voto: {HandleStars(parseInt(element.vote_average))}
                            </li>
                            
                        )
                    })
                }
            </ul>

            <h2>Series</h2>
            <ul>
                {
                    tvs.map (element => {
                        return(
                            <li key={element.id}>
                                {element.name}
                                -Original tilte: {element.original_name}
                                -lingua: {element.original_language}
                                -voto: {HandleStars(parseInt(element.vote_average))}
                                </li>
                        )
                    })
                }
            </ul>
        </main>
        </>
    )
}

export default Main