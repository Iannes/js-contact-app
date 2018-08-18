
export const renderView = (element, list) => {
  console.log('rendering views');

    const targetElement = document.getElementById(element)
    // Clear list
    targetElement.innerHTML = ''
    list.map((item, i) => {
      let jsonItem
      // if the first character is a curly bracket we need to parse it
     if(item[0] == '{') {
        jsonItem = JSON.parse(item)
     } else {
       return false;
     }

      targetElement.innerHTML +=
        `<li class="list-item">
              <a data-key=${i} class="panel-block">${jsonItem.firstName ? jsonItem.firstName : false}</a>
              <a data-key=${i} class="panel-block">${jsonItem.lastName ? jsonItem.lastName : false}</a>
              <div class="button-container">
                <a data-key=${i} id="edit-contact" class="panel-block">edit</a>
                <a data-key=${i} id="delete-contact" class="panel-block delete-contact">delete</a>
              </div>
          </li> `
    })
}