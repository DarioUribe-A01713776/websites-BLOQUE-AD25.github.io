
const btnDefault = document.getElementById('default')
const btnHaduken = document.getElementById('haduken-SF')
const btnShoryuken = document.getElementById('shoryuken')
const btnHurricaneKick = document.getElementById('hurricaneKick')
const imgMain = document.getElementById('main')
const info = document.getElementById('info')

btnDefault.addEventListener ('click', () => {
    imgMain.src = '../img/img-sf.gif'
    document.body.className = "theme-default"
    info.innerText = "Haz clic en los botones para activar los combos"
})

btnHaduken.addEventListener ('click', () => {
    imgMain.src = '../img/img-haduken.gif'
    document.body.className = "theme-haduken"
    info.innerText = "Ken gira verticalmente rodeado de fuego, como un tornado de puños ascendentes. Es su Súper Movimiento icónico."
})

btnShoryuken.addEventListener ('click', () => {
    imgMain.src = '../img/img-shoryuken.gif'
    document.body.className = "theme-shoryuken"
    info.innerText = "Súper basado en una serie de patadas rápidas que terminan con un fuerte remate. Muy usado en Street Fighter III."
})

btnHurricaneKick.addEventListener ('click', () => {
    imgMain.src = '../img/img-hurricaneKick.gif'
    document.body.className = "theme-kick"
    info.innerText = "Ataque de patadas envueltas en fuego, visto en Street Fighter V. Representa el dominio total de Ken sobre el fueg"
})