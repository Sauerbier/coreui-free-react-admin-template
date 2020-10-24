import React, { lazy } from 'react'
import {
  CCol,
  CRow,
  CWidgetSimple
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Dashboard = () => {
  return (

    <CRow>
    <CCol sm="6" lg="3">
      <CWidgetSimple
        color="gradient-primary"
        header="9.823"
        text="Members online"
        
      >
       
      </CWidgetSimple>
    </CCol>

   
  </CRow>
  )
}

export default Dashboard
