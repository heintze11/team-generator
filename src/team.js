const createTeam = (team) => {
    // empty array for html team members
    const html = [];
    // create manager card
    const createManager = manager => {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID #: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`
        html.push(managerHtml);
    }
    // create engineer card
    const createEngineer = engineer => {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${engineer.name} <br/>
                <!-- icon -->
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID #: ${engineer.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li class="list-group-item">Github Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>`
        html.push(engineerHtml);
    }
    // create intern cards
    const createIntern = intern => {
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${intern.name} <br/>
                <!-- icon -->
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID #: ${intern.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>`
        html.push(internHtml);
    }
    // loop through all team members to create cards for each
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager"){
            createManager(team[i]);
        }
        if (team[i].getRole() === "Engineer"){
            createEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern"){
            createIntern(team[i]);
        }
    }
    // join all html elements created
    return html.join("");
}






module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="./team.css">
        <title>Software Team</title>
    </head>
    <body>
        <header>
            <h1 class="text-center m-2 p-2 bg-success">Software Team</h1>
        </header>
        <main>
            ${createTeam(team)}
        </main>
    </body>
    </html>`;
}