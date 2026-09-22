# Sistema Operacional Gamificado (Estilo Duolingo)

Uma aplicação web interativa desenvolvida para o aprendizado de conceitos fundamentais de **Sistemas Operacionais**, inspirada no modelo de trilhas e gamificação de plataformas como o Duolingo. O projeto conta com dezenas de lições estruturadas, checkpoints, desafios finais (*boss*), sistema de XP, vidas e controle rígido de acertos para progressão pedagógica.

---

## Funcionalidades

* **Trilha de Aprendizado Interativa:** 30 lições divididas por módulos temáticos + 1 Desafio Supremo final (*Boss*).
* **Módulos Abrangentes:** 
  * Parte 1: Memória & Arquivos (MMU, Paginação, TLB, Segmentação, I-nodes, Permissões Unix).
  * Parte 2: Processos & Concorrência (Drivers, DMA, IPC, Regiões Críticas, Deadlocks, Semáforos, Threads, Escalonamento).
  * Parte 3: S.O. & Linux (MBR, Fluxos padrão, Comandos de terminal como `df`, `chmod`, `ps`, `kill`, Modos de Execução e Chamadas de Sistema).
* **Mecânica de Vidas e XP:** O usuário perde vidas ao errar e ganha pontos de experiência (XP) ao concluir conteúdos com sucesso.
* **Validação Rígida de Respostas:** O sistema impede o avanço automático caso o usuário erre a questão, exigindo que ele repense e acerte antes de prosseguir.
* **Persistência de Dados (`LocalStorage`):** O progresso, vidas e XP do usuário são salvos automaticamente no navegador.

---

## Tecnologias Utilizadas

* **HTML5** (Estruturação de telas e componentes)
* **CSS3** (Estilização avançada com tema *Dark Mode*, variáveis globais e layout responsivo)
* **JavaScript (ES6+)** (Lógica de navegação, controle de estado, manipulação do DOM e banco de questões)
* **FontAwesome** (Ícones da interface)

---

## Como Executar o Projeto

Como o projeto utiliza apenas tecnologias nativas da web (HTML, CSS e JS), não é necessário instalar dependências complexas ou configurar servidores locais pesados.

1. Baixe ou clone este repositório em sua máquina.
2. Certifique-se de que os arquivos principais (`index.html`, `style.css` e o script principal) estejam organizados no mesmo diretório.
3. Dê um duplo clique no arquivo **`index.html`** para abri-lo em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).

---

## Lógica de Progressão das Lições

* **Desbloqueio Sequencial:** Novas lições só são liberadas à medida que a lição anterior é concluída.
* **Checkpoints:** Lições de revisão nos marcos específicos para fixação de conteúdo acumulado.
* **Modo de Erro:** Se o usuário errar uma questão, a resposta correta é revelada visualmente, uma vida é descontada, e o botão de avanço permanece bloqueado até que uma escolha correta seja feita.

---

##  Licença

Este projeto é de uso livre para fins educacionais e de estudo. Sinta-se à vontade para modificar e expandir o banco de questões para outras matérias!
