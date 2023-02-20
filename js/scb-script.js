console.log("Ciao Cianuro... Oggi l'esercizio è VUE SLIDER");
//********************
// CREO OGGETTO ARRAY DI FOTO
//******************** */

//---------------------------------------------------------------------------
// |||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
//---------------------------------------------------------------------------
const { createApp } = Vue;

createApp({
  data() {
    return {
      pageTitle: "carosello immagini con VUE",
      fotoSlides: [
        {
          titolo: "Seduto sul pontile",
          descrizione:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
          img: "./img/img1.jpg",
        },
        {
          titolo: "Campanile sul fiume",
          descrizione:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
          img: "./img/img2.jpg",
        },
        {
          titolo: "Battello sul fiume",
          descrizione:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
          img: "./img/img3.jpg",
        },
        {
          titolo: "La città riflessa nel fiume",
          descrizione:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
          img: "./img/img4.jpg",
        },
        {
          titolo: "Finalmente un po' di vacanza",
          descrizione:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
          img: "./img/img5.jpg",
        },
      ],
      console.log([fotoSlides]),
    };
  },
}).mount("#app");
//---------------------------------------------------------------------------
// |||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// INIZIALIZZO LE FUNZIONI: SCORRI VERSO DESTRA
//---------------------------------------------------------------------------

// function scorriVersoDx(lastIndex) {
//   console.log(fotoElements[indiceFotoAttuale]);
//   fotoElements[indiceFotoAttuale].classList.remove("selected");

//   if (indiceFotoAttuale < lastIndex) {
//     indiceFotoAttuale += 1;
//   } else {
//     indiceFotoAttuale = 0;
//   }

//   console.log(fotoElements[indiceFotoAttuale]);
//   fotoElements[indiceFotoAttuale].classList.add("selected");
// }

//---------------------------------------------------------------------------
// INIZIALIZZO LE FUNZIONI: SCORRI VERSO SINISTRA
//---------------------------------------------------------------------------

// scorriVersoSn();

// function scorriVersoSn() {
//   console.log(fotoElements[indiceFotoAttuale]);
//   fotoElements[indiceFotoAttuale].classList.remove("selected");

//   if (indiceFotoAttuale > 0) {
//     indiceFotoAttuale--;
//   } else {
//     indiceFotoAttuale = fotoElements.length - 1;
//   }

//   console.log(fotoElements[indiceFotoAttuale]);
//   fotoElements[indiceFotoAttuale].classList.add("selected");
// }
