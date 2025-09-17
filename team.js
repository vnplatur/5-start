const team = [
  { name: "Mansi", role: "Website", img: "https://i.pravatar.cc/200?img=1" },
  { name: "Gayatri", role: "Website / Graphic / Marketing", img: "https://i.pravatar.cc/200?img=2" },
  { name: "Tanmay", role: "Raw Material / Pricing", img: "https://i.pravatar.cc/200?img=3" },
  { name: "Ayush Dubey", role: "Raw Material / Pricing", img: "https://i.pravatar.cc/200?img=4" },
  { name: "Diya", role: "Packaging", img: "https://i.pravatar.cc/200?img=5" },
  { name: "Shreya", role: "Packaging", img: "https://i.pravatar.cc/200?img=6" },
  { name: "Harshal", role: "Marketing / Labour", img: "https://i.pravatar.cc/200?img=7" },
  { name: "Nandini", role: "Pricing", img: "https://i.pravatar.cc/200?img=8" },
  { name: "Harshit", role: "Logistics", img: "https://i.pravatar.cc/200?img=9" }
];

const container = document.getElementById("team-members");

container.innerHTML = team.map(member => `
  <div class="col-md-4 mb-4">
    <div class="card team-card shadow-sm h-100">
      <img src="${member.img}" class="card-img-top" alt="${member.name}">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
        <div class="d-flex justify-content-center gap-2 mt-2">
          <a href="mailto:${member.name.toLowerCase()}@example.com" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-envelope"></i>
          </a>
          <a href="tel:+911234567890" class="btn btn-outline-success btn-sm">
            <i class="bi bi-telephone"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
`).join("");
