import './gallery.css'

export const GalleryComponent = ({ text }) => {
    return (
        <section className="top-images" id="gallery">

            <article className="sub-contacts">
                <h2>{text.mainHeader}</h2>
                <div className="divider"></div>

                <div className='container'>

                    <div className="all-images">
                        <img src="./images/torta.jpg" />
                        <img src="./images/torta2.jpg" />

                    </div>

                    <div className="all-images">
                        <img src="./images/qica.jpg" />
                        <img src="./images/cvetq.jpg" />
                    </div>

                    <div className="all-images">
                        <img src="./images/desert.jpg" />
                        <img src="./images/desert1.jpg" />
                    </div>

                    <div className="all-images">
                        <img src="./images/desert2.jpg" />
                        <img src="./images/cvete.jpg" />
                    </div>

                </div>
            </article>

        </section>
    )
}