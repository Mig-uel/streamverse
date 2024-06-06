import styled from 'styled-components'

export const NavBar = styled.div`
  color: white;

  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavTitle = styled.div`
  font-size: 1.2em;
  margin-left: 20px;
`

export const NavActions = styled.div`
  display: flex;
  gap: 20px;

  margin-right: 20px;
  height: 25px;
  align-items: center;

  a {
    opacity: 0.5;
  }

  a:hover {
    opacity: 1;
    border-bottom: 2px solid white;
    transition: 0.2s;
  }

  @media only screen and (max-width: 768px) {
    a {
      display: none;
    }
  }
`
