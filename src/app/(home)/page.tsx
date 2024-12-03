import { DownDocs } from './sections/DownDocs/DownDocs'
import { Header } from './sections/Header/Header'
import { MainSection } from './sections/MainSection/MainSection'

export default function Page() {
  return (
    <div>
      <Header/>
      <MainSection/>
      <DownDocs/>
    </div>
  )
}
