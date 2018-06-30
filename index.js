window.addEventListener('load', () => {

    let picsArray = Array.from(document.getElementsByClassName('slide-img'));
    let count = 0;
    // picsArray[0].style.visibility = 'visible';
    // picsArray[0].classList.add('zoom');


    const changeSlides = window.setInterval(() => {

        let current = picsArray[count];
        let next = count === picsArray.length - 1 ? picsArray[0] : picsArray[count + 1];

        current.style.visibility = 'visible';
        current.classList.add('zoom');

        window.setTimeout(() => {
            current.style.visibility = 'hidden';
            current.classList.remove('zoom');
            next.style.visibility = 'visible';

            if (count === picsArray.length - 1) count = 0;
            else count += 1;
        }, 2000)

    }, 3000)

});