import React from 'react'
import {
  CButton,
  CCallout,
  CDropdown,
  CButtonGroup,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const ButtonGroups = () => {
  return (
    <CRow>
      <CCol md="6">
        <CCard className="mb-4">
          <CCardHeader>
            Callout
            <DocsLink name="CCallout" />
          </CCardHeader>
          <CCardBody>
            <CCallout color="primary">Callout</CCallout>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            Button Group
            <DocsLink name="-Button/#CButtonGroup" />
          </CCardHeader>
          <CCardBody>
            <CButtonGroup>
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            Button Group
            <small> toolbar</small>
          </CCardHeader>
          <CCardBody>
            <CButtonToolbar className="mb-3">
              <CButtonGroup className="me-2">
                <CButton color="secondary">1</CButton>
                <CButton color="secondary">2</CButton>
                <CButton color="secondary">3</CButton>
                <CButton color="secondary">4</CButton>
              </CButtonGroup>
              <CButtonGroup className="me-2">
                <CButton color="secondary">5</CButton>
                <CButton color="secondary">6</CButton>
                <CButton color="secondary">7</CButton>
              </CButtonGroup>
              <CButtonGroup>
                <CButton color="secondary">8</CButton>
              </CButtonGroup>
            </CButtonToolbar>
            <CButtonToolbar className="mb-3">
              <CButtonGroup className="me-2">
                <CButton color="secondary">1</CButton>
                <CButton color="secondary">2</CButton>
                <CButton color="secondary">3</CButton>
                <CButton color="secondary">4</CButton>
              </CButtonGroup>
              <CInputGroup>
                <CInputGroupText>@</CInputGroupText>
                <CFormControl placeholder="Input group example" />
              </CInputGroup>
            </CButtonToolbar>
            <CButtonToolbar justify="between">
              <CButtonGroup>
                <CButton color="secondary">1</CButton>
                <CButton color="secondary">2</CButton>
                <CButton color="secondary">3</CButton>
                <CButton color="secondary">4</CButton>
              </CButtonGroup>
              <CInputGroup>
                <CInputGroupText>@</CInputGroupText>
                <CFormControl placeholder="Input group example" />
              </CInputGroup>
            </CButtonToolbar>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            Button Group
            <small> vertical variation</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup vertical>
              <CButton color="secondary">1</CButton>
              <CButton color="secondary">2</CButton>
              <CButton color="secondary">3</CButton>
            </CButtonGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Button Group
            <small> sizing</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup size="lg">
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
            <br />
            <br />
            <CButtonGroup>
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
            <br />
            <br />
            <CButtonGroup size="sm">
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            Button Group
            <small> nestingccc</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup>
              <CButton color="secondary">1</CButton>
              <CButton color="secondary">2</CButton>
              <CDropdown color="secondary">
                <CDropdownToggle caret color="secondary">
                  Dropdown
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CButtonGroup>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            Button Group
            <small> vertical</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup vertical>
              <CButton color="secondary">1</CButton>
              <CButton color="secondary">2</CButton>
              <CDropdown>
                <CDropdownToggle color="secondary" caret>
                  Dropdown
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CButtonGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ButtonGroups