
import { useState } from "react";
import { SupplierHeader } from "@/components/supplier/SupplierHeader";
import { SupplierSidebar } from "@/components/supplier/SupplierSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Mock data para eventos do calendário
const events = [
  {
    id: 1,
    title: "Entrega - Pedido #9876",
    date: new Date(2023, 5, 22), // 22 de junho de 2023
    type: "delivery"
  },
  {
    id: 2,
    title: "Reunião com fornecedor",
    date: new Date(2023, 5, 23), // 23 de junho de 2023
    type: "meeting"
  },
  {
    id: 3,
    title: "Lançamento de produtos",
    date: new Date(2023, 5, 25), // 25 de junho de 2023
    type: "product"
  },
  {
    id: 4,
    title: "Inventário mensal",
    date: new Date(2023, 5, 30), // 30 de junho de 2023
    type: "inventory"
  }
];

// Cores para os tipos de eventos
const eventColors = {
  delivery: "bg-blue-100 text-blue-800",
  meeting: "bg-purple-100 text-purple-800",
  product: "bg-green-100 text-green-800",
  inventory: "bg-yellow-100 text-yellow-800"
};

const SupplierCalendar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Filtrar eventos para o dia selecionado
  const selectedDateEvents = events.filter(
    event => date && event.date.toDateString() === date.toDateString()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SupplierHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex">
        <SupplierSidebar open={sidebarOpen} />
        
        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Calendário</h1>
              <p className="text-gray-600 mt-1">Gerencie seus eventos e entregas</p>
            </div>
            <Button className="mt-4 md:mt-0">
              <Plus className="mr-2 h-4 w-4" />
              Novo Evento
            </Button>
          </div>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">
                      {date?.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                    </h2>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => setDate(new Date())}>
                        Hoje
                      </Button>
                      <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4">
                    Eventos para {date?.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
                  </h2>
                  
                  {selectedDateEvents.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateEvents.map(event => (
                        <div key={event.id} className="bg-white border rounded-md p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{event.title}</h3>
                              <p className="text-sm text-gray-500">
                                {event.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                            <Badge className={eventColors[event.type as keyof typeof eventColors]}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      Sem eventos para este dia
                    </div>
                  )}
                  
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Evento
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4">Próximos Eventos</h2>
                  
                  <div className="space-y-3">
                    {events
                      .filter(event => event.date >= new Date())
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .slice(0, 3)
                      .map(event => (
                        <div key={event.id} className="flex items-center gap-3">
                          <div className="w-10 text-center">
                            <div className="text-sm font-bold">{event.date.getDate()}</div>
                            <div className="text-xs text-gray-500">
                              {event.date.toLocaleDateString('pt-BR', { month: 'short' })}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{event.title}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupplierCalendar;
