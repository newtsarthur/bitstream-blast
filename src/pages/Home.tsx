import { motion } from "framer-motion";
import { Play, Zap, FileVideo } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <FileVideo className="w-24 h-24 text-primary mx-auto animate-pulse-neon" />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 neon-text"
          >
            Vídeo Digital
            <br />& Compressão
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Explore os fundamentos da codificação de vídeo, técnicas de compressão
            e como a tecnologia transforma dados brutos em streams eficientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <div className="card-gradient p-6 rounded-xl border border-border hover-lift flex items-start gap-4 max-w-xs text-left">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Conceitos Interativos</h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda com exemplos práticos e demonstrações visuais
                </p>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border hover-lift flex items-start gap-4 max-w-xs text-left">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Tecnologia Atual</h3>
                <p className="text-sm text-muted-foreground">
                  Codecs modernos como H.264, H.265 e suas aplicações
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 text-sm text-muted-foreground"
          >
            Use o menu lateral para navegar entre as seções
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
