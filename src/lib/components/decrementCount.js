
export const decrementCount = () => {
  // check if there is a count
  if (localStorage.getItem("count") !== null) {

    let str_count = localStorage.getItem("count")
    let count = parseInt(str_count)
      if (count > 0) {
        count--
        localStorage.setItem("count", count);
      } else {
        return false;
      }
  } else {
    false;
  }

}