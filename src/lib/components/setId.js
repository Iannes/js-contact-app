
export const setId = () => {

    let str_count = localStorage.getItem("count");
    let count;
    //get a numeric value from str_count, put it in count
    if (str_count == null || str_count == "null") {
      count = 0;
    } else {
      count = parseInt(str_count);
    } // end if
    //increment count
    count++;
    //store count
    localStorage.setItem("count", count);
     // end count
}