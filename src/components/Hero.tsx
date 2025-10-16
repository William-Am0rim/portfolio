import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">
              Desenvolvedor Front-End
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Transformando ideias em
              <span className="bg-gradient-primary bg-clip-text text-transparent"> experiências digitais</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar interfaces modernas, intuitivas e de alto desempenho
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-glow hover:shadow-soft transition-all"
              onClick={scrollToContact}
            >
              Entre em Contato
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={scrollToProjects}
            >
              Ver Projetos
            </Button>
          </div>

          <div className="pt-12 animate-float">
            <ArrowDown className="mx-auto text-muted-foreground" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
