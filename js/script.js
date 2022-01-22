let s = document.querySelector('.s'),
    m = document.querySelector('.m'),
    h = document.querySelector('.h'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes');
    
    
    function clock() {
        let time = new Date(),
            hour = time.getHours(),
            min = time.getMinutes(),
            sec = time.getSeconds();
        s.style.transform = `rotate(${sec * 6}deg)`
        m.style.transform = `rotate(${min * 6}deg)`
        h.style.transform = `rotate(${hour * 30}deg)`
        hours.innerHTML =  time.getHours() < 10 ? '0'+time.getHours() : time.getHours()
        minutes.innerHTML =  time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()
        setTimeout(() => {
            clock()
        }, 1000);
    }
    clock()
    let tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');
    
    tabsItem.forEach((el,index)=>{
        el.addEventListener('click', function(){
            for (let i = 0; i < tabsItem.length; i++) {
                tabsContentItem[i].classList.remove('active')
                tabsItem[i].classList.remove('active')
            }
            this.classList.add('active')
            tabsContentItem[index].classList.add('active')
        })
    })
    