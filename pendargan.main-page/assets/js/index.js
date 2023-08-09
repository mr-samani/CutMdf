document.addEventListener("DOMContentLoaded", function (event) {
    init();
});
function init() {
    document.onscroll = onScrollPage;
}


function onScrollPage() {
    var nav = document.querySelector('nav.main-nav');
    var doc = document.documentElement;
    if (nav && doc) {
        if (doc.scrollTop > 200) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }
}