import { Input } from '../../components/Input'

import { Profile } from './components/Profile'
import { HomeContainer, HomeSearch } from './styles'

export function Home() {
  return (
    <div>
      <Profile />

      <HomeContainer>
        <HomeSearch>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>
          <Input placeholder="Buscar conteúdo" />
        </HomeSearch>
      </HomeContainer>
    </div>
  )
}
