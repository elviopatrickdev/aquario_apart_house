import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2">
      <button onClick={() => i18n.changeLanguage('pt')}>
        PT
      </button>

      <button onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>

      <button onClick={() => i18n.changeLanguage('fr')}>
        FR
      </button>

      <button onClick={() => i18n.changeLanguage('it')}>
        IT
      </button>
    </div>
  )
}

export default LanguageSwitcher