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
