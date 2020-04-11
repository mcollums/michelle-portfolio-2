$(document).ready(function(){


    const handleYes = () => {
        console.log("handleYes");
    }
    
    const handleNo = () => {
        console.log("handleNo");
    }

//when user clicks yes or no button, call handleMatch
//If no button, change card to new values
    //Switch image, Name, Title, etc.
//if yes, show "It's a match alert"
    //take user to portfolio page


$(".yes").on("click", handleYes);
$(".no").on("click", handleNo);

});