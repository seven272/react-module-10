import React from "react"
import propTypes from "prop-types"

export const ProductsContext = React.createContext([])

// export const TestContext = React.createContext(null)
export const CountContext = React.createContext('123--321')

const Store = ({children}) => {
 const [products, setProducts] = React.useState([])
 const productsContext = React.useMemo(
  () => [products, setProducts], [products, setProducts]
 )

 const [count, setCount] = React.useState(0)

 const countContext = React.useMemo(
  () => [count, setCount], [count, setCount]
 )

 setTimeout(() => setCount(11), 2000)


 // React.useEffect(() => console.log(products), [products])

 return <CountContext.Provider value={countContext}>
          <ProductsContext.Provider value={productsContext}>{children}</ProductsContext.Provider>
        </CountContext.Provider>
 
 // const [test, setTest] = React.useState('Hello world')
 // const testContext = React.useMemo(() => [test, setTest], [test, setTest])
 // return <TestContext.Provider value={testContext}>{children}</TestContext.Provider>
}

Store.propTypes = {
 children: propTypes.node.isRequired
}

export default Store