import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const projects = [
  {
    id: 1,
    title: "Efeitos Cinemáticos Épicos",
    description: "Criação de explosões e efeitos de partículas para cena de ação em longa-metragem. Integração perfeita de CGI com filmagem real.",
    image: project1,
    category: "Cinema",
  },
  {
    id: 2,
    title: "Animação de Personagem 3D",
    description: "Desenvolvimento completo de personagem 3D com animações fluidas e expressões faciais realistas para série animada.",
    image: project2,
    category: "Animação",
  },
  {
    id: 3,
    title: "Visualização de Produto",
    description: "Renderização de alta qualidade para campanha publicitária, com efeitos holográficos e iluminação cinematográfica.",
    image: project3,
    category: "Publicidade",
  },
  {
    id: 4,
    title: "Arquitetura Virtual",
    description: "Visualização arquitetônica fotorealista com iluminação dramática e composição cinematográfica para projeto imobiliário.",
    image: project4,
    category: "Arquitetura",
  },
  {
    id: 5,
    title: "Motion Graphics",
    description: "Design de motion graphics com formas abstratas e partículas dinâmicas para abertura de programa televisivo.",
    image: project5,
    category: "Motion Design",
  },
  {
    id: 6,
    title: "Criatura Fantástica",
    description: "Desenvolvimento de criatura digital com texturas detalhadas e integração de efeitos mágicos para filme de fantasia.",
    image: project6,
    category: "Criaturas",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos trabalhos mais recentes em efeitos visuais e produção criativa
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
