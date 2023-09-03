import React from 'react'
import Friend from './Friend'

const FriendsList = ({friends,handleSelection,selectedFriend}) => {
  return (
    <ul>
        {friends.map((e) => (
            <Friend selectedFriend={selectedFriend} handleSelection={handleSelection}  friend={e} key={e.id} />
        ))}
    </ul>
  )
}

export default FriendsList