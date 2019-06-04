import { updateView } from './updateView'
export const fetchData = () => {

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
    // console.log('keys',keys);
    return data
  });

  updateView(data)

}