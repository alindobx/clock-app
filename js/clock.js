//Problem: Create a clock that displays
function myTime(){
//Date object
    const date = new Date();
//hour
    const hour = date.getHours();
//seconds
    const seconds = date.getSeconds();
//minute
const minute = date.getMinutes();

//convert military time to standard time function
    const convertTime = () => {
        if(hour >= 12){
            return hour - 12;
        }else if(hour === 0){
            return 12;
        }else{
            return hour
        }
    };
// AM or PM function
    const amPm =()=> {
        return hour >= 12 ?  "pm" : "am";
    };
    const nightOrDay = amPm();

//add '0' to seconds first integer
    const zeroPlace = (digit) => {
        if(digit < 10){
            return 0;
        }else{
            return '';
        }
    };
    const firstDigitSec = zeroPlace(seconds);
    const firstDigitMin = zeroPlace(minute);


//store conversion in a variable
    const standardTime = convertTime();
//Day
    const day = date.getDay();
//Integer of Day
    const dayNmb = date.getDate();
//Month
    const month = date.getMonth();
//Month Array
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const match = months[month];
// Days of the Week Array
    const daysOfweek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekMatch = daysOfweek[day];

//show time on HTML document
document.getElementById('main').innerHTML =
`<span class="standard">${standardTime}</span>:${firstDigitMin}${minute}:${firstDigitSec}${seconds}${nightOrDay}<br/>
${weekMatch} - ${match} ${dayNmb}`;
}
const btn = document.getElementById('btn');
function militaryTime(){

}
btn.addEventListener('click',()=> console.log('cake'));
setInterval(myTime, 1000);





