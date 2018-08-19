import { findDuplicates } from './findDuplicates'
import { updateView } from './updateView'
export const fetchData = () => {
  console.log('Fetching data..')
  let data = []

    let archive = {},
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      archive[keys[i]] = localStorage.getItem(keys[i]);
    }

  Object.keys(archive).forEach(key => {

    let keys = archive[key]
    data.push(keys)

    return data
  });

  updateView(data)

}