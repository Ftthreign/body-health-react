const dataItem = [
  {
    icon: "../../fast-food.png",
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood",
    id: 1990,
  },
  {
    icon: "../../dumbbell.png",
    title: "Regular Exercise",
    description:
      "Exercise impoves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity",
    id: 1991,
  },
  {
    icon: "../../sleep.png",
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional, stability, and physical wellness, promoting overall restoration and rejuvenation",
    id: 1992,
  },
];

const BMIData = [
  {
    title: "Normal",
    description:
      "A BMI range of 18.5 to 24.9 is considered a 'helthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutrious diet with reduced fat and sugar content, incorporating sample fruit and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week'",
  },
  {
    title: "Underweight",
    description:
      "A BMI below 18.5 signifies a weight lower than what's considered healthy. Individuals falling into this category might face risks associated with nutrient deficiencies and other health issues. Efforts to attain a healthy weight may involve increasing nutrient intake, including proteins, healthy fats, and carbohydrates, along with careful medical supervision.",
  },
  {
    title: "Overweight",
    description:
      "This BMI range indicates someone in the overweight category. It suggests excess body weight, potentially increasing the risk of heart disease, high blood pressure, or diabetes. Managing weight through a balanced diet, regular physical activity, and adopting a healthier lifestyle can help reduce the risk of such health conditions.",
  },
  {
    title: "Obesity",
    description:
      "A BMI of 30 or higher classifies someone in the obesity category, which can further be divided into different levels. Obesity escalates the risk of serious health issues like heart disease, type 2 diabetes, stroke, and more. Weight management becomes crucial with the help of medical professionals, dietary planning, and increased regular physical activity.",
  },
];

const healthyFood = [
  {
    name: "Apple",
    type: "Fruit",
    price: 5000,
    stock: 50,
    image: "../../foods/apple.png",
  },
  {
    name: "Broccoli",
    type: "Vegetable",
    price: 7000,
    stock: 30,
    image: "../../foods/broccoli.png",
  },
  {
    name: "Avocado",
    type: "Fruit",
    price: 10000,
    stock: 40,
    image: "../../foods/avocado.png",
  },
  {
    name: "Salmon Fish",
    type: "Protein",
    price: 25000,
    stock: 20,
    image: "../../foods/fish.png",
  },
  {
    name: "Organic Honey",
    type: "Bee Product",
    price: 15000,
    stock: 25,
    image: "../../foods/honey.png",
  },
];

export { dataItem, healthyFood, BMIData };
