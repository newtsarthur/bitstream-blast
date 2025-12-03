import { motion } from "framer-motion";
import { BookOpen, History, Film, Tv, Lightbulb, Rocket, GraduationCap } from "lucide-react";

const Conteudo = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse-neon" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Conteúdo Teórico
          </h1>
          <p className="text-muted-foreground text-lg">
            Aprenda sobre vídeo digital antes de fazer o Quiz
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introdução */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Film className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">O que é Vídeo? História, Evolução e Como Trabalhar com Ele</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              O vídeo é uma forma de comunicação visual que combina imagens em movimento e som para transmitir ideias, emoções, informações ou narrativas. Ele está presente no nosso dia a dia — em filmes, séries, redes sociais, publicidade, educação, jogos, transmissões ao vivo e em praticamente todo formato de mídia moderna. Sua força está na capacidade de unir movimento, linguagem visual, áudio e emoção em uma única experiência.
            </p>
          </section>

          {/* A Origem do Vídeo */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">A Origem do Vídeo: Como Tudo Começou</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A história do vídeo começou muito antes da tecnologia digital. O princípio dos "quadros em sequência" já aparecia no século XIX, quando cientistas e inventores tentavam capturar e reproduzir o movimento.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">● Pré-história do vídeo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em 1830, experiências com o fenaquitoscópio e o zoopraxiscópio mostraram que era possível criar a ilusão de movimento por meio de imagens repetidas rapidamente. No final do século XIX, os irmãos Lumière deram um salto histórico com a invenção do cinematógrafo, exibindo as primeiras gravações públicas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">● Século XX: a era do vídeo eletrônico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A invenção do tubo de raios catódicos permitiu a captura e exibição de imagens eletrônicas — o nascimento da televisão. Nas décadas de 1950 e 1960, surgiram as primeiras câmeras portáteis e fitas magnéticas (VHS, Betacam), democratizando a gravação.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">● A Revolução Digital</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A partir dos anos 1990 e 2000, o vídeo digital transformou completamente o mercado:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>câmeras digitais substituíram as analógicas;</li>
                  <li>computadores passaram a editar vídeos com facilidade;</li>
                  <li>a internet tornou-se a principal forma de distribuição;</li>
                  <li>sites como YouTube, Netflix e redes sociais impulsionaram o consumo global.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">● Vídeo na era atual</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Hoje, o vídeo está em todos os lugares:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>celulares filmam em 4K e 8K;</li>
                  <li>edições são feitas com softwares acessíveis;</li>
                  <li>inteligência artificial melhora, cria e automatiza processos;</li>
                  <li>plataformas sociais se tornaram vitrines de conteúdo audiovisual.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  O vídeo nunca foi tão presente ou tão fácil de produzir.
                </p>
              </div>
            </div>
          </section>

          {/* O que é um Vídeo, Tecnicamente? */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Tv className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">O que é um Vídeo, Tecnicamente?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Um vídeo nada mais é do que uma sequência de imagens (frames) exibidas rapidamente — geralmente entre 24 e 60 vezes por segundo — criando a ilusão de movimento. Além disso, ele é composto por:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><span className="text-foreground font-medium">Imagem</span> (visual)</li>
              <li><span className="text-foreground font-medium">Som</span> (áudio, música, voz)</li>
              <li><span className="text-foreground font-medium">Narrativa</span> (roteiro, linguagem, contexto)</li>
              <li><span className="text-foreground font-medium">Edição</span> (organização, cortes, ritmo)</li>
              <li><span className="text-foreground font-medium">Pós-produção</span> (cores, efeitos, trilha)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Quando combinados, esses elementos transformam informações em uma experiência completa.
            </p>
          </section>

          {/* Como se Trabalha com Vídeo Hoje? */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Como se Trabalha com Vídeo Hoje?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trabalhar com vídeo envolve várias etapas, cada uma essencial para um resultado profissional:
            </p>

            <div className="space-y-6">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">Pré-produção: o planejamento</h3>
                <p className="text-muted-foreground mb-2">É o momento de pensar antes de filmar:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>definição de objetivo (informar, vender, entreter, ensinar);</li>
                  <li>criação do roteiro;</li>
                  <li>escolha do público-alvo;</li>
                  <li>decisão sobre formato (curto, longo, vertical, horizontal);</li>
                  <li>organização de cenário, equipamentos e cronogramas.</li>
                </ul>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">Produção: a gravação</h3>
                <p className="text-muted-foreground mb-2">Aqui o vídeo realmente nasce. Inclui:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>filmagem;</li>
                  <li>iluminação;</li>
                  <li>captação de áudio;</li>
                  <li>direção de cena;</li>
                  <li>controle de ambiente.</li>
                </ul>
                <p className="text-muted-foreground mt-2">Hoje, até um smartphone pode oferecer qualidade excepcional.</p>
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">Pós-produção: onde o vídeo ganha vida</h3>
                <p className="text-muted-foreground mb-2">Inclui:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>edição;</li>
                  <li>cortes e montagem;</li>
                  <li>efeitos visuais (VFX);</li>
                  <li>colorização;</li>
                  <li>animação ou legendagem;</li>
                  <li>trilha sonora.</li>
                </ul>
                <p className="text-muted-foreground mt-2">É na edição que o vídeo realmente se transforma.</p>
              </div>
            </div>
          </section>

          {/* Principais Formatos de Vídeo */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Principais Formatos de Vídeo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dependendo do objetivo, existem estilos e categorias diferentes:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Vídeo educativo",
                "Vídeo institucional",
                "Documentário",
                "Vlogs",
                "Curtas e longas-metragens",
                "Reels/Shorts/TikTok",
                "Vídeos publicitários",
                "Animações 2D e 3D"
              ].map((format, index) => (
                <div
                  key={index}
                  className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-center text-sm text-foreground"
                >
                  {format}
                </div>
              ))}
            </div>
          </section>

          {/* O Papel do Vídeo na Educação */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">O Papel do Vídeo na Educação</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No contexto educacional, o vídeo é uma ferramenta poderosa porque:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>facilita a compreensão através de demonstrações visuais;</li>
              <li>aumenta o engajamento;</li>
              <li>permite acessar conteúdos a qualquer momento;</li>
              <li>apoia diferentes estilos de aprendizagem;</li>
              <li>combina recursos visuais, auditivos e narrativos.</li>
            </ul>
          </section>

          {/* O Futuro do Vídeo */}
          <section className="card-gradient p-8 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">O Futuro do Vídeo</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O vídeo continua evoluindo em ritmo acelerado. Entre as principais tendências estão:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>vídeos gerados e aprimorados por IA;</li>
              <li>realidade aumentada e realidade virtual;</li>
              <li>transmissões ao vivo interativas;</li>
              <li>maior personalização para cada usuário;</li>
              <li>vídeos cada vez mais curtos e dinâmicos.</li>
            </ul>
          </section>

          {/* Resumo Final */}
          <section className="card-gradient p-8 rounded-xl border border-primary/50 bg-primary/5">
            <h2 className="text-2xl font-bold text-primary mb-4">Resumo Final</h2>
            <p className="text-foreground leading-relaxed text-lg">
              O vídeo é a união de imagem e som em movimento, capaz de transmitir ideias com impacto e emoção. Desde as primeiras experiências com imagens sequenciais até a era digital e da inteligência artificial, sua evolução transformou a forma como consumimos e produzimos conteúdo.
            </p>
          </section>
        </motion.article>
      </div>
    </div>
  );
};

export default Conteudo;
