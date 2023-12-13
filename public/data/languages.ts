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
            country: 'Cameroun'
        },
        lang2: {
            lang: 'English',
            country: 'Cameroon'
        }
    }
]

export const AppCurrencies: CurrencyWrapper[] = [
    {
        curr1: {
            name: 'CFA',
            country: 'CEMAC',
            symbol: 'F',
            value: '1',
        },
        curr2: {
            name: 'EUR',
            country: 'European Union',
            symbol: '€',
            value: '65',
        }
    }
]
