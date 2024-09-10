const image = document.querySelector("#product-image");
const changeButtons = document.querySelectorAll("#image-picker li");

changeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        changeButtons.forEach((button) => {
            button.querySelector(".color").classList.remove("selected");
        });

        const btn = e.target;
        const id = btn.getAttribute("id");

        btn.querySelector(".color").classList.add("selected");
        image.classList.add("changing");

        image.setAttribute("src", `imgs/iphone_${id}.jpg`);

        /*switch(id) {
            case 'silver':
                image.setAttribute("src", `imgs/iphone_silver.jpg`);
                break;
            case 'blue':
                image.setAttribute("src", `imgs/iphone_blue.jpg`);
                break;
            case 'graphite':
                image.setAttribute("src", `imgs/iphone_grafite.jpg`);
                break;
            case 'green':
                image.setAttribute("src", `imgs/iphone_green.jpg`);
                break;
            case 'golden':
                image.setAttribute("src", `imgs/iphone_golden.jpg`);
                break;
            default:
                image.setAttribute("src", `imgs/iphone_grafite.jpg`);
        }*/

        setTimeout(() => {
            image.classList.remove("changing");
        }, 200);
    });
});