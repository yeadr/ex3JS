const ex1 = (x) => {
    console.log("Ex 1")
    return x % 3 == 0 ? "Multiple de 3" : 
    x % 7 == 0 ? "Multiple de 7" : "Multiple de res"
}

console.log(ex1(14))

const ex2 = (x, y) => {
    console.log("")
    console.log("Ex 2")
    return `${x >=10 && x <=50 ? "X sí" : "X no"}, ${y >= 10 && y <= 50 ? "Y sí" : "Y no"}`
}

console.log(ex2(45, 222))   

const ex3 = (x) => {
    console.log("")
    console.log("Ex 3")
    return x < 5 ? "Suspès" :
    x < 6 ? "Suficient" :
    x < 7 ? "Bé" :
    x < 9 ? "Notable" : "Excel·lent"
}

console.log(ex3(8,99))


const ex4 = (x) => {
    const m3 = x % 3 == 0
    const m7 = x % 7 == 0

    console.log("")
    console.log("Ex 4")

    switch(true){
        case m3 && m7: return "és múltiple de 3 i 7"
        case m3: return "és múltiple de 3"
        case m7: return "és múltiple de 7"
        default: return "no és múltiple de 3 ni 7"
    }

}

console.log(ex4(21))