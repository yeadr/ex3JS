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

