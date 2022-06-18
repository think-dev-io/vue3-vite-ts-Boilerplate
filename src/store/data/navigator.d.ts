export interface customNavigator extends Navigator {
  userLanguage?: string
  browserLanguage?: string
  languages: readonly string[]
  language: string
}
