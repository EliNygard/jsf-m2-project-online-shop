import PropTypes from "prop-types";

export function SearchBar({
    filterText,
    onFilterTextChange
}) {
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search for a product"
            onChange={(e) => onFilterTextChange(e.target.value)} />
        </form>
    )
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    onFilterTextChange: PropTypes.func.isRequired
};