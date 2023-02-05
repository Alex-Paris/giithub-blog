import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'

import { Link } from '../../components/Link'
import { api } from '../../lib/axios'

import {
  IssueContainer,
  IssueContent,
  IssueLink,
  IssueTitle,
  IssueInfo,
  IssueBody,
} from './styles'

interface GithubIssueData {
  title: string
  body: string
  comments: number
  html_url: string
  created_at: string
  user: {
    login: string
  }
}

export function Issue() {
  const { id } = useParams()

  const [githubIssue, setGithubIssue] = useState<GithubIssueData>()

  useEffect(() => {
    const urlSearch = `repos/Alex-Paris/giithub-blog/issues/${id}`

    api.get(urlSearch).then((response) => setGithubIssue(response.data))
  }, [id])

  return (
    <>
      <IssueContainer>
        <IssueContent>
          <div>
            <IssueLink>
              <Link to="/">
                <FontAwesomeIcon icon={faChevronLeft} />
                {' VOLTAR'}
              </Link>

              <Link href={githubIssue?.html_url}>
                {'VER NO GITHUB '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </IssueLink>

            <IssueTitle>{githubIssue?.title}</IssueTitle>

            <IssueInfo>
              <a>
                <FontAwesomeIcon icon={faGithub} />
                {githubIssue?.user.login}
              </a>
              <a>
                <FontAwesomeIcon icon={faCalendarDay} />
                {githubIssue?.created_at &&
                  formatDistanceToNow(new Date(githubIssue?.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
              </a>
              <a>
                <FontAwesomeIcon icon={faComment} />
                {githubIssue?.comments} comentários
              </a>
            </IssueInfo>
          </div>
        </IssueContent>
      </IssueContainer>

      {githubIssue?.body && (
        <IssueBody>
          <ReactMarkdown>{githubIssue?.body}</ReactMarkdown>
        </IssueBody>
      )}
    </>
  )
}
