import { Food } from 'src/app/shared/models/Food';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 10.99,
    tags: ['Italian', 'Fast Food'],
    favorite: true,
    stars: 4,
    imageUrl:
      'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/06/1200/675/iStock-1222455274.jpg?ve=1&tl=1',
    origins: ['Italy'],
    cookTime: '30 minutes',
  },
  {
    id: '2',
    name: 'Burger',
    price: 8.99,
    tags: ['American', 'Fast Food'],
    favorite: false,
    stars: 3.5,
    imageUrl:
      'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg',
    origins: ['United States'],
    cookTime: '15 minutes',
  },
  {
    id: '3',
    name: 'Sushi',
    price: 15.99,
    tags: ['Japanese', 'Seafood'],
    favorite: true,
    stars: 4.5,
    imageUrl:
      'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg',
    origins: ['Japan'],
    cookTime: '45 minutes',
  },
  {
    id: '4',
    name: 'Tacos',
    price: 7.99,
    tags: ['Mexican', 'Street Food'],
    favorite: false,
    stars: 4,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
    origins: ['Mexico'],
    cookTime: '20 minutes',
  },
  {
    id: '5',
    name: 'Pasta',
    price: 12.99,
    tags: ['Italian', 'Pasta'],
    favorite: true,
    stars: 4.5,
    imageUrl:
      'https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg',
    origins: ['Italy'],
    cookTime: '25 minutes',
  },
  {
    id: '7',
    name: 'Steak',
    price: 20.99,
    tags: ['American', 'Steak'],
    favorite: false,
    stars: 4,
    imageUrl:
      'https://guardian.ng/wp-content/uploads/2019/08/https___storage.googleapis.com_gen-atmedia_3_2018_07_e3ce4eb1741bd76cc083424453c0e3f39d147f9b.jpeg',
    origins: ['United States'],
    cookTime: '30 minutes',
  },
  {
    id: '9',
    name: 'Salad',
    price: 6.99,
    tags: ['Healthy', 'Vegetarian'],
    favorite: false,
    stars: 3,
    imageUrl:
      'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
    origins: ['Various'],
    cookTime: '10 minutes',
  },
];
