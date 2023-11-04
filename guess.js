//?Pcye 1-20 arasında sayı tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20);

console.log(rastgeleSayi);


let mesaj = document.querySelector(".msg");

let skor = 10;

let enYuksekSkor = 0;

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //! tahmin girmeden butona basıldıysa
  if (!tahmin) {
    mesaj.textContent = "Lütfen bir sayı giriniz";
    //! tahmin doğruysa
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz💪";
    document.querySelector("body").style.backgroundColor="green"

  } else{
    mesaj.textContent="Bilemediniz😢"
    
  }
});
