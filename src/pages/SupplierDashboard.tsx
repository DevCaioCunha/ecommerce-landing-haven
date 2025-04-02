
import { useState } from "react";
import { Link } from "react-router-dom";
import { SupplierHeader } from "@/components/supplier/SupplierHeader";
import { SupplierOrdersTable } from "@/components/supplier/SupplierOrdersTable";
import { SupplierOrderStats } from "@/components/supplier/SupplierOrderStats";
import { SupplierSidebar } from "@/components/supplier/SupplierSidebar";

const SupplierDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <SupplierHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex">
        <SupplierSidebar open={sidebarOpen} />
        
        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard de Fornecedor</h1>
            <p className="text-gray-600 mt-1">Visualize e gerencie os pedidos dos seus produtos</p>
          </div>
          
          <SupplierOrderStats />
          
          <div className="mt-8">
            <SupplierOrdersTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupplierDashboard;
