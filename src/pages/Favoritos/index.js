import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@firmasFlix"); //LOCAL navegador
        setFilmes(JSON.parse(minhaLista) || [])

    }, []);

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) =>{
            return(item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@firmasFlix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso")
    }


    return(
        <div className='meus-filmes'>
            <h1>ROLÊS</h1>

            {filmes.length === 0 && <span> VOCE NAO POSSUI ROLE MARCADO:( </span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default Favoritos;