import { motion } from "framer-motion";
import { Code2, Layers, TrendingDown, Zap } from "lucide-react";

const concepts = [
  {
    icon: Code2,
    title: "O que é um Codec?",
    content: "Um codec (codificador-decodificador) é um software ou hardware que comprime e descomprime dados de vídeo digital. Exemplos populares incluem H.264 (AVC), H.265 (HEVC) e VP9. Eles transformam vídeos brutos em formatos eficientes para armazenamento e transmissão."
  },
  {
    icon: Layers,
    title: "Tipos de Compressão",
    content: "Existem dois tipos principais: Lossless (sem perdas), que preserva todos os dados originais, e Lossy (com perdas), que descarta informações menos perceptíveis para reduzir drasticamente o tamanho do arquivo. A maioria dos vídeos na internet usa compressão Lossy."
  },
  {
    icon: TrendingDown,
    title: "Bitrate e Qualidade",
    content: "O bitrate representa a quantidade de dados processados por segundo (medido em Mbps). Um bitrate mais alto geralmente significa melhor qualidade, mas arquivos maiores. A compressão eficiente busca o equilíbrio ideal entre tamanho e qualidade visual."
  },
  {
    icon: Zap,
    title: "Redundância Temporal",
    content: "Codecs modernos exploram a redundância entre frames consecutivos. Em vez de armazenar cada quadro completamente, apenas as mudanças são registradas (P-frames e B-frames), economizando até 90% de espaço comparado aos quadros-chave (I-frames)."
  }
];

const Conceitos = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
          Conceitos Teóricos
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Fundamentos essenciais sobre vídeo digital e técnicas de compressão
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-border hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {concept.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {concept.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 card-gradient p-8 rounded-xl border border-border"
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Resolução e Framerate
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Resolução:</strong> Define a quantidade de pixels em cada quadro. 
              Full HD (1920×1080) possui aproximadamente 2 milhões de pixels, enquanto 4K (3840×2160) 
              tem cerca de 8 milhões - quatro vezes mais informação.
            </p>
            <p>
              <strong className="text-foreground">FPS (Frames Per Second):</strong> Determina quantos quadros são 
              exibidos por segundo. O cinema usa 24 FPS, TV e streaming geralmente 30 FPS, e conteúdo 
              de alta performance (jogos, esportes) pode atingir 60 FPS ou mais.
            </p>
            <p>
              <strong className="text-foreground">Containers:</strong> Formatos como .MP4, .MKV e .AVI são 
              "containers" que armazenam o vídeo codificado, áudio, legendas e metadados em um único arquivo.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Conceitos;
