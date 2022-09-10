class Profile {
    constructor(data){
        Object.assign(this,data)
    }
    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    renderProfile(){
        const {name, avatar, age, bio} = this
        return `
        <div class="Profile">
            <img id="badgelike" src="images/badge-like.png">
            <img id="badgenope" src="images/badge-nope.png">        
            <img id=Avatar src=${avatar}>
            <h4>${name}, ${age}</h4>
            <p>${bio}</p>
        </div>
        `
    } 
}

export {Profile}
