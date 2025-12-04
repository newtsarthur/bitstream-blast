import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";
import Conteudo from "./pages/Conteudo";
import Tutorial from "./pages/Tutorial";
import Conceitos from "./pages/Conceitos";
import Galeria from "./pages/Galeria";
import Quiz from "./pages/Quiz";
import Equipe from "./pages/Equipe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen w-full">
          <Navigation />
          <main className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conteudo" element={<Conteudo />} />
              <Route path="/conceitos" element={<Conceitos />} />
              
              {/* <Route path="/galeria" element={<Galeria />} /> */}

              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
