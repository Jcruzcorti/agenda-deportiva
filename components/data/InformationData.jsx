import React from 'react'
import styles from '@components/styles/Home.module.css'
import ItemData from '../item/ItemData'



function InformationData({matches}) {
    
  return (
    <>

        {matches.map((match,index)=>(          
          <ItemData key={index} match={match}/>
        ))}   

    </>
  )
}

export default InformationData