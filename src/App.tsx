
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Brands from "./pages/Brands";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import OrderComplete from "./pages/OrderComplete";
import OrderTracking from "./pages/OrderTracking";
import ProductDetails from "./pages/ProductDetails";
import Creators from "./pages/Creators";
import UserProfile from "./pages/UserProfile";
import SupplierDashboard from "./pages/SupplierDashboard";
import SupplierProducts from "./pages/SupplierProducts";
import SupplierOrders from "./pages/SupplierOrders";
import SupplierDeliveries from "./pages/SupplierDeliveries";
import SupplierReports from "./pages/SupplierReports";
import SupplierCalendar from "./pages/SupplierCalendar";
import SupplierSettings from "./pages/SupplierSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
          <Route path="/supplier-products" element={<SupplierProducts />} />
          <Route path="/supplier-orders" element={<SupplierOrders />} />
          <Route path="/supplier-deliveries" element={<SupplierDeliveries />} />
          <Route path="/supplier-reports" element={<SupplierReports />} />
          <Route path="/supplier-calendar" element={<SupplierCalendar />} />
          <Route path="/supplier-settings" element={<SupplierSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
