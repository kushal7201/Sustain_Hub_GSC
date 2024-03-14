document.getElementById('category').addEventListener('change', function () {
    // Remove existing textarea if it exists
    var existingInput = document.getElementById('customInput');
    if (existingInput) {
        existingInput.remove();
    }

    // Check if "Something else" is selected
    if (this.value === '3') {
        // Create a new textarea element
        var inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = 'customInput';
        inputField.className = 'form-control mt-2';
        inputField.placeholder = 'Enter your category here';
        inputField.required = 'true';

        // Insert the textarea right after the select element
        this.parentNode.insertBefore(inputField, this.nextSibling);
    }
});

const locationSuccess = (coord)=>{
    const locationError = document.getElementById("location-error")
    const submit = document.getElementById("submit-btn")
    
    console.log(coord);
    latitude = coord.coords.latitude
    longitude = coord.coords.longitude
    console.log(latitude,longitude);
    
    submit.removeAttribute("disabled")
    locationError.removeAttribute()
}

const locationFail = ()=>{
    const form = document.getElementById("form-container")
    const locationError = document.createElement("div")
    console.log("failed to get the location")
    
    locationError.id = "location-error"
    locationError.innerHTML = `<p style="color: red;">**Note: Enable the location permission</p>`
    form.appendChild(locationError)
}

navigator.geolocation.getCurrentPosition((coord)=>locationSuccess(coord),()=> locationFail())