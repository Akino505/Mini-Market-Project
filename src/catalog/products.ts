import coffee from '../assets/coffee.jpg';
import iphone from '../assets/Iphone67.jpg';
import earphones from '../assets/earphones.jpg';
import kolonka from '../assets/Kolonka.jpg';
import magnesia from '../assets/magnesia.jpg';
import aerogrill from '../assets/aerogrill.jpg';
import nuggets from '../assets/Chicken_Nuggets.jpg';
import caesar_roll from '../assets/Caesar_Roll.jpg';
import chicken_burger from '../assets/Chicken_Burger.jpg';
import bench from '../assets/bench.jpg';
import bells from '../assets/bells.jpg';
import rockclimbers from '../assets/rockclimbers.jpg';
import cassetteplayer from '../assets/cassette_player.jpg';


export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: 'Еда' | 'Электроника' | 'Спорт';
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  { id: 1, title: 'Кофе в зёрнах', price: 890, image: coffee, category: 'Еда', isNew: true },
  { id: 2, title: 'Беспроводные наушники', price: 6700, image: earphones, category: 'Электроника', isNew: true },
  { id: 3, title: 'Колонка', price: 11400, image: kolonka, category: 'Электроника', isNew: true },
  { id: 4, title: 'Iphone 67 X Ultra', price: 67676767, image: iphone, category: 'Электроника', isNew: true },
  { id: 5, title: 'Магнезия', price: 240, image: magnesia, category: 'Спорт', isNew: false },
  { id: 6, title: 'Аэрогриль', price: 8890, image: aerogrill, category: 'Электроника', isNew: false },
  { id: 7, title: 'Скамья для жима', price: 4300, image: bench, category: 'Спорт', isNew: false },
  { id: 8, title: 'Гантели 5 кг', price: 1999, image: bells, category: 'Спорт', isNew: false },
  { id: 9, title: 'Скальные туфли', price: 12000, image: rockclimbers, category: 'Спорт', isNew: false },
  { id: 10, title: 'Кассетный проигрыватель', price: 15000, image: cassetteplayer, category: 'Электроника', isNew: false },
  { id: 11, title: 'Наггетсы 9 штук', price: 99, image: nuggets, category: 'Еда', isNew: false },
  { id: 12, title: 'Чикен бургер', price: 86, image: chicken_burger, category: 'Еда', isNew: false },
  { id: 13, title: 'Цезарь ролл', price: 179, image: caesar_roll, category: 'Еда', isNew: false },
];

export const formatPrice = (p: number) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(p);