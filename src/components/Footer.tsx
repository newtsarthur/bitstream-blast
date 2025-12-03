const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      {/* Banner Image */}
      <div className="w-full">
        <img
          src="/imagem/foto.png"
          alt="Banner do projeto"
          className="w-full h-auto object-cover max-h-48 md:max-h-64"
        />
      </div>

      {/* Footer Content */}
      <div className="px-6 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Software Educacional Interativo - Vídeo Digital e Compressão
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
