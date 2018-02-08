const changeLight = () => {
    // select all lights
    const lights = document.getElementsByClassName("light");
    let prevOn;
    let nextOn;
    for (let i = 0; i < lights.length; i++) {
        // find light with on class
        const isOn = lights[i].classList.contains("on");
        // remove light with on class
        if (isOn) {
            prevOn = i;
            lights[i].classList.remove("on");
            break;
        }
    };
    // apply on class on next light
    nextOn = (prevOn + 1) % lights.length;
    lights[nextOn].classList.add("on");
};

const addEventHandler = () => {
    // select the button
    button = document.getElementsByClassName("button")[0];
    button.addEventListener("click", changeLight);
}

// add event handler to grey button
addEventHandler();

