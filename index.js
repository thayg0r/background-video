const botao = document.querySelector(".botao")
const video = document.querySelector(".xaxa")
const fa = document.querySelector(".fa")
const preloader = document.querySelector(".preloader")

botao.addEventListener("click", ()=>{
    if(botao.classList.contains("pause")){
        botao.classList.remove("pause")
        video.play()
        fa.classList.add("fa-pause")
        fa.classList.remove("fa-play")
    }else{
        botao.classList.add("pause")
        video.pause()
        fa.classList.remove("fa-pause")
        fa.classList.add("fa-play")
    }
})

window.addEventListener("load", ()=>{
    preloader.style.zIndex = "-2"
})