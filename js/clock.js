
function myTime(){
//Date object
const date = new Date();
//hour
const hour = date.getHours();
//convert military time to standard time function
const convertTime = () => {
    if(hour > 12){
        return hour - 12;
    }else{
        return hour
    }
};
//store conversion in a variable
const standardTime = convertTime();
//minute
const minute = date.getMinutes();
//seconds
const seconds = date.getSeconds();
//Day
const day = date.getDay();
//Integer of Day
const dayNmb = date.getUTCDay();
//Month
const month = date.getMonth();
//Month Array
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const match = months[month];
// Days of the Week Array
    const daysOfweek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekMatch = daysOfweek[day];

//show time on HTML document
document.getElementById('main').innerHTML = `${standardTime}:${minute}:${seconds}<br/>
${weekMatch} - ${match} ${dayNmb}`;
}
myTime();






