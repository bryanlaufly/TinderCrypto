import {profiles} from './data.js'
import {Profile} from './ProfileClass.js'

let index = 0
let currentProfile = new Profile(profiles[index])
let isWaiting = false

document.getElementById("crossBtn").addEventListener("click", reject)
document.getElementById("likeBtn").addEventListener("click", accept)

function nextProfile() {
    if ( index < profiles.length - 1 ){
        index += 1
        currentProfile = new Profile(profiles[index])
        renderProfileHtml()
        isWaiting = false
    } else {
        index = 0
        currentProfile = new Profile(profiles[index])
        renderProfileHtml()
        isWaiting = false
    } 
}

function reject(){
    if (!isWaiting){
        isWaiting = true
        currentProfile.setMatchStatus(false)  
        document.getElementById("badgenope").style.display = "block"
        setTimeout(nextProfile, 1500)
    }    
}

function accept(){
    if (!isWaiting){
        isWaiting = true
        currentProfile.setMatchStatus(true)
        document.getElementById("badgelike").style.display = "block" 
        setTimeout(nextProfile, 1500) 
    }
}

function renderProfileHtml(){
    // currentProfile = new Profile(profiles[index])
    document.getElementById("Card").innerHTML = currentProfile.renderProfile()   
}

renderProfileHtml()