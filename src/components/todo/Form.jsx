import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tags from './Tags.jsx'

const Form  = ({ onSubmit }) => {
 const [title, setTitle] = React.useState('')

 const handleSubmit = () => {
   // eslint-disable-next-line no-restricted-globals
   event.preventDefault()
   console.log('Форма отправленна' + title)
   const item = {
     id: uuidv4(),
     title: title,
     tags: arrTags,
     isChecked: false
   }
   onSubmit(item)
   // reset
   setTitle('')

 }
 // обрабатываем тэги
 const arrTags = []
 const handleItemClick = (item) => {
 arrTags.push(item)
  // console.log('show tag name: ' + arrTags)
 }
 return (
   <form className='mb-8' onSubmit={handleSubmit}>
    <div className='view-sm flex items-end mb-4'>
      <div className="ui-input" style={{width: '100%'}}>
        <label htmlFor="input-DqS1">Default todo</label>
        <input
        id="input-DqS1"
        type="text"
        placeholder="Enter your todo"
        value={title}
        onChange={(evt) => {
          return setTitle(evt.target.value)
        }}
        required
        />
      </div>
      <button className='ui-button isPrimary' type="submit">Отправить</button>
     </div>
     <Tags onItemClick={handleItemClick}></Tags>
   </form>
 )
}

export default Form