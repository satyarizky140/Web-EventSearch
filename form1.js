function detail(){
    const bagian1 = document.getElementById('art1');
    const bagian2 = document.getElementById('art2');
    const nav1 = document.getElementById('info1');
    const nav2 = document.getElementById('info2');
    bagian1.style.display="block";
    bagian2.style.display="none";
    nav1.style.backgroundColor="grey";
    nav2.style.backgroundColor= "blue";
}

function daftar(){
    const nav1 = document.getElementById('info1');
    const nav2 = document.getElementById('info2');
    const bagian1 = document.getElementById('art1');
    const bagian2 = document.getElementById('art2');
    bagian1.style.display="none";
    bagian2.style.display="block";
    nav1.style.backgroundColor="blue";
    nav2.style.backgroundColor= "grey";
}

function coba() {
    var nama = document.getElementById("input_nama").value;
    var institusi = document.getElementById("institusi").value;
    var email1 = document.getElementById("email_1").value;
    var email2 = document.getElementById("email_2").value;
    var kota = document.getElementById("kota").value;
    var semester = document.getElementById("smt").value;
    var setuju = document.getElementById("no");
    var nama_acara = "OPENING CEREMONY FIKFAIR";
    var harga = 0;
  
    if (nama == '' || kota == '' || email1 == '') {
      alert("tanda * wajib diisi");
    } else {
      if (email1 != email2) {
        alert("email harus sama!");
      } else {
        if (setuju.checked) {
          alert("anda harus menyetujui persyaratan");
        } else {
          alert("PENDAFTARAN BERHASIL!");
          let url = "tiket.html?nama=" + nama +
                    "&institusi=" + institusi +
                    "&email1=" + email1 +
                    "&kota=" + kota +
                    "&nama_acara=Opening Ceremony FIKFAIR" +
                    "&harga=" + harga;
          window.open(url, "_blank");
          document.getElementById("tombol").innerHTML = "lihat";
        }
      }
    }
  }

