import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const Tutorial = () => {
  // =====================================================
  // INSTRUÇÕES: Substitua o ID do vídeo abaixo pelo seu
  // Exemplo: Se o link do seu vídeo for https://www.youtube.com/watch?v=SEU_ID_AQUI
  // Cole apenas o ID (a parte após "v=") na variável abaixo
  // =====================================================
  const youtubeVideoId = "dQw4w9WgXcQ"; // <-- COLE SEU ID DE VÍDEO AQUI

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Play className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse-neon" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Tutorial em Vídeo
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assista ao vídeo tutorial para complementar seu aprendizado sobre vídeo digital e compressão.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card-gradient p-4 md:p-6 rounded-xl border border-border"
        >
          {/* Iframe Responsivo do YouTube */}
          <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden bg-secondary">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Tutorial de Vídeo Digital"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Link direto para o YouTube */}
          <div className="mt-4 text-center">
            <a
              href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir no YouTube</span>
            </a>
          </div>
        </motion.div>

        {/* Informações adicionais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-muted-foreground"
        >
          <p className="text-sm">
            Após assistir ao vídeo, teste seus conhecimentos no{" "}
            <a href="/quiz" className="text-primary hover:underline">
              Quiz Avaliativo
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorial;
