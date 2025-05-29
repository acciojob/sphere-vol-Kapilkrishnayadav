function volume_sphere(e) {
    e.preventDefault();

    const radius = Number(document.getElementById("radius").value);
    const v = document.getElementById("volume");

    if (isNaN(radius) || radius < 0) {
        v.value = "NaN";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    v.value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
    document.getElementById('volume').value = "";  // clear volume input on load
};
