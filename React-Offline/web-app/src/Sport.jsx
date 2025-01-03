import React from 'react'

export const Sport = (props) => {
    if(props.names.lenght ==0){
        return <li>No Element present</li>
    }

  return (
    <div>
        <h1>Sport</h1>  
        <ul>{props.names.map((name)=>{
                return <li>{name}</li>
            })}
        </ul>
        </div>
  )
};
