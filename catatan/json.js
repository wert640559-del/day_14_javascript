// // contoh json
// const contohJson = `{
//     "nama" : "Ucup", 
//     "Kelas" : 5 , 
//     "Absen": true, 
//     "Tempat_Tinggal" : [
//         "ancol", "Jakarta"
//     ],
//     "Kesukaan" : {
//         "makanan" : "Ayam Geprek",
//         "Minuman" : "Extrajoss"
//     },
//     "Binatang_Kusukaan" : null
// }`

// contoh json 2
const contohJson2 = `{
    "Nama" : "Hari",
    "Kelas": 9 ,
    "Absen": true,
    "Tempat_Tinggal": [
        "Bantul", "Yogyakarta"
    ],
    "Kesukaan": {
        "Makanan": "Ayam Goreng",
        "Minuman" : "Jus Mangga"
    },
    "Binatang_Kesukaan" : null
}`




// contoh stringify
// const santri = { nama: "farid", umur: 40 }
// const stringify = JSON.stringify(santri)

// contoh stringify 2
const santri2 = { nama: "hendri", umur: 80 }
const stringify2 = JSON.stringify(santri2)





// pakai try catch buat handle error
// try {
//     const parsejson = JSON.parse(contohJson) // coba parsing JSON
//     console.log("Nama dari JSON:", parsejson.nama)
//     console.log("Makanan favorit:", parsejson.Kesukaan.makanan)
//     console.log("Tempat Tinggal:", parsejson.Tempat_Tinggal[0])
// } catch (error) {
//     console.error("Parsing JSON gagal bro:", error.message)
// }

// console.log("Stringify object:", stringify)

// try catch 2
try {
    const parsejson2 = JSON.parse(contohJson2)
    console.log("nama dari JSON: ", parsejson2.Nama)
    console.log("makanan favorite: ", parsejson2.Kesukaan.Makanan)
    console.log("tempat tinggal: ", parsejson2.Tempat_Tinggal[0])
} catch (error) {
    console.error("parsing JSON gagal bro: ", error.message)
}

console.log("stringify object: ", stringify2);