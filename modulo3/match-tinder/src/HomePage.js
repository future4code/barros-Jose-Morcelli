import {Header} from "./components/Header/Header"
import Card from "./components/Card/Card"
import { HomePageContainer } from "./styles"

export function HomePage () {
    return (
        <HomePageContainer>
        <Header/>

        <main>
        <Card
            img={"https://vignette.wikia.nocookie.net/disney/images/0/06/Profile_-_Jack_Skellington.jpeg/revision/latest?cb=20190316145716"}
            name={"Jack Skellington,"}
            age={28}
            bio={"Gosto de música e de sair à noite, mas também procuro alguém para me preencher."}
            />
        </main>
        </HomePageContainer>
    )
}