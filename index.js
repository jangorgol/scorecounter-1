let scoreHomeStart = 0
let scoreGuestStart = 0
let scorehome = document.getElementById(scoreHome)
let scoreguest = document.getElementById(scoreGuest)

function add1home(){
    scoreHomeStart += 1
    scoreHome.textContent = scoreHomeStart
}

function add2home(){
    scoreHomeStart += 2
    scoreHome.textContent = scoreHomeStart
}

function add3home(){
    scoreHomeStart += 3
    scoreHome.textContent = scoreHomeStart
}

function add1guest(){
    scoreGuestStart += 1
    scoreGuest.textContent = scoreGuestStart
}

function add2guest(){
    scoreGuestStart += 2
    scoreGuest.textContent = scoreGuestStart
}

function add3guest(){
    scoreGuestStart += 3
    scoreGuest.textContent = scoreGuestStart
}