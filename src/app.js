import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'


const kemiaiElemek = [
  { nev: 'Hidrogén', vegyjel: 'H', rendszam: 1, atomtomeg: 1.008, allapot: 'Gáz' },
  { nev: 'Hélium', vegyjel: 'He', rendszam: 2, atomtomeg: 4.003, allapot: 'Gáz' },
  { nev: 'Lítium', vegyjel: 'Li', rendszam: 3, atomtomeg: 6.94, allapot: 'Szilárd' },
  { nev: 'Szén', vegyjel: 'C', rendszam: 6, atomtomeg: 12.011, allapot: 'Szilárd' },
  { nev: 'Nitrogén', vegyjel: 'N', rendszam: 7, atomtomeg: 14.007, allapot: 'Gáz' },
  { nev: 'Oxigén', vegyjel: 'O', rendszam: 8, atomtomeg: 15.999, allapot: 'Gáz' },
  { nev: 'Fluor', vegyjel: 'F', rendszam: 9, atomtomeg: 18.998, allapot: 'Gáz' },
  { nev: 'Neon', vegyjel: 'Ne', rendszam: 10, atomtomeg: 20.180, allapot: 'Gáz' }
];

const doc = {
    tbody: document.querySelector('#tbody'),
    gasCounter: document.querySelector('#gasCounter')
}

function render(elemek) {
    var rows = ''
    for(const elem of elemek) {
        var text = ''
        if(elem.rendszam < 5) {
            var text = "Könnyű elem"
        }
        var row = `
            <tr>
                <td>${elem.nev} <span class="badges text-bg-success">${text}</span></td>
                <td>${elem.vegyjel}</td>
                <td>${elem.rendszam}</td>
                <td>${elem.atomtomeg}</td>
                <td>${elem.allapot}</td>
            </tr>

        `
        rows += row
    }
    doc.tbody.innerHTML = rows
}

function renderCountedValue(elemek) {
    let count = 0;
    for(const elem of elemek) {
        if(elem.allapot == 'Gáz') {
            count++
        }
    }
    let msg = "Gáz halmazállapotú elemek: "
    doc.gasCounter.innerHTML = msg + count
}

render(kemiaiElemek)
renderCountedValue(kemiaiElemek)