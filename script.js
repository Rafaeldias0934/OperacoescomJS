const res = document.getElementById('result')
function iniciar() {
    let n1 = Number.parseFloat(prompt('Digite o 1° número'))
    let n2 = Number.parseFloat(prompt('Digite o 2° número'))
   
    let som = n1 + n2
    let sub = n1 - n2
    let mul = n1 * n2
    let ins = Number(prompt(`Valores informados: ${n1} e ${n2}
    O que vamos fazer? 
    [1] Somar 
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))
    if (ins == 1) {
        res.innerHTML = `<p><strong style='color:pink;'>O resultante para esta Soma é...</strong></p>`
       exibirValores(n1, n2, '+', som) 
    }else if (ins == 2) {
        res.innerHTML = `<p><strong style='color:pink;'>O resultante para esta Subtração é...</strong></p>`
        exibirValores(n1, n2, '-', sub)
    }else if (ins == 3) {
        res.innerHTML = `<p><strong style='color:pink;'>O resultante para esta Multiplicação é...</strong></p>`
        exibirValores(n1, n2, '*', mul)
    }else if (ins == 4) {
        if (n2 == 0) {
            exibirValores(n1, n2, '/', '[ERRO] Não é possivél dividir um número por 0 .!')
            return
        }
        res.innerHTML = `<p><strong style='color:pink;'>O resultante para esta Divisão é...</strong></p>`
        let div = n1 / n2
        exibirValores(n1, n2, '/', div)
    }
}
function exibirValores( n1, n2, operacao, resultado) {
    res.innerHTML += `<p>${n1} ${operacao} ${n2} = <strong style='color:white;'>${resultado.toFixed(2)}</strong></p>`
}
