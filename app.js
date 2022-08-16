const home=document.getElementById('home');
const series=document.getElementById('series');
const login=document.getElementById('login');

import Home from "/Components/home.js"
import Series from "/Components/series.js"
import Login from "/Components/login.js"
const content = document.getElementById("content");

const catalogo = [
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

const expresiones ={
    password: /^.{4,12}$/, //4 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}/, // Letras y espacios, pueden llevar acentos
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    usuario: /^[a-z0-9_\\_\ü]+$/, // Letras, numeros, guin y guion_bajo
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo
    }

const menuHambur = document.querySelector(".menu-hambur")
let menuActive = false;
menuHambur.addEventListener("click",()=>{
        if(!menuActive){
            menuHambur.classList.add("active")
            menuActive = true;
        } else {
            menuHambur.classList.remove("active");            
            menuActive = false;
        }
    })

home.addEventListener('click',e=>{
    history.pushState({
        page:'Home'
      },'Home','/');
            
    });

series.addEventListener('click',e=>{
    history.pushState({
        page:'Series'
        }, "Series","/series");
    })


const viewing = ()=>{

    const coincidencia = catalogo.filter(item=>("/"+item.id === window.location.pathname
    ))
    
    addEventListener("popstate",(e)=>{
        if(e.isTrusted){
            location.reload()
        }
    })
    
    if(history.length === 1){
        content.innerHTML = Home();
    }
    else if( window.location.pathname ==="/"){
        content.innerHTML = Home();
    } else if( window.location.pathname === "/series"){
        content.innerHTML = Series();

        const buscador = document.getElementById("buscador");
        const botonBuscar = document.getElementById("buscarSerie");
        const accion = document.getElementById("accion")
        const drama = document.getElementById("drama")
        const suspenso = document.getElementById("suspenso")
        const fantasia = document.getElementById("fantasia")
        const listaSeries = document.querySelectorAll(".filtro")

        const mostrarSerie = (e)=>{
            if(e.target.name === "accion"){
                drama.checked = false;
                suspenso.checked = false;
                fantasia.checked = false;
            }else if(e.target.name === "drama"){
                accion.checked = false;
                suspenso.checked = false;
                fantasia.checked = false;
            }else if(e.target.name === "suspenso"){
                drama.checked = false;
                accion.checked = false;
                fantasia.checked = false;
            }else if(e.target.name === "fantasia"){
                drama.checked = false;
                suspenso.checked = false;
                accion.checked = false;
            }

            for(let serie in listaSeries){
                if(e.target.checked && listaSeries[serie].dataset.genero != e.target.name){
                    listaSeries[serie].style.display = "none"
                } else {
                    listaSeries[serie].style.display = "flex"
                }
            }
        }

        botonBuscar.addEventListener("click",()=>{
            let valorBusqueda = buscador.value.toLowerCase()
            accion.checked = false;
            drama.checked = false;
            suspenso.checked = false;
            accion.checked = false;
            console.log(listaSeries)
          
            for(let serie in catalogo){
                let nombreMinuscula = catalogo[serie].nombre.toLowerCase()
                console.log(nombreMinuscula)
                if(nombreMinuscula.includes(valorBusqueda)){
                    listaSeries[serie].style.display ="flex"
                } else{
                    listaSeries[serie].style.display = "none"
                }
            }
            return
        })

        accion.addEventListener("change",mostrarSerie)
        drama.addEventListener("change",mostrarSerie)
        suspenso.addEventListener("change",mostrarSerie)
        fantasia.addEventListener("change",mostrarSerie)
    
    } else if(window.location.pathname === "/login"){
        content.innerHTML = Login();
        const formRegister = document.getElementById("form-register");
        formRegister.addEventListener("submit",(e)=>{
            e.preventDefault()
        })
    } else if(window.location.pathname === "/"+coincidencia[0].id){
        
        let templateSeries= 
        `
          <div class="container">
              <div class="p-1 py-3 bg-transparent rounded-3">
              <div class="img-serie">
                  <img class="rounded-3" src=${coincidencia[0].url}>
              </div>
              </div>
  
              <div class="row align-items-md-stretch">
              <div class="col-md-6">
                  <div class="h-100 p-5 text-bg-dark rounded-3">
                  <h2>${coincidencia[0].nombre}</h2>
                  <p class="">${coincidencia[0].descripcion}</p>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="h-70 p-5 bg-light border rounded-3">
                  <h2>Info</h2>
                  <p>Autor: ${coincidencia[0].autor}</p>
                  <p>Temporadas: ${coincidencia[0].temporadas}</p>
                  </div>
              </div>
          
          </div>
          ` 
        content.innerHTML = templateSeries;
        
    }
}


login.addEventListener('click',e=>{
    history.pushState({
        page:'Login'
      },'Login','/login');
    });

  
viewing()


const inputsRegister = document.querySelectorAll("#form-register input")
const alertForm = document.getElementById("alert-form");

const validarForm = (e)=>{
    switch(e.target.name){
        case"nombre":
        if(expresiones.nombre.test(e.target.value)){
            alertForm.style.display="none";
        }else{
            alertForm.style.display="flex"
            alertForm.innerHTML = "Nombre no valido"
            if(e.target.value===""){
                alertForm.style.display="none"
            }
        }
        break;
        case"usuario":
        if(expresiones.usuario.test(e.target.value)){
            alertForm.style.display="none";
        }else{
            alertForm.style.display="flex"
            alertForm.innerHTML = "Usuario invalido"
            if(e.target.value===""){
                alertForm.style.display="none"
            }
        }
        break;
        case"correo":
            if(expresiones.correo.test(e.target.value)){
                alertForm.style.display="none";
            }else{
                alertForm.style.display="flex"
                alertForm.innerHTML = "Email invalido"
                if(e.target.value===""){
                    alertForm.style.display="none"
                }
            }
        break;
        case"contraseña":
            if(expresiones.password.test(e.target.value)){
                alertForm.style.display="none";
            }else{
                alertForm.style.display="flex"
                alertForm.innerHTML = "Contraseña invalida"
                if(e.target.value===""){
                    alertForm.style.display="none"
                }
            }
        break;
        case"repetirContraseña":
            if(e.target.value === inputsRegister[3].value){
                alertForm.style.display="none";
            }else{
                alertForm.style.display="flex"
                alertForm.innerHTML = "Contraseña no coincide"
                if(e.target.value===""){
                    alertForm.style.display="none"
                }
            }
        break;
    }

}

inputsRegister.forEach(input=>{
    input.addEventListener("keyup",validarForm);
    input.addEventListener("blur",validarForm);

})

 





