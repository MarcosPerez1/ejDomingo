const campoTipos = document.querySelector(".selectores");
const campoAlbum = document.querySelector(".album");
const campoAlerta = document.querySelector(".alertas");
const fragment = document.createDocumentFragment();

const arrayImagenes = [
    {
        id: 1,
        foto: "viajes-1.jpg",
        alt: "amaca",
        genero: ["mar", "playa"]
    },
    {
        id: 2,
        foto: "viajes-2.jpg",
        alt: "casitas",
        genero: ["mar", "playa", "edificios"]
    },
    {
        id: 3,
        foto: "viajes-3.jpg",
        alt: "señales",
        genero: ["señales", "colores"]
    },
    {
        id: 4,
        foto: "viajes-4.jpg",
        alt: "sevilla",
        genero: ["edificios", "colores"]
    },
    {
        id: 5,
        foto: "viajes-5.jpg",
        alt: "sevilla2",
        genero: ["edificios", "colores"]
    }
]
const getImage = (item)=>{	
      return new Promise((resolve,reject)=>{
        if(item.foto){ 
            const url = `./imagenes/${item.foto}`;
            resolve(url)
        } else if(item.alt){
            const alt = `${item.alt}`
            resolve(alt)
        } else reject("Este apartado de contenido aún esta vacio")
    })
}



const mostrarImagen = (genero) =>{
    campoAlbum.innerHTML="";
    arrayImagenes.forEach(async (item) =>{
        const generoEncontrado = item.genero.find(iguales => iguales === genero)
        if(generoEncontrado) {
            try {

            const url = await getImage(item);
            const alt = await getImage(item);
            const imgCards =document.createElement("img");
            imgCards.src=url;
            imgCards.classList.add("seleccion");
            imgCards.alt=alt;
            const textCards = document.createElement("h3");
            textCards
            campoAlbum.append(imgCards)
            console.log(imgCards)            
            } catch (error) {
            }
        }
    })      
}

const pintarBotones = (botones) =>{
    botones.forEach(item =>{
        const boton = document.createElement ("button");
        boton.textContent= item
        boton.onclick = () => mostrarImagen(item)
        campoTipos.append(boton)
    })
}
const pintarNav = () => {
    const botones = []
    arrayImagenes.forEach(item => {
        item.genero.forEach(genero => {
            const botonEncontrado = botones.find(boton => boton === genero)
            if (!botonEncontrado) {
                botones.push(genero)
            }

        })

    })
    botones.push("cosa")
    pintarBotones(botones)
}
pintarNav()
mostrarImagen()
