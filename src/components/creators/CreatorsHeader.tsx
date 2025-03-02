
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CreatorsHeader = () => {
  return (
    <header className="py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
            alt="Tedie" 
            className="h-10 md:h-12"
          />
        </Link>
        <Link to="/register">
          <Button className="bg-black hover:bg-gray-800 text-white">
            Cadastre-se
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default CreatorsHeader;
