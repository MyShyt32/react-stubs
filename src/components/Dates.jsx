

export const Dates = (numStubs) => {
  const now = new Date()
  let dow = now.getDay()

  function getFormattedDate(date) {
    let year = date.getFullYear();
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }
  
  function thisThurs( d, dow ){
    d.setDate((dow - d.getDay()) + d.getDate())
    return d;
  }
  
  function nextThurs(d, dow){
    d.setDate(d.getDate() + (dow+(7-d.getDay())) % 7);
    return d;
  }
  
  function lastThurs(d, dow){
    d.setDate(d.getDate() - ((d.getDay() + 7 - dow ) % 7))
    return d;
  }

  let dates = []  

  for (let index = 0; index < numStubs; index++) { 

    if( index == 0 ){
      if (dow == 5){
        let paydate = getFormattedDate(now)
        let end = (lastThurs(now, 6))
        let enddate = getFormattedDate(lastThurs(now, 6))
        let begdate = getFormattedDate(lastThurs(end, 0))
        
        dates[index] = {
          begin: begdate,
          end: enddate,
          pay: paydate,
          d: now
        }
      } else if (dow > 5 || dow == 0 ) {
        let paydate = getFormattedDate(lastThurs(now, 5))
        let pay = lastThurs(now, 5)
        let enddate = getFormattedDate(lastThurs(pay, 6))
        let end = lastThurs(pay, 6)
        let begdate = getFormattedDate(thisThurs(end, 0))
        
        dates[index] = {
          begin: begdate,
          end: enddate,
          pay: paydate,
          d: pay,
        }
      } else if (dow < 5 && dow > 0) {
        let paydate = getFormattedDate(nextThurs(now, 5))
        let pay = nextThurs(now, 5)
        let enddate = getFormattedDate(lastThurs(pay, 6))
        let end = lastThurs(pay, 6)
        let begdate = getFormattedDate(thisThurs(end, 0))
        
        dates[index] = {
          begin: begdate,
          end: enddate,
          pay: paydate,
          d: pay
        }
      } 
    } else if ( index > 0 ){

      let paydate = getFormattedDate(thisThurs(dates[index-1].d, 5))
        let pay = lastThurs(dates[index-1].d, 5)
        let end = lastThurs(pay, 6)
        let enddate = getFormattedDate(lastThurs(pay, 6))
        let begdate = getFormattedDate(thisThurs(end, 0))
        
        dates[index] = {
          begin: begdate,
          end: enddate,
          pay: paydate,
          d: pay
        }
            
    }
    
  }
  
  return dates;

}