import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 912px;
  margin: 4.5rem auto 0;
  padding: 0 1.5rem;
`

export const HomeSearch = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 0;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
