import './home.css'

export const HomeComponent = ({text}) => {
    return (
        <section className="intro" id="home">
            <img src='./images/bg3.jpg' alt="BG image" />

            <div className="main">
                <h1>{text.mainHeader}</h1>
                <p>{text.mainP}</p>
            </div>
        </section>
    )
}