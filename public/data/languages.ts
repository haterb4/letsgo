interface Language {
    lang: string;
    country: string;
}

interface LanguageWrapper {
    lang1: Language,
    lang2: Language
}

interface Currency {
    name: string;
    country: string;
    symbol: string;
    value: string;
}

interface CurrencyWrapper {
    curr1: Currency;
    curr2: Currency;
}
export const AppLanguages: LanguageWrapper[] = [
    {
        lang1: {
            lang: 'Francais',
            country: 'France'
        },
        lang2: {
            lang: 'English',
            country: 'United State'
        }
    }
]

export const AppCurrencies: CurrencyWrapper[] = [
    {
        curr1: {
            name: 'USD',
            country: 'United States',
            symbol: '$',
            value: '55',
        },
        curr2: {
            name: 'EUR',
            country: 'European Union',
            symbol: '€',
            value: '65',
        }
    }
]
