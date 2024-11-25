//your JS code here. If required.
let arr = document.getElementById("colorSelect");
document.querySelector("input").addEventListener('click', () => {
    // Get the selected value
    let val = document.querySelector("#colorSelect").value;

    // Loop through the dropdown options
    for (let i = 0; i < arr.options.length; i++) {
        // Check if the option's value matches the selected value
        if (arr.options[i].value === val) {
            // Remove the matching option
            arr.remove(i);

            // Adjust the index to account for the removed option
            i--;
        }
    }
});
