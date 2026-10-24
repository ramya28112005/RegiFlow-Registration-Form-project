
/* ==========================================
   RegiFlow Registration Form
   ES6 Class and Object
========================================== */


/* Registration Class */

class RegiFlow {

    constructor(name, email, adhar, type) {

        this.name = name;
        this.email = email;
        this.adhar = adhar;
        this.type = type;

    }

}



/* Display Class */

class Display {


    /* Add Registration Details */

    add(registration) {

        let tableBody = document.getElementById("tableBody");


        let uilist = `
            <tr>

                <td>${registration.name}</td>

                <td>${registration.email}</td>

                <td>${registration.adhar}</td>

                <td>${registration.type}</td>

            </tr>
        `;


        tableBody.innerHTML += uilist;

    }



    /* Clear Form */

    clear() {

        let registrationForm =
            document.getElementById("registerform");


        registrationForm.reset();

    }



    /* Validate Registration */

    validate(registration) {


        if (

            registration.name.trim().length < 2 ||

            registration.email.trim().length < 5 ||

            !/^[0-9]{12}$/.test(registration.adhar) ||

            !["male", "female"].includes(registration.type)

        ) {

            return false;

        }


        return true;

    }



    /* Show Success or Error Message */

    show(type, displayMessage) {


        let message =
            document.getElementById("showmessage");


        message.innerHTML = `

            <div class="alert alert-${type}" role="alert">

                ${displayMessage}

            </div>

        `;


        setTimeout(function () {

            message.innerHTML = "";

        }, 3000);


    }


}



/* ==========================================
   Main Function
========================================== */


/* Select Registration Form */

let registrationForm =
    document.getElementById("registerform");



/* Submit Event */

registrationForm.addEventListener(
    "submit",
    registrationFormSubmit
);



/* Registration Submit Function */

function registrationFormSubmit(e) {


    /* Prevent Page Refresh */

    e.preventDefault();



    console.log("RegiFlow form is getting submitted");



    /* Get Input Values */

    let name =
        document.getElementById("name").value.trim();


    let email =
        document.getElementById("email").value.trim();


    let adhar =
        document.getElementById("adhar").value.trim();



    /* Get Gender */

    let male =
        document.getElementById("male");


    let female =
        document.getElementById("female");



    let gender = male.checked
        ? male.value
        : female.checked
            ? female.value
            : "";



    /* Create RegiFlow Object */

    let data = new RegiFlow(
        name,
        email,
        adhar,
        gender
    );



    console.log(data);



    /* Create Display Object */

    let display = new Display();



    /* Validate Registration */

    if (display.validate(data)) {



        /* Add Registration */

        display.add(data);



        /* Success Message */

        display.show(
            "success",
            "RegiFlow Registration is Success"
        );



        /* Clear Form */

        display.clear();


    }

    else {



        /* Error Message */

        display.show(
            "danger",
            "Registration failed. Please fill out the form properly."
        );


    }


}



/* ==========================================
   Search Functionality
========================================== */


/* Select Search Form */

let searchForm =
    document.getElementById("searchForm");



/* Search Event */

searchForm.addEventListener(
    "submit",
    function (e) {


        /* Prevent Refresh */

        e.preventDefault();



        /* Get Search Value */

        let searchInput =
            document.getElementById("searchInput")
                .value
                .toLowerCase()
                .trim();



        /* Get Table Rows */

        let tableRows =
            document.querySelectorAll("#tableBody tr");



        /* Search Registration */

        tableRows.forEach(function (row) {


            let rowText =
                row.innerText.toLowerCase();



            if (rowText.includes(searchInput)) {


                /* Show Matching Row */

                row.style.display = "";


            }

            else {


                /* Hide Non-Matching Row */

                row.style.display = "none";


            }


        });


    }
);
