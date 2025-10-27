/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".newsletter form");
    const emailInput= document.querySelector(".newsletter input[type='email']");
    const message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event){
        event.preventDefault(); //prevents error when refreshing the page

        const email = emailInput.value.trim();

        message.classList.remove("success","error"); //removes any previous content

        if (email===""){
            message.textContent = "Please enter a valid email address.";
            message.classList.add("error");
        }else{
            message.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            message.classList.add("success");
        }

        email.value = ""; //resets to a blank value

    });
});
