function tampilkan(){
    var ARR = ["FIKFAIR", "FIK", "UPN", "UPNVJ", "JAKARTA", "WEB", "WEBINAR"];
    var isi = document.getElementById('search').masukan.value;
    if (isi =="FIKFAIR" || isi == "WEBINAR" || isi == "FIK"){
        document.getElementById('acr1').style.display ="flex";
        document.getElementById('acr2').style.display ="none";
        document.getElementById('acr3').style.display ="flex";
        document.getElementById('acr4').style.display ="none";
        document.getElementById('seks').style.marginRight ="0";
    }

    else if (isi == "BVJ" || isi == "BVJ CUP" || isi == "BASKET"){
        document.getElementById('acr1').style.display ="none";
        document.getElementById('acr2').style.display ="flex";
        document.getElementById('acr3').style.display ="none";
        document.getElementById('acr4').style.display ="none";
        document.getElementById('seks').style.marginRight ="0";
    }

    else if(isi == "ESSAY" || isi == "KTI"){
        document.getElementById('acr1').style.display ="none";
        document.getElementById('acr2').style.display ="none";
        document.getElementById('acr3').style.display ="none";
        document.getElementById('acr4').style.display ="flex";
        document.getElementById('seks').style.marginRight ="750px";
    }

    else{
        alert("ACARA TIDAK DITEMUKAN");
    }
}

function tampil() {
    // Mendapatkan nilai input dari pengguna
    var input = document.getElementById("masukan").value.toLowerCase();
  
    // Mengambil semua elemen acara
    var acara1 = document.getElementById("acr1");
    var acara2 = document.getElementById("acr2");
    var acara3 = document.getElementById("acr3");
    var acara4 = document.getElementById("acr4");
  
    // Menampilkan semua acara awal
    acara1.style.display = "flex";
    acara2.style.display = "flex";
    acara3.style.display = "flex";
    acara4.style.display = "flex";
  
    // Algoritma pencarian
    if (input !== "") {
      // Mencari acara yang sesuai dengan input
      var found = false;
  
      if (acara1.innerText.toLowerCase().includes(input)) {
        found = true;
      } else {
        acara1.style.display = "none";
      }
  
      if (acara2.innerText.toLowerCase().includes(input)) {
        found = true;
      } else {
        acara2.style.display = "none";
      }
  
      if (acara3.innerText.toLowerCase().includes(input) || input == "ui") {
        found = true;
      } else {
        acara3.style.display = "none";
      }
  
      if (acara4.innerText.toLowerCase().includes(input)) {
        found = true;
        document.getElementById('seks').style.marginRight ="750px";
      } else {
        acara4.style.display = "none";
      }
  
      // Jika tidak ada acara yang sesuai, tampilkan pesan
      if (!found) {
        alert("ACARA TIDAK DITEMUKAN");
        location.reload();
      }
    }
  }


