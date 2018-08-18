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
    saveContact.addEventListener('click', this.saveContact);

  }

  // initialize our app and retrieve data
  init() {
    this.updateView(data)
  }

  retrieveContacts() {

  }


  // retrieve contacts from localstorage and updates view
  updateView(source) {
    this.renderView('list', source)
  }

  renderView(element, list) {

    const targetElement = document.getElementById(element)
      list.map((item, i) => {
        targetElement.innerHTML +=
          `<li class="list-item">
              <a data-key=${i} class="panel-block">${item.firstName}</a>
              <div class="button-container">
                <a data-key=${i} id="edit-contact" class="panel-block">edit</a>
                <a data-key=${i} id="delete-contact" class="panel-block delete-contact">delete</a>
              </div>
          </li> `
      })
    }

  openLightbox() {
    const modal = document.querySelector('.modal')
    modal.classList.add('open')
  }
  closeLightbox() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('open')
  }

  saveContact(e) {
    e.preventDefault();
    //get the form group
    const form = document.getElementById('form').elements
    // convert to array
    const inputList = [...form]
    // loop through array and save data
    inputList.map(input => {
      localStorage.setItem(input.attributes.name.value, input.value);

    })
  }


  add(contact) {

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


  handleSubmit(e) {
    e.preventDefault();
    alert('submitted')

    // check to see if contact exists

    // if not save to local storage
  }


  submit() {
    const form = document.getElementById("form")
    this.form.onSubmit = alert('hi')
  }

}




