const hourEl =document.querySelector(".hour");
const minuteEl =document.querySelector(".minute");
const secondEl =document.querySelector(".second");


function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock,1000)

    const hours1= currentDate.getHours();
    const minutes2=currentDate.getMinutes();
    const seconds3=currentDate.getSeconds();

    const hourDeg= (hours1/ 12) *360;
    hourEl.style.transform=`rotate(${hourDeg}deg)`;

    const minuteDeg= (minutes2/ 60)*360;
    minuteEl.style.transform =`rotate(${minuteDeg}deg)`;
    const secondDeg= (seconds3 /60)*360;
    secondEl.style.transform =`rotate(${secondDeg}deg)`;
}
updateClock();
