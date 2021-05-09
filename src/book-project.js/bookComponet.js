const Book = (props) => {
  const { img, title, auther } = props;
  const clickHandler = () => {
    console.log(title);
  };
  return (
    <article
      className="container-items"
      onMouseOver={() => {
        // console.log(title);
      }}
    >
      <img src={img} />
      <h2
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        {title}
      </h2>
      <h4>{auther}</h4>
      <button type="button" className="btn" onClick={clickHandler}>
        update will come
      </button>
      <button type="button" className="btn">
        update will come
      </button>
    </article>
  );
};
export default Book;
