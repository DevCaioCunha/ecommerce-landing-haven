import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Rocket, Star, Flame, Gift, Paintbrush, Lightbulb, ChevronRight, Instagram, TrendingUp, CheckCircle } from "lucide-react";

const Creators = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future API integration
    console.log("Creator application submitted:", email);
    setEmail("");
    // Here you would add toast notification for success
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F3] to-[#FFF1E6] overflow-hidden">
      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
              alt="Tedie" 
              className="h-10 md:h-12"
            />
          </Link>
          <Link to="/register">
            <Button className="bg-black hover:bg-gray-800 text-white">
              Cadastre-se
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-10 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 animate-fadeIn" style={{animationDelay: "0.2s"}}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Torne-se um <span className="text-[#F97316]">Creator</span> na Tedie e <span className="bg-gradient-to-r from-[#F97316] to-[#D946EF] text-transparent bg-clip-text">revolucione</span> o comércio!
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Use sua criatividade e influência para criar um e-commerce único, potencializado por IA, e ganhe comissões incríveis!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white text-lg py-6"
                  onClick={() => document.getElementById('apply-form')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Quero ser Creator
                  <ChevronRight className="ml-1" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#F97316] text-[#F97316] hover:bg-[#FFF1E6] hover:text-[#EA580C] py-6 text-lg"
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Ver benefícios
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fadeIn" style={{animationDelay: "0.4s"}}>
              <div className="relative">
                <div className="absolute -z-10 w-96 h-96 rounded-full bg-gradient-to-r from-[#D946EF] to-[#F97316] opacity-20 blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                  alt="Tedie Creator" 
                  className="rounded-2xl shadow-xl max-w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                  <div className="flex items-center gap-3">
                    <Star className="text-yellow-400 h-8 w-8" fill="#FBBF24" />
                    <div>
                      <p className="font-bold">+2000</p>
                      <p className="text-sm text-gray-500">Creators ativos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que se tornar um Creator Tedie?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Junte-se a nós e descubra um mundo de possibilidades para monetizar sua audiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((benefit, index) => (
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

      {/* Success Stories */}
      <section className="py-20 px-4 md:px-8 bg-[#FFF1E6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de sucesso</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja como outros Creators estão transformando sua influência em receita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
                name: "Ana Luiza",
                handle: "@analuinfluencer",
                sales: "R$ 45.000",
                followers: "120K"
              },
              {
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
                name: "Carlos Silva",
                handle: "@carlostech",
                sales: "R$ 78.200",
                followers: "85K"
              },
              {
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
                name: "Equipe FitLife",
                handle: "@fitlifebr",
                sales: "R$ 120.500",
                followers: "250K"
              }
            ].map((creator, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{creator.name}</h3>
                    <span className="text-sm text-gray-500">{creator.handle}</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Vendas mensais</p>
                      <p className="text-lg font-bold text-[#F97316]">{creator.sales}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Seguidores</p>
                      <p className="text-lg font-bold">{creator.followers}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Três passos simples para começar a vender e ganhar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((step, index) => (
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

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Creators ativos" },
              { number: "R$ 12M+", label: "Comissões pagas" },
              { number: "5000+", label: "Produtos disponíveis" },
              { number: "96%", label: "Taxa de satisfação" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#F97316] to-[#D946EF] text-transparent bg-clip-text">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
          </div>

          <div className="space-y-6">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#FFF1E6] to-[#FFF8F3]">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Torne-se um Creator</h2>
              <p className="text-gray-600">
                Preencha o formulário abaixo e entraremos em contato
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram (opcional)
                </label>
                <div className="flex">
                  <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0 border-input">
                    @
                  </div>
                  <Input 
                    id="instagram" 
                    type="text" 
                    className="rounded-l-none w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de seguidores
                </label>
                <select 
                  id="followers" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="1-5k">1.000 - 5.000</option>
                  <option value="5-10k">5.000 - 10.000</option>
                  <option value="10-50k">10.000 - 50.000</option>
                  <option value="50-100k">50.000 - 100.000</option>
                  <option value="100k+">Mais de 100.000</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Por que quer ser um Creator Tedie? (opcional)
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-6 text-lg"
              >
                Enviar inscrição
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Ao enviar, você concorda com nossos <Link to="/terms" className="underline">Termos de Serviço</Link> e <Link to="/privacy" className="underline">Política de Privacidade</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="bg-black text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua audiência em receita?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#F97316] hover:bg-[#EA580C] text-white text-lg py-6"
                onClick={() => document.getElementById('apply-form')?.scrollIntoView({behavior: 'smooth'})}
              >
                Tornar-se Creator
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 py-6 text-lg"
                >
                  Já sou Creator
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
            <div className="mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/ff6ebff7-df52-42cc-ab72-c86418ccb375.png" 
                alt="Tedie Icon" 
                className="h-8"
              />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                Termos
              </Link>
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link to="/login" className="text-white/70 hover:text-white transition-colors">
                Login
              </Link>
            </div>
            <div className="mt-4 md:mt-0 text-white/50 text-sm">
              © 2023 Tedie. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creators;
