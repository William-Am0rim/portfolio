import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "seuemail@exemplo.com",
      href: "mailto:seuemail@exemplo.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/seu-perfil",
      href: "https://linkedin.com/in/seu-perfil",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/seu-usuario",
      href: "https://github.com/seu-usuario",
      color: "text-foreground"
    },
    {
      icon: FileText,
      label: "Currículo",
      value: "Download PDF",
      href: "#",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">Vamos Conversar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estou disponível para oportunidades de trabalho. Entre em contato e vamos criar algo incrível juntos!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in group border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4"
                  >
                    <div className={`${link.color} p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{link.label}</h3>
                      <p className="text-muted-foreground text-sm">{link.value}</p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-glow hover:shadow-soft transition-all"
              asChild
            >
              <a href="mailto:seuemail@exemplo.com">
                <Mail className="mr-2" size={20} />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
