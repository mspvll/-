function readMoreSpring(){
    let dots = document.getElementById("dotsSpring");
    let moreText = document.getElementById("moreTextSpring");
    let btn = document.getElementById("btnSpring");

    if (dots.style.display === 'none'){
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        btn.innerHTML = 'Читать больше';
    } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        btn.innerHTML = 'Читать меньше';
    }
}


function readMoreWinter(){
    let dots = document.getElementById("dotsWinter");
    let moreText = document.getElementById("moreTextWinter");
    let btn = document.getElementById("btnWinter");

    if (dots.style.display === 'none'){
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        btn.innerHTML = 'Читать больше';
    } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        btn.innerHTML = 'Читать меньше';
    }
}
