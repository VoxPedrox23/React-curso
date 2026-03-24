import './App.css'
import { TwitterFollowCard } from './twitterFollowCard.jsx'
export function App() {
    return (
        <section className="App">
            <TwitterFollowCard name="Pedro Luis Navarro" userName="petercrafter555" initialIsFollowing={false} />
            <TwitterFollowCard name="Jose Romero" userName="jerast" initialIsFollowing={true} />
        </section>

    )
}