import 'server-only'
 
export type Locale = keyof typeof dictionaries
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => {
  if (typeof dictionaries[locale] === 'function')
    return dictionaries[locale]()
  else 
    return dictionaries["it"]()
}