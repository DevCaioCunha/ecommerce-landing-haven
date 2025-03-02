
const successStories = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    name: "Ana Luiza",
    handle: "@analuinfluencer",
    sales: "R$ 45.000",
    followers: "120K"
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    name: "Carlos Silva",
    handle: "@carlostech",
    sales: "R$ 78.200",
    followers: "85K"
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
    name: "Equipe FitLife",
    handle: "@fitlifebr",
    sales: "R$ 120.500",
    followers: "250K"
  }
];

const CreatorsSuccessStories = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#FFF1E6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de sucesso</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como outros Creators estão transformando sua influência em receita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((creator, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md">
              <img 
                src={creator.image} 
                alt={creator.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{creator.name}</h3>
                  <span className="text-sm text-gray-500">{creator.handle}</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Vendas mensais</p>
                    <p className="text-lg font-bold text-[#F97316]">{creator.sales}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Seguidores</p>
                    <p className="text-lg font-bold">{creator.followers}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsSuccessStories;
