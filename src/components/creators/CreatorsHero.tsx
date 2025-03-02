
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreatorsHero = () => {
  return (
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
  );
};

import { Star } from "lucide-react";

export default CreatorsHero;
