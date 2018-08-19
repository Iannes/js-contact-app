
export const renderView = (element, list) => {

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
        `<li data-key=${i + 1} class="list-item">
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