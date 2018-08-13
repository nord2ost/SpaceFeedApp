export function manageTime(date) {
formatTime = (date) =>{
    let d =date.toTimeString().split(' ')[0]
    return d.split(':')[0]+ ':'+d.split(':')[1]
  }
	let mN = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"]
    return mN[date.getMonth()] + ' ' + date.getDate() + ', ' + formatTime(date) 
}