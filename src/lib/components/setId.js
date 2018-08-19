
export const setId = () => {

    let str_count = localStorage.getItem("count");
    let count;
    //get a numeric value from str_count, put it in count
    count = (str_count == null || str_count == "null") ? 0 : parseInt(str_count);
    //increment count
    count++;
    //store count
    localStorage.setItem("count", count);
}