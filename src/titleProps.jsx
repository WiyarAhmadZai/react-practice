function ProductTitle({title, name, features1, feature2}) {
    const list = features1.map((feature)=> <li style={}>{feature}</li>)
  return (
    <>
    <div style={{display: "flex", gap: '1rem', alignItems: "center", border:"1px solid white", margin:"1rem", padding:"0.3rem 0.9rem"}}>
        <p>{title}</p>
    <h5>I am: {name}</h5>
    <h6>Feature: {list}</h6>
    <h6>Feature: {feature2}</h6>
    </div>
    </>
  )
}

export default ProductTitle;