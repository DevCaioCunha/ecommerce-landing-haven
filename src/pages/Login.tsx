
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
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
            <p className="text-sm text-gray-600">👋 Olá novamente</p>
          </div>

          <div className="bg-[#FFF1E6] rounded-2xl p-6 md:p-8">
            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="w-full grid grid-cols-2 gap-4 bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="login"
                  className="data-[state=active]:text-red-500 data-[state=active]:border-b-2 data-[state=active]:border-red-500 pb-2 text-gray-400"
                >
                  LOG IN
                </TabsTrigger>
                <TabsTrigger 
                  value="register"
                  className="data-[state=active]:text-red-500 data-[state=active]:border-b-2 data-[state=active]:border-red-500 pb-2 text-gray-400"
                >
                  CADASTRO
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <div className="space-y-4">
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
                </div>

                <div className="text-right">
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-gray-500 hover:text-yellow-500 transition-colors"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                  ENTRAR
                </Button>

                <div className="text-center">
                  <Link 
                    to="/register" 
                    className="text-sm text-gray-500 hover:text-yellow-500 transition-colors"
                  >
                    Não possuo cadastro
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4 mt-6">
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
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                  CADASTRAR
                </Button>
              </TabsContent>
            </Tabs>
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

export default Login;
