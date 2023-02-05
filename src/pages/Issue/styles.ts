import styled from 'styled-components'

export const IssueContainer = styled.section`
  width: 100%;
  max-width: 912px;
  height: 212px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const IssueContent = styled.div`
  padding: 2rem 2.5rem;
  gap: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  margin-top: -7rem;

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

export const IssueLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IssueTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  margin-top: 0.75rem;
`

export const IssueInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme['base-span']};

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`

export const IssueBody = styled.div`
  padding: 2.5rem 2rem;
  margin-left: 18rem;
  margin-right: 18rem;
`
