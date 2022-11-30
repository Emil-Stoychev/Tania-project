import './ourService.css'

export const OurServiceComponent = ({ text }) => {
    return (
        <section className="ourService" id='ourService'>
            <article className="sub-contacts">
                <h2>{text.mainHeader}</h2>
                <div className="divider"></div>

                <div className="options">

                    <div className="card">
                        <img src="./images/outside-seating.png" />
                        <h3>{text.seating}</h3>
                    </div>

                    <div className="card">
                        <img src="./images/smoking.webp" />
                        <h3>{text.smoking}</h3>
                    </div>

                    <div className="card">
                        <img src="./images/pets.webp" />
                        <h3>{text.pets}</h3>
                    </div>

                    <div className="card">
                        <img src="./images/cash.png" />
                        <h3>{text.cash}</h3>
                    </div>
                </div>

            </article>
        </section>
    )
}