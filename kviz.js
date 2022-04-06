let kviz = [
  {otazka: "Co je ikonická hračka z 80. let?",
  obrazek: "obrazky/moncicak.jpg",
  odpovedi: ["Kočičák", "Mončičák","Opičák"],
  spravna: 1
  },
  {otazka: "Jaké je Matějovo nejoblíbenější ovoce?",
  obrazek: "obrazky/ovoce.jpg",
  odpovedi: ["Kokos", "Melounek", "Jahoda", "Ani jedna z možností"],
  spravna: 2
  },
  {otazka: "Pro úspěšné absolvování kurzu je potřeba...",
  obrazek: "obrazky/pivo.jpg",
  odpovedi: ["Umět JavaScript", "Chodit po kurzu do hospody"],
  spravna: 0
  }
];

let poradi = document.getElementById("poradi");
let otazka = document.getElementById("otazka");
let obrazek = document.getElementById("obrazek");
let element = null;
let i = 0;

while (i <= kviz.length - 1) {
  element = kviz[i];
  poradi.innerHTML = `Otázka ${i+1} / ${kviz.length}`;
  otazka.innerHTML = element.otazka;
  obrazek.src = element.obrazek;
  console.log(otazka.innerHTML);
  for (i = 0; i <= element.odpovedi.length - 1; i++) {
    let odpoved = element.odpovedi[i];
    let novaPolozka = document.createElement('li');
    novaPolozka.setAttribute("data-odpoved", i);
    novaPolozka.innerHTML = odpoved;
    document.getElementById("odpovedi").appendChild(novaPolozka);
    console.log(odpoved);
  };
  i++
}
