import UrlapView from "../View/Urlap/UrlapView.js";
export default class DataService {
  constructor() {
    console.log("DataService;");
  }
  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        // console.log(response.data.irok); az irok lista kiiratása
        callback(response.data.irok); //meghívja az adatokkal
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  postData() {
    axios
      .post("./adatok.json", {
        id: "3",
        nev: "Flintstone",
        szul: 1970
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  putData() {}

  deleteData() {}
}
