import { fetchData } from './fetchData'
export const findDuplicates = (inputToCheck) => {

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
    console.log(data);

    // let str_count = localStorage.getItem("count");
    data.map((item, i) => {
      let jsonItem
      // if the first character is a curly bracket we need to parse it
      if (item[0] == '{') {
        jsonItem = JSON.parse(item)
        console.log(jsonItem);
      } else {
        return false;
      }
    })
  });
}