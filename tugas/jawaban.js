// soal 1:
const siswa = {
    nama: "Siapa",
    umur: 19,
    jurusan: "apa"
}
const siswaJSON = JSON.stringify(siswa);
console.log(siswaJSON);

// soal 2: 
const barang = {
    produk: "Laptop",
    harga: 7500000,
    stok: 10
}
const barangJSON = JSON.stringify(barang)
console.log(barangJSON)

// soal 3:
const belanjaan = {
    nama: "buku",
    jumlah: 5,
    harga: 120000
}
const belanjaanJSON = JSON.stringify(belanjaan)
console.log(belanjaan);

// Soal 4:
const jsonbaru = `{
    "nama": "Budi",
    "usia": 21,
    "status": "mahasiswa"
}`
const data = JSON.parse(jsonbaru);
console.log(data.nama);

// Soal 5: JSON.parse - Array buah dengan forEach
const buah = `["apel", "jeruk", "pisang", "semangka"]`
const buahan = JSON.parse(buah)
buahan.forEach(element => {
    console.log(element)
});

// Soal 6:
const kendaraan = `{
    "merk" : "Honda",
    "model" : "Civic",
    "tahun" : 2022
}`
const oto = JSON.parse(kendaraan)
console.log(oto)

// Soal 7: Callback sederhana - sapaUser
console.log("\n=== Soal 7 ===");
function sapaUser(nama, callback) {
  console.log(`Halo ${nama}`);
  callback();
}
function pesanBelajar() {
  console.log("Selamat belajar JSON!");
}
sapaUser("Budi", pesanBelajar);

// Soal 8: Callback sederhana - hitungLuas
console.log("\n=== Soal 8 ===");
function hitungLuas(panjang, lebar, callback) {
  const luas = panjang * lebar;
  callback(luas);
}
function tampilkanLuas(luas) {
  console.log(`Luas: ${luas}`);
}
hitungLuas(5, 3, tampilkanLuas);

// Soal 9: Callback sederhana - prosesData
console.log("\n=== Soal 9 ===");
function prosesData(data, callback) {
  if (Array.isArray(data)) {
    callback(data.length);
  }
}
function tampilkanJumlahItem(jumlah) {
  console.log(`Jumlah item: ${jumlah}`);
}
prosesData([1, 2, 3, 4, 5], tampilkanJumlahItem);

// Soal 10: Callback anonim - sapaUser dengan callback anonim
console.log("\n=== Soal 10 ===");
sapaUser("Aisyah", function() {
  console.log("Sampai jumpa!");
});

// Soal 11: Callback anonim - kirimPesan dengan toUpperCase
console.log("\n=== Soal 11 ===");
function kirimPesan(pesan, callback) {
  callback(pesan);
}
kirimPesan("Halo dunia", function(pesan) {
  console.log(pesan.toUpperCase());
});

// Soal 12: Callback timeout - prosesAsync dengan setTimeout
console.log("\n=== Soal 12 ===");
function prosesAsync(callback) {
  setTimeout(function() {
    callback("Proses selesai setelah 2 detik");
  }, 2000);
}
prosesAsync(function(pesan) {
  console.log(pesan);
});

// Soal 13: Callback timeout - ambilData dengan setTimeout
console.log("\n=== Soal 13 ===");
function ambilData(callback) {
  setTimeout(function() {
    callback({ id: 1, nama: "Laptop" });
  }, 3000);
}
ambilData(function(data) {
  console.log("Data diterima:", data);
});

console.log("\n=== Semua soal telah diproses ===");
console.log("Soal 12 dan 13 menggunakan setTimeout, jadi hasilnya akan muncul setelah delay");