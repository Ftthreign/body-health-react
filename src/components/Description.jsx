/* eslint-disable react/prop-types */
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

function Description() {
  return (
    <div className="description-list">
      {dataItem.map((data) => (
        <DescriptionList
          title={data.title}
          description={data.description}
          icon={data.icon}
          key={data.id}
        />
      ))}
    </div>
  );
}

function DescriptionList({ title, description, icon }) {
  return (
    <div style={{ color: "#e8e8e8" }}>
      <img src={icon} width={"50px"} className="image-data" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Description;
