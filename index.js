const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "variable myVar;",
        "var myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array e retorna esse elemento?",
      respostas: [
        "pop()",
        "push()",
        "removeLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para imprimir mensagens no console do navegador?",
      respostas: [
        "console.log()",
        "print()",
        "message()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "32",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof em JavaScript quando aplicado a uma variável não definida?",
      respostas: [
        "undefined",
        "null",
        "string"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (var i = 0; i < 5; i++)",
        "for i = 0; i < 5; i++"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método Array.push() em JavaScript?",
      respostas: [
        "Adicionar um novo elemento ao início do array",
        "Adicionar um novo elemento ao final do array",
        "Remover o último elemento do array"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Ele retorna verdadeiro se ambos os operandos são verdadeiros",
        "Ele retorna verdadeiro se um dos operandos for verdadeiro",
        "Ele retorna verdadeiro se pelo menos um dos operandos for falso"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }