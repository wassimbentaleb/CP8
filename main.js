function ex1methode1() {
    var sum1 = document.getElementById('1')
    const Ta = [3, 1, 7, 9]
    const Tb = [2, 4, 1, 9, 3]

    let sum = 0
    for (let i = 0; i < Ta.length; i++) {
        let exist = false
        for (let j = 0; j < Tb.length; j++) {
            if (Ta[i] === Tb[j]) {
                exist = true
                break;
            }
        }

        if (exist === false)
            sum = sum + Ta[i]
    }

    for (let i = 0; i < Tb.length; i++) {
        let exist = false
        for (let j = 0; j < Ta.length; j++) {
            if (Tb[i] === Ta[j]) {
                exist = true


                break;
            }

        }
        if (exist === false)
            sum = sum + Tb[i]

    }
    console.log(`sum of all distinct elements: ${sum}`)
    sum1.innerHTML = `Resultat = ${sum}`
}
function ex2methode1() {
    var sum2 = document.getElementById("2")
    const Ta = [3, 1, 7, 9]
    const Tb = [2, 4, 1, 9, 3]

    let sum = 0
    for (let i = 0; i < Ta.length; i++) {
        let exist = false
        for (let j = 0; j < Tb.length; j++) {
            if (Ta[i] === Tb[j]) {
                exist = true
                break;
            }
        }

        if (exist === true)
            sum = sum + Ta[i]
    }

    for (let i = 0; i < Tb.length; i++) {
        let exist = false
        for (let j = 0; j < Ta.length; j++) {
            if (Tb[i] === Ta[j]) {
                exist = true
                break;
            }

        }
        if (exist === true)
            sum = sum + Tb[i]

    }
    console.log(`Sum of overlapping elements: ${sum} `)
    sum2.innerHTML = `Resultat = ${sum} `
}

