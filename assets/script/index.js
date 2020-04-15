$(document).ready(() => {

    // CLICK HANDLERS
    // ========================================================================
    const handleYes = function(){
        //get current location
        const currLocationArr = window.location.href.split('/');
        //removes index.html from end of array
        const noHTML = currLocationArr.pop();
        //creates new string with abouthtml at the end
        const newLocation = currLocationArr.join('/') + "/about.html";

        // sends user to new page after a few seconds
        //TODO DONT FORGET TO UNCOMMENT TIMER WHEN DEPLOYING
        setTimeout(() => {
            window.location = newLocation
        }, 50);
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