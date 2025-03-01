"use client"
import WinHolidayData from '@component/components/dashLayout/WinHolidayData'
import AuthDasbard from '@component/helper/AuthDasbard'
import React from 'react'

function page() {
  return (
    <>
    <WinHolidayData />
    </>
  )
}

export default AuthDasbard(page)