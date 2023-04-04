import React from 'react';
import Tags from './Tags.jsx'

const List = ({items, onChangeItem, onRemoveItem, tag}) => {
  const nextList = []
    items.forEach((item) => {
      if (item.tags && item.tags.length > 0) {
        const newObj = {...item}
        newObj.tags.forEach((elem) => {
          if (elem.title === tag) {
            nextList.push(newObj)
          }
        })
      }
    })

 return (
   <div className="view-sm flex-col">
    {
      // показываем отфильтрованные задачи
      tag && nextList.length > 0 ? nextList.map((item) => (
        <div key={item.id} className='flex justify-between'>
        <div key={item.id} className="ui-checkbox">
         <input id={item.id} type="checkbox" checked={item.isChecked} onChange={() => onChangeItem(item.id)} />
         <label htmlFor={item.id}>{item.title}</label>
         <Tags items={item.tags}></Tags>
        </div>
        <span className='ui-link pl-2' onClick={() => onRemoveItem(item.id)}>Remove Item</span>
        </div>
       )) :
        // показываем созданные задачи и задачи из сидера
        items && items.length > 0 ? items.map((item) => (
          <div key={item.id} className='flex justify-between'>
          <div key={item.id} className="ui-checkbox">
          <input id={item.id} type="checkbox" checked={item.isChecked} onChange={() => onChangeItem(item.id)} />
          <label htmlFor={item.id}>{item.title}</label>
          {item.tags && item.tags.length > 0 ? <Tags items={item.tags}></Tags> : ''}
          </div>
          <span className='ui-link pl-2' onClick={() => onRemoveItem(item.id)}>Remove Item</span>
          </div>
        )) : 'not found'
    }

   </div>
 )
}

export default List