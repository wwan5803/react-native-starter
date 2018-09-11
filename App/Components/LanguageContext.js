import React from 'react'
export const LanguageContext = React.createContext({
  language: 'swahili', // default language is Swahili
  changeLanguage: () => null,
})

export const LanguageConsumer = LanguageContext.Consumer

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { language: 'swahili' }
    this.changeLanguage = this.changeLanguage.bind(this)
  }
  changeLanguage() {
    this.setState({
      language: this.state.language === 'swahili' ? 'english' : 'swahili',
    })
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          changeLanguage: this.changeLanguage,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
