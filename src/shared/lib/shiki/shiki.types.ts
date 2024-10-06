import { BundledLanguage, LanguageInput, SpecialLanguage, StringLiteralUnion } from 'shiki'

export type ShikiLang = LanguageInput | SpecialLanguage | StringLiteralUnion<BundledLanguage, string>