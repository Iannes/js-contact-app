/* { TODO -->  Fix Delete BUG }
================================
**  When deleting a contact the ids get updated in the DOM
**  as the view rerenders every time. While the localstorage item
**  gets deleted, the localStorage keys need to be reproduced.


**  That way, they will match the newly rendered DOM ids
**  and will allow the app to keep track of what needs to be deleted


**  The idea is to pick up the json object that is stored as a data attribute in each list-item
**  clear the localStorage and set everything with the DOM ids as keys
*
*

=================================================================
*/

export const resetStorageKeys = () => {
  // get json object stored in the dom

  // use its id to set as key

  // set the rest as values
}

