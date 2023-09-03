import React, { useState } from 'react'
import Button from './common/Button'

const SplitBillForm = ({selectedFriend,handleSplitBill}) => {
    const [bill, setbill] = useState("")
    const [paidByUser, setpaidByUser] = useState("")
    const [whoIsPaying, setwhoIsPaying] = useState("user")
    const paidByFriend = bill ? bill - paidByUser : '';

    function handleSubmit(e) {
        e.preventDefault()
        if(!bill || !paidByUser) return;
        handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
    }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill value</label>
        <input value={bill} onChange={(e) => setbill(Number(e.target.value))} type='text'></input>
        <label>🧍🏻‍♀️ Your expense</label>
        <input type='text' value={paidByUser} onChange={(e) => setpaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}></input>
        <label>👬🏻 {selectedFriend.name}'s expense</label>
        <input type='text' value={paidByFriend} disabled></input>
        <label>💸 Who is paying the bill</label>
        <select value={whoIsPaying} onChange={(e) => setwhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split Bill</Button>
    </form>
  )
}

export default SplitBillForm