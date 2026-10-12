import { useState, useEffect } from 'react';
import combo1 from '../asserts/food/food-combo-1.png';
import combo2 from '../asserts/food/food-combo-2.png';
import combo3 from '../asserts/food/food-combo-3.png';
import combo4 from '../asserts/food/food-combo-4.png';

const allCombos = [combo1, combo2, combo3, combo4];
// combo2 and combo3 feature South Indian tiffins (dosa, idli, vada, sambar).
const nonSouthIndianCombos = [combo1, combo4];

// Cross-fading mixed-food spread (biryani, kebabs, appetizers, desserts, drinks).
const FoodCombo = ({ className = '', alt = 'A spread of biryani, kebabs, appetizers, desserts and drinks', excludeSouthIndian = false }) => {
  const combos = excludeSouthIndian ? nonSouthIndianCombos : allCombos;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % combos.length), 4000);
    return () => clearInterval(timer);
  }, [combos.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {combos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          aria-hidden={i === 0 ? undefined : true}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default FoodCombo;
