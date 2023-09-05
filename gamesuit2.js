// pilihan computer
function getPilihanComp() {
    const comp = Math.random()

    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    if(comp >= 0.67 && comp <= 1) return 'semut';
};

// rules
function getHasil(player, comp) {
    if( player == comp) return 'SERI!';
    if(player =='gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!'
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    if(player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!'
}


const putarGambar = () => {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        };
        imgComputer.setAttribute('src', `../img/${gambar[i++]}.png`);
        if (i == gambar.length) i = 0;
    }, 100);
};

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', () => {
    const comp = getPilihanComp();
    const p = pil.className;
    const hasil = getHasil(p, comp);

    putarGambar();
    
    setTimeout(() => {
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', `../img/${comp}.png`);
        
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    }, 1000);
    });
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     // bangun logika 
//     const comp = getPilihanComp();
//     const p = pGajah.className;
//     const hasil = getHasil(p, comp);

//     // masukkan ke UI
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', `../img/${comp}.png`);
    
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     // bangun logika 
//     const comp = getPilihanComp();
//     const p = pOrang.className;
//     const hasil = getHasil(p, comp);

//     // masukkan ke UI
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', `../img/${comp}.png`);
    
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     // bangun logika 
//     const comp = getPilihanComp();
//     const p = pSemut.className;
//     const hasil = getHasil(p, comp);

//     // masukkan ke UI
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', `../img/${comp}.png`);
    
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });