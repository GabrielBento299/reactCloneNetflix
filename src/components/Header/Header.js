import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://about.netflix.com/images/logo.png" alt="logo" />
                </a>
            </div>
            <div className="header--user">
                <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="userProflie" />
            </div>
        </header>
    )
}