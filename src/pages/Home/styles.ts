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
export const HomeCards = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

export const HomeCard = styled.article`
  height: 260px;
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;

  cursor: pointer;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      flex: 1;
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    overflow-y: hidden;
  }

  &:hover {
    transition: border-color 0.1s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
