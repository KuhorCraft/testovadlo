// Adresa webové aplikace z Apps Scriptu (jediný zdroj dat)
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyx9tM-CL5smo2dW-KBeEwz3yqg3O-0QOprWT_IVT2D5Xao6t-6RbRT2c2Fcvuvca5TiQ/exec';

const REFRESH_INTERVAL = 30000;

let hlavni = { hlavicka: [], zaci: [] };
let seznamAkci = [];  // [{ nazev, c }], c = sloupec v hlavní tabulce
let akceInfo = {};    // název -> { cislo, cena }
let platbyStav = {};  // VS -> stav ('čeká', 'potvrzeno', 'zamítnuto')

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// VS: 2 číslice žáka + 3 číslice akce, např. 08154
function vsPro(i, j) {
  const info = akceInfo[seznamAkci[j].nazev];
  if (!info) return null;
  return hlavni.zaci[i].cislo + info.cislo;
}

// Indexy žáků, kteří mají vyplněné jméno
function aktivniZaci() {
  return hlavni.zaci.map((z, i) => i).filter(i => hlavni.zaci[i].jmeno !== '');
}

async function nactiData() {
  try {
    const odpoved = await fetch(WEB_APP_URL + '?t=' + Date.now(), { cache: 'no-store' });
    const data = await odpoved.json();
    if (!data.hlavni) throw new Error('Neplatná odpověď serveru.');

    hlavni = data.hlavni;

    akceInfo = {};
    data.akce.forEach(a => { akceInfo[a.nazev] = { cislo: a.cislo, cena: a.cena }; });

    platbyStav = {};
    data.platby.forEach(p => { platbyStav[p.vs] = p.stav; });

    seznamAkci = hlavni.hlavicka
      .map((nazev, c) => ({ nazev: nazev, c: c }))
      .filter(a => a.c > 0 && a.nazev !== '');

    naplnRoletky();
    zmenFiltr();
  } catch (err) {
    document.getElementById('dluznici-list').innerHTML =
      '<li>Chyba: Nepodařilo se načíst data. Zkontrolujte WEB_APP_URL a nasazení Apps Scriptu.</li>';
  }
}

function naplnRoletky() {
  const akceSelect = document.getElementById('akce-select');
  const zaciSelect = document.getElementById('zaci-select');
  const predchoziAkce = akceSelect.value;
  const predchoziZak = zaciSelect.value;

  akceSelect.innerHTML = '<option value="vse">-- Všechny akce --</option>' +
    seznamAkci.map((a, j) => `<option value="${j}">${esc(a.nazev)}</option>`).join('');

  zaciSelect.innerHTML = '<option value="vse">-- Všichni žáci --</option>' +
    aktivniZaci().map(i => `<option value="${i}">${esc(hlavni.zaci[i].jmeno)}</option>`).join('');

  // Při obnovení dat zůstane zvolený filtr, pokud ještě existuje
  if (akceSelect.querySelector(`option[value="${predchoziAkce}"]`)) akceSelect.value = predchoziAkce;
  if (zaciSelect.querySelector(`option[value="${predchoziZak}"]`)) zaciSelect.value = predchoziZak;
}

// Stav buňky: 1/ANO = zaplaceno, v = vráceno, n = nevráceno, - = nevztahuje se,
// prázdné = nezaplaceno, nebo čeká na vyřízení po volbě žáka
function stavBunky(i, j) {
  const hodnota = (hlavni.zaci[i].bunky[seznamAkci[j].c] || '').toLowerCase();

  if (hodnota === '1' || hodnota === 'ano') return 'zaplaceno';
  if (hodnota === 'v') return 'vraceno';
  if (hodnota === 'n') return 'nevraceno';
  if (hodnota === '-' || hodnota === '—') return 'nevztahuje';

  const vs = vsPro(i, j);
  if (vs && platbyStav[vs] === 'čeká') return 'ceka';
  return 'nezaplaceno';
}

function bunkaPlatby(i, j) {
  switch (stavBunky(i, j)) {
    case 'zaplaceno':  return '<td><font color="green"><b>ANO</b></font></td>';
    case 'vraceno':    return '<td><font color="#808080"><b>VRÁCENO</b></font></td>';
    case 'nevraceno':  return '<td><font color="red"><b>NEVRÁCENO</b></font></td>';
    case 'nevztahuje': return '<td>—</td>';
    case 'ceka':       return '<td><font color="#808000"><b>ČEKÁ NA VYŘÍZENÍ</b></font></td>';
    default: {
      const tlacitko = vsPro(i, j)
        ? ` <button onclick="zobrazPlatbu(${i}, ${j})">Zaplatit</button>`
        : '';
      return `<td><font color="red"><b>NE</b></font>${tlacitko}</td>`;
    }
  }
}

function zmenFiltr() {
  const filtrAkce = document.getElementById('akce-select').value;
  const filtrZak = document.getElementById('zaci-select').value;

  const akceIdx = filtrAkce === 'vse' ? seznamAkci.map((_, j) => j) : [parseInt(filtrAkce, 10)];
  const zaciIdx = filtrZak === 'vse' ? aktivniZaci() : [parseInt(filtrZak, 10)];

  document.getElementById('tabulka-hlavicka').innerHTML =
    '<tr><th>Žák</th>' + akceIdx.map(j => `<th>${esc(seznamAkci[j].nazev)}</th>`).join('') + '</tr>';

  document.getElementById('tabulka-telo').innerHTML = zaciIdx.map(i =>
    `<tr><td>${esc(hlavni.zaci[i].jmeno)}</td>` + akceIdx.map(j => bunkaPlatby(i, j)).join('') + '</tr>'
  ).join('');

  // Seznam k vyřízení: nezaplacené položky a vrácení peněz
  const polozky = [];
  zaciIdx.forEach(i => akceIdx.forEach(j => {
    const stav = stavBunky(i, j);
    if (stav === 'nezaplaceno' || stav === 'nevraceno') polozky.push({ i, j, stav });
  }));

  const nadpis = document.getElementById('nadpis-dluznici');
  const seznam = document.getElementById('dluznici-list');

  if (polozky.length === 0) {
    nNTKadpis.innerText = 'Ve zvoleném výběru nejsou žádné nezaplacené položky ani vrácení.';
    seznam.innerHTML = '';
    return;
  }

  nadpis.innerText = `K vyřízení: ${polozky.length}`;
  seznam.innerHTML = polozky.map(({ i, j, stav }) => {
    const akce = seznamAkci[j].nazev;
    if (stav === 'nevraceno') {
      return `<li>${esc(hlavni.zaci[i].jmeno)} – ${esc(akce)}: <b>k vrácení peněz</b></li>`;
    }
    const info = akceInfo[akce];
    const cena = info ? `${info.cena} Kč` : 'akce není zaregistrována';
    const tlacitko = vsPro(i, j) ? ` <button onclick="zobrazPlatbu(${i}, ${j})">Zaplatit</button>` : '';
    return `<li>${esc(hlavni.zaci[i].jmeno)} – ${esc(akce)}: <b>${esc(cena)}</b>${tlacitko}</li>`;
  }).join('');
}

function zobrazPlatbu(i, j) {
  const akce = seznamAkci[j].nazev;
  const info = akceInfo[akce];
  const vs = vsPro(i, j);

  if (!info || !vs || !(info.cena > 0)) {
    alert(`Pro akci „${akce}“ nelze zadat platbu. Zkontrolujte, zda je v administraci zaregistrovaná a má cenu.`);
    return;
  }

  const parametry = new URLSearchParams({
    jmeno: hlavni.zaci[i].jmeno,
    akce: akce,
    castka: Number(info.cena).toFixed(2),
    vs: vs
  });

  window.open('digitalni-platba/platba.html?' + parametry.toString(), '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  nactiData();
  setInterval(nactiData, REFRESH_INTERVAL);
});