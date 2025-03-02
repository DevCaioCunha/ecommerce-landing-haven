
import { Rocket, Gift, Flame, Paintbrush, Instagram, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: <Rocket className="h-10 w-10 text-[#F97316]" />,
    title: "Lançamento rápido",
    description: "Configure sua loja em minutos com nossa tecnologia de IA. Sem conhecimento técnico necessário!"
  },
  {
    icon: <Gift className="h-10 w-10 text-[#D946EF]" />,
    title: "Comissões generosas",
    description: "Ganhe até 30% em cada venda realizada pela sua loja personalizada."
  },
  {
    icon: <Flame className="h-10 w-10 text-[#F97316]" />,
    title: "Produtos exclusivos",
    description: "Acesso a milhares de produtos exclusivos para oferecer ao seu público."
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-[#D946EF]" />,
    title: "Personalização total",
    description: "Crie uma loja com a sua identidade e estilo, atraindo mais o seu público."
  },
  {
    icon: <Instagram className="h-10 w-10 text-[#F97316]" />,
    title: "Integração com redes",
    description: "Conecte facilmente com Instagram, TikTok e outras plataformas para alavancar suas vendas."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-[#D946EF]" />,
    title: "IA para crescimento",
    description: "Nossa tecnologia ajuda a identificar tendências e oportunidades para sua audiência."
  }
];

const CreatorsBenefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que se tornar um Creator Tedie?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Junte-se a nós e descubra um mundo de possibilidades para monetizar sua audiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#FFF8F3] p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white inline-flex p-4 rounded-xl mb-4 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsBenefits;
