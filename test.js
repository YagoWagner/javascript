var agora = new Date()
var mês = agora.getMonth()

switch(mês){
    case 0:
        mês = 'Janeiro'
        break
    case 1:
        mês = 'Fevereiro'
        break
    case 2:
        mês = 'Março'
        break
    case 3:
        mês = 'Abril'
        break
    case 4:
        mês = 'Maio'
        break
    case 5:
        mês = 'Junho'
        break
    case 6:
        mês = 'Julho'
        break
    case 7:
        mês = 'Agosto'
        break
    case 8:
        mês = 'Setembro'
        break
    case 9:
        mês = 'Outubro'
        break
    case 10:
        mês = 'Novembro'
        break
    case 11:
        mês = 'Dezembro'
        break
    default:
        console.log('[ERRO] esse mês não existe!')
        break
}

var estação = mês

switch(mês){
    case 'Dezembro':
    case 'Janeiro':
    case 'Fevereiro':
        estação = 'Verão!'
        break
    case 'Março':
    case 'Abril':
    case 'Maio':
        estação = 'Outono!'
        break
    case 'Junho':
    case 'Julho':
    case 'Agosto':
        estação = 'Inverno!'
        break
    case 'Setembro':
    case 'Outubro':
    case 'Novembro':
        estação = 'Primavera!'
        break
}

console.log(`Estamos em ${mês} que é a estação do(a) ${estação}`)