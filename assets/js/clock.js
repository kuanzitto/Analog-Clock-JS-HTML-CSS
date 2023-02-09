
let clockSeconds = document.querySelector('.seconds');
let clockMinutes = document.querySelector('.minutes');
let clockHours = document.querySelector('.hours');                    

                    /*________________________________*/

const clockMoviment = (clock, position) => {
    clock.style.rotate = `${position * 360}` + `${'deg'}`
    //360 é a volta inteira do relogio.
}

(clockTime = () => {

    setInterval(()=>{
        let date = new Date();
        let secondsTime = date.getSeconds() / 60;
        let minutesTime = date.getMinutes() / 60;
        let hoursTime = date.getHours() / 12;

                    /*________________________________*/

        clockMoviment(clockSeconds, secondsTime);
        clockMoviment(clockMinutes, minutesTime);
        clockMoviment(clockHours, hoursTime);
    
    }, 1000)

})();                 