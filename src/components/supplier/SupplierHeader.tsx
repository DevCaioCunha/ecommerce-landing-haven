
import { Menu, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SupplierHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const SupplierHeader = ({ sidebarOpen, setSidebarOpen }: SupplierHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>
          
          <div className="text-lg font-semibold text-yellow-400">SupaVendas</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="h-4 w-4 absolute top-2.5 left-2.5 text-gray-400" />
            <Input
              placeholder="Buscar pedidos..."
              className="pl-9 w-[200px] md:w-[300px] h-9 rounded-md"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">FS</span>
          </div>
        </div>
      </div>
    </header>
  );
};
