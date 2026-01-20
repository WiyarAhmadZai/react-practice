import './App.css'
import {Title, Sum} from './title.jsx'
import ProductTitle from './titleProps.jsx'


function Desctiption(){
  return <h3>this is the description of the site</h3>
}

function App() {
let option1 =["feature one", "feature two", "feature three"]
  return (
    <>

      <ProductTitle title="this is the first product title" name="product one" features1={option1}/>
      <ProductTitle title="this is the second product title" name="product two" features1={option1}/>
      <ProductTitle title="this is the third product title" name="product three" features1={option1}/>
    </>
  )
}

export default App
