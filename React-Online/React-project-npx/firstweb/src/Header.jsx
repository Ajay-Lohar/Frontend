import React from 'react'

export default function Header({HeaderInfo,cname,children}) {//props names are optional 

 // let{HeaderInfo,cname}=props;// thise props data save in HeaderInfo
 //
 console.log(cname)
  return (
    //childern parameter is predifine in react props as children
     <h1>{children}
     </h1>
  )
}
