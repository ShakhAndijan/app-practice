import React from 'react'
import {homeObjOne} from './Data'
import InfoSection from '../../components/InfoSection/InfoSection'

const HomePage = () => {
    return (
        <>
          <InfoSection {...homeObjOne}/>  
        </>
    )
}

export default HomePage
