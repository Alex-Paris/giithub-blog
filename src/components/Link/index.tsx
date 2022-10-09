import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorHTMLAttributes } from 'react'

import { LinkContainer } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export function Link({ text, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {text} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
  )
}
