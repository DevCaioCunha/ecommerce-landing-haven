
import { ChevronRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Cadastre-se",
    description: "Preencha o formulário e seja aprovado como Creator Tedie."
  },
  {
    step: "02",
    title: "Personalize",
    description: "Configure sua loja com sua identidade e selecione produtos."
  },
  {
    step: "03",
    title: "Compartilhe",
    description: "Divulgue sua loja para seus seguidores e comece a ganhar."
  }
];

const CreatorsHowItWorks = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Três passos simples para começar a vender e ganhar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-9xl font-bold text-gray-100 absolute -top-10 -left-4 z-0">
                {step.step}
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                  <ChevronRight className="h-8 w-8 text-[#F97316]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsHowItWorks;
