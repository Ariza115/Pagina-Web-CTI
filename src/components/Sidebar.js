import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

//FONDO DIV DEL HEADER
const Nav = styled.div`
  background:#1436A9 ;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
// DIV DEL BOTON DEL MENU DESPLEGABLE Y TITULO
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
//DIV DE LAS OPCCIONES DEL MENU
const SidebarNav = styled.nav`
  background: #1436A9 ;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
            <div><h1 className='titulo'>TUYO BUS</h1></div>
            
          </NavIcon>
        </Nav>


        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
