import React, { useState } from 'react'

const ToggleVisibility = () => {
    const [isVisible , setisVisible] =useState();
  return (
    <div>
        <h1>ToggleVisibility</h1>
        <button onClick={()=>setisVisible(!isVisible)}> Toggle </button>
        {isVisible &&
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ea beatae pariatur, veritatis corporis, error numquam placeat aspernatur incidunt possimus sit assumenda obcaecati distinctio, quod amet debitis saepe enim veniam!
        </p>
        }

        </div>
  )
}

export default ToggleVisibility