
export const renderView = (element, list) => {

    const targetElement = document.getElementById(element)
    // Clear list
    targetElement.innerHTML = ''

    list.map((item, i) => {
      let strObj
      let jsonItem
      let newObj
      // if the first character is a curly bracket we parse its data
     if(item[0] == '{') {
        jsonItem = JSON.parse(item)
        jsonItem["id"] = (`${i + 1}`)

     } else {
       return false;
     }

      targetElement.innerHTML +=
        `<li data-json="${JSON.stringify(jsonItem)}" data-group=${i + 1}  class="list-item">
              <a data-key=${i + 1} class="panel-block">${jsonItem.firstName ? jsonItem.firstName : 'N / A'}</a>
              <a data-key=${i + 1} class="panel-block">${jsonItem.lastName ? jsonItem.lastName : 'N / A'}</a>
              <a data-key=${i + 1} class="panel-block hidden">${jsonItem.phone ? jsonItem.phone : 'N / A'}</a>
              <a data-key=${i + 1} class="panel-block hidden">${jsonItem.address ? jsonItem.address : 'N / A'}</a>
              <div class="button-container">
                <a data-key=${i + 1} id="edit-contact" class="panel-block edit-contact">edit</a>
                <a data-key=${i + 1} id="delete-contact" class="panel-block delete-contact">delete</a>
              </div>
          </li> `
    })
}