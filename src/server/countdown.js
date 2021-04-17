 timeLeft = (date) => {
        //Plan date
        let  countDownDate  = new Date(date).getTime();
        
        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the difference
        let distance = countDownDate - now;
      
        // Time calculations
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
      
        return {days, hours, minutes, seconds, time}
      }

    module.exports =   timeLeft
