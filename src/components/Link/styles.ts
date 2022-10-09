import styled from 'styled-components'

export const LinkContainer = styled.a`
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['brand-blue']};

  border-bottom: 1px solid transparent;

  text-decoration: inherit;
  outline: 0;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover {
    transition: border-color 0.2s;
    border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
  }
`
