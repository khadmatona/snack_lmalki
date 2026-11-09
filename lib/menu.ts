// Full menu. Prices in DH. Edit here and the /menu page updates.
export type Item = {
  name: string;
  ar?: string;
  price: number;
  desc?: string;
};

export type Category = {
  id: string;
  title: string;
  ar: string;
  layout: "list" | "cards" | "packs";
  note?: string;
  items: Item[];
};

export const hours = "07h00 — 00h00";

export const menu: Category[] = [
  {
    id: "packs",
    title: "Packs Promo",
    ar: "عروض سريعة",
    layout: "packs",
    items: [
      { name: "Pack Étudiant", ar: "عرض الطالب", price: 45, desc: "Sandwich + Frites + Jus petit" },
      { name: "Menu Tacos L", ar: "قائمة تاكوس كبير", price: 55, desc: "Tacos L + Frites + Boisson" },
      { name: "Pack Famille", ar: "عرض العائلة", price: 85, desc: "2 Tacos L + 1 Pizza + 2 Jus · 2-3 personnes" },
      { name: "Pack Beldi", ar: "عرض بلدي", price: 30, desc: "Petit déj Beldi + Jus d'orange" },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    ar: "التاكوس",
    layout: "list",
    items: [
      { name: "Tacos M", ar: "تاكوس متوسط", price: 28 },
      { name: "Tacos L", ar: "تاكوس كبير", price: 32 },
      { name: "Tacos XL Gratiné", ar: "تاكوس إكس إل غراتان", price: 42 },
      { name: "Plate Kefta", price: 30 },
      { name: "Plate Dinde", price: 30 },
      { name: "Plate Thon", price: 18 },
      { name: "Plate Mixte", price: 30 },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    ar: "البرجر",
    layout: "list",
    items: [
      { name: "Burger Poulet", ar: "برجر دجاج", price: 25 },
      { name: "Burger Kefta", ar: "برجر كفتة", price: 28 },
      { name: "Burger Malki Spécial", ar: "برجر المالكي", price: 35 },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    ar: "السندويتشات",
    layout: "list",
    items: [
      { name: "Sandwich Poulet", ar: "شطيرة الدجاج", price: 18 },
      { name: "Sandwich Kefta", ar: "شطيرة الكفتة", price: 25 },
      { name: "Sandwich Turquie", price: 20 },
      { name: "Sandwich Mixte", price: 20 },
      { name: "Tortilla Plate", price: 18 },
      { name: "Tortilla Sandwich", price: 22 },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    ar: "البيتزا",
    layout: "list",
    items: [
      { name: "Pizza Moyenne", price: 30 },
      { name: "Pizza Moyenne Gratinée", price: 70 },
      { name: "Pizza Grande", price: 45 },
      { name: "Pizza Dinde", price: 30 },
      { name: "Pizza Kefta", price: 40 },
      { name: "Pizza Crevette", price: 70 },
    ],
  },
  {
    id: "mqilat",
    title: "M9ilat",
    ar: "المقيلات",
    layout: "list",
    items: [
      { name: "Mqila Matisha + Oeuf", ar: "مقيلة ماطيشة وبيض", price: 25 },
      { name: "Mqila Kefta", ar: "مقيلة كفتة", price: 35 },
      { name: "Mqila Kefta + Oeuf", ar: "مقيلة كفتة وبيض", price: 38 },
      { name: "Mqila Mixte", ar: "مقيلة مخلطة", price: 40 },
    ],
  },
  {
    id: "ftour",
    title: "Petit Déjeuner",
    ar: "فطور الصباح",
    layout: "cards",
    items: [
      { name: "Beldi Marocain", ar: "فطور بلدي", price: 25, desc: "بيض بلدي + خبز شعير + زيتون + زيت أركان + أتاي" },
      { name: "Chamali", ar: "فطور شمالي", price: 30, desc: "بغرير + مسمن + حرشة + عسل + جبن + أتاي" },
      { name: "Complet Malki", ar: "فطور المالكي", price: 35 },
    ],
  },
  {
    id: "jus",
    title: "Jus & 3assir",
    ar: "العصائر",
    layout: "list",
    note: "Grand 25 DH · Petit 15 DH",
    items: [
      { name: "Citron", ar: "ليمون", price: 10 },
      { name: "Banane Lait", ar: "موز بالحليب", price: 15 },
      { name: "Banane Citron", ar: "موز بالليمون", price: 15 },
      { name: "Pomme", ar: "تفاح", price: 15 },
      { name: "Avocat Lait", ar: "أفوكادو بالحليب", price: 18 },
      { name: "Avocat Citron", ar: "أفوكادو بالليمون", price: 18 },
      { name: "Panaché", ar: "باناشي", price: 20 },
    ],
  },
  {
    id: "extras",
    title: "Suppléments",
    ar: "إضافات",
    layout: "list",
    items: [
      { name: "Frites", ar: "بطاطس مقلية", price: 12 },
      { name: "Fromage", ar: "جبن", price: 5 },
    ],
  },
];
