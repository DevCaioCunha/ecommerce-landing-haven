
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket } from "lucide-react";

const CreatorsApplicationForm = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future API integration
    console.log("Creator application submitted:", email);
    setEmail("");
    // Here you would add toast notification for success
  };

  return (
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
  );
};

export default CreatorsApplicationForm;
