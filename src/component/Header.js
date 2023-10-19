import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Header = () => {
    const [showBasic, setShowBasic] = useState(true);
  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <MDBCollapse show={showBasic}>
          <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarItem >
              <MDBNavbarLink aria-current='page'>
              <Link to="/"> Home</Link> 
               
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink aria-current='page' >
               <Link to="/contact"> Contact</Link>
              </MDBNavbarLink>
            
            </MDBNavbarItem>
     
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  </header>  )
}

export default Header