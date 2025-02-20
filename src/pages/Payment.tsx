
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("debit");

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
              alt="Tedie" 
              className="h-8"
            />
          </Link>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm text-black">1</div>
              <span className="text-xs mt-2">LOGIN</span>
            </div>
            <div className="flex-1 h-[2px] bg-yellow-400 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm text-black">2</div>
              <span className="text-xs mt-2">ENTREGA</span>
            </div>
            <div className="flex-1 h-[2px] bg-yellow-400 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm text-black">3</div>
              <span className="text-xs mt-2">PAGAMENTO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#FFF1E6] rounded-2xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium text-yellow-400">MÉTODO DE PAGAMENTO</h2>
            <button className="text-gray-500">CANCELAR</button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Payment Methods - Left Side */}
            <div className="lg:w-1/3">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div className={`bg-white rounded-lg p-6 cursor-pointer ${paymentMethod === "debit" ? "ring-2 ring-yellow-400" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Cartões de Débito</Label>
                  </div>
                </div>

                <div className={`bg-white rounded-lg p-6 cursor-pointer ${paymentMethod === "credit" ? "ring-2 ring-yellow-400" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Cartões de Crédito</Label>
                  </div>
                </div>

                <div className={`bg-white rounded-lg p-6 cursor-pointer ${paymentMethod === "pix" ? "ring-2 ring-yellow-400" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix">PIX</Label>
                  </div>
                </div>

                <div className={`bg-white rounded-lg p-6 cursor-pointer ${paymentMethod === "boleto" ? "ring-2 ring-yellow-400" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label htmlFor="boleto">Boleto</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Details - Right Side */}
            <div className="lg:w-2/3 space-y-6">
              {/* Credit/Debit Card Form */}
              {(paymentMethod === "credit" || paymentMethod === "debit") && (
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div>
                    <label className="block text-sm text-yellow-400 mb-1">NÚMERO DO CARTÃO</label>
                    <Input type="text" className="bg-white border-0" />
                  </div>
                  <div>
                    <label className="block text-sm text-yellow-400 mb-1">NOME DO TITULAR</label>
                    <Input type="text" className="bg-white border-0" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-yellow-400 mb-1">VALIDADE</label>
                      <Input type="text" placeholder="MM/AA" className="bg-white border-0" />
                    </div>
                    <div>
                      <label className="block text-sm text-yellow-400 mb-1">CVV</label>
                      <Input type="text" maxLength={3} className="bg-white border-0" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox id="save-card" />
                    <label htmlFor="save-card" className="text-sm">
                      GUARDAR INFORMAÇÕES PARA COMPRAS FUTURAS
                    </label>
                  </div>
                </div>
              )}

              {/* PIX Information */}
              {paymentMethod === "pix" && (
                <div className="bg-white rounded-lg p-6">
                  <p className="text-sm text-gray-600">
                    Após finalizar a compra, você receberá um QR Code para realizar o pagamento via PIX.
                  </p>
                </div>
              )}

              {/* Boleto Information */}
              {paymentMethod === "boleto" && (
                <div className="bg-white rounded-lg p-6">
                  <p className="text-sm text-gray-600">
                    O boleto será gerado após a finalização da compra e poderá ser pago em qualquer banco ou casa lotérica.
                  </p>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://source.unsplash.com/random/80x80?cookies" 
                    alt="Biscoito"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">Biscoito Marilan Teens Snack Bouny 80g</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-red-500">R$ 4.25</span>
                      <span className="text-sm">x 1</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img 
                    src="https://source.unsplash.com/random/80x80?chocolate,drink" 
                    alt="Toddynho"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">Toddynho Achocolatado - sabor chocolate 200ml</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-red-500">R$ 1.99</span>
                      <span className="text-sm">x 2</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-medium">TOTAL:</span>
                  <span className="text-red-500 font-medium text-xl">R$ 8.23</span>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-medium">
                FINALIZAR PAGAMENTO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
