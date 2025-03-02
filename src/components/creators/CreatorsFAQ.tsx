
const faqs = [
  {
    question: "Quem pode se tornar um Creator Tedie?",
    answer: "Influenciadores, criadores de conteúdo e empreendedores digitais com uma audiência engajada. Avaliamos cada perfil individualmente."
  },
  {
    question: "Quanto posso ganhar como Creator?",
    answer: "Você recebe até 30% de comissão sobre cada venda realizada através da sua loja. Creators top performers chegam a faturar mais de R$50.000 por mês."
  },
  {
    question: "Preciso pagar algo para começar?",
    answer: "Não! O cadastro e a criação da loja são totalmente gratuitos. Você só ganha, não paga nada."
  },
  {
    question: "Como recebo minhas comissões?",
    answer: "As comissões são pagas mensalmente via PIX, transferência bancária ou até mesmo em cripto, se preferir."
  },
  {
    question: "A Tedie cuida da logística?",
    answer: "Sim! Cuidamos de todo o estoque, envio, entrega e atendimento ao cliente. Você só precisa divulgar."
  }
];

const CreatorsFAQ = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsFAQ;
