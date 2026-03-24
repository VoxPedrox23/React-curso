import './App.css'
import { TwitterFollowCard } from './twitterFollowCard.jsx'
export function App() {
    return (
        <section className="App">
            <TwitterFollowCard name="Pedro Luis Navarro" userName="pterdaas" />
            <TwitterFollowCard name="Jose Romero" userName="jerast" />
        </section>

    )
}