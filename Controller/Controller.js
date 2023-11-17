import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";

export default class Conntroller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("adatok.json", this.megjelenit); //átadom a megjelenít fv-t is. Ez a végpont.
  }
  megjelenit(list) {
    console.log(list);
    //példányosítjuk a TáblaViewt
    new TablaView(list, $(".adatok")); //az adatokat div-ben jeleníti meg
    new UrlapView($(".urlap"));
  }
}
