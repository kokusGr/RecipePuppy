import { Recipe } from './types'

const API_URL = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/'

export const fetchRecipes = async (ingredients: string, page: number): Promise<Recipe[]> => {
  const url = `${API_URL}?i=${ingredients}&p=${page}`
  const data = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Origin: 'localhost',
    },
  })
  try {
    const json = await data.json()
    return json.results.map((item: Recipe) => ({ ...item, title: item.title.trim() }))
  } catch (_e) {
    return []
  }
}
