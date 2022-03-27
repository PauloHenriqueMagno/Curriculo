import { setLanguage } from "./actions"

export const setLanguageThunk = (language) => (dispatch) => {

  dispatch(setLanguage(language))
}