import './ourStory.css'

export const OurStoryComponent = ({text}) => {
    return (
        <section className="whats-the-hustle" id="story">
            <article>
                <img src="./images/zavedenie-otvutre.jpg" alt="" />
                <img src="./images/zavedenie-otvutre2.jpg" alt="" />
            </article>

            <article>
                <h2>{text.mainHeader}</h2>
                <p>{text.desc}</p>
            </article>
        </section>
    )
}