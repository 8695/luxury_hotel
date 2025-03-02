
"use client"
import LineChartWithAnimation from '@component/components/dashLayout/chart/AnalticHotel'
import AuthDasbard from '@component/helper/AuthDasbard';
import React from 'react'

function page() {
  return (
    <LineChartWithAnimation />
  )
}

export default AuthDasbard(page);
