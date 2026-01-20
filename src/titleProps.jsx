function ProductTitle({title, name, features1, feature2}) {
  return (
    <>
    <p>{title}</p>;
    <h5>My name is: {name}</h5>
    <h6>Feature: {features1}</h6>
    <h6>Feature: {feature2}</h6>
    </>
  )
}

export default ProductTitle;