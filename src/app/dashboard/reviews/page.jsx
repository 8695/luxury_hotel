"use client"
import Review from '@component/components/dashLayout/Review'
import AuthDasbard from '@component/helper/AuthDasbard';
import React from 'react'

function page() {
  return (
    <>
     <Review />
    </>
  )
}

export default AuthDasbard(page);
