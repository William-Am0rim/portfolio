import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code", "Vite", "npm", "Figma"]
    },
    {
      category: "Conceitos",
      skills: ["Responsive Design", "UI/UX", "Component-Based", "Clean Code", "Agile", "REST APIs"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">Habilidades Técnicas</h2>
            <p className="text-xl text-muted-foreground">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="space-y-4 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
