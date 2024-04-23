const vanish = document.getElementById('vanish');

setInterval(() => {
    vanish ? vanish.remove() : vanish;
}, 3600);