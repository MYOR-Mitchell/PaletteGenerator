fetch("https://palettegeneratorapi.onrender.com/api/palette/generate");

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

function applyPalette() {
    const colorInputs = document.querySelectorAll("input[type='text']");

    colorInputs.forEach(input => {
        let colorVarUpdate = input.getAttribute("color-var");
        let colorValue = input.value;
        document.documentElement.style.setProperty(colorVarUpdate, colorValue);
    });
}

document.getElementById("generateBtn").addEventListener("click", applyPalette); 

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


document.getElementById("randomBtn").addEventListener("click", function () {
    fetch("https://palettegeneratorapi.onrender.com/api/palette/generate")
        .then(response => response.json())
        .then(data => {
            document.getElementById("base").value = data.baseClr;
            document.getElementById("section").value = data.sectionClr;
            document.getElementById("text").value = data.textClr;
            document.getElementById("secondaryText").value = data.secondaryTextClr;
            document.getElementById("accent").value = data.accentClr;
            document.getElementById("line").value = data.lineClr;
            document.getElementById("hover").value = data.hoverClr;
            document.getElementById("shadow").value = data.shadowClr;

            document.getElementById("base").previousElementSibling.value = data.baseClr;
            document.getElementById("section").previousElementSibling.value = data.sectionClr;
            document.getElementById("text").previousElementSibling.value = data.textClr;
            document.getElementById("secondaryText").previousElementSibling.value = data.secondaryTextClr;
            document.getElementById("accent").previousElementSibling.value = data.accentClr;
            document.getElementById("line").previousElementSibling.value = data.lineClr;
            document.getElementById("hover").previousElementSibling.value = data.hoverClr;
            document.getElementById("shadow").previousElementSibling.value = data.shadowClr;
        })
        .then(() => applyPalette())
});
