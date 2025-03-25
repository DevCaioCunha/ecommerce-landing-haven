
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Save } from "lucide-react";

const UserProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Mock user data - in a real app this would come from a context or API
  const [userData, setUserData] = useState({
    name: "Ana Silva",
    email: "ana.silva@gmail.com",
    phone: "(11) 98765-4321",
    gender: "feminino",
    birthdate: "1995-04-12",
    cpf: "123.456.789-00",
    password: "••••••••"
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // In a real app, you would save the data to an API here
    setIsEditing(false);
    // Show success message
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Informações Pessoais</h2>
        {!isEditing ? (
          <Button 
            onClick={handleEdit}
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Editar
          </Button>
        ) : (
          <Button 
            onClick={handleSave}
            className="bg-yellow-400 hover:bg-yellow-500 text-black flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="name">Nome completo</Label>
          <Input 
            id="name"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            className="bg-white"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="email">E-mail</Label>
          <Input 
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            className="bg-white"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone">Telefone</Label>
          <Input 
            id="phone"
            value={userData.phone}
            onChange={(e) => setUserData({...userData, phone: e.target.value})}
            className="bg-white"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="cpf">CPF</Label>
          <Input 
            id="cpf"
            value={userData.cpf}
            onChange={(e) => setUserData({...userData, cpf: e.target.value})}
            className="bg-white"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="birthdate">Data de nascimento</Label>
          <Input 
            id="birthdate"
            type="date"
            value={userData.birthdate}
            onChange={(e) => setUserData({...userData, birthdate: e.target.value})}
            className="bg-white"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-3">
          <Label>Gênero</Label>
          <RadioGroup 
            value={userData.gender} 
            onValueChange={(value) => setUserData({...userData, gender: value})}
            className="flex space-x-4"
            disabled={!isEditing}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="masculino" id="masculino" />
              <Label htmlFor="masculino">Masculino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="feminino" id="feminino" />
              <Label htmlFor="feminino">Feminino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outro" id="outro" />
              <Label htmlFor="outro">Outro</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {isEditing && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Alterar senha</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="currentPassword">Senha atual</Label>
              <div className="relative">
                <Input 
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  value={userData.password}
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                  className="bg-white pr-10"
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

            <div className="space-y-3">
              <Label htmlFor="newPassword">Nova senha</Label>
              <div className="relative">
                <Input 
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nova senha"
                  className="bg-white pr-10"
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
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Endereços</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-sm text-gray-500">Principal</span>
                  <h4 className="font-medium">Casa</h4>
                </div>
                {isEditing && (
                  <Button variant="ghost" size="sm" className="text-red-500 h-8">
                    Editar
                  </Button>
                )}
              </div>
              <p className="text-sm text-gray-600">
                Av. Paulista, 1234, Apto 56<br />
                Bela Vista, São Paulo - SP<br />
                CEP: 01310-100
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium">Trabalho</h4>
                </div>
                {isEditing && (
                  <Button variant="ghost" size="sm" className="text-red-500 h-8">
                    Editar
                  </Button>
                )}
              </div>
              <p className="text-sm text-gray-600">
                Rua Augusta, 567, Sala 890<br />
                Consolação, São Paulo - SP<br />
                CEP: 01305-000
              </p>
            </CardContent>
          </Card>

          {isEditing && (
            <Card className="bg-white border-dashed border-2 border-gray-300 flex items-center justify-center h-40">
              <Button variant="ghost" className="text-gray-500">
                + Adicionar novo endereço
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
