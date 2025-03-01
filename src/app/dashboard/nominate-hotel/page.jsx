"use client"
import NominateHotel from '@component/components/dashLayout/NominateHotel'
import AuthDasbard from '@component/helper/AuthDasbard'
import React from 'react'

const page = () => {
    return (
        <>
           <NominateHotel /> 

        </>
    )
}

export default AuthDasbard(page)