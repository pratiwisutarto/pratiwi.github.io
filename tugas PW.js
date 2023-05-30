// Penjumlahan
function tambah(a, b) {
  return a + b;
}

// Pengurangan
function kurang(a, b) {
  return a - b;
}

// Perkalian
function kali(a, b) {
  return a * b;
}

// Pembagian
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Pembagian oleh 0 tidak valid");
  }
  return a / b;
}

// Contoh penggunaan
const angka1 = 2;
const angka2 = 7;

console.log("Penjumlahan:", tambah(angka1, angka2));
console.log("Pengurangan:", kurang(angka1, angka2));
console.log("Perkalian:", kali(angka1, angka2));
console.log("Pembagian:", bagi(angka1, angka2));