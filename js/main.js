let myList = [
    "--base-clr: ",
    "--section-clr: ",
    "--text-clr: ",
    "--secondary-text-clr: ",
    "--accent-clr: ",
    "--line-clr: ",
    "--hover-clr: ",
    "--shadow-clr: "];

document.getElementById("copyBtn").addEventListener("click", function () {
    const colorInputs = document.querySelectorAll("input[type='text']");

    let cssText = "";
    let i = 0;
    colorInputs.forEach(input => {
        let hexColor = input.value;
        cssText += myList[i] + "" + hexColor + ";\n";
        i++;
    });

    navigator.clipboard.writeText(cssText)
    alert("Copied to clipboard");
});

document.getElementById("generateBtn").addEventListener("click", function () {
    const colorInputs = document.querySelectorAll("input[type='text']");

    colorInputs.forEach(input => {
        let colorVarUpdate = input.getAttribute("color-var"); 
        let colorValue = input.value; 
        document.documentElement.style.setProperty(colorVarUpdate, colorValue);
    });
});

document.querySelectorAll("input[type='color']").forEach(colorInput => {
    colorInput.addEventListener("input", function () {
        this.nextElementSibling.value = this.value; 
    });
});

document.querySelectorAll("input[type='text']").forEach(colorInput => {
    colorInput.addEventListener("input", function () {
        this.previousElementSibling.value = this.value; 
    });
});