import React, { Component } from 'react';

const ListItems = (info) => {
  console.log(info);
  return <div>
    <h3>{info.text}</h3>
    <p>{info.date ? 'h' : 'e'}</p>
    <p>{info.isCompleted ? 'Completed' : 'Not Completed'}</p>
  </div>
}

export default ListItems;