var agora = new Date()
var mês = agora.getMonth()

switch(mês){
    case 0:
        console.log('Janeiro')
        break
    case 1:
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4:
        console.log('Maio')
        break
    case 5:
        console.log('Junho')
        break
    case 6:
        console.log('Julho')
        break
    case 7:
        console.log('Agosto')
        break
    case 8:
        console.log('Setembro')
        break
    case 9:
        console.log('Outubro')
        break
    case 10:
        console.log('Novembro')
        break
    case 11:
        console.log('Dezembro')
        break
    default:
        console.log('[ERRO] esse mês não existe!')
        break
}

estação = mês

switch(estação){
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log('Verão!')
        break
    case "Abril":
    case "Maio":
    case "Junho":
        console.log('Outono!')
        break
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log('Inverno!')
        break
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log('Primavera!')
}