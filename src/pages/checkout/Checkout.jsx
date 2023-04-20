import React from 'react'
import { Link } from 'react-router-dom'

// store
import { ProductsContext } from 'Store'

// components:
import { Container } from 'layouts'

const productStyles = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'var(--ui-g-100)',
  borderRadius: '16px',
}

const CheckoutPage = () => {
  const [products, setProducts] = React.useContext(ProductsContext)
// формирую обьект в котором ключ значение  это сгруппированные массивы одинаковых товаров
   let transitionalObject = products.reduce((acc, elem) => {
      const id = elem.id
      if(!acc[id]) {
        acc[id] = [];
      }
      acc[id].push(elem);
      return acc;
    }, {})

  // обьект преобразую в массив
  let newArr = Object.values(transitionalObject)
  // создаю новый массив куда будут добавляться элементы после проверки на дубли и их склевания
  let nextProducts = []
  newArr.forEach((elem) => {
    if (elem.length === 1) {
      // приводим цену к числу
      const newPrice = elem[0].price.replace(/[^0-9]/g, '');
      // проверяем есть ли поле "count", если нет то создаем если есть то перезаписываем
      let newCount = 1
      if (elem[0].count) {
        newCount = elem[0].count
      }
      // формируем новую карточку товара
      const newObj = {
        ...elem[0],
        price: Number(newPrice),
        count: newCount
      }
      //и добовляем ее в массив
      nextProducts.push(newObj)
    } else if (elem.length > 1) {
      // определяем кол-во однотипных товаров по длинне массива
      const elementsCount = elem.length
      let newObj = elem.reduce((acc, obj) => {
        // дальше приводим цену товара к числу
        const val = obj.price.replace(/[^0-9]/g, '');
        acc = {
          ...obj,
          price: val * elementsCount,
          count: elementsCount
        }
        return acc
    }, {})
    nextProducts.push(newObj)
  }
  });

  // находим  общую цену всех товаров в корзине
  const totalPrice = nextProducts.reduce((acc, elem) => {
    return acc +  elem.price
  }, 0);

  // content
  const renderContent =
  nextProducts && nextProducts.length && nextProducts.length > 0
      ? nextProducts.map((item, i) => (
          <div
            key={i}
            className='flex items-center mb-8'
            style={productStyles}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: '140px' }}
            />
            <div className='flex flex-col items-start'>
              <p className='ui-title-3 mb-2'>{item.title}</p>
              <p className='mb-4'>{item.count} шт.</p>
              <p className='mb-4'>Цена: ${item.price}</p>
              <Link to={`/products/${item.alias}`}>
                <span className='ui-link isPrimary'>See more</span>
              </Link>
            </div>
          </div>
        ))
      : 'Cart is empty'

  // controls
  const renderControls = (
    <div className='flex mt-4'>
      <Link className='ui-button isLink' to='/'>
        Back to home
      </Link>
      {products && products.length > 0 && (
        <div className='ui-button isPrimary' onClick={() => setProducts([])}>
          Refresh the cart
        </div>
      )}
    </div>
  )

  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className='ui-title-1 text-center'>Checkout</h1>
        <div className='flex flex-col items-center'>
          {renderContent}
          <h3 className='ui-title-3 text-center'>Общая стоимость: ${totalPrice}</h3>
          {renderControls}
        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage