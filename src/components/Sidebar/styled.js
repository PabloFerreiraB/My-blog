import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

export const SidebarContainer = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  transition: ${transitions.ALL};
  border-bottom: 1px solid var(--borders);

  ${media.lessThan("large")`
    align-items: flex-start;
    border: 0;
    height: calc(100% - 50px);
    padding: 0;
    position: inherit;
    width: 100%;
    transform: ${props =>
      props.isMenuOpen ? 'translateY(0)' : 'translateY(100vh)'};
  `}
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`