import {fetchData} from './components/fetchData'
import { setId } from './components/setId'
import { showEditModal } from './components/showEditModal'
import { decrementCount } from './components/decrementCount'
import { resetStorageKeys } from './components/resetStorageKeys'
let user = {};
let newUser = {}
let obj = {}

export default class App {

  constructor() {

    const addContacts = document.getElementById('add-contact');
    addContacts.addEventListener('click', this.openLightbox);
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', this.closeLightbox);
    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', this.closeLightbox);
    const saveContact = document.getElementById('save-contact');
    saveContact.addEventListener('click', this.saveContact)

  }

  // initialize app and retrieve data
  init() {
    fetchData()
    this.addListeners()
  }

  addListeners() {

    // add listeners to edit and delete buttons
    const editContact = document.getElementsByClassName('edit-contact');
    const editArr = [...editContact]
    editArr.map(contact => contact.addEventListener('click', this.editContact))

    const deleteContact = document.getElementsByClassName('delete-contact');
    const deleteArr = [...deleteContact]
    deleteArr.map(contact => contact.addEventListener('click', this.deleteContact))
  }

  openLightbox() {
    const modal = document.querySelector('#add-modal')
    modal.classList.add('open')
  }
  closeLightbox() {
    const modal = document.querySelector('#add-modal')
    modal.classList.remove('open')
  }


  saveContact(e) {

    e.preventDefault();
      //get the form group
      const form = document.getElementById('form').elements
      // convert to array
      const inputList = [...form]
      // Filter out button elements
      const filtered = inputList.filter(i => i.className !== 'button' && i.className !== 'button is-primary')
      // loop through inputs array and save data into an object
      filtered.map((input, i) => {
         newUser = { [input.attributes.name.value]: input.value }
            obj = Object.assign(user, newUser);
        })
          // every save button carries the list-item's id
          // if the button has an edit id this means we are on editing modal
          // showeditmodal.js sets that id when rendering the modal
        if (this.id == 'edit') {
            // get the data key prop from the save button
            const dataKey = this.dataset.primary
            // remove previous item before updating
            window.localStorage.removeItem(dataKey)
            // set the edited info with the same id as a primary key
            window.localStorage.setItem(dataKey, JSON.stringify(obj));

        } else {
            // Set unique id every time the form is submitted
            setId()
            // This id will be our primary key to edit contacts
            let countId = window.localStorage.getItem('count')
            window.localStorage.setItem(countId, JSON.stringify(obj));
        }

        // reload page from cache
        window.location.reload(false);

  }

  editContact() {
    const primaryKey = (this.attributes[0].nodeValue);
    //retrieve contact details using primary key
    const stringObj = window.localStorage.getItem(primaryKey)

    let parsedObj = JSON.parse(stringObj)
    // decrement count in localstorage
    showEditModal('form', parsedObj, primaryKey)
  }

  deleteContact() {
    // retrieve contact key
    const dataKey = this.dataset.key

    let result = confirm("Are you sure you want to delete this contact ?");

      if (result) {
        // decrement count on localStorage
        decrementCount()
        // remove item using the data-key
        window.localStorage.removeItem(dataKey)

        // reload page
        window.location.reload(true);
        // const newKey = this.dataset.key

      }
  }
}




