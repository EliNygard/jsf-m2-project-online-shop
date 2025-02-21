import { Helmet } from "react-helmet-async";
import { TestProduct} from "../../TestProduct"

export function Products() {
    return (
        <>
          <Helmet>
            <title>Products</title>
            <meta
              name="description"
              content="All our products"
            />
          </Helmet>
           <h1>Products page</h1>
           <TestProduct title="Milk" description="Fresh milk" price={19.99}></TestProduct>
        </>
      );
}