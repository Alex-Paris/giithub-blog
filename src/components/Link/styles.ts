import styled from 'styled-components'

export const LinkContainer = styled.a`
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['brand-blue']};

  border-bottom: 1px solid transparent;
  cursor: pointer;

  transition: border-color 0.1s;

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
  }
`
