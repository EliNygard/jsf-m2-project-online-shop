import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductPage() {
  // let params = useParams()

  // console.log("Product page with product id: ", params);

  let { id } = useParams();
  console.log("Product page with product id: ", id);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Could not get product</div>;
  }

  console.log(data);

  return (
    <div>
      <img src={data.image.url} alt={data.image.alt} />
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
    </div>
  );
}
