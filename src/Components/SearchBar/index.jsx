import PropTypes from "prop-types";

export function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form className="mb-8">
      <input
        type="text"
        value={filterText}
        placeholder="Search for a product"
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="min-w-full border border-purple-900 p-2"
      />
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
};
