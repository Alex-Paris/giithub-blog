import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { useEffect, useState } from 'react'

import { Input } from '../../components/Input'
import { api } from '../../lib/axios'

import { Profile } from './components/Profile'
import { HomeCard, HomeCards, HomeContainer, HomeSearch } from './styles'

interface GithubIssueData {
  title: string
  body: string
  url: string
  created_at: string
}

interface GithubIssuesData {
  items: GithubIssueData[]
}

export function Home() {
  const [search, setSearch] = useState('')
  const [githubIssues, setGithubIssues] = useState<GithubIssuesData>()

  const issuesAmount = githubIssues?.items.length || 0

  useEffect(() => {
    const queryString =
      'q=' + encodeURIComponent(`${search} repo:Alex-Paris/giithub-blog`)

    api
      .get<GithubIssuesData>(`search/issues?${queryString}`)
      .then((response) => setGithubIssues(response.data))
  }, [search])

  return (
    <div>
      <Profile />

      <HomeContainer>
        <HomeSearch>
          <div>
            <h3>Publicações</h3>
            <span>{issuesAmount} publicações</span>
          </div>
          <Input
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearch(e.target.value)}
          />
        </HomeSearch>

        <HomeCards>
          {githubIssues?.items.map((issue) => (
            <HomeCard key={issue.url}>
              <header>
                <h3>{issue.title}</h3>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>
              <p>{issue.body}</p>
            </HomeCard>
          ))}
        </HomeCards>
      </HomeContainer>
    </div>
  )
}
