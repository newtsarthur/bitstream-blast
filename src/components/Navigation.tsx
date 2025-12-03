import { Home, BookOpen, ImageIcon, Trophy, Users, GraduationCap, Play } from "lucide-react";
import { NavLink } from "./NavLink";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/conteudo", label: "Aprender", icon: GraduationCap },
  { to: "/conceitos", label: "Conceitos Teóricos", icon: BookOpen },
  { to: "/galeria", label: "Galeria de Mídias", icon: ImageIcon },
  { to: "/tutorial", label: "Tutorial", icon: Play },
  { to: "/quiz", label: "Quiz Avaliativo", icon: Trophy },
  { to: "/equipe", label: "Sobre a Equipe", icon: Users },
];

export const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col p-6 z-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold neon-text mb-2">Vídeo Digital</h1>
        <p className="text-sm text-muted-foreground">& Compressão</p>
      </div>

      <ul className="space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-all duration-300"
                activeClassName="bg-secondary neon-border"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="text-xs text-muted-foreground text-center border-t border-border pt-4">
        Software Educacional Interativo
      </div>
    </nav>
  );
};
