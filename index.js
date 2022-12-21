homeID = document.getElementById("home-id")
guestID = document.getElementById("guest-id")
winner = document.getElementById("winner")

let homeScore = 0
let guestScore = 0

// Home Team
function homeOne() {
    homeScore += 1
    homeID.textContent = homeScore
    winner.textContent = null
}

function homeTwo() {
    homeScore += 2
    homeID.textContent = homeScore
    winner.textContent = null
}

function homeThree() {
    homeScore += 3
    homeID.textContent = homeScore
    winner.textContent = null
}

// Guest Team
function guestOne() {
    guestScore += 1
    guestID.textContent = guestScore
    winner.textContent = null
}

function guestTwo() {
    guestScore += 2
    guestID.textContent = guestScore
    winner.textContent = null
}

function guestThree() {
    guestScore += 3
    guestID.textContent = guestScore
    winner.textContent = null
}


function restart() {
    if (homeScore > guestScore) {
        winner.textContent = "The Home Team Won!!!"
    } else if (homeScore < guestScore) {
        winner.textContent = "The Guest Team Won!!!"
    } else {
        winner.textContent = "It is a tie!!!"
    }
    
    homeScore = 0
    guestScore = 0
    homeID.textContent = homeScore
    guestID.textContent = guestScore
}