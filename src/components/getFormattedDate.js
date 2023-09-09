function getFormattedDate(date) {
    const year = new Date(date).getFullYear();
  
    var month = (1 + new Date(date).getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = new Date(date).getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
}
export default getFormattedDate