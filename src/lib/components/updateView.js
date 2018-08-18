import { renderView } from './renderView'
export const updateView = (data) => {
  console.log('updating view')
  renderView('list', data)
}