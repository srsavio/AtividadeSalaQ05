function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    let n3 = Number(window.prompt(`Além de ${n2}, qual foi a outra nota de ${nom}?`))
    let n4 = Number(window.prompt(`Além de ${n3}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2 + n3 +n4)/4 
    
    let msg 
    if (med >= 7) {
        msg = 'Parabéns!'
    } else { 
        msg = 'VÁ ESTUDAR, VAGABUNDO MALANDRO, FILHINHO DE MAMÃE!'
    }
    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1}, ${n2}, ${n3} e ${n4}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}