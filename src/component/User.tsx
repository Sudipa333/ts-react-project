import React from 'react';

type UserProps={
  name:string,
   age:number,
   isRegistered:boolean,
   lang:string[]
}
const User=({name,age,isRegistered,lang}:UserProps)=>{
  return(
    <div>
    <h1>{name}</h1>
    <p>{age}years old</p>
    {isRegistered?<p>Registered user</p>:<p>Not registered user</p>}
    <p>speaks:
    {lang.map(
      (language,index)=>{
        return <span key={index}>language</span>
      }
    )}
    </p>
    </div>
  )
}

export default User;