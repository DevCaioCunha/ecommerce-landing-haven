
const stats = [
  { number: "2000+", label: "Creators ativos" },
  { number: "R$ 12M+", label: "Comissões pagas" },
  { number: "5000+", label: "Produtos disponíveis" },
  { number: "96%", label: "Taxa de satisfação" }
];

const CreatorsStats = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#F97316] to-[#D946EF] text-transparent bg-clip-text">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsStats;
