
function myTime(){
//Date object
const date = new Date();
//hour
const hour = date.getHours();
//convert military time to standard time
const convertTime = () => {
    if(hour > 12){
        return hour - 12;
    }else{
        return hour
    }
};
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
//show time on HTML document
document.getElementById('main').innerHTML = `${standardTime}:${minute}:${seconds}
${day} - ${month} ${dayNmb}`;
}
myTime();






