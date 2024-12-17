// Variables
let win = 0
let lose = 0
let rankPlayer = calculateWinAndLose(win,lose)
let level = CalculateLevel(rankPlayer)


// Function Calculate Win and Lose [OK]
function calculateWinAndLose(win = 0,lose = 0){
    let subtract = win - lose
    return subtract
}

// Function Calculate Level
function CalculateLevel(rankPlayer = 0){
    let level;
    switch(true){
        case rankPlayer >= 11 && rankPlayer <= 20:
            level = "Bronze"
        break;

        case rankPlayer >= 21 && rankPlayer <= 50:
            level = "Prata"
        break;

        case rankPlayer >= 51 && rankPlayer <= 80:
            level = "Ouro"
        break;

        case rankPlayer >= 81 && rankPlayer <= 90:
            level = "Diamante"
        break;

        case rankPlayer >= 91 && rankPlayer <= 100:
            level = "Lendário"
        break;

        case rankPlayer >= 101:
            level = "Imortal"
        break;

        default:
            level = "Ferro"
        break;
    }
    
    return level
}

// Exits
console.log(`O Herói tem saldo de ${rankPlayer} está no nível de ${level}`)