import heroImage from "@/assets/hero-3d.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                VFX Producer & Artist
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Beatriz
              </span>
              <br />
              <span className="text-foreground">Sant'Anna</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Transformando ideias em experiências visuais extraordinárias através de efeitos visuais de última geração e produção criativa.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-glow-primary hover:scale-105 transition-transform duration-300"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contato
              </a>
            </div>
          </div>

          {/* 3D Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="3D Abstract Art"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-glow-primary animate-float"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
