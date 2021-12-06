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
    <!-- navbar ^^^ -->

    <!-- cards go here vvv -->

    ${staffCards(staff)}

    <!-- footer starts here vvv -->
    <footer class="py-4 bg-transparent text-white-50" style="margin-top: 30px">
      <div>
      <div class="container text-center bg-transparent">
        <small>JDLTeamviewApp</small>
      </div>
    </div>
    </footer>
  </body>
</html>


  `;
}

function staffCards(staff) {
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].GETROLE() === "Manager") return;
    `
        <div class="col-4" style="width: 290px">
        <div class="card emp-cards">
          <div class="card-body">
            <h5 class="card-title manager" style="text-align: center">
              ${response.GETROLE}
            </h5>
            <img
              class="card-img-top empImg justify-content-center"
              src="dist/imgs/EMPplaceholderIMG.png"
              alt="STAFF IMG PLACEHOLDER"
              style=""
            />
            <p class="card-text">${response.GETNAME}</p>
    
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a
                  href="mailto: ${response.GETEMAIL}"
                  target="_blank"
                  rel="no opener no referrer"
                  >${response.GETEMAIL}</a
                >
              </li>
              <li class="list-group-item">${response.GETID}</li>
              <li class="list-group-item">
                OFFICE NUMBER: ${OFFICE} 
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
    if (staff[i].GETROLE() === "Engineer") return;
    `
        <div class="col-4" style="width: 290px">
        <div class="card emp-cards">
          <div class="card-body">
            <h5 class="card-title engineer" style="text-align: center">
              ${response.GETROLE}
            </h5>
            <img
              class="card-img-top empImg justify-content-center"
              src="dist/imgs/EMPplaceholderIMG.png"
              alt="STAFF IMG PLACEHOLDER"
              style=""
            />
            <p class="card-text">${response.GETNAME}</p>
    
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a
                  href="mailto: ${response.GETEMAIL}"
                  target="_blank"
                  rel="no opener no referrer"
                  >${response.GETEMAIL}</a
                >
              </li>
              <li class="list-group-item">${response.GETID}</li>
              <li class="list-group-item">
                Github: ${GITHUB} 
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
    if (staff[i].GETROLE() === "Intern") return;
    `
        <div class="col-4" style="width: 290px">
        <div class="card emp-cards">
          <div class="card-body">
            <h5 class="card-title intern" style="text-align: center">
              ${response.GETROLE}
            </h5>
            <img
              class="card-img-top empImg justify-content-center"
              src="dist/imgs/EMPplaceholderIMG.png"
              alt="STAFF IMG PLACEHOLDER"
              style=""
            />
            <p class="card-text">${response.GETNAME}</p>
    
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a
                  href="mailto: ${response.GETEMAIL}"
                  target="_blank"
                  rel="no opener no referrer"
                  >${response.GETEMAIL}</a
                >
              </li>
              <li class="list-group-item">${response.GETID}</li>
              <li class="list-group-item">
                School: ${SCHOOL} 
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
  }
}
staffCards();

// template literal that runs "for each" that loops over each user response to create new card

// Ensure that staff is an array of expected typrs fro the employees
// Pass into `renderTemplateLiteral`
//

module.exports = renderTemplateLiteral;
