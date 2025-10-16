import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código semântico, organizado e fácil de manter seguindo as melhores práticas"
    },
    {
      icon: Rocket,
      title: "Aprendizado Rápido",
      description: "Adapto-me rapidamente a novas tecnologias e frameworks, sempre buscando evoluir"
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Colaborativo, comunicativo e comprometido com os objetivos do time"
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">Sobre Mim</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor front-end em busca da primeira oportunidade para contribuir com projetos inovadores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 md:p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 pt-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e design, com foco em criar experiências web 
              excepcionais. Tenho experiência sólida em React, TypeScript, Tailwind CSS e outras tecnologias 
              modernas do ecossistema front-end.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Busco uma oportunidade para aplicar minhas habilidades, aprender com profissionais experientes 
              e contribuir para projetos que façam a diferença.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
