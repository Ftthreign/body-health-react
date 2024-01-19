import PropTypes from "prop-types";

import { dataItem } from "../data/DataUtils";

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

DescriptionList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
export default Description;
