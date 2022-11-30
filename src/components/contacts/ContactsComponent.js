import './contacts.css'

export const ContactsComponent = ({ text }) => {
    return (

        <section className="contacts" id="contacts">
            <article className="sub-contacts">
                <h2>{text.mainHeader}</h2>
                <div className="divider"></div>

                <div className="container">

                    <div className="facebook">
                        <img src="./images/facebook.png" alt="" />
                        <h3>{text.facebook.mainHeader}</h3>
                        <a
                            href="https://www.facebook.com/profile.php?id=100069723346052" target='_blank' >
                            {text.facebook.a}
                        </a>
                        <p>{text.facebook.p}</p>
                    </div>

                    <div className="location">
                        <img src="./images/logo2.png" alt="" />
                        <h3>{text.location.mainHeader}</h3>
                        <a
                            href="https://www.google.com/maps/place/Coffee+Shop/@48.1913598,16.3857963,3a,89.9y,97.09h,88.46t/data=!3m6!1e1!3m4!1s8lPlgcWlIDErvPgh9zcyrQ!2e0!7i16384!8i8192!4m15!1m9!3m8!1s0x476d076305d41bd9:0x43a78d9cfd3d62c!2zRmFzYW5nYXNzZSAzMywgMTAzMCBXaWVuLCDQkNCy0YHRgtGA0LjRjw!3b1!8m2!3d48.1908889!4d16.3859256!14m1!1BCgIgARICCAI!3m4!1s0x476d07630e93a53d:0x7fd6680134430a28!8m2!3d48.1913019!4d16.385878" target='_blank' >
                            {text.location.a}
                        </a>
                        <p>{text.location.p}</p>
                    </div>

                    <div className="phone">
                        <img src="./images/phone.webp" alt="" />
                        <h3>{text.phone.mainHeader}</h3>
                        <h4>{text.phone.a}</h4>

                        <p>{text.phone.p}</p>
                    </div>

                    <div className="instagram">
                        <img src="./images/instagram.jpg" alt="" />
                        <h3>{text.instagram.mainHeader}</h3>
                        <a
                            href="https://www.instagram.com/thonyskaffe/" target='_blank' >
                            {text.instagram.a}
                        </a>
                        <p>{text.instagram.p}</p>
                    </div>

                </div>

            </article>

        </section>
    )
}