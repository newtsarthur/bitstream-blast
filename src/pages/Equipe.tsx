import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";

const teamMembers = [
  {
    name: "Arthur Belo da Silva",
    matricula: "01615335"
  },
  {
    name: "Bruno Lourenço Bezerra",
    matricula: "01606518"
  },
  {
    name: "Jean Ricardo França da Silva",
    matricula: "01583760"
  },
  {
    name: "Thiago Vinicius de Araújo",
    matricula: "01664566"
  }
];

const Equipe = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse-neon" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Sobre a Equipe
          </h1>
          <p className="text-muted-foreground text-lg">
            Conheça os desenvolvedores deste projeto educacional
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card-gradient rounded-xl border border-border overflow-hidden"
        >
          <div className="bg-primary/10 p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Integrantes do Projeto</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left p-4 font-semibold text-foreground">#</th>
                  <th className="text-left p-4 font-semibold text-foreground">Nome Completo</th>
                  <th className="text-left p-4 font-semibold text-foreground">Matrícula</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-b border-border hover:bg-secondary/30 transition-colors"
                  >
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                    </td>
                    <td className="p-4 text-foreground font-medium">{member.name}</td>
                    <td className="p-4">
                      <span className="font-mono text-muted-foreground bg-muted px-3 py-1 rounded">
                        {member.matricula}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="card-gradient p-6 rounded-xl border border-border inline-block">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Projeto:</strong> Software Educacional Interativo
            </p>
            <p className="text-muted-foreground mt-2">
              <strong className="text-foreground">Tema:</strong> Vídeo Digital e Técnicas de Compressão
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Equipe;
