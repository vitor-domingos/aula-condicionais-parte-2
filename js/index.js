// Definindo a variável serieFavorita com o valor "Stranger Things"
let serieFavorita = "Stranger Things"

// Usando uma estrutura de switch para escolher a mensagem com base no valor de serieFavorita
switch (serieFavorita) {
    case "Supernatural":
        console.log("A minha série favorita é Supernatural.")
        break
    case "Stranger Things":
        console.log("A minha série favorita é Stranger Things.")
        break
    case "Rick and Morty":
        console.log("A minha série favorita é Rick and Morty.")
        break
    case "The Simpsons":
        console.log("A minha série favorita é The Simpsons.")
        break
    case "Round 6":
        console.log("A minha série favorita é Round 6.")
        break
    default:
        console.log("Esta não é minha série favorita.")
}

// Definindo a variável avaliacaoDaSerie com o valor 4
let avaliacaoDaSerie = 4

// Usando outra estrutura de switch para determinar a mensagem com base no valor de avaliacaoDaSerie
switch (avaliacaoDaSerie) {
    case 1:
    case 2:
        console.log("Boa.")
        break
    case 3:
    case 4:
        console.log("Muito Boa.")
        break
    case 5:
        console.log("Excelente.")
        break
    default:
        console.log("Esta avaliação não existe.")
}
