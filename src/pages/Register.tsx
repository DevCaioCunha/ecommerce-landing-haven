
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F3] flex flex-col">
      {/* Logo */}
      <div className="p-8">
        <Link to="/">
          <img 
            src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
            alt="Tedie" 
            className="h-12 md:h-16"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-medium mb-2">MINHA CONTA</h1>
            <p className="text-sm text-gray-600">👋 Olá! Crie sua conta</p>
          </div>

          <div className="bg-[#FFF1E6] rounded-2xl p-6 md:p-8">
            <div className="flex justify-between mb-8">
              <Link 
                to="/login"
                className="pb-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                LOG IN
              </Link>
              <Link 
                to="/register"
                className="pb-2 text-red-500 border-b-2 border-red-500"
              >
                CADASTRO
              </Link>
            </div>

            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Nome completo"
                className="bg-white border-0"
              />
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-white border-0"
              />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="bg-white border-0 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>

              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                CADASTRAR
              </Button>
            </div>
          </div>

          {/* Small Logo */}
          <div className="mt-8 flex justify-center">
            <img 
              src="/lovable-uploads/ff6ebff7-df52-42cc-ab72-c86418ccb375.png" 
              alt="Tedie Icon" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
