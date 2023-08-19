let landing_img = document.querySelector(".landing");
let bullets = document.querySelector(".bullets").children;
var counter = 1;

function changeImage(r) {
    switch (counter) {
        case 1:
            if (r === 'r') {
                counter += 1;
                landing_img.setAttribute(
                    "style",
                    "background-image:url(images/landing2.jpg)"
                );
                for (let i = 0; i < 3; i++) {
                    if (i == counter) {
                        bullets[i].setAttribute("class", "active");
                    } else {
                        bullets[i].removeAttribute("class", "active");
                    }
                }
            }
            else {
                counter -= 1;
                landing_img.setAttribute(
                    "style",
                    "background-image:url(images/landing0.jpg)"
                );
                for (let i = 0; i < 3; i++) {
                    if (i == counter) {
                        bullets[i].setAttribute("class", "active");
                    } else {
                        bullets[i].removeAttribute("class", "active");
                    }
                }
            }

            break;


        case 2:
            if (r === 'r') {
                counter = 0;
                landing_img.setAttribute(
                    "style",
                    "background-image:url(images/landing0.jpg)"
                );
                for (let i = 0; i < 3; i++) {
                    if (i == counter) {
                        bullets[i].setAttribute("class", "active");
                    } else {
                        bullets[i].removeAttribute("class", "active");
                    }
                }
            }
            else {
                counter -= 1;
                landing_img.removeAttribute("style");
                for (let i = 0; i < 3; i++) {
                    if (i == counter) {
                        bullets[i].setAttribute("class", "active");
                    } else {
                        bullets[i].removeAttribute("class", "active");
                    }
                }
            }
            break;


        case 0:
            if (r === 'r') {
                counter += 1;
                landing_img.removeAttribute("style");
                for (let i = 0; i < 3; i++) {
                    if (i == counter) {
                        bullets[i].setAttribute("class", "active");
                    } else {
                        bullets[i].removeAttribute("class", "active");
                    }
                }
            }
            else {
                counter = 2;
                landing_img.setAttribute(
                    "style",
                    "background-image:url(images/landing2.jpg)"
                );
                for (let i = 0; i < 3; i++) {
                    if (i == counter) {
                        bullets[i].setAttribute("class", "active");
                    } else {
                        bullets[i].removeAttribute("class", "active");
                    }
                }
            }
            break;

        default:
            break;
    }
}

let main_heading = document.querySelectorAll('.main-heading')
main_heading.onmouseover = function () {
    console.log('Hi from H2')
    main_heading.setAttribute('style', "background-color: #ddd");

}

let imageContainer = document.querySelector('.images-container').children;
let buttonContainer = document.querySelector('.shuffle').children;

function choose_pic(button) {
    switch (button.innerHTML) {
        case 'App':
            for (let x = 0; x < buttonContainer.length; x++) {
                buttonContainer[x].removeAttribute('class');
            }
            button.setAttribute('class', 'active');
            for (let i = 0; i < 8; i++) {
                if ((i === 1) || (i === 3)) imageContainer[i].removeAttribute('style');

                else {
                    imageContainer[i].setAttribute('style', 'display: none');
                }
            }
            break;
        case 'Photo':
            for (let x = 0; x < buttonContainer.length; x++) {
                buttonContainer[x].removeAttribute('class');
            }
            button.setAttribute('class', 'active');
            for (let i = 0; i < 8; i++) {
                if ((i === 3) || (i === 6)) imageContainer[i].removeAttribute('style');

                else imageContainer[i].setAttribute('style', 'display: none');
            }

            break;
        case 'Web':
            for (let x = 0; x < buttonContainer.length; x++) {
                buttonContainer[x].removeAttribute('class');
            }
            button.setAttribute('class', 'active');
            for (let i = 0; i < 8; i++) {
                if ((i === 4) || (i === 7)) imageContainer[i].removeAttribute('style');

                else imageContainer[i].setAttribute('style', 'display: none');
            }

            break;

        case 'Print':
            for (let x = 0; x < buttonContainer.length; x++) {
                buttonContainer[x].removeAttribute('class');
            }
            button.setAttribute('class', 'active');
            for (let i = 0; i < 8; i++) {
                if ((i === 2) || (i === 4)) imageContainer[i].removeAttribute('style');

                else imageContainer[i].setAttribute('style', 'display: none');
            }
            break;
        case 'All':
            for (let x = 0; x < buttonContainer.length; x++) {
                buttonContainer[x].removeAttribute('class');
            }
            button.setAttribute('class', 'active');
            for (let i = 0; i < 8; i++) {
                imageContainer[i].removeAttribute('style');

            }
            break;
        default:
            break;
    }
}

function shake(button) {
    button.setAttribute('style', 'animation: shake .5s 1');
}
function re_shake(button) {
    button.removeAttribute('style');
}

