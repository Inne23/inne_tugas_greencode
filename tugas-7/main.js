const getbtn = document.getElementById("btn")
getbtn.addEventListener("click", hitung)
function hitung() {
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    const angka1 = Number(input1Value);
    const angka2 = Number(input2Value);
    const hasil = angka1 + angka2;
    document.getElementById("hasil").value = hasil;
  }

  const getreset = document.getElementById("reset");
getreset.addEventListener("click", reset);
function reset() {
  document.getElementById("input1").value = null;
  document.getElementById("input2").value = null;
  document.getElementById("hasil").value = null;
}

const getkali = document.getElementById("kali")
getkali.addEventListener("click", kali )
function kali() {
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    const angka1 = Number(input1Value);
    const angka2 = Number(input2Value);
    const hasil = angka1 * angka2;
    document.getElementById("hasil").value = hasil;
}

const getkurang = document.getElementById("kurang")
getkurang.addEventListener("click", kurang )
function kurang() {
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    const angka1 = Number(input1Value);
    const angka2 = Number(input2Value);
    const hasil = angka1 - angka2;
    document.getElementById("hasil").value = hasil;
}

const getbagi = document.getElementById("bagi")
getbagi.addEventListener("click", bagi )
function bagi() {
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    const angka1 = Number(input1Value);
    const angka2 = Number(input2Value);
    const hasil = angka1 / angka2;
    document.getElementById("hasil").value = hasil;
}