import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:active {
    border-color: ${(props) => props.theme['brand-blue']};
  }
`
