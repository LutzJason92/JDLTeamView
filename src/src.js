const fs = require("fs");
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");

// let output = staff.map

//let

// create a wire frame HTML
function renderTemplateLiteral(staff) {
  return `

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Varela+Round&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="dist/style.css" />
    <title>JDLTeamviewApp</title>
  </head>

  <body>
    <header>
      <!-- nav bar elements  -->
      <div class="container">
        <nav
          class="navbar navbar-light bg-transparent"
          style="justify-content: center"
        >
          <a class="navbar-brand" href="#"
            ><span>JDL</span>Teamview<span>App</span></a
          >
        </nav>
      </div>
    </header>
    <!-- navbar ^^^ -->

    <!-- cards go here vvv -->
    <div class="container">
      <div class="row" style="justify-content: space-around">
        <!-- CARD 1 -->
        
        ${staffCards(staff)}

        <!-- cards go here ^^^ -->
      </div>
    </div>

    <!-- footer starts here vvv -->
    <footer class="py-4 bg-transparent text-white-50" style="margin-top: 30px">
      <div>
        <div class="container text-center bg-transparent">
          <small>JDL<span class="footer-span">Teamview</span>App</small>
        </div>
      </div>
    </footer>
  </body>
</html>



  `;
}

function staffCards(staff) {
  console.log(staff);
  let allStaff = ` `;
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].getRole() === "Manager") {
      allStaff += `
      <div class="col-4" style="width: 310px">
          <div class="card emp-cards">
            <div class="card-body text-center">
              <h5 class="card-title" style="text-align: center">
              ${staff[i].getRole()}
              </h5>
              <img
                class="card-img-top empImg"
                src="${staff[i].img}"
                alt="STAFFIMG"
              />
              <p class="card-name">${staff[i].name}</p>

              <ul class="list-group list-text list-group-flush text-start">
                <li class="list-group-item">
                  <a
                    href="mailto: ${staff[i].email}"
                    target="_blank"
                    rel="no opener no referrer"
                    >${staff[i].email}</a
                  >
                </li>
                <li class="list-group-item">${staff[i].id}</li>
                <li class="list-group-item">
                OFFICE NUMBER: ${staff[i].getOfficeNumber()} 
                </li>
              </ul>
            </div>
          </div>
        </div>
       `;
    }
    if (staff[i].getRole() === "Engineer") {
      allStaff += `
      <div class="col-4" style="width: 310px">
      <div class="card emp-cards">
        <div class="card-body text-center">
          <h5 class="card-title" style="text-align: center">
          ${staff[i].getRole()}
          </h5>
          <img
            class="card-img-top empImg"
            src="${staff[i].img}"
            alt="STAFFIMG"
          />
          <p class="card-name">${staff[i].name}</p>

          <ul class="list-group list-text list-group-flush text-start">
            <li class="list-group-item">
              <a
                href="mailto: ${staff[i].email}"
                target="_blank"
                rel="no opener no referrer"
                >${staff[i].email}</a
              >
            </li>
            <li class="list-group-item">${staff[i].id}</li>
            <li class="list-group-item">
            <a href="https://github.com/${staff[i].getGithub()}">
             Github: ${staff[i].getGithub()} 
            </a></li>
          </ul>
        </div>
      </div>
    </div>
      `;
    }
    if (staff[i].getRole() === "Intern") {
      allStaff += `
      <div class="col-4" style="width: 310px">
      <div class="card emp-cards">
        <div class="card-body text-center">
          <h5 class="card-title" style="text-align: center">
          ${staff[i].getRole()}
          </h5>
          <img
            class="card-img-top empImg"
            src="${staff[i].img}"
            alt="STAFFIMG"
          />
          <p class="card-name">${staff[i].name}</p>

          <ul class="list-group list-text list-group-flush text-start">
            <li class="list-group-item">
              <a
                href="mailto: ${staff[i].email}"
                target="_blank"
                rel="no opener no referrer"
                >${staff[i].email}</a
              >
            </li>
            <li class="list-group-item">${staff[i].id}</li>
            <li class="list-group-item">
            School: ${staff[i].getSchool()} 
            </li>
          </ul>
        </div>
      </div>
    </div>
      `;
    }
  }
  return allStaff;
}

// template literal that runs "for each" that loops over each user staff[i] to create new card

// Ensure that staff is an array of expected typrs fro the employees
// Pass into `renderTemplateLiteral`
//

module.exports = renderTemplateLiteral;
