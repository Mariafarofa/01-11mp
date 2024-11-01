const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele tambem gera imagens e áudios hiper-realistas. Qual é o primeiro pensamento?",
    alternativas: [
        { 
       texto: "Isso é assustador!",
       afirmacao: "afirmação"
       },
       {
        texto: "Isso é maravilhoso",
        afirmacao: "afirmação"
    }
    ]
    },
    {
    enunciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre e esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
        {
        texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        afirmacao: "afirmação",
        },
        {
        texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas nas internet e conhecimentos próprios sobre o tema.",
        afirmacao: "afirmação"
        }
     ]
},
{
    enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho o futuro. Nesse debate, como você se posiciona?",
    alternativas: [
        {
        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: "afirmação",
        },
        {
        texto:"Me preocupo com as pesoas que perderão seus empregos para máquinas e defendem a impôrtancia de proteger os trabalhadores.",
        afirmacao: "afirmação"
        }
]
},
{
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
        {
        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: "afirmação",
        },
        {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao:"afirmação"
        }
]
},
{
    enunciado: "Você tem um trabalho em um grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho etá totalemnte igual ao do chat. O que você faz?",
    alternativas: [
        {
        texto: "Escrever comandos para o chat é uma forma de contruibuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao: "afirmação",
        },
        {
        texto: "o chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por io revisar o trabalho e conturibuir com as perspectivas pessoais é essencial.",
        afirmacao: "afirmação"
        }
]
}
];

 let atual = 0;
 let perguntaAtual;
 let historiaFinal = "";

 function mostraPergunta() {
    if (atual >= perguntas.lenght) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas);
         }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
        }

        function mostraResultado() {
            caixaPerguntas.textContent = "Em 2049...";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = "";
        }

mostraPergunta();



                    
