import React from 'react'
import LineItem from './LineItem';


const ListItem = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
    {items.map((item) => {
      return (
        <LineItem
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      );
    })}
  </ul>
  )
}

export default ListItem