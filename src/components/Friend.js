import React from 'react'
import Button from './common/Button'

const Friend = ({friend,handleSelection,selectedFriend}) => {
  return (
    <li className={selectedFriend?.id === friend.id ? 'selected' : ''}>
        <img src={friend.image} alt={friend.name}></img>
        <h1>{friend.name}</h1>
        {friend.balance < 0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}</p>}
        {friend.balance > 0 && <p className='green'>{friend.name} owes you {friend.balance}</p>}
        {friend.balance === 0 && <p>You and your friend are even</p>}
        {selectedFriend?.name !== friend.name ? <Button onClick={() => handleSelection(friend)}>Select</Button> : <Button onClick={() => handleSelection(friend)}>Close</Button>}
    </li>
  )
}

export default Friend