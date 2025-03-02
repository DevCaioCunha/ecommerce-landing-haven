
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const CreatorsFooter = () => {
  return (
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
  );
};

export default CreatorsFooter;
