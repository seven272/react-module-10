import React from 'react';
import {Container} from 'layouts';
import { Link, useParams, useNavigate } from "react-router-dom";
import items from 'seeders/products.js'
import classNames from 'classnames';
import {ProductsContext} from 'Store'


const ProductItem = () => {
  const [item, setItem] = React.useState(null)
  const [products, setProducts] = React.useContext(ProductsContext)
// status
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  const { itemAlias } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    const nextItem = items.find((elem) => elem.alias === itemAlias)
    if(nextItem) {
      setItem(nextItem)
    } else {
      navigate('/404')
    }
  }, [])

  const handleAddCard = () => {
    //logic store
    setLoading(true)
    setTimeout(() => {
      const nextProducts = [...products, item]
      //store logic
      setProducts(nextProducts)
      //status
      setSuccess(true)
      setLoading(false)
    }, 2000)
  }

  const buttonClasses = classNames('ui-button isPrimary',
    {
      isLoading: loading
    }
  )

// content
const renderContent = item ? (
  <div className='flex flex-col items-center'>
    <img src={item.img} alt={item.title} style={{ maxWidth: '420px', width: '320px' }} />
    <h1 className='ui-title-1 mb-4'>{item.title}</h1>
    <span>{item.price}</span>

    {/* controls */}
  { success && <p className='ui-text isSuccess mt-4'>Успех! Товар добавлен в корзину.</p> }
  <div className='flex mt-2'>
      <Link className='ui-button isLink' to='/'>
        Back to home
      </Link>
      <div className={buttonClasses} onClick={handleAddCard}>
        {loading ? 'loading...' : 'Add to cart'}
        </div>
    </div>
  </div>
) : (
  'loading'
)



  return (
    <Container>
      {renderContent}
    </Container>
    );
}

export default ProductItem;