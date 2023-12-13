export interface ILanguageKey {[key: string]: string}
export interface ILanguageProvider {
    [key: string]: {
        [key: string]: string | ILanguageProvider;
    } | string;
}

const homePageTextProvider: ILanguageProvider = {
    english: {
        title: "Your Way Your Trip, Organize Your Trips as You Wish; We Will Guide You.",
        facilities: {
            section: "Trip Facilities",
            title: "Travel in Comfort with Trip Facilities",
            slogan: "At Flight Facilities, we believe that your journey should be just as enjoyable as your destination.",
            seeAll: "See All Facilities"
        },
        express: {
            section: "Express Trip",
            title: "Featured Listed Trips",
            slogan: "Ridesharing, Your Way: Commute, Connect, Contribute. Your Journey, Your Savings, Your Community.",
            seeAll: "Show More"
        },
        process: {
            section: "How Its Work",
            title: "Featured Listed Trips",
            slogan: "Discover. Choose. Book. Uncomplicate your journey with our seamless process. Your adventure begins with just a few simple steps...",
            content: {
                explore: {
                    title: "Explore Your Perfect Destination",
                    description: "Embark on Journeys, Tailored for You. Explore Your Perfect Destination, One Adventure at a Time!"
                },
                choose: {
                    title: "Choose Your City, Craft Your Experience",
                    description: "From vibrant metropolises to hidden gems, pick your city and shape your journey. Your adventure begins with the perfect destination!"
                },
                book: {
                    title: "Book Your Trip, Create Your Story",
                    description: "Ready to turn your travel dreams into reality? Secure your seat, pack your bags, and let the adventure unfold. Book now and make memories that last a lifetime!"
                }
            }
        },
    },
    french: {
        title: "Votre façon de voyager, organisez vos voyages comme vous le souhaitez ; Nous vous guiderons.",
        facilities: {
            section: "Working Process",
            title: "Voyagez dans le confort de nos avantages",
            slogan: "At Flight Facilities, we believe that your journey should be just as enjoyable as your destination.",
            seeAll: "Tout voir"
        },
        express: {
            section: "Voyage Programmés",
            title: "Covoiturage, transport express, 0 stress lestgo vous guide",
            slogan: "Ridesharing, Your Way: Commute, Connect, Contribute. Your Journey, Your Savings, Your Community.",
            seeAll: "Voir plus"
        },
        process: {
            section: "Fonctionnement",
            title: "Comment ca Marche",
            slogan: "Discover. Choose. Book. Uncomplicate your journey with our seamless process. Your adventure begins with just a few simple steps...",
            content: {
                explore: {
                    title: "Recherche votre destination",
                    description: "Embark on Journeys, Tailored for You. Explore Your Perfect Destination, One Adventure at a Time!"
                },
                choose: {
                    title: "Choisissez le voyage qui vous convient",
                    description: "From vibrant metropolises to hidden gems, pick your city and shape your journey. Your adventure begins with the perfect destination!"
                },
                book: {
                    title: "Payez ou reservez",
                    description: "Ready to turn your travel dreams into reality? Secure your seat, pack your bags, and let the adventure unfold. Book now and make memories that last a lifetime!"
                }
            }
        },
    }
}

export default homePageTextProvider;