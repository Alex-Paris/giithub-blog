import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import { Link } from '../../../../components/Link'
import { api } from '../../../../lib/axios'

import {
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileTitle,
} from './styles'

interface GithubUserData {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
  avatar_url: string
}

export function Profile() {
  const [githubUser, setGithubUser] = useState<GithubUserData>()

  useEffect(() => {
    api
      .get<GithubUserData>('users/Alex-Paris')
      .then((response) => setGithubUser(response.data))
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={githubUser?.avatar_url} alt="" />
        <div>
          <ProfileTitle>
            <h2>{githubUser?.name}</h2>

            <Link text="github" href={githubUser?.html_url} />
          </ProfileTitle>
          <p>{githubUser?.bio}</p>
          <ProfileInfo>
            <a>
              <FontAwesomeIcon icon={faGithub} />
              {githubUser?.login}
            </a>
            <a>
              <FontAwesomeIcon icon={faBuilding} />
              {githubUser?.company}
            </a>
            <a>
              <FontAwesomeIcon icon={faUserGroup} />
              {githubUser?.followers} seguidores
            </a>
          </ProfileInfo>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
