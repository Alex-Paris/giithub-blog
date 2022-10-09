import styled from 'styled-components'

import backgroundCover from '../../assets/background-cover.svg'

export const HeaderContainer = styled.header`
  background: url(${backgroundCover});
  background-size: cover;
  background-position: center;
  padding: 4rem 0 8.375rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 148px;
    width: 100%;
    height: 98px;
  }
`
