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
        destinations: {
            section: "Explore Destinations",
            title: "Explore Your Destination with Our Helpful Guides and Tips",
            slogan: "Ridesharing, Your Way: Commute, Connect, Contribute. Your Journey, Your Savings, Your Community.",
            seeAll: "See All Destinations"
        },
        mobileApp: {
            title: "Download Our Mobile App",
            description: "Take your travels to the next level. Unlock the world in the palm of your hand. Download our app now and turn every day into an adventure!",
        },
        faq: {
            title: "If you have any questions, we have the answers",
            slogan: "Got questions? We've got answers. Check out our Frequently Asked Questions for everything you need to know about your journey. Your adventure awaits clarification!"
        },
        testimonials: {
            section: "Testimonial",
            title: "Our Satisfied Customers Says",
        },
        takeALook: {
            section: "Exploring properties",
            title: "Take a Detailed Look Inside Our Properties",
            slogan: "Dive into a world of possibilities. Browse, dream, find. Your ideal property is just a click away. Start exploring now!",
        },
        agents: {
            section: "Expert Agent",
            title: "Meet Our Experienced Agents",
            slogan: "Journey with confidence. Our experienced drivers are more than just chauffeurs – they're your guides to safe and memorable travels. Get to know the faces behind your next adventure.",
            action: "Call To Action",
            actionTitle: "Find your dream trip with our experts",
            contact: "Contact Us",
        }
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
        destinations: {
            section: "Explorez des Destinations",
            title: "Visitez des lieux emblematiques grace a nos guides et recommandations",
            slogan: "Ridesharing, Your Way: Commute, Connect, Contribute. Your Journey, Your Savings, Your Community.",
            seeAll: "Toutes les destinations"
        },
        mobileApp: {
            title: "Telecharger l'application mobile",
            description: "Take your travels to the next level. Unlock the world in the palm of your hand. Download our app now and turn every day into an adventure!",
        },
        faq: {
            title: "Une question? nous avons peut etre une reponse",
            slogan: "Got questions? We've got answers. Check out our Frequently Asked Questions for everything you need to know about your journey. Your adventure awaits clarification!"
        },
        testimonials: {
            section: "Temoignages",
            title: "Ce que disent nos clients",
        },
        takeALook: {
            section: "Explorez les fonctionalités",
            title: "Decouvrez les forces de l'application let'sgo",
            slogan: "Ridesharing, Your Way: Commute, Connect, Contribute. Your Journey, Your Savings, Your Community.",
        },
        agents: {
            section: "Nos Agents",
            title: "Rencontrer un expert",
            slogan: "Journey with confidence. Our experienced drivers are more than just chauffeurs – they're your guides to safe and memorable travels. Get to know the faces behind your next adventure.",
            action: "Appellez pour un rendez vous",
            actionTitle: "Trouvez le voyage qui vous convient avec nos agents",
            contact: "Contactez Nous",
        },
    }
}

export default homePageTextProvider;