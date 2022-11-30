import { ContactsComponent } from "./contacts/ContactsComponent"
import { FooterComponent } from "./footer/FooterComponent"
import { GalleryComponent } from "./gallery/GalleryComponent"
import { HomeComponent } from "./home/HomeComponent"
import { NavigationComponent } from "./navigation/NavComponent"
import { OurStoryComponent } from "./our-story/OurStoryComponent"
import { WorkWeekComponent } from "./work-week/WorkWeekComponent"

import textLanguage from './text.json'
import { useState } from "react"
import { OurServiceComponent } from "./ourService/OurServiceComponent"

export const MainComponent = () => {
    const [isLanguage, setIsLanguage] = useState(true)
    let text = isLanguage ? textLanguage.DE : textLanguage.EN

    return (
        <>
            <main className="container">

                <NavigationComponent text={text.nav} setIsLanguage={setIsLanguage} isLanguage={isLanguage}/>

                <HomeComponent text={text.home}/>

                <OurStoryComponent text={text.ourStory}/>

                <GalleryComponent text={text.gallery}/>

                <ContactsComponent text={text.contacts}/>

                <WorkWeekComponent text={text.workWeek}/>

                <OurServiceComponent text={text.ourService}/>

                <FooterComponent />

            </main>
        </>
    )
}