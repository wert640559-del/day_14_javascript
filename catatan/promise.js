// janji bahwa suatu saat kerjaan akan selesai

function cekAngka(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) resolve("genap");
        else reject("Ganjil");
    });
}

cekAngka(9)
    .then(res => console.log(res))
    .catch(err => console.log(err));

