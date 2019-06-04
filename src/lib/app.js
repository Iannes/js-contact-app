import {fetchData} from './components/fetchData'
import { setId } from './components/setId'
let user = {};
let newUser = {}
let obj = {}

export default class App {

  constructor(id, firstName, lastName, address, phone) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;

    const addContacts = document.getElementById('add-contact');
    addContacts.addEventListener('click', this.openLightbox);
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', this.closeLightbox);
    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', this.closeLightbox);
    const saveContact = document.getElementById('save-contact');
    saveContact.addEventListener('click', this.saveContact)
  }

  // initialize our app and retrieve data
  init() {
    fetchData()
  }

  openLightbox() {
    const modal = document.querySelector('.modal')
    modal.classList.add('open')
  };
  closeLightbox() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('open')
  };

  saveContact(e) {

    e.preventDefault();
  //get the form group
  const form = document.getElementById('form').elements
  // convert to array
  const inputList = [...form]
  // Filter out button elements
  const filtered = inputList.filter(i => i.className !== 'button' && i.className !== 'button is-primary')
  // loop through array and save data into an object
  filtered.map((input, i) => {
      newUser = { [input.attributes.name.value]: input.value }
      obj = Object.assign(user, newUser);
    })
    // Set unique id every time the form is submitted
    setId()
    // This id will be our primary key
    let countId = window.localStorage.getItem('count')
    window.localStorage.setItem(countId, JSON.stringify(obj));
    // reload page from cache
    window.location.reload(false);
  }

  edit(contact) {
    //retrieve contact details

    // run a match to see what's changed

    //save to local storage
  }

  delete(contact) {
    // retrieve contact

    // clear from localstorage
  }

}




