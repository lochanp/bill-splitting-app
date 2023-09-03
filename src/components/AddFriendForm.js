import React, { useState } from 'react'
import Button from './common/Button'

const AddFriendForm = ({setnewFriend, handleShowAddFriend}) => {
    const [name, setname] = useState('')
    const [image, setimage] = useState('https://i.pravatar.cc/48?u=933372')

    function handleAddFriend(e) {

        if(!name || !image) return;

        setnewFriend(friend => [...friend,{
            name,
            image: `${image}=${crypto.randomUUID()}`,
            balance : 0,
            id : crypto.randomUUID(),
        }])
        e.preventDefault()
        setimage('https://i.pravatar.cc/48?u=933372')
        setname('')
        handleShowAddFriend()
    }

  return (
    <>
    <form className='form-add-friend' onSubmit={handleAddFriend}>
        <label>👭🏻 Friend Name</label>
        <input type='text' value={name} onChange={e=>setname(e.target.value)}></input>
        <label>🌅 Image URL</label>
        <input type='text' value={image} onChange={e=>setimage(e.target.value)}></input>
        <Button>Add</Button>
    </form>
    
    </>
  )
}

export default AddFriendForm