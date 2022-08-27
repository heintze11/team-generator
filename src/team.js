// Use to create HTML
// create divs for each team member
// for loop for each team member
// put each piece of html into main html

const createTeam = (team) => {
    const html = [];
    const createManager = manager => {
        let managerHtml = ``
    }
}


for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager"){
        generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer"){
        generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern"){
        generateIntern(team[i]);
    }
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