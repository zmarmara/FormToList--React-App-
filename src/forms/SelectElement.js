function SelectElement(props) {
  const updateOption = (e) => {
    props.onUpdateSelection(e.target.value);
  };

  return (
    <div>
      <div className="select">
        <select>
          {props.selectProperties.map((option, index) => (
            <option onClick={updateOption} key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <p class="help is-danger">Please select a category</p>
    </div>
  );
}

export default SelectElement;
