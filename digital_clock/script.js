digital=()=>{
    let d=new Date();
    let day=d.getDay();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let dayName=['Mon','Tue','Wed','Thu','Fri','Sat','sun']

    let amPm= (h<12) ? 'AM':'Pm';

    if(h<=9){
        document.querySelector(".hour").textContent=` 0${h} : `;
    }
    else{
        document.querySelector(".hour").textContent=` ${h} : `;
    }

    if(m<=9){
        document.querySelector(".min").textContent=` 0${m} : `;
    }
    else{
        document.querySelector(".min").textContent=` ${m} : `;
    }

    if(s<=9){
        document.querySelector(".sec").textContent=` 0${s} `;
    }
    else{
        document.querySelector(".sec").textContent=` ${s} `;
    }

    document.querySelector(".day").textContent=`${dayName[day-1]},`;
    document.querySelector(".amPm").textContent=amPm;
    
    setTimeout(digital,200)

}

digital()

