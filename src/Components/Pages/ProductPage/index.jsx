import { useParams } from "react-router-dom";
// import { useFetch } from "../../../hooks/useFetch";
import { Helmet } from "react-helmet-async";
import { ProductSingle } from "../../ProductSingle"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../../features/product/productSlice";

export function ProductPage() {
  // let params = useParams()
  // console.log("Product page with product id: ", params);
  const { id } = useParams();
  const dispatch = useDispatch()

  // Select the fetched data and states from the Redux store:
  const { data, isLoading, isError } = useSelector((state) => state.product)

  useEffect(() => {
    // Dispatch the thunk with the url:
    dispatch(fetchData(`https://v2.api.noroff.dev/online-shop/${id}`))
  }, [dispatch, id])

  // const { data, isLoading, isError } = useFetch(
  //   `https://v2.api.noroff.dev/online-shop/${id}`
  // );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Could not get product</div>;
  }

  console.log(data);

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta
          name="description"
          content={data.description}
        />
      </Helmet>
      <ProductSingle data={data}></ProductSingle>
       
    </>
  );
}
