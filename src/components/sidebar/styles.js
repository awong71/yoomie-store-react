import styled from 'styled-components';

const SideBarContainer = styled.aside`
  background-color: #F2E0D5;
  box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.2);
  width:10%;
  height:95vh;
  display:flex;
  flex-wrap:wrap;
`;

const SideBarItems = styled.section`
    width:100%;
`;

const SideBarItem = styled.a`
  display: block;
  color: #494949;
  padding: 1rem;

`;

const SideBarFooter = styled.footer`
  display:flex;
  align-items:flex-end;
  justify-content:center;
  width:100%;
  padding:1rem;
`;

const SideBarFooterItems = styled.ul`
  display:flex;
  justify-content:space-between;
  width:100%;
`;

const SideBarFooterItem = styled.li`
  
`;

export {SideBarContainer, SideBarItem, SideBarFooter, SideBarFooterItems, SideBarFooterItem, SideBarItems}