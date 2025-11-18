const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Beatriz Sant'Anna. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Desenvolvido por{" "}
              <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent">
                RV - Technologic
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
