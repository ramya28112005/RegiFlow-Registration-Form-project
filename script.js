function RegiFlow(name, email, adhar, type) {

    this.name = name;
    this.email = email;
    this.adhar = adhar;
    this.type = type;

}



/* Display Constructor */

function Display() {

}



/* Validate Prototype */

Display.prototype.validate = function(registration) {

    if (

        registration.name.trim().length < 2 ||

        registration.email.trim().length < 5 ||

        !/^[0-9]{12}$/.test(registration.adhar) ||

        !["male", "female"].includes(registration.type)

    ) {

        return false;

    }

    return true;

};



/* Clear Prototype */

Display.prototype.clear = function() {

    let registrationForm =
        document.getElementById("registerform");

    registrationForm.reset();

};



/* Add Prototype */

Display.prototype.add = function(registration) {

    let tableBody =
        document.getElementById("tableBody");


    let uilist = `

        <tr>

            <td>${registration.name}</td>

            <td>${registration.email}</td>

            <td>${registration.adhar}</td>

            <td>${registration.type}</td>

        </tr>

    `;


    tableBody.innerHTML += uilist;

};



/* Show Prototype */

Display.prototype.show = function(type, displayMessage) {

    let message =
        document.getElementById("showmessage");


    message.innerHTML = `

        <div class="alert alert-${type}" role="alert">

            ${displayMessage}

        </div>

    `;


    setTimeout(function() {

        message.innerHTML = "";

    }, 3000);

};



/* ==========================================
   Main Function
========================================== */


/* Select Form */

let registrationForm =
    document.getElementById("registerform");



/* Submit Event */

registrationForm.addEventListener(
    "submit",
    registrationFormSubmit
);



/* Registration Submit */

function registrationFormSubmit(e) {

    e.preventDefault();


    let name =
        document.getElementById("name").value.trim();


    let email =
        document.getElementById("email").value.trim();


    let adhar =
        document.getElementById("adhar").value.trim();


    let male =
        document.getElementById("male");


    let female =
        document.getElementById("female");


    let gender = male.checked
        ? male.value
        : female.checked
            ? female.value
            : "";



    /* Create Registration Object */

    let data = new RegiFlow(
        name,
        email,
        adhar,
        gender
    );


    console.log(data);



    /* Create Display Object */

    let display = new Display();



    /* Validation */

    if (display.validate(data)) {


        display.add(data);


        display.show(
            "success",
            "RegiFlow Registration is Success"
        );


        display.clear();


    }

    else {


        display.show(
            "danger",
            "Registration failed. Please fill out the form properly."
        );


    }

}