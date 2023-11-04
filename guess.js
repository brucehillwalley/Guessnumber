//?Pcye 1-20 arasında sayı tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20);

console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;
//*skor u index.html den çekebilirdik. Ama çok kullanacağımız için bu daha tercih edilen yol.

//!
let enYuksekSkor = localStorage.getItem("top-score") || 0;

//? Her Check butonuna basıldığında yapılacaklar
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //! tahmin girmeden butona basıldıysa
  if (!tahmin) {
    mesaj.textContent = "Lütfen bir sayı giriniz";
    //! tahmin doğruysa
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz💪";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;

    // top Score kontrolü
    if (skor > enYuksekSkor) {
      localStorage.setItem("top-score", skor);

      document.querySelector(".top-score").textContent = enYuksekSkor;

      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }

    //! tahmin yanlışsa
  } else {
    //? skor 1'den büyük olduğu sürece tahmin hakkım var
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır👆")
        : (mesaj.textContent = "Azalt👇");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz😢";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";

      //!oyunu kaybettiniz
    }
  }
});

//

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";

  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayi);
  skor = 10;

  document.querySelector(".score").textContent = skor;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  mesaj.textContent = "Oyun Yeni Oyuncu İçin Başlıyor5";
};

//! ENTER
//* kLAVYEDEN ENTERE BASILDIĞINDA CHECK BUTONU TETİKLENSİN

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    //* tuşa basıldı
    document.querySelector(".check").click();
  }
});

//? local-storage => SİZ VERİLERİ SİLENE KADAR DEPOLAR
//? session-storage => SİZ PENCEREYİ KAPATANA KADAR
//? cookies => SİZ SİLENE KADAR
//? index DB => CLİENT BASED

// localStorage.setItem("BRUCE", 10);

// console.log(localStorage.getItem("BRUCE"));


document.querySelector(".check").addEventListener("click", ()=>{
    tahmin=document.querySelector(".guess").value

    const tahminSayi = parseInt(tahmin)

    if (tahminSayi>=1 && tahminSayi<=20 && !isNaN(tahminSayi)) {
        //* doğru sayı girmişse onu devam ettir.
    }else{
        mesaj.textContent="Geçersiz sayı girdiniz (1 ile 20 arasında sayı girin)"
        skor++
    }
})