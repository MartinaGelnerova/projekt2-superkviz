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

let element = null;
let zvoleneOdpovedi = [];
let varianty = [];

i = 0

element = kviz[i];
vykresliOtazku(i, kviz, element);
aktivujVarianty(i, kviz, element);

function vykresliOtazku(i, kviz, element) {
  let kvizStranka = document.createElement('div');
  kvizStranka.className = 'kviz';
  document.querySelector('body').appendChild(kvizStranka);
  let poradiOtazky = document.createElement('div');
  poradiOtazky.id = 'poradi';
  poradiOtazky.textContent = `Otázka ${i + 1} / ${kviz.length}`;
  document.querySelector('.kviz').appendChild(poradiOtazky);
  let novaOtazka = document.createElement('h2');
  novaOtazka.id = 'otazka';
  novaOtazka.innerHTML = element.otazka;
  document.querySelector('.kviz').appendChild(novaOtazka);
  let moznosti = document.createElement('div');
  moznosti.id = 'moznosti';
  moznosti.className = 'obsah';
  document.querySelector('.kviz').appendChild(moznosti);
  let foto = document.createElement('div');
  foto.className = 'foto';
  document.getElementById('moznosti').appendChild(foto);
  let obrazek = document.createElement('img');
  obrazek.id = 'obrazek';
  obrazek.alt = "obrázek";
  obrazek.src = element.obrazek;
  document.querySelector('.foto').appendChild(obrazek);
  let odpovedi = document.createElement('ul');
  odpovedi.id = 'odpovedi';
  document.getElementById('moznosti').appendChild(odpovedi);
  for (n = 0; n <= element.odpovedi.length - 1; n++) {
    let odpoved = element.odpovedi[n];
    let novaPolozka = document.createElement('li');
    novaPolozka.setAttribute("data-odpoved", n);
    novaPolozka.innerHTML = odpoved;
    document.getElementById("odpovedi").appendChild(novaPolozka);
  };
}

function aktivujVarianty(i, kviz, element) {
  varianty = document.querySelectorAll('li');
  varianty.forEach((varianta) => {
    varianta.addEventListener('click', (udalost) => {
      let zvolenaOdpoved = udalost.target.dataset.odpoved;
      zvoleneOdpovedi.push(zvolenaOdpoved);
      document.querySelector('body').removeChild(document.querySelector('.kviz'));
      if (i < kviz.length - 1) {
        i++;
        element = kviz[i];
        vykresliOtazku(i, kviz, element);
        aktivujVarianty(i, kviz, element);
      } else {
        vykresliVysledky(zvoleneOdpovedi, kviz);
      };
    });
  });
}

function vykresliVysledky(zvoleneOdpovedi, kviz) {
  let spravnePocet = 0;
  let vysledkyStranka = document.createElement('div');
  vysledkyStranka.className = 'vysledek';
  document.querySelector('body').appendChild(vysledkyStranka);
  document.querySelector('.vysledek').style.display = true;
  let nadpis = document.createElement('h2');
  nadpis.id = 'otazky';
  nadpis.className = 'obsah';
  nadpis.textContent = `Tvoje hodnocení`;
  document.querySelector('.vysledek').appendChild(nadpis);
  for (i = 0; i <= kviz.length - 1; i++) {
    element = kviz[i];
    let otazka = document.createElement('div');
    otazka.id = 'poradi';
    otazka.className = 'odpovedi obsah';
    otazka.style.color = 'black';
    otazka.innerHTML = `${i + 1}. ${element.otazka}`;
    document.querySelector('.vysledek').appendChild(otazka);
    let odpoved = document.createElement('p');
    odpoved.className = 'odpovedi';
    odpoved.innerHTML = `Tvoje odpověď: ${element.odpovedi[zvoleneOdpovedi[i]]}`;
    document.querySelector('.vysledek').appendChild(odpoved);
    let spravne = document.createElement('p');
    spravne.className = 'odpovedi';
    if (zvoleneOdpovedi[i] == element.spravna) {
      spravne.innerHTML = `To je SPRÁVNĚ.`;
      spravnePocet++;
    } else {
      spravne.innerHTML = `Správná odpověd: ${element.odpovedi[element.spravna]}`;
    }
    document.querySelector('.vysledek').appendChild(spravne);
  }
  let vysledek = document.createElement('h2');
  vysledek.id = 'vysledek';
  vysledek.textContent = `Správně ${spravnePocet} ze ${kviz.length} otázek. Úspěšnost ${Math.round(spravnePocet / kviz.length * 100)}%.`;
  document.querySelector('.vysledek').appendChild(vysledek);
}