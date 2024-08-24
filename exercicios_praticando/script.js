function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ) { 
        window.alert('[Erro], faltam dados!!')
    } else {
        resultado.innerHTML = 'Contando:'
    }

}