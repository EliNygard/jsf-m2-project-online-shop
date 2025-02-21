import PropTypes from "prop-types";

export function ProductSingle({ data }) {
  return (
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
  );
}

ProductSingle.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    title: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        rating: PropTypes.number,
        username: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
};
