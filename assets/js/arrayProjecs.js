const projects = [
  {
    name: "CyberControl",
    url: "https://cybercontrol.com.br/",
    id: 1,
    desc: "",
    src: "assets/images/projects/cybercontrol.jpg",
  },
  {
    name: "Maggicor",
    url: "https://maggicor.com.br/",
    id: 2,
    desc: "",
    src: "assets/images/projects/maggicor.jpg",
  },
  {
    name: "5050sel",
    url: "https://50-50sel.com/",
    id: 3,
    desc: 'Nesse site aprendi a usar a biblioteca de animação "GSP (GreenSock)" por scroll.',
    src: "assets/images/projects/5050.jpg",
  },
  {
    name: "RP Capital",
    url: "https://rpcapital.com.br/",
    id: 4,
    desc: "Desenvolvimento do novo layout do site RP Capital.",
    src: "assets/images/projects/rpcapital.jpg",
  },
  {
    name: "Suprir",
    url: "https://www.suprir.com.br/",
    id: 5,
    desc: "",
    src: "assets/images/projects/suprir.jpg",
  },
  {
    name: "IBI",
    url: "https://ibi.ag/",
    id: 6,
    desc: "",
    src: "assets/images/projects/ibi.jpg",
  },
  {
    name: "AgroAmazônia",
    url: "https://carreiras.agroamazonia.com.br/",
    id: 7,
    desc: "",
    src: "assets/images/projects/aa.jpg",
  },
  {
    name: "Agro BAYER",
    url: "https://paineldesolucoes.lojaagrobayer.com.br/",
    id: 8,
    desc: "",
    src: "assets/images/projects/bayer.jpg",
  },
  {
    name: "Cibrat",
    url: "https://cibrat.com.br/",
    id: 9,
    desc: "",
    src: "assets/images/projects/cibrat.jpg",
  },
  {
    name: "Friovale",
    url: "https://friovalelog.com.br/",
    id: 10,
    desc: "",
    src: "assets/images/projects/friovale.jpg",
  },
  {
    name: "JAP",
    url: "https://japroteiros.com.br/",
    id: 11,
    desc: "",
    src: "assets/images/projects/jap.jpg",
  },
  {
    name: "Conimel",
    url: "https://conimel.mo4.com.br/",
    id: 12,
    desc: "",
    src: "assets/images/projects/conimel.jpg",
  },
];

const lineProjects = document.querySelector("#projects .row");

projects.forEach((project) => {
  const colProject = document.createElement("div");
  colProject.classList.add("col-sm-6", "col-md-4");

  colProject.innerHTML = `
    <div class="col-card invisible" data-scrollclass="animate__animated animate__fadeInDown">
        <a href="${project.url}" class="card" target="_blank">
        <img src="${project.src}" alt="Capa do site ${project.name}">

        <div class="card-content">
            <h3 class="name-card">
            ${project.name}
            </h3>
        </div>
        </a>
    </div>
    `;

    lineProjects.appendChild(colProject)
});
