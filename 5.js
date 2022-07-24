let palavra = 'Paralelepipedo'
let contadorLetras = []
// Vai ser um array de um objeto nesse formato
// { letra, quantidade }

for (let i = 0; i < palavra.length; i++) {
  let letra = palavra[i]
  let contadorLetra = contadorLetras.find(item => item.letra === letra)

  if (contadorLetra) {
    contadorLetra.quantidade = contadorLetra.quantidade + 1
  } else {
    contadorLetras.push({ letra: letra, quantidade: 1 })
  }
}

console.log(contadorLetras.map(c => c.letra + '=' + c.quantidade).join('; '))
