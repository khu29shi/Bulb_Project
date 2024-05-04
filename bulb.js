function bulb_on() {
    const bulb_off_img = document.querySelector("#Off");
    bulb_off_img.style.display="none";

    const bulb_on_img = document.querySelector("#On");
    bulb_on_img.style.display="block";
}


function bulb_off() {
    const bulb_off_img = document.querySelector("#Off");
    bulb_off_img.style.display="block";

    const bulb_on_img = document.querySelector("#On");
    bulb_on_img.style.display="none";
}