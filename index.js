const carsData = [
    {
        "Name": "Audi",
        "image": "formImage/audi.png",
        "brand": "Audi",
        "model": ["A3", "A4", "Q5", "Q7"],
        "variant": ["Premium", "Technology", "Premium Plus"]
    },
    {
        "Name": "BMW",
        "image": "formImage/bmw.png",
        "brand": "BMW",
        "model": ["X1", "X5", "3 Series", "5 Series"],
        "variant": ["sDrive20i", "xDrive40i", "520i"]
    },
    {
        "Name": "Chevrolet",
        "image": "formImage/chevrolte.png",
        "brand": "Chevrolet",
        "model": ["Malibu", "Equinox", "Tahoe", "Silverado"],
        "variant": ["LS", "LT", "WT"]
    },
    {
        "Name": "Datsun",
        "image": "formImage/datsun.png",
        "brand": "Datsun",
        "model": ["Go", "Go+", "Redi-GO", "Cross"],
        "variant": ["A", "T", "D"]
    },
    {
        "Name": "Ford",
        "image": "formImage/ford.png",
        "brand": "Ford",
        "model": ["Mustang", "Escape", "Explorer", "F-150"],
        "variant": ["GT", "EcoBoost", "Platinum"]
    },
    {
        "Name": "Honda",
        "image": "formImage/honda.png",
        "brand": "Honda",
        "model": ["Civic", "Accord", "CR-V", "Pilot"],
        "variant": ["LX", "EX", "Touring"]
    },
    {
        "Name": "Hyundai",
        "image": "formImage/hyundai.png",
        "brand": "Hyundai",
        "model": ["Elantra", "Sonata", "Tucson", "Santa Fe"],
        "variant": ["SE", "SEL", "Limited"]
    },
    {
        "Name": "Jeep",
        "image": "formImage/jeep.png",
        "brand": "Jeep",
        "model": ["Compass", "Cherokee", "Wrangler", "Renegade"],
        "variant": ["Sport", "Latitude", "Limited"]
    },
    {
        "Name": "Kia",
        "image": "formImage/kia.png",
        "brand": "Kia",
        "model": ["Seltos", "Sonet", "Carnival", "Sorento"],
        "variant": ["LX", "EX", "SX"]
    },
    {
        "Name": "Mahindra",
        "image": "formImage/mahindra.png",
        "brand": "Mahindra",
        "model": ["Thar", "Scorpio", "XUV500", "Bolero"],
        "variant": ["LX", "VX", "ZX"]
    },
    {
        "Name": "Maruti Suzuki",
        "image": "formImage/maruti suzuki.png",
        "brand": "Maruti Suzuki",
        "model": ["Swift", "Baleno", "Alto", "Vitara Brezza"],
        "variant": ["LXI", "VXI", "ZXI"]
    },
    {
        "Name": "Nissan",
        "image": "formImage/nissan.png",
        "brand": "Nissan",
        "model": ["Altima", "Maxima", "Rogue", "Sentra"],
        "variant": ["S", "SV", "SL"]
    },
    {
        "Name": "Renault",
        "image": "formImage/renault.png",
        "brand": "Renault",
        "model": ["Duster", "Kwid", "Triber", "Captur"],
        "variant": ["RXE", "RXL", "RXT"]
    },
    {
        "Name": "Skoda",
        "image": "formImage/skoda.png",
        "brand": "Skoda",
        "model": ["Octavia", "Superb", "Karoq", "Rapid"],
        "variant": ["Style", "L&K", "Sportline"]
    },
    {
        "Name": "Tata",
        "image": "formImage/tata.png",
        "brand": "Tata",
        "model": ["Nexon", "Harrier", "Tiago", "Altroz"],
        "variant": ["XE", "XT", "XZ"]
    },
    {
        "Name": "Toyota",
        "image": "formImage/toyota.png",
        "brand": "Toyota",
        "model": ["Corolla", "Camry", "RAV4", "Highlander"],
        "variant": ["LE", "XLE", "Limited"]
    },
    {
        "Name": "Volkswagen",
        "image": "formImage/volkswagen.png",
        "brand": "Volkswagen",
        "model": ["Polo", "Vento", "Tiguan", "Passat"],
        "variant": ["Trendline", "Comfortline", "Highline"]
    }
];



let formData = {
    brand: '',
    model: '',
    variant: '',
    fuelType: '',
    ownership: '',
    registrationYear: '',
    kilometersDriven: '',
    location: '',
    photos: []
};
function createBrandGrid() {
    const brandGrid = document.getElementById("brand-grid");
    brandGrid.innerHTML = ''
    carsData.forEach((car, index) => {
        // Create a div for each brand item
        const brandItem = document.createElement("div");
        brandItem.classList.add("brand-item");
        brandItem.setAttribute("onclick", `selectBrand('${car.brand}',${index})`);
        brandItem.setAttribute("data-brand-id", index);
        // Create an img element for the brand logo
        const brandImg = document.createElement("img");
        brandImg.src = car.image; // Set the image path dynamically
        brandImg.width = 80; // Set the width of the image
        brandImg.alt = car.brand; // Set the alt text for accessibility

        // Append the image to the brand item div
        brandItem.appendChild(brandImg);

        // Append the brand item div to the brand grid
        brandGrid.appendChild(brandItem);
    });
}

window.onload = createBrandGrid;
function selectBrand(brandName, index) {
    formData.brand = brandName;
    document.getElementById("selected-brand").innerText = brandName;

    // Hide the brand selection form
    document.getElementById("brand-selection-form").style.display = "none";

    // Show the model selection form
    document.getElementById("model-selection-form").style.display = "block";

    // Dynamically populate models based on selected brand (Example for Maruti)
    const modelGrid = document.getElementById("model-grid");
    modelGrid.innerHTML = ''; // Clear any previous models
    // const models = {
    //     'Maruti': ['Alto 800', 'Swift', 'Baleno'],
    //     'Hyundai': ['i10', 'i20', 'Creta'],
    //     // Add more brands and models here
    // };
    carsData[index].model.forEach(carModel => {

        console.log(carModel)
        const modelItem = document.createElement('div');
        modelItem.classList.add('model-item');
        modelItem.innerText = carModel;
        modelItem.onclick = () => selectModel(carModel, index);
        modelGrid.appendChild(modelItem);
    });

}

// Function to handle model selection
function selectModel(modelName, index) {

    formData.model = modelName;
    document.getElementById("selected-model").innerText = modelName;

    // Hide the model selection form
    document.getElementById("model-selection-form").style.display = "none";

    // Show the variant selection form
    document.getElementById("variant-selection-form").style.display = "block";

    // Dynamically populate variants (Example for Alto 800)
    const variantGrid = document.getElementById("variant-grid");
    variantGrid.innerHTML = ''; // Clear any previous variants
    // const variants = {
    //     'Alto 800': ['LXI', 'VXI'],
    //     'Swift': ['ZXI', 'VDI'],
    //     // Add more models and variants here
    // };

    carsData[index].variant.forEach(variant => {
        const variantItem = document.createElement('div');
        variantItem.classList.add('variant-item');
        variantItem.innerText = variant;

        variantItem.onclick = () => {
            selectVariant(variantItem); // Pass the clicked element to `selectVariant`
        };

        variantGrid.appendChild(variantItem);
    });



}

// Function to handle variant selection
function selectVariant(selectedItem) {
    formData.variant=selectedItem;
    // Remove 'selected-variant' class from all variant items
    const allVariants = document.querySelectorAll('.variant-item');
    allVariants.forEach(variant => variant.classList.remove('selected-variant'));

    // Add 'selected-variant' class to the clicked variant
    selectedItem.classList.add('selected-variant');

    // Show fuel container and enable fuel type selection
    const fuelContainer = document.querySelector('.fuel-container');
    fuelContainer.style.display = 'block'; // Show the fuel container

    // Enable fuel type selection only when a variant is selected
    const fuelOptions = document.querySelectorAll('.fuel-switcher input');
    fuelOptions.forEach(option => option.disabled = false);
    document.querySelectorAll('input[name="fuel-type"]').forEach((input) => {
        input.addEventListener('change', () => {
            // Check if the current radio button is checked
            if (input.checked) {
                // Proceed to the next form step
                goToNextFormStep('variant-selection-form', 'ownership-selection-form');
            }
        });
    });

}

// Function to handle ownership selection

document.querySelectorAll('input[name="ownership"]').forEach((input) => {
    input.addEventListener('change', () => {
        // Check if the current radio button is checked
        if (input.checked) {
            formData.ownership = input.value
            // Proceed to the next form step
            goToNextFormStep('ownership-selection-form', 'kilometer-selection-form');
        }
    });
});
function updateKilometersDisplay(value) {
    const displayElement = document.getElementById('kilometers-display');
    displayElement.textContent = value;
    formData.kilometersDriven = value;
}
function selectOwnership() {
    formData.ownership = document.querySelector('input[name="ownership"]:checked').value;

    const selectedOwnership = document.querySelector('input[name="ownership"]:checked').value;
    document.getElementById("selected-ownership").innerText = selectedOwnership;

    // Hide the ownership selection form
    document.getElementById("ownership-selection-form").style.display = "none";

    // Show the kilometer selection form
    document.getElementById("kilometer-selection-form").style.display = "block";
}

// Function to handle kilometers input
function selectKilometers() {
    formData.kilometersDriven = document.getElementById("kilometers-driven").value;

    const kilometersDriven = document.getElementById("kilometers-driven").value;

    if (!kilometersDriven) {
        alert("Please enter the kilometers driven");
        return;
    }

    document.getElementById("selected-kilometers").innerText = kilometersDriven;

    // Hide the kilometers selection form
    document.getElementById("kilometer-selection-form").style.display = "none";

    // Show the location selection form
    document.getElementById("location-selection-form").style.display = "block";
}
document.querySelectorAll('input[name="location"]').forEach((input) => {
    input.addEventListener('change', () => {
        // Check if the current radio button is checked
        if (input.checked) {
            formData.ownership = input.value
            // Proceed to the next form step
            goToNextFormStep('location-selection-form', 'year-selection-form');
        }
    });
});
// Function to handle location selection

function selectYear(year) {
    formData.registrationYear = year;
    console.log("Form Data:", formData);

    // Store the selected year if needed
    console.log("Selected Year:", year);

    // Hide the year selection form
    document.getElementById("year-selection-form").style.display = "none";

    // Show the photo upload form
    document.getElementById("photo-upload-form").style.display = "block";
}

// Trigger the file input for the corresponding box
function triggerFileInput(boxId) {
    const fileInput = document.getElementById(`file-input-${boxId}`);
    if (fileInput) {
        fileInput.click(); // Simulate a click on the hidden file input
    } else {
        console.error(`File input with ID file-input-${boxId} not found.`);
    }
}

// Handle file selection for the corresponding box
function handleFileChange(boxId) {
    const fileInput = document.getElementById(`file-input-${boxId}`);
    const previewBox = document.getElementById(`box-${boxId}`);
    // const removeIcon = document.getElementById(`remove-icon-${boxId}`);

    if (!fileInput || !previewBox) {
        console.error(`Element for boxId ${boxId} not found.`);
        return;
    }

    const file = fileInput.files[0]; // Get the first selected file

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            // Clear previous content in the box
            previewBox.innerHTML = '';
            previewBox.appendChild(img);
            const p = document.createElement('p');
            p.innerHTML = `<span class="remove-icon" id="remove-icon-${boxId}" onclick="removeImage(event, ${boxId})">✖</span>`
            previewBox.append(p)
            // Show the remove icon
            const removeIcon = document.getElementById(`remove-icon-${boxId}`);
            console.log(removeIcon)
            if (removeIcon) {

                removeIcon.style.display = 'block';
            } else {
                console.error(`Remove icon for boxId ${boxId} not found.`);
            }
        };
        reader.readAsDataURL(file); // Read the file and display the image
    } else {
        alert('Please select an image file.');
    }
}

// Remove image from the corresponding box
function removeImage(event, boxId) {
    event.stopPropagation(); // Prevent triggering the file input when clicking on remove
    const previewBox = document.getElementById(`box-${boxId}`);
    const fileInput = document.getElementById(`file-input-${boxId}`);
    const removeIcon = document.getElementById(`remove-icon-${boxId}`);

    if (previewBox) {
        // Clear the box contents and reset the file input
        previewBox.innerHTML = '<p>Click to Upload</p>';
        if (fileInput) {
            fileInput.value = ''; // Clear the file input
        }

        // Hide the remove icon
        if (removeIcon) {
            removeIcon.style.display = 'none';
        } else {
            console.error(`Remove icon for boxId ${boxId} not found.`);
        }
    }
}

function goToNextFormStep(currentFormId, nextFormId) {
    // Hide the current form
    document.getElementById(currentFormId).style.display = 'none';

    // Show the next form
    document.getElementById(nextFormId).style.display = 'block';
}
function goBack(prevFormId, currentFormId) {
    // Logic to navigate back to the previous form step
    document.getElementById(prevFormId).style.display = 'block';
    document.getElementById(currentFormId).style.display = 'none';
}
function goToNextFormStep(currentFormId, nextFormId) {
    // Hide the current form
    document.getElementById(currentFormId).style.display = 'none';

    // Show the next form
    document.getElementById(nextFormId).style.display = 'block';
}