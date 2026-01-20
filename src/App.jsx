import './App.css'
import {Title, Sum} from './title.jsx'
import ProductTitle from './titleProps.jsx'


function Desctiption(){
  return <h3>this is the description of the site</h3>
}

function App() {
let option1 =["feature one", "feature two", "feature three"]
let option2 ={a: "feature A", b: "feature B", c: "feature C"}
  return (
    <>

      <ProductTitle title="this is the first product title" name="product one" features1={option1} feature2={option2.a} price={67000}/>
      <ProductTitle title="this is the second product title" name="product two" features1={option1} feature2={option2.b} price={50000}/>
      <ProductTitle title="this is the third product title" name="product three" features1={option1} feature2={option2.c} price={45000}/>
      <ProductTitle title="this is the fourth product title" name="product four" features1={option1} feature2={option2.c} price={35000}/>
    </>
  )
}

export default App
