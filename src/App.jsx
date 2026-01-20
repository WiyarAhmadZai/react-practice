import './App.css'
import {Title, Sum} from './title.jsx'
import ProductTitle from './titleProps.jsx'


function Desctiption(){
  return <h3>this is the description of the site</h3>
}

function App() {

  return (
    <>
      <h1>hello this is me wiyar  </h1>
      <Title/>
      <Desctiption/>
      <Sum/>
      <ProductTitle title="this is the first product title"/>
      <ProductTitle title="this is the second product title"/>
      <ProductTitle title="this is the third product title"/>
    </>
  )
}

export default App
