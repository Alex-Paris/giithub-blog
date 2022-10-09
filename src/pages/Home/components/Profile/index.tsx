import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '../../../../components/Link'

import {
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileTitle,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <span>foto</span>
        <div>
          <ProfileTitle>
            <h2>Cameron</h2>

            <Link text="github" />
          </ProfileTitle>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileInfo>
            <a>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </a>
            <a>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </a>
            <a>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </a>
          </ProfileInfo>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
