let sliders = document.querySelectorAll(".slider");

function moveSlide(children, index) {
    for (let i = 0; i < children.length; i++) {
        const li = children[i];
        li.style.transform = "translateX(-" + index + "00%)";
    }
}

sliders.forEach(function(slider) {
    let cont = 0
    const previus = slider.previousElementSibling
    const next = slider.nextElementSibling
    previus.onclick = function() {
        cont--;

        if (cont === -1)
            cont = slider.children.length - 1;

        moveSlide(slider.children, cont)
    }

    next.onclick = function() {
        cont++;

        if (cont === slider.children.length)
            cont = 0;

        moveSlide(slider.children, cont)
    }
})


/*


next.onclick = function() {
    cont++;
    if (cont === 5)
        cont = 0;
    for (let i in vec) {
        vec[i].style.transform = "translateX(-" + cont + "00%)";
    }
}

previous.onclick = function() {
    cont--;
    if (cont === -1)
        cont = 4;
    for (let i in vec) {
        vec[i].style.transform = "translateX(-" + cont + "00%)";
    }
}
*/