const lightbulb = document.getElementById('lightbulb');
const lightSwitch = document.getElementById('lightSwitch');
const status = document.getElementById('statusOfSwitch')

let isLightOn = false;

lightSwitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "lightOff.png";
        lightSwitch.src = "switchOff.png";
        status.textContent = "TURN ON THE LIGHT.";
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
    }else{
        lightbulb.src ="lightOn.png";
        lightSwitch.src = "switchOn.png";
        status.textContent = "You DID IT! Now, Turn OFF the light!"
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
    }
    isLightOn = !isLightOn;
}

);