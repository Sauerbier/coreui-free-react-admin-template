import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow
} from '@coreui/react-ts'
import CIcon from '@coreui/icons-react'

const Page500 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-muted float-start">The page you are looking for is temporarily unavailable.</p>
            </span>
            <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon name="cil-magnifying-glass" />
              </CInputGroupText>
              <CFormControl size="16" type="text" placeholder="What are you looking for?" />
              <CInputGroupText>
                <CButton color="info">Search</CButton>
              </CInputGroupText>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500