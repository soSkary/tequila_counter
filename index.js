// Create a function for the shot button to make a post request
// Get the button by the id
const button = document.getElementById("add_shot");
// When button is clicked
button.addEventListener("click", async () => {
    
   try {
       // make a post request to relative path ./add_shot
        const response = await fetch("add_shot", {
            method: "post",
            body : {
                // insert body here
                // maybe user name?
            }
        }); 
    }
    catch(err) {
        console.error(`Error: ${err}`);
    }
});
