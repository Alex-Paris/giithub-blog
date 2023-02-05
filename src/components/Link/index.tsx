import { AnchorHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'

import { LinkContainer } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string
}

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <LinkContainer>
      {to !== undefined ? (
        <NavLink to={to}>{children}</NavLink>
      ) : (
        <a {...rest}>{children}</a>
      )}
    </LinkContainer>
  )
}
