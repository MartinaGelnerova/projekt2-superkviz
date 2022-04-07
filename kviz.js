let kviz = [
  {
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    odpovedi: ["Kočičák", "Mončičák", "Opičák"],
    spravna: 1
  },
  {
    otazka: "Jaké je Matějovo nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    odpovedi: ["Kokos", "Melounek", "Jahoda", "Ani jedna z možností"],
    spravna: 2
  },
  {
    otazka: "Pro úspěšné absolvování kurzu je potřeba...",
    obrazek: "obrazky/pivo.jpg",
    odpovedi: ["Umět JavaScript", "Chodit po kurzu do hospody"],
    spravna: 0
  }
];

let poradi = document.getElementById("poradi");
let otazka = document.getElementById("otazka");
let obrazek = document.getElementById("obrazek");
let element = null;
let zvoleneOdpovedi = [];
let varianty = [];

let i = 0
while (i <= kviz.length - 1) {
  element = kviz[i];
  poradi.innerHTML = `Otázka ${i + 1} / ${kviz.length}`;
  otazka.innerHTML = element.otazka;
  obrazek.src = element.obrazek;
  console.log(otazka.innerHTML);
  for (n = 0; n <= element.odpovedi.length - 1; n++) {
    let odpoved = element.odpovedi[n];
    let novaPolozka = document.createElement('li');
    novaPolozka.setAttribute("data-odpoved", n);
    novaPolozka.innerHTML = odpoved;
    document.getElementById("odpovedi").appendChild(novaPolozka);
    console.log(odpoved);
  };
  varianty = document.querySelectorAll('li');
  varianty.forEach((varianta) => {
    varianta.addEventListener('click', (udalost) => {
      let zvolenaOdpoved = udalost.target.dataset.odpoved;
      zvoleneOdpovedi.push(zvolenaOdpoved);
    });
  i++;
  });
  
}

