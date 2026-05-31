import { useState } from "react";
import { GlassWater, Beer, Users, Sparkles, Check } from "lucide-react";

interface DrinkStyleConfig {
  name: string;
  liquor: string;
  liquorPerDrinkMl: number;
  garnishes: string;
  garnishAmountPerGuest: number;
  iceKgPerGuest: number;
  otherIngredients: string[];
}

const configs: Record<string, DrinkStyleConfig> = {
  gin: {
    name: "Gin & Tônica ou Collins",
    liquor: "Gin (750ml)",
    liquorPerDrinkMl: 50,
    garnishes: "Limões Sicilianos ou Especiarias",
    garnishAmountPerGuest: 0.5, // 0.5 lemon per guest
    iceKgPerGuest: 0.6, // kg of ice per guest
    otherIngredients: ["Água Tônica (200ml) - 3 garrafas por convidado", "Zimbro/Especiarias para infusão rápida"],
  },
  whiskey: {
    name: "Old Fashioned / Manhattan",
    liquor: "Bourbon ou Rye Whiskey (750ml)",
    liquorPerDrinkMl: 60,
    garnishes: "Laranjas Bahia frescas",
    garnishAmountPerGuest: 0.4,
    iceKgPerGuest: 0.8, // blocks melt slower
    otherIngredients: ["Angostura Bitters - 1 frasco pequeno é suficiente", "Cerejas em calda amarena (opcional)"],
  },
  rum: {
    name: "Daiquiri ou Mojito",
    liquor: "Rum Branco / Carta Oro (750ml)",
    liquorPerDrinkMl: 60,
    garnishes: "Maços de Hortelã Fresca & Limão Taiti",
    garnishAmountPerGuest: 0.8,
    iceKgPerGuest: 0.5,
    otherIngredients: ["Suco de Limão Espremido fresco", "Xarope de Açúcar Claro feito em casa"],
  },
  cachaca: {
    name: "Caipirinhas de Assinatura",
    liquor: "Cachaça Branca / Envelhecida (750ml)",
    liquorPerDrinkMl: 60,
    garnishes: "Limões Taiti bem suculentos",
    garnishAmountPerGuest: 1.5, // 1.5 lemons per guest
    iceKgPerGuest: 0.7,
    otherIngredients: ["Açúcar Refinado ou Demerara", "Maceradores limpos de qualidade"],
  },
};

export default function HostCalculator() {
  const [guests, setGuests] = useState<number>(8);
  const [drinkStyle, setDrinkStyle] = useState<string>("gin");
  const [avgDrinks, setAvgDrinks] = useState<number>(3); // average drinks per guest

  const config = configs[drinkStyle];
  const totalDrinks = guests * avgDrinks;
  const totalLiquorMl = totalDrinks * config.liquorPerDrinkMl;
  const bottlesNeeded = Math.ceil(totalLiquorMl / 750);
  const iceNeededKg = Math.ceil(guests * avgDrinks * config.iceKgPerGuest * 0.4); // adjusted formula for party
  const garnishesNeeded = Math.ceil(guests * avgDrinks * config.garnishAmountPerGuest * 0.5);

  return (
    <div className="w-full max-w-4xl mx-auto py-4" id="host-calculator-section">
      <div className="bg-[#141414] border border-gold/25 p-6 md:p-8 rounded-lg relative overflow-hidden">
        {/* Absolute Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center md:text-left mb-8">
          <span className="text-[10px] font-sans-alt tracking-[0.35em] uppercase text-gold block mb-2 font-semibold">
            Técnica & Prática para o Anfitrião
          </span>
          <h3 className="text-3xl font-serif-display text-marfim-light">
            Calculadora do Anfitrião Elegante
          </h3>
          <p className="text-sm text-marfim/80 font-serif-body mt-2 max-w-2xl leading-relaxed">
            Planejando receber convidados em casa? Insira o número de pessoas e descubra as quantidades certas de insumos para que sua noite clássica não sofra de escassez alcoólica ou gelo diluído.
          </p>
        </div>

        {/* Form elements row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-gold/10">
          {/* Guest slider */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <label className="text-xs font-sans-alt text-gold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
              <Users className="w-3.5 h-3.5" />
              Número de Convidados: <span className="text-marfim font-mono text-sm ml-auto">{guests} pessoas</span>
            </label>
            <input
              type="range"
              min="2"
              max="50"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="accent-gold w-full cursor-pointer bg-white/10 h-1.5 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-marfim/40 font-mono mt-1.5">
              <span>2 convidados</span>
              <span>50 convidados</span>
            </div>
          </div>

          {/* Average drinks count */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <label className="text-xs font-sans-alt text-gold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
              <GlassWater className="w-3.5 h-3.5" />
              Média de Drinks/Pessoa: <span className="text-marfim font-mono text-sm ml-auto">{avgDrinks} doses</span>
            </label>
            <div className="flex gap-2 bg-black/60 p-1 border border-gold/15 rounded">
              {[2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setAvgDrinks(num)}
                  className={`flex-1 py-1.5 text-xs font-sans text-center rounded transition-all duration-300 ${
                    avgDrinks === num
                      ? "bg-gold text-black font-semibold"
                      : "text-marfim/60 hover:text-marfim hover:bg-white/[0.04]"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Cocktail Style selection */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <label className="text-xs font-sans-alt text-gold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Estilo Base de Bebidas
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(configs).map((key) => (
                <button
                  key={key}
                  onClick={() => setDrinkStyle(key)}
                  className={`py-2 px-3 text-left rounded text-xs border transition-all duration-300 ${
                    drinkStyle === key
                      ? "border-gold/80 bg-gold/10 text-gold-light"
                      : "border-gold/10 bg-black/40 text-marfim/60 hover:border-gold/30 hover:text-marfim"
                  }`}
                >
                  <span className="block font-medium truncate font-sans-alt">{configs[key].name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {/* Card 1: Bottles */}
          <div className="bg-black/60 border border-gold/10 rounded p-5 relative">
            <div className="text-[10px] uppercase font-sans-alt tracking-wider text-gold/60 mb-1">Garrafas Necessárias</div>
            <div className="text-3xl font-serif-display text-marfim font-semibold mb-2">{bottlesNeeded} {bottlesNeeded === 1 ? "unidade" : "unidades"}</div>
            <p className="text-xs text-marfim/60 font-serif-body">{config.liquor}</p>
            <div className="text-[10px] text-gold/40 mt-3 font-mono">Dose: {config.liquorPerDrinkMl}ml por drink</div>
          </div>

          {/* Card 2: Ice */}
          <div className="bg-black/60 border border-gold/10 rounded p-5 relative">
            <div className="text-[10px] uppercase font-sans-alt tracking-wider text-gold/60 mb-1">Gelo Transparente / Saco</div>
            <div className="text-3xl font-serif-display text-marfim font-semibold mb-2">~{iceNeededKg} kg</div>
            <p className="text-xs text-marfim/60 font-serif-body">Gelo em cubos para misturar e copos</p>
            <div className="text-[10px] text-gold/40 mt-3 font-mono">A chave do cocktail é a diluição</div>
          </div>

          {/* Card 3: Garnishes */}
          <div className="bg-black/60 border border-gold/10 rounded p-5 relative">
            <div className="text-[10px] uppercase font-sans-alt tracking-wider text-gold/60 mb-1">Guarnições Frescas</div>
            <div className="text-3xl font-serif-display text-marfim font-semibold mb-2">~{garnishesNeeded} {garnishesNeeded === 1 ? "fruta" : "frutas"}</div>
            <p className="text-xs text-marfim/60 font-serif-body">{config.garnishes}</p>
            <div className="text-[10px] text-gold/40 mt-3 font-mono">Perfume com óleos essenciais</div>
          </div>

          {/* Card 4: Other inputs */}
          <div className="bg-black/60 border border-gold/15 rounded p-5 relative">
            <div className="text-[10px] uppercase font-sans-alt tracking-wider text-gold/60 mb-2">Insumos Adicionais</div>
            <ul className="space-y-1.5">
              {config.otherIngredients.map((item, id) => (
                <li key={id} className="text-xs text-marfim/80 flex items-start gap-1 font-serif-body">
                  <span className="text-gold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tip strip */}
        <div className="mt-6 p-4 bg-vinho/20 border border-vinho/30 rounded flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-vinho/30 text-gold flex items-center justify-center text-xs shrink-0 font-semibold">
            🎓
          </div>
          <p className="text-xs text-marfim-light leading-relaxed font-serif-body">
            <strong>Mestre Augusto Valverde ensina:</strong> "Um bom anfitrião nunca esmaga demais a hortelã ou os limões e sempre serve em copos previamente gelados. A coquetelaria também é sobre os pequenos detalhes do ritual."
          </p>
        </div>
      </div>
    </div>
  );
}
