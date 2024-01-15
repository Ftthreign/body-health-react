import PropTypes from "prop-types";

function BMIInformation({ children }) {
  return (
    <div className="data-information">
      <img
        src="./healthy-people.webp"
        width={"400px"}
        height={"400px"}
        style={{ borderRadius: "14px 0 0 14px" }}
      />

      <div className="information-BMI">
        <h1>What your BMI result means</h1>
        {children}
      </div>
    </div>
  );
}

BMIInformation.propTypes = {
  children: PropTypes.object,
};

export default BMIInformation;
