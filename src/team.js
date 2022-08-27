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



module.exports = Team;