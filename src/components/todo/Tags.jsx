import React from 'react';
import tags from 'seeders/tags.json'
import cn from 'classnames'

const Tags = ({items, isFilter, onItemClick, className, ...attrs}) => {
 // получаю классы через пропы, обрабатываю их с помощью билиоткеи classnames
const classes = cn('ui-button group', {'filter-tags': isFilter})
 const newArrTags = tags.map((tag)=><span className='ui-tag' key={tag.id} onClick={() => onItemClick({title:tag.title, id:tag.id}) }>{tag.title}</span>)
 let listTags = []
// если параметр items передан в компонент то выводим тэги из него, иначе отрисовываем полный список
 items ? listTags = items.map((tag)=><span className='ui-tag' key={tag.id}>{tag.title}</span>) : listTags = newArrTags
 // {items && items.length > 0 ? listTags = items.map((tag)=><span className='ui-tag' key={tag.id}>{tag.title}</span>) : listTags = newArrTags}

 return (
  <div className='view-sidebar__content'>
   {
    isFilter ? (
     <div className={classes}>
      <p className='text-xs mr-3'>Отфильровать задачи по тегу:</p>
      {listTags}
     </div>
    ) : (
     <div className={classes}>
      {listTags}
     </div>
    )
   }
  </div>
 )
}

export default Tags