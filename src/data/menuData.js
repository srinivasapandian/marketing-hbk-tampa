import rasmalai from '../asserts/rasamalai.png';
import fishFinger from '../asserts/fish finger.jpg';
import chicken65 from '../asserts/chicken 65.png';
import onionPakoda from '../asserts/onion pakoda.jpg';
import chickenBiryani from '../asserts/Biryani 2.png';
import butterChicken from '../asserts/Butter Chicken 1.jpg';
import apricotDelight from '../asserts/Apricot Delight.png';
import paneerButterMasala from '../asserts/paneer butter masala.png';
import menu3 from '../asserts/menu3.jpg';

// Dummy menu data - replace with the real Malvern menu
export const menuCategories = [
  {
    name: 'Appetizers',
    items: [
      { id: 'a1', name: 'Fish Finger', price: '$15.99', image: fishFinger, description: 'Crispy fried fish strips served with a tangy dip.' },
      { id: 'a2', name: 'Chicken 65', price: '$12.99', image: chicken65, description: 'Spicy deep-fried chicken tossed with curry leaves and green chilies.' },
      { id: 'a3', name: 'Onion Pakoda', price: '$7.99', image: onionPakoda, description: 'Crispy onion fritters seasoned with chilies, herbs and Indian spices.' },
    ],
  },
  {
    name: 'Entrees',
    items: [
      { id: 'e1', name: 'Chicken Biryani', price: '$26.99', image: chickenBiryani, description: 'Aromatic basmati rice dum-cooked with tender chicken and traditional spices.' },
      { id: 'e2', name: 'Butter Chicken', price: '$19.99', image: butterChicken, description: 'Tandoori chicken simmered in a rich, creamy tomato-butter gravy.' },
      { id: 'e3', name: 'Paneer Butter Masala', price: '$17.99', image: paneerButterMasala, description: 'Soft paneer cubes cooked in a velvety tomato and cashew gravy.' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: 'd1', name: 'Gulab Jamun', price: '$7.49', image: menu3, description: 'Soft fried milk dumplings soaked in sweet cardamom syrup.' },
      { id: 'd2', name: 'Rasmalai', price: '$8.49', image: rasmalai, description: 'Spongy cottage cheese dumplings in chilled saffron milk.' },
      { id: 'd3', name: 'Apricot Delight', price: '$4.99', image: apricotDelight, description: 'A sweet layered dessert featuring apricots and cream.' },
    ],
  },
];
