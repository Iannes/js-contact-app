import { updateView } from './updateView'
export const fetchData = () => {
  console.log('Fetching data..')
  let data = []

  // const base_url = 'http://localhost:3000'
  // const db_path = `${base_url}/users`;

  // // Retrieve our data from the database
  // return fetch(db_path)
  //   .then(response => response.json())
  //   .then(data => updateView(data))

    let archive = {},
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      archive[keys[i]] = localStorage.getItem(keys[i]);
    }

  Object.keys(archive).forEach(key => {
    // console.log(key);          // the name of the current key.
    // console.log(archive[key]); // the value of the current key.
    let keys = archive[key]
    data.push(keys)

    return data
  });

  updateView(data)

}