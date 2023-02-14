import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';
import jpg from './315736079_918646959146519_6462023112536740237_n.jpg'
import felipe from './felipe.jpg'
import midnit from './midnit.jpg'
import lucca from './lucca.jpg'
import barone from './barone.jpg'
// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] =useState(true);


  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "28fc232cc001c31e8a031f419d0a14ca",
         language: "pt-BR",
         page: 1,
        }
      })

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10)); //numero de itens
      setLoading(false);

    }

    loadFilmes();

  }, [])

  if(loading){
    return(
      <div className='loading'>
        <h2>
          Carregando filmes...
        </h2> 
      </div>
    )

  }

  return(


    <div className="container">

<div className="lista-filmes">
        
          
            <article >
              <strong>Dani Creu</strong>
              <img src={jpg}/>
              <Link to={`/filme/${"danigay"}`}>Acessar</Link>
            </article>

            <article >
              <strong>milico</strong>
              <img src={felipe}/>
              <Link to={`/filme/${"danigay"}`}>Acessar</Link>
            </article>

            
            <article >
              <strong>negao</strong>
              <img src={midnit}/>
              <Link to={`/filme/${"danigay"}`}>Acessar</Link>
            </article>

            <article >
              <strong>lucca pobre</strong>
              <img src={lucca}/>
              <Link to={`/filme/${"danigay"}`}>Acessar</Link>
            </article>

            <article >
              <strong>baroneeeeeeeeeeee</strong>
              <img src={barone}/>
              <Link to={`/filme/${"danigay"}`}>Acessar</Link>
            </article>
          

        
      </div>


      {/* <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div> */}
    </div>
  )
}

export default Home;