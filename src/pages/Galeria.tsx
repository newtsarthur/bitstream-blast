import { motion } from "framer-motion";
import { Video, Image, Music, Film, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const mediaItems = [
  {
    type: "VIDEO",
    title: "Comparativo de Bitrate",
    description: "Vídeo demonstrando diferenças entre alta e baixa qualidade",
    icon: Video,
    color: "text-blue-400"
  },
  {
    type: "IMG",
    title: "Diagrama Vetorial de Codec",
    description: "Imagem vetorial (.SVG) ilustrando o processo de codificação",
    icon: Image,
    color: "text-green-400"
  },
  {
    type: "IMG",
    title: "Zoom em Artefatos de Compressão",
    description: "Imagem matricial mostrando efeitos da compressão Lossy",
    icon: Image,
    color: "text-yellow-400"
  },
  {
    type: "AUDIO",
    title: "Narração Explicativa",
    description: "Áudio com explicação dos conceitos principais",
    icon: Volume2,
    color: "text-purple-400"
  },
  {
    type: "ANIMATION",
    title: "Demonstração de Framerate",
    description: "Animação comparando diferentes taxas de FPS",
    icon: Film,
    color: "text-red-400"
  },
  {
    type: "AUDIO-BG",
    title: "Música MIDI de Fundo",
    description: "Trilha sonora em formato MIDI",
    icon: Music,
    color: "text-cyan-400"
  }
];

const Galeria = () => {
  const { toast } = useToast();
  const [playingAudio, setPlayingAudio] = useState(false);

  const handlePlayAudio = () => {
    setPlayingAudio(!playingAudio);
    toast({
      title: playingAudio ? "Áudio pausado" : "Áudio reproduzindo",
      description: "Esta é uma demonstração de funcionalidade",
    });
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
          Galeria de Mídias
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Exemplos práticos e demonstrações visuais dos conceitos apresentados
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            const isAudioBg = item.type === "AUDIO-BG";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="card-gradient p-6 rounded-xl border-2 border-dashed border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-secondary rounded-lg ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-muted rounded">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {item.description}
                  </p>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                      <span>Aguardando arquivo</span>
                    </div>
                    {isAudioBg && (
                      <Button
                        onClick={handlePlayAudio}
                        size="sm"
                        variant="outline"
                        className="mt-3 w-full"
                      >
                        {playingAudio ? "Pausar" : "Reproduzir"} Música
                      </Button>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 card-gradient p-6 rounded-xl border border-border"
        >
          <h3 className="text-lg font-semibold mb-3 text-foreground">
            📌 Instruções para a Equipe
          </h3>
          <p className="text-muted-foreground">
            Os placeholders acima representam os arquivos que devem ser inseridos pela equipe.
            Cada card está preparado para receber o tipo de mídia correspondente, mantendo a
            organização e apresentação visual do projeto.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Galeria;
