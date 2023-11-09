interface ILanguageProvider {
    [key: string]: {
        [key: string]: string;
    }
}

const homePageTextProvider: ILanguageProvider = {
    english: {
        title: "Your Way Your Trip, Organize Your Trips as You Wish; We Will Guide You.",
    },
    french: {
        title: "Votre façon de voyager, organisez vos voyages comme vous le souhaitez ; Nous vous guiderons.",
    }
}

export default homePageTextProvider;