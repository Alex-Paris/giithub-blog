import { Input } from '../../components/Input'

import { Profile } from './components/Profile'
import { HomeCard, HomeCards, HomeContainer, HomeSearch } from './styles'

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

        <HomeCards>
          <HomeCard>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = `&rsquo;`bar`&rsquo;`; // foo is now a
              string foo = true; // foo is now a boolean
            </p>
          </HomeCard>
          <HomeCard>
            <header>
              <h3>mimi</h3>
              <span>h1 dia</span>
            </header>
            <p>dasdmasidasiasdasd</p>
          </HomeCard>
          <HomeCard>
            <header>
              <h3>mimi</h3>
              <span>h1 dia</span>
            </header>
            <p>dasdmasidasiasdasd</p>
          </HomeCard>
        </HomeCards>
      </HomeContainer>
    </div>
  )
}
