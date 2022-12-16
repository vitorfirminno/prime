import { useEffect, useState } from 'react';
import api from '../../services/api'

// URL DA API: /movie/now_playing?api_key=e1802bbd13738ac082fe5174142460e3


function Home(){
    const [filmes, setFilmes] = useState([]);


    useEffect(() =>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing" , {params:{
                api_key:"e1802bbd13738ac082fe5174142460e3",
                language: "pt-BR",
                page: 1 ,
            }
        });

        console.log(response.data.result);
        }
    })

    

    return(

    <div>
        <h1>bem vindo a Home</h1>
    </div>
    
    );
}

export default Home;