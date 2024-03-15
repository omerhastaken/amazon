import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <Search>
        <input type='text'>
        
        </input>
      </Search>
    </Container>
  );
}

const Container = styled.nav`
    background-color: #131921;

`

const Logo = styled.img`
    width: 100px;
    margin-top: 18px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
`

const Search = styled.div`

`

export default Header