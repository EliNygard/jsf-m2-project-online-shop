import PropTypes from "prop-types";
import CartDisplay from "../CartDisplay";
import { ProductList } from "../ProductsList";
import { SearchBar } from "../SearchBar";

export function Home({ filterText, setFilterText, items }) {
    
    return (
        <div>
            <h1>Home page</h1>
            <div className="shop-wrapper">
            <section>
              <CartDisplay />
            </section>
            <section>
              <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}
              />
              <ProductList filterText={filterText} items={items} />
            </section>
            </div>
        </div>
    )
}

Home.propTypes = {
    filterText: PropTypes.string.isRequired,
    setFilterText: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};