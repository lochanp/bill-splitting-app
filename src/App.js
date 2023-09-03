//*** Bugs to fix */
//** can't type alphabet in the splitbill form */
//** onselecting other friend when splitbill form is open the form values are not clearing/deleted */

import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
import Button from "./components/common/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setshowAddFriend] = useState(false)
  const [newFriend, setnewFriend] = useState(initialFriends)
  const [selectedFriend, setselectedFriend] = useState(null)
  
  function handleShowAddFriend() {
    setshowAddFriend(show =>!show)
  }

  function handleSelection(friend) {
    setselectedFriend((selected) => selected?.id === friend.id ? null :friend)
    setshowAddFriend(false)
  }

  function handleSplitBill(value) {
    setselectedFriend(null)
    setnewFriend(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend,balance:friend.balance + value} : friend))
  }

  return (
    <div className="app">
      <div className="sidebar">
      <FriendsList handleSelection={handleSelection} friends={newFriend} selectedFriend={selectedFriend} />
      {showAddFriend && <AddFriendForm handleShowAddFriend={handleShowAddFriend} setnewFriend={setnewFriend} />}
      <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <SplitBillForm key={selectedFriend.id} selectedFriend={selectedFriend} handleSplitBill={handleSplitBill}  />}
    </div>
  )
}

export default App
