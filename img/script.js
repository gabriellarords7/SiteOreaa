// Menu hamburguer
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-X")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    // se o menu esta fechado
    if (window.getComputedStyle(menu).right == "-210px") {

        // abrir o menu
        menu.style.right = "0"

        // mostrar icone X
        iconeX.style.display = "inline"

        // esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"

    }

    else {
        // fechar o menu
        menu.style.right = "-101vw"

        // esconder icone x
        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"

    }


}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        // mostra iconeX
        iconeX.style.display = "none"

    } else {
        // Esconde icone Barras
        iconeBarras.style.display = "inline"
    }


}