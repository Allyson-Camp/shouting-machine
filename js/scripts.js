window.onload = function () {
    const form = document.querySelector("form");

    form.onsubmit = function (e) {
        e.preventDefault();
        const manifestation = document.getElementById("manifestation");
        document.querySelector("span#messageOutPut").innerText = manifestation.value.toUpperCase();
        document.querySelector("div#message").removeAttribute("class");
    };
};
