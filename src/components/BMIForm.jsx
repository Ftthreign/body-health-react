/* eslint-disable react/prop-types */
function FormInput({ height, onSetHeight, weight, onSetWeight }) {
  return (
    <form>
      <div className="input-data">
        <label>Height </label>
        <input
          type="number"
          step="5"
          placeholder="0"
          value={height}
          onChange={(e) => onSetHeight(Number(e.target.value))}
        />

        <label>Weight</label>
        <input
          type="number"
          step="5"
          placeholder="0"
          value={weight}
          onChange={(e) => onSetWeight(Number(e.target.value))}
        />
      </div>
    </form>
  );
}

export default FormInput;
