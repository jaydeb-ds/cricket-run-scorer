let display = document.querySelector(".display")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let undo = document.querySelector("#undo")
let wide = document.querySelector("#wide")
let noball = document.querySelector("#noball")
let out = document.querySelector("#out")
let dot = document.querySelector("#dot")

let nop1 = document.querySelector("#nop1")
let nop2 = document.querySelector("#nop2")
let nop3 = document.querySelector("#nop3")
let nop4 = document.querySelector("#nop4")
let nop6 = document.querySelector("#nop6")



let span = document.querySelector("#spann")

let dispalybox = document.querySelector(".display-box1")

let balls = document.querySelectorAll(".ball")



let history = []

let totalrun = 0
let wicket = 0


let over = 0
let ball = 0

let i = 0
let j=[]


overdisplay = ()=>{
    ball = ball+1
    if(ball > 5)
    {
      over = over+1
      ball = 0
      i = ball
    }
    
  span.innerText =`${over}.${ball}`
}

function runDispaly() {
    
       history.push(totalrun)
    display.innerText = `${totalrun}/${wicket}`

}

ballsDisplay = ()=>{

    if ( span.innerText =`${over}.${i}`) {

        j.push(run)
        balls[i-1].innerText = j[j.length-1]  

    }
    

}


ballover = ()=>{
 if (i == 1)
    {
        balls[0].innerText = run
        balls[1].innerText = ""
        balls[2].innerText = ""
        balls[3].innerText = ""
        balls[4].innerText = ""
        balls[5].innerText = ""

    }

}

dot.addEventListener("click",()=>{

    
    totalrun = totalrun+0

    i = i + 1 
     run = 0
    ballsDisplay()

    runDispaly()

    overdisplay()
    ballover()

    dispalybox.innerHTML = "DOT"

        
    dispalybox.classList.add("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.remove ("display-box-E")
    dispalybox.classList.remove("display-box46")

})

one.addEventListener("click",()=>{

    totalrun = totalrun+1

    i = i + 1 
     run = 1
    ballsDisplay()

    runDispaly()
    overdisplay()
    ballover()
    dispalybox.innerHTML = "1"

    dispalybox.classList.add("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.remove("display-box-E")
    dispalybox.classList.remove("display-box46")
})


two.addEventListener("click",()=>{
    totalrun = totalrun+2

    i = i + 1 
     run = 2
    ballsDisplay()

    runDispaly()
    overdisplay()
    ballover()

    dispalybox.innerHTML = "2"
    
    dispalybox.classList.add("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.remove("display-box-E")
    dispalybox.classList.remove("display-box46")

})


three.addEventListener("click",()=>{
    totalrun = totalrun+3
    
    i = i + 1 
     run = 3
    ballsDisplay()

    runDispaly() 
    overdisplay()
    ballover()

    dispalybox.innerHTML = "3"
    
    dispalybox.classList.add("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.remove("display-box-E")
    dispalybox.classList.remove("display-box46")


})


four.addEventListener("click",()=>{
    totalrun = totalrun+4

    i = i + 1 
     run = 4
    ballsDisplay()
  
    runDispaly()

    overdisplay()
    ballover()
    
    dispalybox.innerHTML = "4"
    
    dispalybox.classList.remove("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.remove("display-box-E")
    dispalybox.classList.add("display-box46")



})

six.addEventListener("click",()=>{
    totalrun = totalrun+6
    
    i = i + 1 
     run = 6
    ballsDisplay()

    runDispaly()

    overdisplay()
    ballover()
    
    dispalybox.innerHTML = "6"
    dispalybox.classList.add("display-box3")

        
    dispalybox.classList.remove("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.remove("display-box-E")
    dispalybox.classList.add("display-box46")

})

wide.addEventListener("click",()=>{
    // totalrun = totalrun+1
    
 if (span.innerText == `${over}.${0}`)
    {
    totalrun = totalrun+1

       balls[0].innerText = "wd"
    }
    else
    {
    totalrun = totalrun+1

           run = ` ${run} WD`
           ballsDisplay()


    }

    runDispaly()

    ballover()

    
    dispalybox.innerHTML = "WIDE "

          
    dispalybox.classList.remove("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.add("display-box-E")
    dispalybox.classList.remove("display-box46")

    
    
})

noball.addEventListener("click",()=>{
        
 if (span.innerText == `${over}.${0}`)
    {
    totalrun = totalrun+1

       balls[0].innerText = "NB"
    }
    else
    {
    totalrun = totalrun+1

           run = ` ${run} NB`
           ballsDisplay()


    }
    runDispaly()
    ballover()
    
    dispalybox.innerHTML = "NO BALL"
  
    dispalybox.classList.add("display-box1")
    
    dispalybox.classList.remove("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.add("display-box-E")
    dispalybox.classList.remove("display-box46")
})

// ----------------------------------------------------------------
// ---------------------EXTRAS----------------------------------------
// -----------------------------------------------------------------

nop1.addEventListener("click",()=>{       
 if (span.innerText == `${over}.${0}`)
    {
    totalrun = totalrun+1

       balls[0].innerText = "+1"
    }
    else
    {
    totalrun = totalrun+1

           run = `${run} +1`
           ballsDisplay()
    }
    runDispaly()
    ballover()
    
    dispalybox.innerHTML = "+1"
    dispalybox.classList.add("display-box1")
    dispalybox.classList.remove("display-box12")
    dispalybox.classList.remove("display-box-W")
    dispalybox.classList.add("display-box-E")
    dispalybox.classList.remove("display-box46")

})

nop2.addEventListener("click",()=>{       
    if (span.innerText == `${over}.${0}`)
       {
       totalrun = totalrun+2
   
          balls[0].innerText = "+2"
       }
       else
       {
       totalrun = totalrun+2
   
              run = `${run} +2`
              ballsDisplay()
       }
       runDispaly()
       ballover()
       
       dispalybox.innerHTML = "+2"
       dispalybox.classList.add("display-box1")
       dispalybox.classList.remove("display-box12")
       dispalybox.classList.remove("display-box-W")
       dispalybox.classList.add("display-box-E")
       dispalybox.classList.remove("display-box46")
   
   })

   nop3.addEventListener("click",()=>{       
    if (span.innerText == `${over}.${0}`)
       {
       totalrun = totalrun+3
   
          balls[0].innerText = "+3"
       }
       else
       {
       totalrun = totalrun+3
   
              run = `${run} +3`
              ballsDisplay()
       }
       runDispaly()
       ballover()
       
       dispalybox.innerHTML = "+3"
       dispalybox.classList.add("display-box1")
       dispalybox.classList.remove("display-box12")
       dispalybox.classList.remove("display-box-W")
       dispalybox.classList.add("display-box-E")
       dispalybox.classList.remove("display-box46")
   
   })

   nop4.addEventListener("click",()=>{       
    if (span.innerText == `${over}.${0}`)
       {
       totalrun = totalrun+4
   
          balls[0].innerText = "+4"
       }
       else
       {
       totalrun = totalrun+4
   
              run = `${run} +4`
              ballsDisplay()
       }
       runDispaly()
       ballover()
       
       dispalybox.innerHTML = "+4"
       dispalybox.classList.add("display-box1")
       dispalybox.classList.remove("display-box12")
       dispalybox.classList.remove("display-box-W")
       dispalybox.classList.add("display-box-E")
       dispalybox.classList.remove("display-box46")
   
   })

   nop6.addEventListener("click",()=>{       
    if (span.innerText == `${over}.${0}`)
       {
       totalrun = totalrun+6
   
          balls[0].innerText = "+6"
       }
       else
       {
       totalrun = totalrun+6
   
              run = `${run} +6`
              ballsDisplay()
       }
       runDispaly()
       ballover()
       
       dispalybox.innerHTML = "+6"
       dispalybox.classList.add("display-box1")
       dispalybox.classList.remove("display-box12")
       dispalybox.classList.remove("display-box-W")
       dispalybox.classList.add("display-box-E")
       dispalybox.classList.remove("display-box46")
   
   })



out.addEventListener("click",()=>{
    if(wicket < 10)
    {
        wicket = wicket +1 
        display.innerText = `${totalrun}/${wicket}`
    }
    else 
    {
        console.log("wicket over")
    }
    i = i + 1 
     run = "W"
    ballsDisplay()
    overdisplay()
    ballover()
    dispalybox.innerHTML = "WICKET"
    dispalybox.classList.add("display-box1")

        
    dispalybox.classList.remove("display-box12")
    dispalybox.classList.add("display-box-W")
    dispalybox.classList.remove("display-box-E")
    dispalybox.classList.remove("display-box46")


})


undo.addEventListener("click",()=>{

    if(j[j.length-1] != "W")
    
{
    run=history.pop();
    console.log(history);
    I = history.length
    totalrun = history[I-1]
    console.log(totalrun);
}
else if(display.innerText === `undefined/${wicket} 0.0`)
    {
       totalrun = `0/${wicket}`
       display.innerText = totalrun
    }
else if(j[j.length-1] == "W")
    {
        if(wicket > 0)
        {
            wicket = wicket -1 
             display.innerText = `${totalrun}/${wicket}`
        }
        else{
            console.log("no wicked");
        }
    }


    ball = ball-1

    if (ball == -1)
        {
            ball = 5
            over  = over -1

            i = 6

            
            i=i
            console.log("log",i);
            span.innerText =`${over}.${ball}`

            // balls[ball+1].innerText = ""


            // run=history.pop();
           console.log(history);
          I = history.length
          console.log("run",history[I-1]);
          totalrun = history[I-1]
          console.log("total run",totalrun);
          runDispaly()
        }
        else{
            console.log("ok")
        }


    i=i-1
     
    span.innerText =`${over}.${ball}`


    balls[i].innerText = ""

    display.innerText = `${history[I-1]}/${wicket}`

    dispalybox.innerHTML = ""

 

})





    





