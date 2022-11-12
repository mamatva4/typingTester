let arr=["when_<wbr>we_<wbr>talk_<wbr>about_<wbr>motivating_<wbr>others_<wbr>the_<wbr>justification_<wbr>is_<wbr>the_<wbr>end_<wbr>result_<wbr>that_<wbr>either_<wbr>we_<wbr>want_<wbr>to_<wbr>avoid_<wbr>the_<wbr>pain_<wbr>or_<wbr>go_<wbr>towards_<wbr>pleasure_<wbr>or_<wbr>what_<wbr>we_<wbr>want_<wbr>to_<wbr>get_<wbr>the_<wbr>person_<wbr>to_<wbr>do_<wbr>how_<wbr>we_<wbr>achieve_<wbr>the_<wbr>end_<wbr>result_<wbr>are_<wbr>our_<wbr>alternatives_<wbr>but_<wbr>a_<wbr>good_<wbr>manager_<wbr>would_<wbr>think_<wbr>the_<wbr>following_<wbr>also_<wbr>action","when_<wbr>we_<wbr>talk_<wbr>about_<wbr>motivating_<wbr>others_<wbr>the_<wbr>justification_<wbr>is_<wbr>the_<wbr>end_<wbr>result_<wbr>either_<wbr>we_<wbr>want_<wbr>to_<wbr>avoid_<wbr>the_<wbr>pain_<wbr>or_<wbr>go_<wbr>towards_<wbr>pleasure_<wbr>or_<wbr>what_<wbr>we_<wbr>want_<wbr>to_<wbr>get_<wbr>the_<wbr>person_<wbr>to_<wbr>do_<wbr>how_<wbr>we_<wbr>achieve_<wbr>the_<wbr>end_<wbr>result_<wbr>are_<wbr>our_<wbr>alternatives_<wbr>but_<wbr>a_<wbr>good_<wbr>manager_<wbr>would_<wbr>think_<wbr>of_<wbr>the_<wbr>following_<wbr>also_<wbr>will_<wbr>the_<wbr>action_<wbr>guarantee_<wbr>the_<wbr>consequence_<wbr>what_<wbr>about_<wbr>other_<wbr>intended_<wbr>consequences_<wbr>this_<wbr>requires_<wbr>certain_<wbr>experience","business_<wbr>meetings_<wbr>and_<wbr>professional_<wbr>recordings_<wbr>can_<wbr>contain_<wbr>sensitive_<wbr>data_<wbr>so_<wbr>security_<wbr>is_<wbr>something_<wbr>a_<wbr>transcription_<wbr>company_<wbr>should_<wbr>not_<wbr>overlook_<wbr>when_<wbr>providing_<wbr>services_<wbr>companies_<wbr>should_<wbr>therefore_<wbr>follow_<wbr>the_<wbr>various_<wbr>laws_<wbr>and_<wbr>industry_<wbr>best_<wbr>practice_<wbr>especially_<wbr>so_<wbr>when_<wbr>serving_<wbr>law_<wbr>firms_<wbr>government_<wbr>agencies_<wbr>or_<wbr>courts_<wbr>medical_<wbr>transcription_<wbr>specifically_<wbr>is_<wbr>governed_<wbr>which_<wbr>elaborates_<wbr>data_<wbr>security_<wbr>practices_<wbr>transcription_<wbr>security_<wbr>includes_<wbr>maintaining_<wbr>confidentiality_<wbr>of_<wbr>the_<wbr>information" ]

let arr1=[56,69,64]
let arr2=[60,70,80]
let p
let pWord
let time
let typedWord=0
let n=0
let wrong=0
let x;
let y;
let prev=``
let spc=true
let wr=0
let mx=0
let select=false
let typedChar=0
let completed=0
let content=document.getElementById("content")
const clk=(level)=>{
    select=true
    p=arr[level]
    pWord=arr1[level]
    time=arr2[level]
    content.innerHTML=`LOADING CONTENT....`
    setTimeout(() => {
        content.innerHTML="<span class='ylw'>|</span>"+p

    }, 800);
    
}


const timer=(time)=>{
    
    let a=setInterval(()=>{
        document.getElementById("time").innerHTML=time;
        if(time<=5){
            document.getElementById("time").style.color="red"
        }
        else if(time<=15){
            document.getElementById("time").style.color="orange"
        }
        else{
            document.getElementById("time").style.color="green"
        }
        if(completed==1 || time==0){
            // y=new Date().getTime()
            // final();
            n=p.length
            y=new Date().getTime()
            document.getElementById("time").innerHTML="<div id='again' onclick='location.reload();'>Start Again</div>"
            final()
            clearInterval(a);
        }
        time--;
    },1000)
}


// content.style.fontSize="25px"
// content.style.color="#a69d9d"



const final=()=>{
    completed=1
//     console.log(typedChar,typedWord,wrong,wr)
    setTimeout(()=>{
        document.getElementById("result").style.display="grid"
        document.getElementById("heading").style.margin="1px"
    let tym=(y-x)/60000

    let oas=document.getElementById("accuracy")
    oas.innerHTML=`Overall Speed : ${(typedWord/tym).toFixed(2)} WPM`
    let speed=((typedWord-wr)/tym).toFixed(2)
    if(typedWord==0){
        speed =0
    }
    let rs=document.getElementById("rspeed")
    rs.innerHTML=`Speed (correct words) : ${speed} WPM`
    
    let ac=document.getElementById("speed")
    let accuracy=((typedChar - wrong)*100/(typedChar)).toFixed(2)
    ac.innerHTML=`Accuracy : ${accuracy}%`

    let remark
    if(speed>=80) remark="Excellent Speed"
    else if(speed>=40) remark="Good Speed"
    else if (speed >=20) remark="Average Speed"
    else remark="Poor Speed"

    if(accuracy>=95) remark+=" and Excellent Accuracy"
    else if(accuracy>=80) remark+=" and Good Accuracy"
    else if (accuracy >=65) remark+=" and Average Accuracy"
    else remark+=" and Poor Accuracy"

    let rm=document.getElementById("remark")
    rm.innerHTML=`Remark : ${remark}`
},601)

    // document.getElementById("result").style.visibility="visible"
}

let pp
let qq
let rr
let spd=0
let keyy=false
const ff=()=>{
   let gg= setInterval(()=>{
        if(completed==0){
        let rs=document.getElementById("rspeed")
    rs.innerHTML=`Real Time Speed : 0.0 WPM`}
    else{
        clearInterval(gg)
    }
    },600)
    
}
// document.addEventListener("keyup",ff)
ff()

const realTimeSpeed=()=>{
    let rs=document.getElementById("rspeed")
    rs.innerHTML=`Real Time Speed : ${spd} WPM`

    qq=new Date().getTime()
    rr=qq-pp
    if(rr >=2000 || rr==0 || rr==1){
        spd=0
    }
    else{
        spd=((1/5)/(rr/60000)).toFixed(1)
    }
    // f(keyy==false){
        
        
    // }i
    
    
    pp=qq

}

let clr="blk"
const myFunc=(e)=>{
    if(n==0 && select==true){
        x=new Date().getTime()
        pp=x
        timer(time)
        select=false
    }
    if(n<p.length){
        let k=e.key
    let z=k
    if(k==' '){
        z='Space'
    }
    
    if(p[n]==' ' || p[n]=='_'){
        spc=true
    }
    document.getElementById(`btn`+z.toUpperCase()).style.background="#c2bdbd"
    setTimeout(()=>{
        document.getElementById(`btn`+z.toUpperCase()).style.background="linear-gradient(to bottom, #d4d4d1,#3e3e3b)"
    },100)
   
    let a=p.slice(0,n)
    let b=p.slice(n+1,p.length)
    if(k==p[n] || (k==' ' && p[n]=='_')){
        typedChar++
        if(clr=="rd"){
            wrong++;
            if(spc==true && p[n]!='_'){
                wr++
                spc=false
            }
        }
        
        content.innerHTML=`${prev}<span class='${clr}'>${p[n]}</span><span class='ylw'>|</span>${b}`
        prev=prev+`<span class='${clr}'>${p[n]}</span>`
        realTimeSpeed();
        clr="blk"
        
        if(p[n]=='_'){
            n=n+5
            prev=prev+`<wbr>`
            typedWord++
        }
        n++
    }
    else{
        // content.innerHTML=`${prev}<span class='rd'>${p[n]}</span>${b}`
        // prev=prev+`<span class='rd'>${p[n]}</span>`
        clr="rd"
        document.getElementById("error").play();
        content.innerHTML=`${prev}<span class='ylw'>|</span><span class='${clr}'>${p[n]}</span>${b}`
        
    }  
    
    if(n>=p.length && completed==0){
        y=new Date().getTime()
        final()
    }
    }  
}


const jj=(e)=>{
    if(n==0 && select==true){
        x=new Date().getTime()
        pp=x
        timer(time)
        select=false
    }
    if(n<p.length){
        let k=e.srcElement.innerText.toLowerCase()
    if(k==''){
        k=" "
    }
    let z=k
    if(k==' '){
         z='Space'
    }
    if(p[n]==' ' || p[n]=='_'){
        spc=true
    }
    document.getElementById(`btn`+z.toUpperCase()).style.background="#c2bdbd"
    setTimeout(()=>{
        document.getElementById(`btn`+z.toUpperCase()).style.background="linear-gradient(to bottom, #d4d4d1,#3e3e3b)"
    },100)
    
    let a=p.slice(0,n)
    let b=p.slice(n+1,p.length)
    if(k==p[n] || (k==' ' && p[n]=='_')){
        typedChar++
        if(clr=="rd"){
            wrong++;
            if(spc==true && p[n]!='_'){
                wr++
                spc=false
            }
        }
        
        content.innerHTML=`${prev}<span class='${clr}'>${p[n]}</span><span class='ylw'>|</span>${b}`
        prev=prev+`<span class='${clr}'>${p[n]}</span>`
        realTimeSpeed();
        clr="blk"
        if(p[n]=='_'){
            prev=prev+`<wbr>`
            n=n+5
            typedWord++
        }
        n++
    }
    else{
        clr="rd"
        document.getElementById("error").play();
        content.innerHTML=`${prev}<span class='ylw'>|</span><span class='${clr}'>${p[n]}</span>${b}`
        
        
    }  
    
    if(n>=p.length){
        y=new Date().getTime()
        final()
    }
    }
    
}

document.addEventListener("keydown", myFunc);
document.getElementById("kbr").addEventListener("click",jj);

// const input=(e) =>{
//     if(n==0){
//         x=new Date().getTime()
//     }
//     let k=e.value.toLowerCase();
//     let z=k
    
//     let a=p.slice(0,n)
//     let b=p.slice(n+1,p.length)
    
//     if(k==p[n] || (k==' ' && p[n]==' ')){
//         content.innerHTML=`${prev}<span class='blk'>${p[n]}</span>${b}`
//         prev=prev+`<span class='blk'>${p[n]}</span>`
//     }
//     else{
//         content.innerHTML=`${prev}<span class='rd'>${p[n]}</span>${b}`
//         prev=prev+`<span class='rd'>${p[n]}</span>`
//     }  
//     n++
//     console.log(n);
//     if(n==p.length){
//         y=new Date().getTime()
//         final()
//     }
//   }




// myfunc 

 // if(k==' '){
    //     y='Space'
    // }
    // document.getElementById(`btn`+y.toUpperCase()).style.background="#75f475"
    // setTimeout(()=>{
    //     document.getElementById(`btn`+y.toUpperCase()).style.background="linear-gradient(to right, #cbb9bc,#f3e6ec)"
    // },100)


// ip

// if(k==' '){
    //     y='Space'
    // }
    // document.getElementById(`btn`+y.toUpperCase()).style.background="#75f475"
    // setTimeout(()=>{
    //     document.getElementById(`btn`+y.toUpperCase()).style.background="linear-gradient(to right, #cbb9bc,#f3e6ec)"
    // },100)
















