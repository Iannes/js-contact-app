
export const showEditModal = (element, object, primaryKey) => {

     const targetElement = document.getElementById(element)
     // get the modal
      const modal = document.getElementById('add-modal')
      // get save button so that we can change its id
      const saveContact = document.getElementById('save-contact')
      const modalTitle = document.getElementsByClassName('modal-card-title')

      modalTitle[0].textContent = 'Edit Contact'
      modal.classList.add('open')
      // change button's id to signify we are on editing mode
      saveContact.id = 'edit'
      // set the primary key to keep track of what needs to be edited
      saveContact.setAttribute('data-primary', primaryKey)
      const arr = [...targetElement]
        // Populate modal's inputs with localstorage data
       arr.map(item => {
         switch (item.id) {
           case 'first-name':
             item.value = object.firstName
             break;
           case 'last-name':
             item.value = object.lastName
             break;
           case 'phone':
             item.value = object.phone
             break;
           case 'address':
             item.value = object.address
             break;
         }

       })
  }