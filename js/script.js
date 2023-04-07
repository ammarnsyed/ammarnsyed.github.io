//Edit Array to add or remove Projects
function addProjects() {
  const projects = [
      {
          name: "OddJobs Website",
          description: "Helped build a website using React and node.js where users could find part-time jobs such as mowing the lawn, cleaning windows and various other jobs."
      },
      {
          name: "Preview Days Game",
          description: "Currently designing an educational java platformer game for high school students using a framework called libGDX where we teach how variables work for future computer science students."
      },
      {
          name: "Smart Contract for NFT Project",
          description: "Constructed an ERC 721 smart contract for an NFT project which would allow users to mint an NFT for a specific price from the projects website."
      },
      {
          name: "Amara Apparel Website",
          description: "Helped build and design an E-Commerce website that generated over 20,000 USD in sales"
      }
  ];

  const projectsTable = document.querySelector("#projects-table tbody");

  projects.forEach((project) => {
    const row = projectsTable.insertRow();
    const nameCell = row.insertCell();
    const descriptionCell = row.insertCell();

    nameCell.innerText = project.name;
    descriptionCell.innerText = project.description;
  });
}

//Edit Array to add and remove skills
function addSkills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "Python",
    "MySQL",
    "Sony Vegas"
  ];

  const skillsList = document.getElementById("skills-list");

  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// Color Palette swap. Uses a conditional and event handlers to change palettes depending on the button pressed
function swapColorPalettes() {
  const palette1Btn = document.getElementById('palette1-btn');
  const palette2Btn = document.getElementById('palette2-btn');
  const palette3Btn = document.getElementById('palette3-btn');

  palette1Btn.addEventListener('click', () => {
    document.body.classList.remove('palette2', 'palette3');
    document.body.classList.add('palette1');
    alert("Change to Default Palette")
  });

  palette2Btn.addEventListener('click', () => {
    document.body.classList.remove('palette1', 'palette3');
    document.body.classList.add('palette2');
    alert("Change to Pink Palette")
  });

  palette3Btn.addEventListener('click', () => {
    document.body.classList.remove('palette1', 'palette2');
    document.body.classList.add('palette3');
    alert("Change to Blue Palette")
  });
}
function notification(){
  // check if the browser supports notifications
if ("Notification" in window) {
  // ask for permission to show notifications
  Notification.requestPermission().then(function (result) {
    console.log("Notification permission:", result);
  });
}

// show a notification when the page is loaded
window.addEventListener("load", function () {
  if (Notification.permission === "granted") {
    new Notification("Welcome to my website!");
  }
});
}


addProjects();
addSkills();
swapColorPalettes();
notification();


