$(document).ready(() => {

    // CLICK HANDLERS
    // ========================================================================
    const handleYes = function(){
        //get current location
        const currLocationArr = window.location.href.split('/');
        const noHTML = currLocationArr.pop();
        const newLocation = currLocationArr.join('/') + "/about.html";
            //replace index.html with about.html
            //send user to new window location

        //TODO DONT FORGET TO UNCOMMENT TIMER WHEN DEPLOYING
        // setTimeout(() => {
        //     window.location = newLocation
        // }, 5000)
    }
    
    const handleNo = function(){
        console.log("handleNo");
    }

    //when user clicks yes or no button, call handleMatch
    //If no button, change card to new values
        //Switch image, Name, Title, etc.
    //if yes, show "It's a match modal"
        //take user to portfolio page


    // CLICK LISTENERS
    // ========================================================================
    $(".yes").on("click", handleYes);
    $(".no").on("click", handleNo);

});