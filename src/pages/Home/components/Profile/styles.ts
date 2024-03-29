import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 912px;
  height: 212px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const ProfileContent = styled.div`
  padding: 2rem 2.5rem;
  gap: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  margin-top: -7rem;

  > img {
    width: 148px;
    height: 148px;

    background: white;
    border-radius: 8px;
  }

  > div {
    flex: 1;
    align-self: stretch;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding-top: 0.5rem;
    row-gap: 0.5rem;

    p {
      flex: 1;
    }
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
