'use client';

import { useLocale } from './LocaleProvider';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const { locale, setLocale } = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en' as const, name: 'English', flag: '🇺🇸' },
        { code: 'fr' as const, name: 'Français', flag: '🇫🇷' }
    ];

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    const switchLanguage = (newLocale: 'en' | 'fr') => {
        setLocale(newLocale);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher position-relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-language d-flex align-items-center gap-2"
                aria-label="Change language"
            >
                <span className="flag">{currentLanguage.flag}</span>
                <span className="lang-code d-none d-md-inline">{currentLanguage.code.toUpperCase()}</span>
                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'} small`}></i>
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            className={`lang-option ${locale === lang.code ? 'active' : ''}`}
                        >
                            <span className="flag">{lang.flag}</span>
                            <span className="lang-name">{lang.name}</span>
                            {locale === lang.code && <i className="bi bi-check-lg ms-auto"></i>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
