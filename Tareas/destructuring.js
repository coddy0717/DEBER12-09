const datos = {
    imagen: 'https://p4.wallpaperbetter.com/wallpaper/779/800/956/moon-surface-moon-surface-wallpaper-preview.jpg',
    correo: 'ccoelloa@unemi.edu.ec'
}
console.log(datos)
//forma1
const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>        
    `
//forma2
const mostrarDatos1 = (avatar) =>{
    const {imagen,correo} = avatar
    return(
        `
        <img src=${imagen} alt=${correo}/>        
        `
    )
}
//forma3
const mostrarDatos2 = ({imagen:img,correo}) =>
    `
    <img src=${img} alt=${correo}/>        
    `

const $root = document.getElementById("root")
$root.innerHTML = "<h3>Destructuring</h3>"
$root.innerHTML += mostrarDatos2(datos)