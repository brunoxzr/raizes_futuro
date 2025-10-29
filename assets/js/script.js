        // Toggle passo a passo
        function toggleSteps() {
            const content = document.getElementById('steps-content');
            content.classList.toggle('active');
        }

        // Quiz
        const quizQuestions = [
            {
                question: "Qual ODS o projeto 'Raízes do Futuro' atende?",
                options: ["ODS 4 - Educação", "ODS 6 - Água e Saneamento", "ODS 13 - Clima"],
                correct: 1
            },
            {
                question: "Qual planta é usada para purificar a água?",
                options: ["Girassol", "Moringa", "Bambu"],
                correct: 1
            },
            {
                question: "Quantos gramas de pó de moringa são usados por litro de água?",
                options: ["1 grama", "2 gramas", "5 gramas"],
                correct: 1
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        function startQuiz() {
            currentQuestion = 0;
            score = 0;
            showQuestion();
        }

        function showQuestion() {
            const quizContent = document.getElementById('quiz-content');
            quizContent.classList.add('active');
            
            if (currentQuestion < quizQuestions.length) {
                const q = quizQuestions[currentQuestion];
                quizContent.innerHTML = `
                    <div class="bg-blue-900 p-6 rounded-xl text-white">
                        <p class="font-semibold mb-4">Pergunta ${currentQuestion + 1}/${quizQuestions.length}</p>
                        <p class="text-lg mb-4">${q.question}</p>
                        <div class="space-y-2">
                            ${q.options.map((opt, i) => `
                                <button onclick="checkAnswer(${i})" class="w-full bg-blue-800 hover:bg-blue-700 px-4 py-3 rounded-lg text-left border-2 border-blue-600 text-white transition">
                                    ${opt}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                showResult();
            }
        }

        function checkAnswer(selected) {
            if (selected === quizQuestions[currentQuestion].correct) {
                score++;
            }
            currentQuestion++;
            showQuestion();
        }

        function showResult() {
            const quizContent = document.getElementById('quiz-content');
            const percentage = Math.round((score / quizQuestions.length) * 100);
            quizContent.innerHTML = `
                <div class="bg-green-900 p-6 rounded-xl text-center text-white">
                    <div class="text-5xl mb-4">🎉</div>
                    <p class="text-2xl font-bold mb-2">Resultado</p>
                    <p class="text-xl mb-4">Você acertou ${score} de ${quizQuestions.length} perguntas!</p>
                    <div class="text-4xl font-bold text-green-300 mb-4">${percentage}%</div>
                    <button onclick="startQuiz()" class="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition">
                        Tentar Novamente
                    </button>
                </div>
            `;
        }

        // Modal de contato
        function openContactModal() {
            document.getElementById('contactModal').classList.add('active');
        }

        function closeContactModal() {
            document.getElementById('contactModal').classList.remove('active');
        }

        function handleContactSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\n\nEm breve entraremos em contato através do email: ${email}`);
            closeContactModal();
            
            // Limpar formulário
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-message').value = '';
        }

        // Fechar modal clicando fora
        window.onclick = function(event) {
            const modal = document.getElementById('contactModal');
            if (event.target === modal) {
                closeContactModal();
            }
        }