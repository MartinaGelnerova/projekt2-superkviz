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
vykresliVysledky();

function vykresliOtazku(i, kviz, element) {
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
    console.log(odpoved);
  };
}

function aktivujVarianty(i, kviz, element) {
  varianty = document.querySelectorAll('li');
  varianty.forEach((varianta) => {
    varianta.addEventListener('click', (udalost) => {
      let zvolenaOdpoved = udalost.target.dataset.odpoved;
      zvoleneOdpovedi.push(zvolenaOdpoved);
      document.querySelector('.kviz').removeChild(document.getElementById('poradi'));
      document.querySelector('.kviz').removeChild(document.getElementById('otazka'));
      document.querySelector('.kviz').removeChild(document.getElementById('moznosti'));
      if (i < kviz.length - 1) {
        i++;
        element = kviz[i];
        vykresliOtazku(i, kviz, element);
        aktivujVarianty(i, kviz, element);
      };
    });
  });
}

function vykresliVysledky (zvoleneOdpovedi, kviz) {
  
}