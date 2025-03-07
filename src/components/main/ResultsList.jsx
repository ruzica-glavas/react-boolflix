import Card from "./Card"

const ResultsList = ({type, items}) =>{
    return(
        <>
        <section>
            <p>Risultati trovati: {items. length}</p>

            <ul className="results-flex">
                {
                    items && items. length > 0 ?(
                        items.map(item => <Card key={item.id} data= {item} type={type} />) //props
                    ):(
                        <p>Nessun risultato disponibile</p>
                    )
                }
            </ul>
        </section>
        </>
    )
}

export default ResultsList