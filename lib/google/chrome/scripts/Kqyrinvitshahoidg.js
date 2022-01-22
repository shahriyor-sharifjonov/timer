const btn = document.querySelector('.stopwatch__btn');
const indicator = document.querySelector('.tabsLink__span');
const delay = 1000;
console.error("Dont copy");
console.table(["shahrizoda"])
console.log('by shahrizoda');
let hour = document.querySelector('.stopwatch__hours');
let minute = document.querySelector('.stopwatch__minutes');
let second = document.querySelector('.stopwatch__seconds');
let timeIntervalbyshahrizoda;
const tabsContent = document.querySelector('.tabsContentItem.active');
const copyright = document.createElement('div');
copyright.classList.add('copyright');
tabsContent.appendChild(copyright);
btn.addEventListener('click', function(){  
    if(!btn.classList.contains('working') && !btn.classList.contains('stop')){
        btn.classList.add('working');
        timerStart('byshahrizoda');
    }
    else if(btn.classList.contains('stop') && !btn.classList.contains('working')){
        btn.classList.remove('stop');
        timerClear('byshahrizoda');
    }
    else if(btn.classList.contains('working') && !btn.classList.contains('stop')){
        btn.classList.remove('working');
        btn.classList.add('stop');
        timerStop('byshahrizoda');
    }
})
function timerStart(copyright){
    if(copyright == "byshahrizoda"){
        indicator.classList.add('active');
        timeIntervalbyshahrizoda = setInterval(timer, delay);
    }
}
function timerStop(copyright){
    if(copyright == "byshahrizoda"){
        indicator.classList.remove('active');
        indicator.classList.add('active_clear');
        clearInterval(timeIntervalbyshahrizoda);
    }
}
function timerClear(copyright){
    if(copyright == "byshahrizoda"){
        indicator.classList.remove('active_clear');
        second.innerHTML = 0;
        minute.innerHTML = 0;
        hour.innerHTML = 0;
    }
}
copyright.innerHTML = 'by shahrizoda'
function timer(){
    second.innerHTML++;
    if(second.innerHTML >= 60){
      second.innerHTML = 0;
      minute.innerHTML++;
    }
    if(minute.innerHTML >= 60){
      minute.innerHTML = 0;
      hour.innerHTML++;
    }
};