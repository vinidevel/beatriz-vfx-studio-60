import { Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Vamos criar algo extraordinário juntos
            </p>
          </div>

          {/* Contact content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - CTA */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Pronta para o seu próximo projeto
                </h3>
                <p className="text-lg text-muted-foreground">
                  Seja para cinema, publicidade, séries ou projetos especiais, estou disponível 
                  para discutir como posso ajudar a dar vida às suas ideias através de efeitos 
                  visuais de alta qualidade.
                </p>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Conecte-se
                </h4>
                <div className="flex gap-4">
                  <a
                    href="mailto:beatriz@example.com"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-glow-primary hover:scale-105 transition-transform duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
