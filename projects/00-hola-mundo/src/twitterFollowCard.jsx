import './twitterFollowCard.css'
import { useState } from 'react'
export function TwitterFollowCard({ name, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //hola
    const buttonClassName = isFollowing
        ? 'tw-followcard-button is-following'
        : 'tw-followcard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Following' : 'Follow'
    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img
                    className="tw-followcard-avatar"
                    src={`https://unavatar.io/x/${userName}`}
                    alt="avatar" />
                <div className='tw-followcard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followcard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    <span className='tw-followcard-text'>{text}</span>
                    <span className='tw-followcard-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}