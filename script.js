// Banco de Questões Completo para Sistemas Operacionais (30 Lições + Teste Final)
const lessonsData = {};

const questionsMapping = [
    // Lição 1
    [{ q: "Qual é a principal função da MMU (Unidade de Gerenciamento de Memória)?", options: ["Controlar diretamente a velocidade de gravação dos discos rígidos.", "Enviar endereços físicos à memória após receber endereços virtuais da CPU", "Gerenciar as permissões de acesso dos usuários no terminal Linux.", "Executar threads em segundo plano sem a intervenção do núcleo."], answer: 1 }],
    // Lição 2
    [{ q: "O que ocorre quando um programa solicita dados ou instruções que não estão presentes na memória principal (paginação)?", options: ["Ocorre uma falha de página (page fault), fazendo o S.O. carregar a página necessária", "O computador é desligado automaticamente por segurança.", "O processo é encerrado permanentemente por falta de hardware.", "O sistema ativa imediatamente o modo de exclusão mútua."], answer: 0 }],
    // Lição 3
    [{ q: "Qual é a finalidade da TLB (Translation Lookaside Buffer)?", options: ["Armazenar senhas de usuários criptografadas.", "Acelerar o processo de consulta de páginas através de uma memória associativa", "Substituir totalmente a memória RAM em computadores modernos.", "Gerenciar a fila de impressão em ambientes compartilhados."], answer: 1 }],
    // Lição 4
    [{ q: "Qual é a principal diferença entre paginação e segmentação?", options: ["A paginação é visível ao programador, enquanto a segmentação é totalmente transparente.", "A segmentação é baseada na organização lógica interna de dados e instruções do programa, sendo visível ao programador", "A paginação não utiliza hardware para tradução de endereços.", "A segmentação divide a memória em blocos de tamanhos estritos e iguais."], answer: 1 }],
    // Lição 5
    [{ q: "O que caracteriza a alocação de espaço em disco do tipo contígua?", options: ["Maior desempenho em leitura, porém tende a causar fragmentação de espaço livre", "Ausência total de qualquer tipo de fragmentação.", "O uso de uma tabela FAT onde cada bloco aponta para o próximo.", "A necessidade de carregar todo o índice de i-nodes na inicialização."], answer: 0 }],
    // Lição 6
    [{ q: "Como funciona a alocação encadeada em sistemas de arquivos?", options: ["Os blocos são alocados de forma fixa e contígua no disco.", "Cada bloco de arquivo aponta para o próximo bloco, o que pode causar fragmentação", "O acesso aos dados é sempre direto e instantâneo, sem leitura completa.", "Utiliza-se um mapa de bits estrito para gerenciar os i-nodes."], answer: 1 }],
    // Lição 7
    [{ q: "O que representa o conceito de i-node (index node) em sistemas de arquivos?", options: ["Um programa executável em segundo plano (daemon).", "Uma estrutura de dados com informações sobre um arquivo, havendo um i-node por arquivo", "Um tipo de barramento físico de alta velocidade para E/S.", "Uma porta de comunicação direta entre dispositivos USB."], answer: 1 }],
    // Lição 8
    [{ q: "Qual é a diferença entre fragmentação interna e externa?", options: ["A externa ocorre dentro dos blocos de dados, e a interna ocorre nos blocos livres.", "A interna refere-se ao espaço não usado dentro de blocos, e a externa refere-se aos blocos livres dispersos", "Ambas descrevem o mesmo comportamento de hardware na memória RAM.", "A fragmentação interna só existe em discos SSD."], answer: 1 }],
    // Lição 9
    [{ q: "Na solução de segurança de acesso do Unix, o que significam as permissões básicas representadas por rwx?", options: ["Read, Write, Execute (Leitura, Escrita e Execução)", "Random, Write, XML.", "Root, Window, Xterm.", "Real, Web, Extended."], answer: 0 }],
    // Lição 10 (Checkpoint 1)
    [{ q: "Qual é a representação numérica em octal para permissões completas de leitura, escrita e execução (rwx) para o dono em sistemas Unix?", options: ["4", "5", "6", "7"], answer: 3 }],
    
    // Lição 11
    [{ q: "O que é um driver de dispositivo?", options: ["Um componente físico de hardware conectado à placa-mãe.", "Um software que sabe se comunicar com o dispositivo e traduz chamadas de alto nível", "Uma system call de E/S executada diretamente pela CPU.", "Um algoritmo de troca de páginas na memória virtual."], answer: 1 }],
    // Lição 12
    [{ q: "Qual é a principal vantagem da arquitetura de E/S utilizando DMA (Direct Memory Access)?", options: ["O processador precisa intermediar byte por byte o transporte de dados.", "O processador não faz a carga de E/S para a memória manualmente, pois ocorre de forma automática", "Elimina a necessidade de interrupções de hardware.", "Impede o compartilhamento de barramentos únicos."], answer: 1 }],
    // Lição 13
    [{ q: "O que define o conceito de IPC (Interprocess Communication)?", options: ["Mecanismos que permitem aos processos trocar dados e controlar dependências", "Protocolos exclusivos para conexão com a internet via cabo coaxial.", "Rotinas de hardware para inicialização da placa de vídeo.", "Ferramentas de compactação de partições em disco."], answer: 0 }],
    // Lição 14
    [{ q: "O que é uma região crítica em programação concorrente?", options: ["Uma área da memória RAM reservada exclusivamente para o kernel do S.O.", "Um trecho de código onde há acesso a recursos compartilhados que exigem exclusão mútua", "Um erro fatal de hardware gerado por falta de energia.", "O espaço de endereçamento virtual de um processo em background."], answer: 1 }],
    // Lição 15
    [{ q: "O que caracteriza a situação de Deadlock (Impasse)?", options: ["Quando um processo executa mais rápido que o quantum estipulado.", "Quando processos ficam bloqueados esperando por eventos ou recursos que outros do mesmo conjunto detêm", "Quando ocorre uma falha de página consecutiva na TLB.", "Quando o sistema operacional desliga as interrupções de hardware."], answer: 1 }],
    // Lição 16
    [{ q: "Quais são as quatro condições necessárias para a ocorrência de Deadlock?", options: ["Paginação, Segmentação, Swap e Cache.", "Exclusão Mútua, Posse e Espera, Não Preempção e Espera Circular", "Leitura, Escrita, Execução e Apagamento.", "Multiprogramação, Monopólio, Threads e Daemons."], answer: 1 }],
    // Lição 17
    [{ q: "Qual é a função de um semáforo em sistemas operacionais?", options: ["Controlar o acesso a recursos compartilhados através de operações atômicas", "Indicar a velocidade de clock do processador principal.", "Traduzir endereços lógicos em endereços físicos de memória.", "Substituir o uso de drivers de vídeo em ambientes gráficos."], answer: 0 }],
    // Lição 18
    [{ q: "Qual é a diferença fundamental entre um processo e uma thread?", options: ["Threads não possuem pilha própria de execução.", "Uma thread compartilha o espaço de endereçamento e recursos do processo pai, permitindo trocas de contexto mais rápidas", "Processos nunca podem ser executados em segundo plano.", "Threads operam exclusivamente em modo núcleo, sem interferência do usuário."], answer: 1 }],
    // Lição 19
    [{ q: "O que significa escalonamento preemptivo?", options: ["O S.O. pode interromper um processo em execução após o término do seu quantum (fatia de tempo)", "O processo é executado até o fim sem nenhuma interferência externa do núcleo.", "Apenas processos em lote (batch) podem utilizar a CPU.", "Ocorre exclusão mútua obrigatória sem uso de semáforos."], answer: 0 }],
    // Lição 20 (Checkpoint 2)
    [{ q: "Qual é a característica principal do algoritmo de escalonamento Round-Robin?", options: ["É um algoritmo não-preemptivo baseado estritamente na ordem de chegada.", "Utiliza uma fatia de tempo (quantum) em sistema circular para alternar os processos de forma justa", "Prioriza sempre o processo que possui a menor quantidade de dados em memória.", "Executa tarefas em lote sem interação com o usuário."], answer: 1 }],

    // Lição 21
    [{ q: "O que é o MBR (Master Boot Record)?", options: ["Um arquivo de texto contendo os comandos do terminal Linux.", "O Registro Principal do Boot, utilizado para iniciar o computador", "Uma tabela de tradução de páginas da MMU.", "Um buffer temporário de gravação de E/S."], answer: 1 }],
    // Lição 22
    [{ q: "O que representam os fluxos stdin, stdout e stderr no terminal Linux?", options: ["Entrada padrão, saída padrão e saída de erros", "Armazenamento primário, secundário e terciário.", "Modos de acesso de leitura, escrita e exclusão de diretórios.", "Tipos de barramento de dados, controle e endereçamento."], answer: 0 }],
    // Lição 23
    [{ q: "Para que serve o comando df no ambiente Linux?", options: ["Gerenciar usuários e grupos do sistema.", "Monitorar o consumo de memória RAM em tempo real.", "Exibir o espaço livre e utilizado nas partições e sistemas de arquivos", "Encerrar processos travados através do PID."], answer: 2 }],
    // Lição 24
    [{ q: "Qual comando do Linux é utilizado para alterar as permissões de acesso de um arquivo ou diretório?", options: ["chown", "chmod", "ps", "top"], answer: 1 }],
    // Lição 25
    [{ q: "Qual é a função do comando ps no Linux?", options: ["Listar os processos ativos no sistema", "Criar uma nova partição em disco.", "Modificar a senha do usuário atual.", "Desmontar um sistema de arquivos."], answer: 0 }],
    // Lição 26
    [{ q: "O que significa a sigla POSIX?", options: ["Process Operating System Indexing X", "Portable Operating System Interface", "Primary Open System Integration Extension", "Protected Optimized Storage Indexing Code"], answer: 1 }],
    // Lição 27
    [{ q: "Qual é a diferença entre os modos de execução do processador: Modo Usuário e Modo Núcleo?", options: ["O Modo Usuário tem privilégios totais de hardware, enquanto o Modo Núcleo é restrito.", "O Modo Usuário não tem privilégios diretos ao hardware, interagindo com o núcleo por system calls; o Modo Núcleo possui privilégios totais", "Ambos possuem os mesmos níveis de acesso aos registradores e memória.", "O Modo Núcleo é executado apenas por aplicações de escritório (foreground)."], answer: 1 }],
    // Lição 28
    [{ q: "O que é o princípio da localidade (aplicado à paginação e memória cache)?", options: ["A divisão estricta do disco rígido em partições primárias.", "A tendência de os programas acessarem endereços de memória próximos (localidade espacial) ou recentemente usados (localidade temporal).", "A restrição de acesso a arquivos baseada na localização geográfica do usuário.", "O mapeamento direto de portas de E/S na placa-mãe."], answer: 1 }],
    // Lição 29
    [{ q: "Qual é o objetivo do comando kill no Linux?", options: ["Apagar permanentemente o disco rígido principal.", "Enviar um sinal para encerrar ou manipular a execução de um processo", "Reiniciar o sistema operacional em modo de segurança.", "Bloquear o acesso de novos usuários ao terminal."], answer: 1 }],
    // Lição 30
    [{ q: "No contexto de arquitetura de E/S, o que um controlador de disco faz ao finalizar a leitura de bits?", options: ["Desliga o computador imediatamente para economizar energia.", "Gera uma interrupção para que o S.O. copie o buffer para a memória principal", "Executa o algoritmo Round-Robin nas threads ativas.", "Limpa a tabela TLB de forma síncrona."], answer: 1 }]
];

// Populando lessonsData de 1 a 30
for (let i = 1; i <= 30; i++) {
    let tag = i <= 10 ? "Parte 1 - Memória & Arquivos" : i <= 20 ? "Parte 2 - Processos & Concorrência" : "Parte 3 - S.O. & Linux";
    if (i === 10 || i === 20) tag = "Checkpoint Oficial";
    
    lessonsData[i] = {
        title: `Lição ${i}`,
        tag: tag,
        code: null,
        questions: questionsMapping[i - 1]
    };
}

// Lição 31: O DESAFIO SUPREMO FINAL (Boss)
lessonsData[31] = {
    title: "Desafio Supremo: Sistemas Operacionais",
    tag: "Teste Final - Geral",
    code: null,
    questions: [
        {
            q: "De acordo com os conceitos fundamentais apresentados por Andrew S. Tanenbaum, quais são as três abstrações consideradas os conceitos mais importantes relacionados aos sistemas operacionais?",
            options: [
                "Processos (e threads), espaços de endereçamento e arquivos",
                "Barramentos, drivers de dispositivo e partições MBR.",
                "Paginação, segmentação e algoritmos de troca FIFO.",
                "Modo usuário, modo núcleo e chamadas de sistema (system calls)."
            ],
            answer: 0
        }
    ]
};

// Estado do Usuário
let userState = {
    xp: parseInt(localStorage.getItem('sos_xp')) || 0,
    lives: parseInt(localStorage.getItem('sos_lives')) || 5,
    completedLessons: JSON.parse(localStorage.getItem('sos_completed')) || []
};

let currentLessonId = null;
let currentQuestionIndex = 0;
let currentSelectedOption = null;
let currentQuestionsList = [];
let isAnswerChecked = false; // Flag para controlar o estado da verificação

// Elementos da DOM
const welcomeScreen = document.getElementById('welcome-screen');
const pathScreen = document.getElementById('path-screen');
const lessonScreen = document.getElementById('lesson-screen');
const modalScreen = document.getElementById('modal-screen');

const startBtn = document.getElementById('start-btn');
const nodesContainer = document.getElementById('nodes-container');
const userXpSpan = document.getElementById('user-xp');
const userLivesSpan = document.getElementById('user-lives');

const quitLessonBtn = document.getElementById('quit-lesson');
const lessonProgress = document.getElementById('lesson-progress');
const lessonLivesCount = document.getElementById('lesson-lives-count');
const questionTag = document.getElementById('question-tag');
const questionTitle = document.getElementById('question-title');
const codeSnippetBox = document.getElementById('code-snippet-box');
const optionsContainer = document.getElementById('options-container');
const checkBtn = document.getElementById('check-btn');
const feedbackContent = document.getElementById('feedback-content');

const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalBtn = document.getElementById('modal-btn');

// Inicialização
function initApp() {
    updateStatsDisplay();
    renderPath();

    startBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        pathScreen.classList.add('active');
    });

    quitLessonBtn.addEventListener('click', () => {
        if (confirm("Deseja mesmo sair da lição? Seu progresso atual será perdido.")) {
            lessonScreen.classList.remove('active');
            pathScreen.classList.add('active');
            renderPath();
        }
    });

    checkBtn.addEventListener('click', handleMainButtonClick);
}

function updateStatsDisplay() {
    userXpSpan.textContent = userState.xp;
    userLivesSpan.textContent = userState.lives;
    localStorage.setItem('sos_xp', userState.xp);
    localStorage.setItem('sos_lives', userState.lives);
    localStorage.setItem('sos_completed', JSON.stringify(userState.completedLessons));
}

// Renderizar a Trilha (1 a 31)
function renderPath() {
    nodesContainer.innerHTML = '';

    for (let i = 1; i <= 31; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'node-wrapper';

        const node = document.createElement('button');
        node.className = 'lesson-node';
        node.textContent = i === 31 ? 'TEST' : i;

        const isCompleted = userState.completedLessons.includes(i);
        const isUnlocked = i === 1 || userState.completedLessons.includes(i - 1) || userState.completedLessons.includes(i);

        if (i === 10 || i === 20) {
            node.classList.add('checkpoint');
        }
        if (i === 31) {
            node.classList.add('boss');
        }

        if (isCompleted) {
            node.classList.add('completed');
            node.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (isUnlocked) {
            node.classList.add('unlocked');
        }

        node.addEventListener('click', () => {
            if (isUnlocked || isCompleted) {
                startLesson(i);
            } else {
                alert("Complete a lição anterior para desbloquear esta etapa!");
            }
        });

        wrapper.appendChild(node);
        nodesContainer.appendChild(wrapper);
    }
}

// Iniciar Lição
function startLesson(id) {
    if (userState.lives <= 0) {
        alert("Suas vidas acabaram! Espere recarregar ou reinicie.");
        return;
    }

    currentLessonId = id;
    currentQuestionIndex = 0;
    currentQuestionsList = lessonsData[id].questions;

    pathScreen.classList.remove('active');
    lessonScreen.classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    currentSelectedOption = null;
    isAnswerChecked = false;
    checkBtn.classList.add('disabled');
    checkBtn.textContent = "Verificar";
    feedbackContent.textContent = "";
    feedbackContent.className = "feedback-content";

    const lessonData = lessonsData[currentLessonId];
    const q = currentQuestionsList[currentQuestionIndex];

    questionTag.textContent = lessonData.tag;
    questionTitle.textContent = q.q;

    if (lessonData.code && currentQuestionIndex === 0) {
        codeSnippetBox.textContent = lessonData.code;
        codeSnippetBox.classList.remove('hidden');
    } else {
        codeSnippetBox.classList.add('hidden');
    }

    const progressPercent = (currentQuestionIndex / currentQuestionsList.length) * 100;
    lessonProgress.style.width = `${progressPercent}%`;
    lessonLivesCount.textContent = userState.lives;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            // Só permite mudar a seleção se a resposta ainda não foi validada como correta/errada
            if (!isAnswerChecked) {
                selectOption(index, btn);
            }
        });
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, btnElement) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    currentSelectedOption = index;
    checkBtn.classList.remove('disabled');
}

// Gerenciador central do botão principal (Verificar / Continuar)
function handleMainButtonClick() {
    if (!isAnswerChecked) {
        handleCheckAnswer();
    } else {
        nextStep();
    }
}

function handleCheckAnswer() {
    if (currentSelectedOption === null) return;

    const q = currentQuestionsList[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');

    if (currentSelectedOption === q.answer) {
        // ACERTOU
        optionButtons[currentSelectedOption].classList.add('correct');
        feedbackContent.textContent = "Resposta correta!";
        feedbackContent.className = "feedback-content correct";
        
        isAnswerChecked = true;
        checkBtn.textContent = "Continuar";
        checkBtn.classList.remove('disabled');
    } else {
        // ERROU
        optionButtons[currentSelectedOption].classList.add('wrong');
        optionButtons[q.answer].classList.add('correct'); // Mostra qual era a certa
        
        userState.lives = Math.max(0, userState.lives - 1);
        updateStatsDisplay();

        feedbackContent.textContent = "Ops! Resposta incorreta. Tente novamente.";
        feedbackContent.className = "feedback-content wrong";

        // Trava o botão e deseleciona para forçar o usuário a escolher de novo
        currentSelectedOption = null;
        checkBtn.classList.add('disabled');
        checkBtn.textContent = "Verificar";

        // Desabilita os botões de opção já clicados incorretamente ou permite nova tentativa
        // Aqui limpamos a seleção para o usuário tentar outra alternativa
        setTimeout(() => {
            optionButtons.forEach(b => {
                if (!b.classList.contains('correct')) {
                    b.classList.remove('wrong', 'selected');
                }
            });
        }, 800);

        if (userState.lives === 0) {
            setTimeout(() => {
                alert("Você perdeu todas as vidas!");
                lessonScreen.classList.remove('active');
                pathScreen.classList.add('active');
                userState.lives = 5;
                updateStatsDisplay();
                renderPath();
            }, 1500);
            return;
        }
    }
}

function nextStep() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestionsList.length) {
        loadQuestion();
    } else {
        finishLesson();
    }
}

function finishLesson() {
    lessonScreen.classList.remove('active');
    modalScreen.classList.remove('hidden');

    userState.xp += currentLessonId === 31 ? 50 : 15;
    if (!userState.completedLessons.includes(currentLessonId)) {
        userState.completedLessons.push(currentLessonId);
    }
    updateStatsDisplay();

    if (currentLessonId === 31) {
        modalTitle.textContent = "Parabéns, Mestre em Sistemas Operacionais!";
        modalText.textContent = "Você concluiu todas as lições e o desafio final! Pronto para gabaritar a prova!";
    } else {
        modalTitle.textContent = "Lição Concluída!";
        modalText.textContent = "Você ganhou XP e está mais próximo de dominar a matéria!";
    }

    modalBtn.onclick = () => {
        modalScreen.classList.add('hidden');
        pathScreen.classList.add('active');
        renderPath();
    };
}

window.onload = initApp;
