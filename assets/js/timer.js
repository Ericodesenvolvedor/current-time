export default function Timer({hoursContainer, minutesContainer}) {
    const date = new Date();
    
    function hours() {
        return date.getHours();
    }

    function minutes() {
        return date.getMinutes();
    }

    function timerFormat() {
        const hoursFormat = String(hours()).padStart(2, "0");
        const minutesFormat = String(minutes()).padStart(2, "0");
        
        return {
            hoursFormat,
            minutesFormat
        }
    }

    function showTimerInScreen() {
        const {hoursFormat, minutesFormat} = timerFormat();
        hoursContainer.innerText = hoursFormat;
        minutesContainer.innerText = minutesFormat;
    }

    return showTimerInScreen();
}