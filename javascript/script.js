// Levels
let image1=document.querySelector("#image1")
let image2=document.querySelector("#image2")
let image3=document.querySelector("#image3")
let image4=document.querySelector("#image4")
let image5=document.querySelector("#image5")
let image6=document.querySelector("#image6")
let image7=document.querySelector("#image7")

// Audio
let audio=document.querySelector('#audio')

// level 1
let moon=document.querySelector(".moon")
let moth=document.querySelector(".moth")
let muffin=document.querySelector(".muffin")
let maple_leaf=document.querySelector(".maple_leaf")
let marshmallow=document.querySelector(".marshmallow")

// level 2
let apple=document.querySelector(".apple")
let ants=document.querySelector(".ants")
let arrow=document.querySelector(".arrow")

// level 3
let slide=document.querySelector(".slide")
let sand=document.querySelector(".sand")
let swing=document.querySelector(".swing")
let seesaw=document.querySelector(".seesaw")

// level 4
let turtle=document.querySelector(".turtle")
let tea=document.querySelector(".tea")
let teddy_bear=document.querySelector(".teddy_bear")

// level 5
let daisies=document.querySelector(".daisies")
let dafodils=document.querySelector(".dafodils")
let dog=document.querySelector(".dog")
let digging=document.querySelector(".digging")

// level 6
let egg=document.querySelector(".egg")
let entrance=document.querySelector(".entrance")
let elephant=document.querySelector(".elephant")

// level 7
let ship=document.querySelector(".ship")
let shark=document.querySelector(".shark")
let shells1=document.querySelector(".shells1")
let shells2=document.querySelector(".shells2")
let shells3=document.querySelector(".shells3")
let shovel=document.querySelector(".shovel")

// helper
let help1=document.querySelector(".help1")
let help2=document.querySelector(".help2")
let help3=document.querySelector(".help3")
let help4=document.querySelector(".help4")
let help5=document.querySelector(".help5")
let help6=document.querySelector(".help6")
let help7=document.querySelector(".help7")




let allItems=[moon, moth, muffin, maple_leaf, marshmallow]

// audios
let letterAudios={
    a:'./letter/a.wav',
    d:'./letter/d.wav',
    e:'./letter/e.wav',
    m:'./letter/m.wav',
    s:'./letter/s.wav',
    sh:'./letter/sh.wav',
    t:'./letter/t.wav',
}

let findSomethingAudios={
    find_a: './find/find_a.wav',
    find_d: './find/find_d.wav',
    find_e: './find/find_e.wav',
    find_m: './find/find_m.wav',
    find_s: './find/find_s.wav',
    find_sh: './find/find_sh.wav',
    find_t: './find/find_t.wav',
}



// pass conditions obj
let hasFoundLevel1={
    moon: false,
    moth:false,
    muffin:false,
    maple_leaf:false,
    marshmallow:false
}

let hasFoundLevel2={
    apple:false,
    ants:false,
    arrow:false
}

let hasFoundLevel3={
    slide:false,
    sand:false,
    swing:false,
    seesaw:false
}

let hasFoundLevel4={
    turtle:false,
    tea:false,
    teddy_bear:false
}

let hasFoundLevel5={
    daisies:false,
    dafodils:false,
    dog:false,
    digging:false
}

let hasFoundLevel6={
    egg:false,
    entrance:false,
    elephant:false
}

let hasFoundLevel7={
    ship:false,
    shark:false,
    shells1:false,
    shells2:false,
    shells3:false,
    shovel:false
}


// pass conditions bool
let passLevel1=false
let passLevel2=false
let passLevel3=false
let passLevel4=false
let passLevel5=false
let passLevel6=false
let passLevel7=false

let setBorder=(target)=>{
    target.setAttribute('style', 'border: 3px solid red')
}

let clickListener=(allItems)=>{
    allItems.forEach((item) => {
        item.addEventListener('click', (event)=>{
            let itemtName=event.target.getAttribute('class')
            console.log(itemtName)
            setBorder(event.target)
            audio.src=''
            switch (itemtName) {
                // Level 1
                case 'moon':
                    hasFoundLevel1.moon=true
                    // audio.src=''
                    break
                case 'moth':
                    hasFoundLevel1.moth=true
                    // audio.src=''
                    break
                case 'muffin':
                    hasFoundLevel1.muffin=true
                    // audio.src=''
                    break
                case 'maple_leaf':
                    hasFoundLevel1.maple_leaf=true
                    // audio.src=''
                    break
                case 'marshmallow':
                    hasFoundLevel1.marshmallow=true
                    // audio.src=''
                    break

                // Level 2
                case 'apple':
                    hasFoundLevel2.apple=true
                    // audio.src=audios.marshmallow
                    break
                case 'ants':
                    hasFoundLevel2.ants=true
                    // audio.src=audios.muffin
                    break
                case 'arrow':
                    hasFoundLevel2.arrow=true
                    // audio.src=audios.moth
                    break

                // Level 3
                case 'slide':
                    hasFoundLevel3.slide=true
                    break
                case 'sand':
                    hasFoundLevel3.sand=true
                    break
                case 'swing':
                    hasFoundLevel3.swing=true
                    break
                case 'seesaw':
                    hasFoundLevel3.seesaw=true
                    break

                // Level 4
                case 'turtle':
                    hasFoundLevel4.turtle=true
                    break
                case 'tea':
                    hasFoundLevel4.tea=true
                    break
                case 'teddy_bear':
                    hasFoundLevel4.teddy_bear=true
                    break

                // Level 5
                case 'daisies':
                    hasFoundLevel5.daisies=true
                    break
                case 'dafodils':
                    hasFoundLevel5.dafodils=true
                    break
                case 'dog':
                    hasFoundLevel5.dog=true
                    break
                case 'digging':
                    hasFoundLevel5.digging=true
                    break

                // Level 6
                case 'egg':
                    hasFoundLevel6.egg=true
                    break
                case 'entrance':
                    hasFoundLevel6.entrance=true
                    break
                case 'elephant':
                    hasFoundLevel6.elephant=true
                    break

                // Level 7
                case 'ship':
                    hasFoundLevel7.ship=true
                    break
                case 'shark':
                    hasFoundLevel7.shark=true
                    break
                case 'shells':
                    hasFoundLevel7.shells=true
                    break
                case 'shovel':
                    hasFoundLevel7.shovel=true
                    break

                default:
                    break
            }
            audio.play()
        }, false)
    })

}


clickListener(allItems)

// after seconds, hints hide
let timer= (dict) => {
    setTimeout(()=>{
        allItems.forEach((item) =>{
            let itemtId=item.getAttribute('class')
            Object.keys(dict).forEach((key)=>{
                if(dict[itemtId] == false){
                    item.setAttribute('style', 'border: none')
                }
            })
        })
    }, 2000)
}

// helper event listener
help1.addEventListener('click', () => {
    audio.src=letterAudios.m
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help1'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel1)
})

help2.addEventListener('click', () => {
    audio.src=letterAudios.a
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help2'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel2)
})

help3.addEventListener('click', () => {
    audio.src=letterAudios.s
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help3'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel3)
})

help4.addEventListener('click', () => {
    audio.src=letterAudios.t
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help4'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel4)
})

help5.addEventListener('click', () => {
    audio.src=letterAudios.d
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help5'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel5)
})

help6.addEventListener('click', () => {
    audio.src=letterAudios.e
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help6'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel6)
})

help7.addEventListener('click', () => {
    audio.src=letterAudios.sh
    audio.play()
    allItems.forEach((item) =>{
        if(item.getAttribute('class')=='help7'){
            return true
        }
        item.setAttribute('style', 'border: 3px solid red')
    })
    timer(hasFoundLevel7)
})

// update function
let update=()=>{
    if(!passLevel1){
        checkLevel1Pass()
    }else if(!passLevel2){
        checkLevel2Pass()
    }else if(!passLevel3){
        checkLevel3Pass()
    }else if(!passLevel4){
        checkLevel4Pass()
    }else if(!passLevel5){
        checkLevel5Pass()
    }else if(!passLevel6){
        checkLevel6Pass()
    }

    requestAnimationFrame(update)
}

// check whether pass the current level
let checkLevel1Pass=()=>{
    let keys=Object.keys(hasFoundLevel1)
    for (let i = 0; i < keys.length; i++) {
        // console.log(hasFoundLevel1[keys[i]])
        if(hasFoundLevel1[keys[i]]==false){
            passLevel1=false
            break
        }else{
            passLevel1=true
        }
    }

    if(passLevel1){
        setTimeout(moveToLevel2, 2000)
    }
}

let checkLevel2Pass=()=>{
    let keys=Object.keys(hasFoundLevel2)
    for (let i = 0; i < keys.length; i++) {
        // console.log(hasFoundLevel1[keys[i]])
        if(hasFoundLevel2[keys[i]]==false){
            passLevel2=false
            break
        }else{
            passLevel2=true
        }
    }

    if(passLevel2){
        setTimeout(moveToLevel3, 2000)
    }
}

let checkLevel3Pass=()=>{
    let keys=Object.keys(hasFoundLevel3)
    for (let i = 0; i < keys.length; i++) {
        // console.log(hasFoundLevel1[keys[i]])
        if(hasFoundLevel3[keys[i]]==false){
            passLevel3=false
            break
        }else{
            passLevel3=true
        }
    }

    if(passLevel3){
        setTimeout(moveToLevel4, 2000)
    }
}

let checkLevel4Pass=()=>{
    let keys=Object.keys(hasFoundLevel4)
    for (let i = 0; i < keys.length; i++) {
        // console.log(hasFoundLevel1[keys[i]])
        if(hasFoundLevel4[keys[i]]==false){
            passLevel4=false
            break
        }else{
            passLevel4=true
        }
    }

    if(passLevel4){
        setTimeout(moveToLevel5, 2000)
    }
}

let checkLevel5Pass=()=>{
    let keys=Object.keys(hasFoundLevel5)
    for (let i = 0; i < keys.length; i++) {
        // console.log(hasFoundLevel1[keys[i]])
        if(hasFoundLevel5[keys[i]]==false){
            passLevel5=false
            break
        }else{
            passLevel5=true
        }
    }

    if(passLevel5){
        setTimeout(moveToLevel6, 2000)
    }
}

let checkLevel6Pass=()=>{
    let keys=Object.keys(hasFoundLevel6)
    for (let i = 0; i < keys.length; i++) {
        // console.log(hasFoundLevel1[keys[i]])
        if(hasFoundLevel6[keys[i]]==false){
            passLevel6=false
            break
        }else{
            passLevel6=true
        }
    }

    if(passLevel6){
        setTimeout(moveToLevel7, 2000)
    }
}



// move to next level
let moveToLevel2=()=>{
    audio.src=findSomethingAudios.find_a
    audio.play()
    // hide current level
    image1.style.display='none'
    // display current level
    image2.style.display='inline-block'

    // reset allItems
    allItems=[apple, ants, arrow]
    clickListener(allItems)
}

let moveToLevel3=()=>{
    audio.src=findSomethingAudios.find_s
    audio.play()
    // hide current level
    image2.style.display='none'
    // display current level
    image3.style.display='inline-block'

    // reset allItems
    allItems=[slide, sand,swing,seesaw]
    clickListener(allItems)
}

let moveToLevel4=()=>{
    audio.src=findSomethingAudios.find_t
    audio.play()
    // hide current level
    image3.style.display='none'
    // display current level
    image4.style.display='inline-block'

    // reset allItems
    allItems=[turtle, tea, teddy_bear]
    clickListener(allItems)
}

let moveToLevel5=()=>{
    audio.src=findSomethingAudios.find_d
    audio.play()
    // hide current level
    image4.style.display='none'
    // display current level
    image5.style.display='inline-block'

    // reset allItems
    allItems=[daisies, dafodils,dog,digging]
    clickListener(allItems)
}

let moveToLevel6=()=>{
    audio.src=findSomethingAudios.find_e
    audio.play()
    // hide current level
    image5.style.display='none'
    // display current level
    image6.style.display='inline-block'

    // reset allItems
    allItems=[egg, entrance,elephant]
    clickListener(allItems)
}

let moveToLevel7=()=>{
    audio.src=findSomethingAudios.find_sh
    audio.play()
    // hide current level
    image6.style.display='none'
    // display current level
    image7.style.display='inline-block'

    // reset allItems
    allItems=[ship, shark, shells1, shells2, shells3, shovel]
    clickListener(allItems)
}


update()

let isPlay=true
const playFindMSound=()=>{
    if(isPlay){
        audio.src=findSomethingAudios.find_m
        audio.play()
        setTimeout(()=>{
            isPlay=false
        }, 4500)
    }

}

image1.addEventListener('click', playFindMSound, false)



