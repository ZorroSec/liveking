function timeZone(){
    const today = new Date()
    const hour = today.getHours()
    const m = today.getMinutes()
    const s = today.getSeconds()
    document.getElementById('hour').innerHTML=`${hour}:${m}:${s}`
    t=setTimeout('timeZone()', 500)
}
function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}
