// Everything on the site comes from here. See PLACEHOLDERS.md for what is verified and what is assumed.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;

export const site = {
  name: "Tacos Wuey",
  tz: "America/Detroit",
  rating: 4.8,
  reviewCount: 276,
  street: "3970 Vernor Hwy",
  city: "Detroit, MI",
  zip: "48216",
  phone: "(313) 406-4767",
  tel: "+13134064767",
  email: "Tacoswueydetroit@gmail.com",
  instagram: "https://www.instagram.com/tacoswueydetroit/",
  lat: 42.3219701,
  lng: -83.0918473,
  chef: "Eddie Vargas",
};

const q = encodeURIComponent(`${site.street}, ${site.city} ${site.zip}`);
export const links = {
  tel: `tel:${site.tel}`,
  mail: `mailto:${site.email}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  embed: `https://www.google.com/maps?q=${q}&output=embed`,
  place: "https://www.google.com/maps/place/Tacos+Wuey+Detroit/@42.3219701,-83.0918473,17z",
};

// 24h decimal hours. Sunday index 0.
export const byDay = [
  { open: 11, close: 21 },
  { open: 16, close: 22 },
  { open: 16, close: 22 },
  { open: 16, close: 22 },
  { open: 16, close: 22 },
  { open: 11, close: 23 },
  { open: 11, close: 23 },
];
export const hours = [
  { days: "Monday – Thursday", time: "4 – 10 PM" },
  { days: "Friday & Saturday", time: "11 AM – 11 PM" },
  { days: "Sunday", time: "11 AM – 9 PM", note: "Brunch until 2:45 PM" },
];

export const press = {
  outlet: "The New York Times",
  line: "The Restaurant List 2026, “our 50 favorite places in America right now.”",
  url: "https://www.wxyz.com/news/detroits-taco-huey-roses-featured-in-new-york-times-50-favorite-restaurants-in-the-us-for-2026",
};

// ---------- menu, read off the printed menus in the Google gallery ----------
export type Item = { n: string; d?: string; p: string; tag?: string };
export type Group = { title?: string; note?: string; items: Item[] };
export type Tab = { id: string; label: string; blurb: string; photo: { src: string; alt: string }; groups: Group[] };

export const menu: Tab[] = [
  {
    id: "tacos",
    label: "Tacos & apps",
    blurb: "Tacos come two or three to an order. Everything on the small plates is built to share.",
    photo: { src: "/img/fish-tacos.webp", alt: "Three beer-battered Baja fish tacos with purple slaw" },
    groups: [
      {
        title: "Tacos Wuey",
        note: "2 or 3 pieces",
        items: [
          { n: "Birria tacos", d: "Vargas family birria recipe, braised guajillo beef, queso Chihuahua, onions, cilantro, consomé.", p: "11 / 15", tag: "House" },
          { n: "Baja CA fish", d: "Battered Atlantic cod, chipotle crema, jicama, red cabbage.", p: "12 / 17" },
          { n: "Gobernador", d: "Shrimp, onions, poblano, peppers, cream cheese, Chihuahua cheese, butter, chipotle.", p: "12 / 17" },
          { n: "Back yard asada", d: "Shaved sirloin, grilled onions, cactus, guac.", p: "12 / 17" },
          { n: "Taco-L-Gando", d: "Shaved sirloin, chorizo, melted cheese, onion, cilantro, avocado.", p: "12 / 17" },
          { n: "Milanesa", d: "Breaded chicken breast, queso Chihuahua, arugula, Mexican crema.", p: "12 / 17" },
          { n: "El Valde shrimp", d: "Fried tortilla filled with shrimp, zucchini, onions, cilantro, cheese, topped with cabbage-jicama slaw and chipotle crema.", p: "12 / 17" },
          { n: "No mms Wuey!!", d: "Fried chicken skins, guac, onion, cilantro.", p: "10 / 14" },
          { n: "Ay papá!", d: "Crispy corn tortilla filled with potatoes, poblano, arugula, queso fresco, Mexican crema.", p: "9 / 13" },
          { n: "El verdulero", d: "Huitlacoche, onions, peppers, cactus.", p: "11 / 15", tag: "Vegan" },
          { n: "Otro nivel", d: "Shaved sirloin, huitlacoche (corn truffle), shrimp, zip sauce, cilantro. One or two.", p: "9 / 18" },
          { n: "Quesabirria", d: "Birria and cheese, one to an order.", p: "16" },
        ],
      },
      {
        title: "Apps Wuey",
        items: [
          { n: "Guacamole", d: "Avocados from Mexico, red onion, tomato, red cabbage, corn, matcha oil. Add pork belly chicharrón $12, chicken skin chicharrón $9, or chapulines (roasted grasshoppers) $8.", p: "12" },
          { n: "Birria egg rolls", d: "Braised birria, queso Chihuahua, onion, cilantro, macha, consomé broth. Three.", p: "16", tag: "Signature" },
          { n: "Ceviche de camarón", d: "Cooked shrimp, cucumber, red onion, tomato, cilantro, chile de árbol citrus, avocado.", p: "23" },
          { n: "Macha wings", d: "Baked then fried, chile oil sauce, cotija, arugula.", p: "16" },
          { n: "Queso fundido", d: "Pork chorizo, melted cheese, cream, house totopos.", p: "14" },
          { n: "Izquitl elote", d: "Roasted corn off the cob, ancho mayo, roasted poblano, red onion, cotija, chile martajado.", p: "11" },
          { n: "Guasanas", d: "Green garbanzo beans in the shell, lime, salt, chile martajado.", p: "10" },
        ],
      },
      {
        title: "Little Wuey",
        items: [
          { n: "Kids milanesa", d: "Breaded chicken breast, fries.", p: "10" },
          { n: "Kids quesadilla", d: "Flour tortilla, cheese, fries.", p: "10" },
          { n: "Kids taco", d: "Shaved sirloin, corn tortilla, fries.", p: "10" },
          { n: "Kids wings", d: "Baked then fried, five, fries.", p: "11" },
        ],
      },
    ],
  },
  {
    id: "platos",
    label: "Platos",
    blurb: "The big plates. The spaghetti verde with milanesa is the one The New York Times wrote about.",
    photo: { src: "/img/yucatecos.webp", alt: "Camarones yucatecos on a banana leaf with rice and plantain" },
    groups: [
      {
        title: "Platos Wuey",
        items: [
          { n: "Birria ramen", d: "Ramen noodles, braised birria, sprouts, cilantro, onion, jalapeños, egg, birria consomé, salsa macha.", p: "23", tag: "Signature" },
          { n: "Spaghetti verde con milanesa", d: "Poblano cream, spaghetti, cotija, queso fresco, fried breaded chicken breast, arugula.", p: "23", tag: "As seen in the Times" },
          { n: "Spaghetti verde con camarones", d: "Poblano cream, spaghetti, cotija, queso fresco, sautéed shrimp (7), arugula.", p: "24" },
          { n: "Birria plato", d: "Vargas family birria, tender beef braised in guajillo broth, onions, cilantro, cheese quesadillas.", p: "25" },
          { n: "Tlayuda de Oaxaca", d: "12-inch crispy imported tortilla, black beans, queso Oaxaca, queso fresco, cactus, sirloin, longaniza, over-medium eggs.", p: "26" },
          { n: "Molcajete taquero", d: "Ribeye, cheese quesadilla, grilled cactus, cambray onion, chorizo, guajillo tomato sauce, vegetable of the day, zip.", p: "38" },
          { n: "Cazuela de mariscos", d: "Fruits of the sea, guajillo garlic tomato sauce, vegetable of the day, rice, garlic bolillo.", p: "39" },
          { n: "Camarones en salsa macha", d: "Sautéed shrimp, chile oil sauce, guajillo garlic butter, pepitas, sesame, bolillo.", p: "24" },
          { n: "Camarones yucatecos", d: "Sautéed shrimp, guajillo tomato sauce, onion, rice, plantain, banana leaf. Add spicy.", p: "24" },
          { n: "Enchiladas suizas", d: "Shredded chicken, tomatillo salsa, onion, crema, queso Chihuahua, rice.", p: "22" },
          { n: "Enchiladas de mole negro", d: "Queso Oaxaca, onion, dark mole with 30 ingredients, crema, queso fresco, arugula, avocado, rice. Contains peanuts.", p: "23" },
          { n: "Milanesa ranchera", d: "Breaded chicken breast, tomato guajillo sauce, melted cheese, queso fresco, pico de gallo, rice, tortillas.", p: "23" },
          { n: "Chile relleno", d: "Poblano stuffed with ground beef picadillo, egg wash, guajillo tomato sauce, queso fresco, crema, rice.", p: "24" },
          { n: "Tampiqueña", d: "12 oz ribeye, two cheese enchiladas suizas, potato fried taco, vegetable of the day, zip.", p: "37" },
          { n: "Steak a la mexicana", d: "Shaved sirloin, tomato, jalapeño, onion, cilantro, rice.", p: "24" },
          { n: "Shrimp quesadilla", d: "10-inch flour tortilla, shrimp, poblano, onion, chipotle, cream.", p: "19" },
          { n: "Seasonal pozole", d: "Hominy, guajillo, cabbage, onions, salsa macha.", p: "21" },
        ],
      },
      {
        title: "Fajitas",
        note: "Add melted cheese $2",
        items: [
          { n: "Ribeye", p: "33" },
          { n: "Shrimp (11)", p: "26" },
          { n: "Chicken", p: "24" },
          { n: "Veggie", d: "Mixed veg, zip sauce, crema, pico, guac, tortillas.", p: "23" },
          { n: "Mixtas", d: "Ribeye, chicken, shrimp, peppers, onion, zip sauce, crema, pico, guac, tortillas.", p: "38" },
        ],
      },
    ],
  },
  {
    id: "brunch",
    label: "Sunday brunch",
    blurb: "Sundays, 11 AM until 2:45 PM. Some plates come with roasted potatoes and fresh fruit.",
    photo: { src: "/img/chilaquiles.webp", alt: "Chilaquiles in a blue-and-white bowl with crisp tortillas on top" },
    groups: [
      {
        title: "Brunch Wuey",
        items: [
          { n: "Chilaquiles", d: "Crispy corn tortillas, guajillo, tomato sauce, queso fresco, crema, onions, cilantro, over medium egg. Birria or shaved sirloin.", p: "19" },
          { n: "Concha French toast", d: "Mexican concha brioche, berries, cream, dulce de leche.", p: "14" },
          { n: "Chorizo y papas omelete", d: "Pork chorizo, roasted potato, Oaxaca cheese.", p: "16" },
          { n: "Poblano omelete", d: "Roasted poblano peppers, onion, queso Oaxaca, poblano cream sauce.", p: "16" },
          { n: "Huevos rancheros", d: "Crispy corn tortillas, black beans, salsa ranchera, over-medium eggs, queso fresco, crema. Add sirloin or birria $6.", p: "15" },
          { n: "Steak & eggs", d: "Two eggs any style, 8 oz ribeye, zip sauce.", p: "25" },
          { n: "Torta de chilaquiles con milanesa", d: "Bolillo, chicken milanesa, chilaquiles, queso fresco, crema, jalapeños.", p: "18" },
          { n: "Spaghetti verde con huevo", d: "Breaded chicken breast, spaghetti with poblano cream, queso fresco, cotija, arugula, over-medium egg.", p: "21" },
          { n: "Pozole rojo", d: "Pork, hominy, guajillo, cabbage, onions, salsa macha. Add orejas (pig ears) $5.", p: "20" },
          { n: "Tlayuda dominguera", d: "12-inch crispy tortilla, black beans, queso Oaxaca, queso fresco, cactus, sirloin, longaniza, over-medium eggs.", p: "26" },
          { n: "Brunch tacos", d: "Shaved sirloin, potatoes, zip, over-medium eggs. Two or three.", p: "16 / 23" },
          { n: "Molletes", d: "Toasted bolillo, refried black beans, chorizo, queso fresco, crema, salsa macha.", p: "14" },
        ],
      },
    ],
  },
  {
    id: "dulce",
    label: "Dulce & drinks",
    blurb: "No liquor license, so bring your own wine or beer. There are aguas frescas, café de olla and a few things with ice cream.",
    photo: { src: "/img/fried-ice-cream.webp", alt: "Fried ice cream rolled in cereal with a Mexican flag pick" },
    groups: [
      {
        title: "Dulce Wuey",
        note: "Prices from an older menu",
        items: [
          { n: "Fried ice cream", d: "Pistachio ice cream, sopapilla crumble, dulce de leche.", p: "11", tag: "Popular" },
          { n: "Dubai churros", d: "Pistachio cream, milk chocolate, pistachio.", p: "11", tag: "Popular" },
          { n: "Churro cheesecake", d: "Churro dough, cinnamon sugar, layered cheesecake, cajeta.", p: "11" },
          { n: "Flan", d: "Custard caramel, cajeta.", p: "8" },
          { n: "Paleta de jícama", d: "Jícama covered in chamoy, chile martajado, mangonada sorbet.", p: "9" },
        ],
      },
      {
        title: "Bebidas",
        items: [
          { n: "Mexican Coke", p: "4.50" },
          { n: "Café de olla", p: "4.50" },
          { n: "Aguas frescas", p: "4.99" },
          { n: "Jarrito preparado", p: "7.99" },
          { n: "Rusa de toronja", p: "8.99" },
        ],
      },
    ],
  },
];

export const retail = [
  { n: "Salsa macha, traditional", d: "8 oz", p: "10" },
  { n: "Salsa macha, sesame & pepitas", d: "8 oz", p: "10" },
  { n: "Macha oil", d: "", p: "7" },
  { n: "Blue corn chips", d: "Large bag", p: "8" },
  { n: "Small chips & 8 oz house salsa", d: "", p: "8" },
  { n: "Specialty salsa", d: "8 / 16 / 32 oz", p: "5 / 10 / 20" },
  { n: "Agua fresca to go", d: "32 oz", p: "8" },
  { n: "Flour chicharrones", d: "", p: "4" },
];

export type Shot = { src: string; alt: string; name: string; line: string; ratio: "tall" | "wide" | "sq" };
export const shots: Shot[] = [
  { src: "/img/egg-rolls.webp", alt: "Birria egg rolls stacked on a wooden board", name: "Birria egg rolls", line: "Vargas family birria, queso Chihuahua, a cup of consomé.", ratio: "tall" },
  { src: "/img/molcajete.webp", alt: "Molcajete taquero with grilled meat and chiles", name: "Molcajete taquero", line: "Ribeye, cactus and chorizo in a volcanic stone bowl.", ratio: "tall" },
  { src: "/img/birria-tacos.webp", alt: "Birria tacos with two salsas and lime", name: "Birria tacos", line: "Two or three to an order, with consomé.", ratio: "wide" },
  { src: "/img/ribeye-shrimp.webp", alt: "Grilled ribeye and shrimp on cactus paddles", name: "Ribeye and shrimp", line: "Off the grill, on nopales.", ratio: "tall" },
  { src: "/img/tlayuda.webp", alt: "A tlayuda with beans, cheese, cactus and meat", name: "Tlayuda", line: "A twelve-inch crisp tortilla, Oaxaca style.", ratio: "tall" },
  { src: "/img/ceviche.webp", alt: "Shrimp ceviche in a blue-and-white bowl", name: "Ceviche de camarón", line: "Cucumber, tomato, chile de árbol citrus, avocado.", ratio: "tall" },
];

export const mosaic = [
  { src: "/img/asada-tacos.webp", alt: "Asada tacos with guacamole and cactus beside a Jarritos soda" },
  { src: "/img/quesadilla.webp", alt: "A griddled quesadilla on a brass plate" },
  { src: "/img/french-toast.webp", alt: "Concha French toast with cream and berries" },
  { src: "/img/wheels.webp", alt: "Flour chicharrón wheels in a paper-lined basket" },
  { src: "/img/bowl-enchilada.webp", alt: "A black bowl of stewed meat beside a cheese enchilada" },
  { src: "/img/churros.webp", alt: "Churros dusted with pistachio on a dark plate" },
];

// ---- reviews: Google, public. First name + initial, lightly trimmed (…) ----
export const stars = [248, 12, 6, 0, 10]; // 5 → 1
export const reviews = [
  { who: "Linda S.", when: "5 months ago", text: "Tacos Wuey should be renamed Tacos Wow! Chef Eddie Vargas has created a menu of Mexican dishes which are the most delicious in Metro Detroit. The food is always incredibly fresh and perfectly seasoned." },
  { who: "Jeff S.", when: "4 months ago", text: "Really outstanding Mexican cuisine in an excellent space. A touch more upmarket than the surrounding competition in terms of what’s on offer and ambiance. Really bold flavors and really good service." },
  { who: "AJ S.", when: "6 months ago", text: "From the moment you walk in, the decor and lighting create a great atmosphere. We tried the birria and ribeye tacos, both were amazing. In fact, we loved the birria so much that we ordered it again." },
  { who: "Adrienne V.", when: "a year ago", text: "We ordered the guacamole to start and it might be the best I’ve had in the area. Followed it with a couple different tacos that were all amazing, but really need to highlight the fish taco… the salsa is to die for." },
  { who: "Sabs A.", when: "9 months ago", text: "My friends and I ordered so many different things to try and everything was fresh, flavorful, and authentic. Everything was a 10/10, from the apps to the entrees to the desserts." },
  { who: "Deborah B.", when: "3 months ago", text: "Excellent food and service. Sweet corns appetizer started us off. Portions were good and the food had the perfect hit of spice. The hibiscus jalapeño sauce was amazing." },
  { who: "Jason H.", when: "a year ago", text: "A great new place in Mexican village. I had the quesobirria and a pig ear taco. Pro tip: they do not have a liquor license but you can bring your own wine or beer. Everything was delicious." },
  { who: "Mike S.", when: "3 weeks ago", text: "The food was incredible, the staff was friendly and very helpful. We will be making the 2hr drive and visiting again in the near future." },
];
