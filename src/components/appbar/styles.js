import styled from 'styled-components';

const AppBarStyles = styled.nav`
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    height:5vh;
    padding: 0 1rem;
`;


const AppBarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBarItemGroup = styled.li`
  
`;

const AppBarItem = styled.li`
`;
const AppBarLogo = styled.img`
  
`;

export {AppBarStyles, AppBarItems, AppBarItemGroup, AppBarItem, AppBarLogo};