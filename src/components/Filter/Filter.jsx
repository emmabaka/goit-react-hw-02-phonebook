const Filter = ({ value, handleChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </div>
  );
};

export default Filter;
