

const Home = () =>{
    const series = [
      {
        id:"strangerthings",
        nombre:"Stranger Things",
        primerEpisodio:"15 de julio de 2016",
        temporadas:"4",
        descripcion:"Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.",
        autor:"Hermanos Duffer",
        url:"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/05/stranger-things.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1",
        genero:"suspenso"
    },
    {
        id:"euphoria",
        nombre:"Euphoria",
        temporadas:"2",
        descripcion:"Un grupo de estudiantes de secundaria navega entre drogas, relaciones sexuales, traumas, redes sociales, amor y amistad.",
        autor:"Marcell Rév; Drew Daniels; Adam Newport-Berra; André Chemetoff",
        url:"https://images.squarespace-cdn.com/content/v1/59973af5f14aa1ab06cba333/1568078311150-U19TZIVG0S5XWXBT2241/Euphoria+.jpg?format=2500w",
        genero:"drama"
    },
    {
      id:"theboys",  
      nombre:"The Boys",
        primerEpisodio:"26 de julio de 2019",
        temporadas:"3",
        descripcion:"Cuando los superhéroes abusan de sus superpoderes en lugar de usarlos para el bien, unos muchachos se embarcan en una búsqueda heroica para exponer sus secretos.",
        autor:"Hermanos Duffer",
        url:"https://m.media-amazon.com/images/G/01/pv_starlight/theboys-s1-4f31a4b5-56d1-45ee-a26e-b55c48f3e99f/V2/SevenCarouselImages_S1_1920x1080_Homelander.jpg",
        genero:"accion"
    },
    {
      id:"terminallist",
        nombre:"The Terminal List",
        primerEpisodio:"1 de julio de 2022",
        temporadas:"1",
        descripcion:"James Reece regresa a casa después de que todo su pelotón de Navy SEAL es emboscado, solo para descubrir que nuevas fuerzas oscuras trabajan en su contra y ponen en peligro a sus seres queridos.",
        autor:"",
        url:"https://cdn.milenio.com/uploads/media/2022/06/29/chris-pratt-taylor-kitsch-llegan.jpeg",
        genero:"accion"
    },
    {
      id:"gameofthrones",
        nombre:"Game of Thrones",
        primerEpisodio:"17 de abril de 2011",
        temporadas:"8",
        descripcion:"Es la descripción de dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono más alto.",
        autor:"George Raymond Richard Martin",
        url:"https://fondosmil.com/fondo/8775.jpg",
        genero:"fantasia"
    }
    ]
    
    
    let seriesHT= series.map((item)=>(
        `<div class="col">
             <div class="card shadow-sm">
                 <img src=${item.url} alt=${item.nombre}>
                 <div class="card-body serie-card">
                     <p class="card-text">${item.nombre}</p>
                     <p class="card-text">${item.descripcion}</p>
                         <div class="d-flex justify-content-between align-items-center">
                             <div class="btn-group button-card">
                             <a  href="/${item.id}"><button onclick="ver(${item.id})" data-name="${item.nombre}" data-temp="${item.temporadas}" data-url="${item.url}" data-descripcion="${item.descripcion}" data-autor="${item.autor}" id=${item.id} type="button" class="btn btn-sm btn-outline-secondary">VER</button></a>
                             </div>
                         </div>
                 </div>
             </div>
        </div>`
        )).join("")

    
    let templateHome = `<main>
    <div class="banner">
        
        <section id="banner" class="py-5 text-center container">
          <div class="row py-lg-5 ">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light text-white">Unete a una comunidad activa</h1>
              <p class="lead text-white">Encuentra información detallada de tus series y peliculas favoritas. Comparte tu valoración y ayuda a otros wikinautas a encontrar el mejor contenido.</p>
            </div>
          </div>
        </section>
    </div>
      <div class="album py-5 bg-light">
        <div  class="container">
    
           <div id="container-series" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            ${seriesHT}
           </div>
        </div>
      </div>
    
    </main>`

    let newDiv = document.createElement("div")
    newDiv = templateHome;

    return newDiv
}

export default Home