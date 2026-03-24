import './twitterFollowCard.css'
export function TwitterFollowCard({ name, userName, isFollowing }) {
    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img
                    className="tw-followcard-avatar"
                    src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671122.jpg"
                    alt="avatar" />
                <div className='tw-followcard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followcard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followcard-button' >Follow</button>
            </aside>
        </article>
    )
}