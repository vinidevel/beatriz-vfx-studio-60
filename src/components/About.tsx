import { Sparkles, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Produtora de VFX especializada em transformar visões criativas em realidade
            </p>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Como produtora de VFX, minha missão é orquestrar a sinergia perfeita entre criatividade e tecnologia. 
                Com anos de experiência na indústria, gerencio todo o fluxo de trabalho de efeitos visuais, desde a 
                concepção inicial até a entrega final.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Minha expertise inclui coordenação de equipes técnicas, gestão de pipelines de produção, controle de 
                orçamento e garantia de qualidade. Trabalho em estreita colaboração com diretores, supervisores de VFX 
                e artistas para assegurar que cada projeto seja concluído no prazo, dentro do orçamento e com a 
                excelência técnica e criativa esperada.
              </p>
            </div>

            {/* Skills/Expertise cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Produção Criativa</h3>
                <p className="text-muted-foreground">
                  Gestão completa de projetos de VFX com foco em qualidade e criatividade
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-secondary transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center shadow-glow-secondary">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Coordenação</h3>
                <p className="text-muted-foreground">
                  Liderança de equipes multidisciplinares e gestão de recursos
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-accent transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow-accent">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Pipeline Técnico</h3>
                <p className="text-muted-foreground">
                  Otimização de fluxos de trabalho e garantia de qualidade técnica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
