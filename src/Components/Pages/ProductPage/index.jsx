import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { Helmet } from "react-helmet-async";

export function ProductPage() {
  // let params = useParams()
  // console.log("Product page with product id: ", params);
  let { id } = useParams();

  const { data, isLoading, isError } = useFetch(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

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
      <section>
        <img
          src={data.image.url || "../../assets/react.svg"}
          alt={data.image.alt || "Default product image"}
        />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ul>
          {data.tags.map((tag) => (
            <li key={tag}>Tag: {tag}</li>
          ))}
        </ul>
        <ul>
          {data.reviews.map(
            (review) => (
              console.log(review),
              (
                <li key={review.id}>
                  <p>Rating: {review.rating}</p>
                  <p>By: {review.username}</p>
                  <p>{review.description}</p>
                </li>
              )
            )
          )}
        </ul>
      </section>
    </>
  );
}
