// Blok klik kanan
document.addEventListener('contextmenu', e => e.preventDefault());

// Blok drag gambar
document.addEventListener('dragstart', e => {
    if (e.target.nodeName === 'IMG') e.preventDefault();
});

// Blok shortcut
document.addEventListener('keydown', e => {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && ['u', 's', 'p'].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ['i', 'c'].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
    }
});

// Deteksi DevTools
(function devtoolsCheck() {
    const devtools = new Image();
    Object.defineProperty(devtools, 'id', {
        get: function () {
            document.body.innerHTML = '';
        }
    });
    console.log(devtools);
})();

(function() {
    let check = setInterval(function() {
        const start = new Date();
        debugger;
        const end = new Date();
        if (end - start > 100) {
            document.body.innerHTML = '';
        }
    }, 1000);
})();
