import React, {useState} from 'react';
import {Container} from 'layouts';
import {Form, List} from 'components/todo';
import todos from 'seeders/todos.json'
import Tags from 'components/todo/Tags.jsx'
// import cn from 'classnames'




const HomePage = () => {
  const localItems = JSON.parse(localStorage.getItem('items')) || null
  // final output
  const items_ = localItems && localItems.length > 0 ? localItems : todos
  // state
  const [items, setItems] = React.useState(items_ || [])

  React.useEffect(
    () => localStorage.setItem('items', JSON.stringify(items)),
    [items]
  )

  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  const handleChangeItem = (id) => {
   const nextItem = items.map((el) =>
    el.id === id ? {...el, isChecked: !el.isChecked } : el
   )

   setItems(nextItem)
  }

  const handleRemoveItem = (id) => {
    const nextItems = [...items]

    const indexForRemove = nextItems.findIndex((el) => el.id === id)
    nextItems.splice(indexForRemove, 1)

    setItems(nextItems)
  }

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const [tagName, setTagName] = useState('')

  const handleItemClick = (item) => {
    setTagName(item.title)
    // console.log('show tag name: ' + tagName)
  }

  return (
    <Container>
      <div className='view-wrapper'>
        {/* sidebar */}
        <div className='view-sidebar'>
          <Tags isFilter onItemClick={handleItemClick} ></Tags>
        </div>
        {/* content */}
        <div className='view-content'>
          <Form onSubmit={handleSubmit}></Form>
          <List items={items} onChangeItem={handleChangeItem} onRemoveItem={handleRemoveItem} tag={tagName}></List>
        </div>
      </div>
    </Container>
    );
}

export default HomePage;