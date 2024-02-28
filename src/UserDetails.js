import React from 'react'
import { useParams } from 'react-router-dom'
import users from './users.json';

const UserDetails = () => {
    const {usersId} = useParams();
    const userDetailsdsts = users.find((item)=>( item.id===usersId))
  return (
    <div>{userDetailsdsts.name}</div>
  )
}

export default UserDetails