import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw, Trophy, PartyPopper } from "lucide-react";

const allQuestions = [
  {
    question: "O que é um codec em vídeo digital?",
    options: ["Um cabo de conexão", "Um software que codifica e decodifica dados", "Um tipo de tela LCD"],
    answer: 1
  },
  {
    question: "Qual é o principal objetivo da compressão de vídeo?",
    options: ["Aumentar a resolução", "Melhorar o áudio", "Reduzir o tamanho do arquivo"],
    answer: 2
  },
  {
    question: "O que a sigla FPS (Frames Per Second) representa?",
    options: ["Frequência de exibição de quadros por segundo", "Força do Processador do Sistema", "Frequência de Som"],
    answer: 0
  },
  {
    question: "Qual é a resolução mais comum do vídeo Full HD?",
    options: ["1280 × 720", "1920 × 1080", "3840 × 2160"],
    answer: 1
  },
  {
    question: "Qual tipo de compressão descarta permanentemente informações?",
    options: ["Compressão Lossless (sem perdas)", "Compressão ZIP", "Compressão Lossy (com perdas)"],
    answer: 2
  },
  {
    question: "O que é o Bitrate de um vídeo?",
    options: ["A quantidade de dados processados por segundo", "A marca da câmera", "O tamanho físico do monitor"],
    answer: 0
  },
  {
    question: "Qual é o efeito mais comum da compressão Lossy excessiva?",
    options: ["Imagem mais nítida", "Pixelização e artefatos", "Arquivo maior"],
    answer: 1
  },
  {
    question: "Qual codec é usado com frequência em vídeos HD e streaming?",
    options: ["MP3", "H.264 (AVC) / H.265 (HEVC)", "BMP"],
    answer: 1
  },
  {
    question: "Qual conceito permite ignorar quadros que não mudam?",
    options: ["Redundância temporal", "Redundância espacial", "Redundância sonora"],
    answer: 0
  },
  {
    question: "Um vídeo 4K tem aproximadamente quantas vezes mais pixels que um Full HD?",
    options: ["Duas vezes mais", "Quatro vezes mais", "Oito vezes mais"],
    answer: 1
  },
  {
    question: "Qual elemento usa quadros-chave (I-frames) para compressão?",
    options: ["Texto simples", "Áudio analógico", "Vídeo digital"],
    answer: 2
  },
  {
    question: "O que significa a letra 'p' em 1080p?",
    options: ["Pixel", "Progressive Scan (Varredura progressiva)", "Power"],
    answer: 1
  },
  {
    question: "O que é um 'container' como .MP4 ou .MKV?",
    options: ["O player de vídeo", "O codec em si", "A estrutura que armazena vídeo, áudio e metadados"],
    answer: 2
  },
  {
    question: "Qual característica define a compressão Lossless?",
    options: ["Preserva todos os dados originais", "Cria artefatos visuais", "Reduz drasticamente a qualidade"],
    answer: 0
  },
  {
    question: "O que acontece quando o Bitrate é muito baixo?",
    options: ["A qualidade degrada severamente", "A qualidade aumenta", "O vídeo vira 4K automaticamente"],
    answer: 0
  }
];

// Função para tocar áudio
const playAudio = (file: string) => {
  const audio = new Audio(file);
  audio.volume = 0.5;
  audio.play().catch(() => {});
};

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState<typeof allQuestions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showVictoryModal, setShowVictoryModal] = useState(false);

  const startQuiz = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    setCurrentQuiz(selected);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(true);
    setShowVictoryModal(false);
  };

  const handleAnswer = (answerIndex: number) => {
    playAudio("/gota.mp3"); // 🔊 som ao clicar
  
    const isCorrect = answerIndex === currentQuiz[currentQuestion].answer;
  
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  
    if (currentQuestion < currentQuiz.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        let correctCount = 0;
        currentQuiz.forEach((q, index) => {
          if (newAnswers[index] === q.answer) correctCount++;
        });
  
        if (correctCount === currentQuiz.length) {
          playAudio("/acerto.mp3"); // VITÓRIA 🎉
          setShowVictoryModal(true);
        } else {
          playAudio("/erro.mp3"); // ERRO ❌
        }
  
        setShowResults(true);
      }, 500);
    }
  };


  const calculateScore = () => {
    let correct = 0;
    currentQuiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correct++;
      }
    });
    return correct;
  };

  // Modal de Vitória (100%)
  const VictoryModal = () => (
    <AnimatePresence>
      {showVictoryModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVictoryModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card border-2 border-primary rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold neon-text mb-4">Parabéns!</h2>
            <p className="text-muted-foreground mb-6">
              Você acertou todas as questões! Excelente desempenho!
            </p>
            
            {/* Animação GIF de vitória */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src="/anim.gif"
                alt="Animação de vitória"
                className="w-full h-auto max-h-48 object-contain mx-auto"
              />
            </div>

            <Button
              onClick={() => setShowVictoryModal(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Ver Resultados
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <Trophy className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse-neon" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Quiz Avaliativo
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Teste seus conhecimentos sobre vídeo digital e compressão.
            Você responderá 5 perguntas sorteadas aleatoriamente.
          </p>
          <Button
            onClick={startQuiz}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Iniciar Quiz
          </Button>
        </motion.div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / currentQuiz.length) * 100;

    return (
      <>
        <VictoryModal />
        <div className="min-h-screen py-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-2 neon-text">Resultado Final</h1>
              <p className="text-2xl text-foreground">
                Você acertou <span className="text-primary font-bold">{score}</span> de {currentQuiz.length} questões
              </p>
              <p className="text-3xl font-bold text-primary mt-4">{percentage.toFixed(0)}%</p>
            </div>

            <div className="space-y-4 mb-8">
              {currentQuiz.map((q, index) => {
                const isCorrect = selectedAnswers[index] === q.answer;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`card-gradient p-6 rounded-xl border-2 ${
                      isCorrect ? "border-green-500/50" : "border-red-500/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold mb-2 text-foreground">{q.question}</p>
                        <p className="text-sm text-muted-foreground">
                          Sua resposta: <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                            {q.options[selectedAnswers[index]]}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-500 mt-1">
                            Resposta correta: {q.options[q.answer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                onClick={startQuiz}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Tentar Novamente
              </Button>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  const question = currentQuiz[currentQuestion];

  return (
    <div className="min-h-screen py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentQuestion}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">
              Questão {currentQuestion + 1} de {currentQuiz.length}
            </span>
            <span className="text-sm font-mono text-primary">
              {Math.round(((currentQuestion + 1) / currentQuiz.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / currentQuiz.length) * 100}%` }}
              className="h-full bg-primary"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-gradient p-8 rounded-xl border border-border mb-6"
        >
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left rounded-lg border border-border bg-secondary hover:bg-secondary/80 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-foreground">{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Quiz;
