import React, { useState } from 'react'   //poner "rafc"   y genera todo el componente 
import './styles/styles.css'

//API KEY: 70badc46e3cf69763ceb7678652ceea5

export const MovieFinder = () => {

  //aca escribo las funciones

  const [pelicula, setpelicula] = useState('')   //pelicula es la variable en donde se almacena el input
  const [peliculas, setpeliculas] = useState([])   //todas las peliculas que se buscan, tiene un array paa almacenarlas

  const apikey = '70badc46e3cf69763ceb7678652ceea5'

  const handleInputChange = (e) =>{        //funcion handle que setea la pelicula ingresada  

    setpelicula(e.target.value)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    await fetchPeliculas()
  }

  //funcion para agarrar peliculas
  // es async ya que espera una respuesta de la api
  const fetchPeliculas = async() =>{

    try {
      //donde va a buscar las peliculas
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${pelicula}&api_key=70badc46e3cf69763ceb7678652ceea5`)
      //PONER BACKTICK PARA URLS   ALT GR + TECLA DE LLAVES 
      const data = await response.json()

      setpeliculas(data.results)

    } catch (error) {
      
      console.error(error)
    }


  }



  return (

    <div className="container">   

      <h1 className='titulo'>MovieFinder</h1>

      <form onSubmit={handleSubmit}>    

        <input 
        type="text"
        placeholder='Escribe la pelicula'
        value= {pelicula}    
        onChange= {handleInputChange} 
        />

        {/*variable donde se almacena la pelicula ingresada*/}
        {/* variable que tiene la funcion Handle */}

        <button type="submit" className='boton'>Buscar</button>

      </form>


      <div className="listaPeliculas">

        {peliculas.map((pelicula) =>(

          <div key= {pelicula.id}  className="peli">

            <img src= {`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" />
            
            <h2 className="tituloPeli">{pelicula.title} </h2>


          </div>
          
          ))}


      </div>


    </div>

  


  )
}
