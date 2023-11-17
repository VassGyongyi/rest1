import { adatLeiro } from "../adatLeiro.js";
export default class UrlapView {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    //létrehozok egy form taget a szülőelemben
    this.szuloElem.append(`<form class=form> <fieldset disabled><div class='mb-3' >`);

    //létrehozok egy kapaszkodót a this.formElem-hez
    this.inputElemId = szuloElem.find("form");

    this.htmlOsszerak();
  }
  htmlOsszerak() {
    let txt = "";

    //végigmegyek az adatleíró kulcsain és letrehozom az egyes beviteli mezőket
    for (const key in adatLeiro) {
      txt += `<label for=${adatLeiro[key]}>${adatLeiro[key]}:</label><br>
                <input type="text" id=${adatLeiro[key]} name=${adatLeiro[key]}><br>`;
    }
    txt += `<input class="btn btn-primary" type="submit" value="Submit"></div></fieldset> </form>`;
    this.szuloElem.append(txt);
    console.log(txt);
  }
}
