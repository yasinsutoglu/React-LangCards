
import React from 'react'
import Container  from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { useState } from 'react'

const Language = ({name, img , options}) => {

    const [showImage , setShowImage] = useState(true)
    
    // console.log(showImage)

  return (
    <Container style={{background:"peachpuff"}} className="p-2 rounded-2 h-100 lang-card" onClick={()=>setShowImage(!showImage)} type="button"> 

        {showImage && (<Container>
            <Image className='lang-logo' src={img} width="70%"></Image>
            <h4 className='display-6'>{name}</h4>
        </Container>)}
        

        {!showImage && (
        <ul className='h-100 d-flex flex-column justfy-content-center'>
            {options.map((item,index)=>{
                return(
                    <li key={index} className="h5 text-start">{item}</li>
                )
            })}
        </ul>)}
        
    </Container>
  )
}

export default Language