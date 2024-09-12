
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

// Function to handle car brand selection
function selectBrand(brandName) {
    document.getElementById("selected-brand").innerText = brandName;

    // Hide the brand selection form
    document.getElementById("brand-selection-form").style.display = "none";

    // Show the model selection form
    document.getElementById("model-selection-form").style.display = "block";

    // Dynamically populate models based on selected brand (Example for Maruti)
    const modelGrid = document.getElementById("model-grid");
    modelGrid.innerHTML = ''; // Clear any previous models
    const models = {
        'Maruti': ['Alto 800', 'Swift', 'Baleno'],
        'Hyundai': ['i10', 'i20', 'Creta'],
        // Add more brands and models here
    };

    models[brandName].forEach(model => {
        const modelItem = document.createElement('div');
        modelItem.classList.add('model-item');
        modelItem.innerText = model;
        modelItem.onclick = () => selectModel(model);
        modelGrid.appendChild(modelItem);
    });
}

// Function to handle model selection
function selectModel(modelName) {
    document.getElementById("selected-model").innerText = modelName;

    // Hide the model selection form
    document.getElementById("model-selection-form").style.display = "none";

    // Show the variant selection form
    document.getElementById("variant-selection-form").style.display = "block";

    // Dynamically populate variants (Example for Alto 800)
    const variantGrid = document.getElementById("variant-grid");
    variantGrid.innerHTML = ''; // Clear any previous variants
    const variants = {
        'Alto 800': ['LXI', 'VXI'],
        'Swift': ['ZXI', 'VDI'],
        // Add more models and variants here
    };

    variants[modelName].forEach(variant => {
        const variantItem = document.createElement('div');
        variantItem.classList.add('variant-item');
        variantItem.innerText = variant;
        variantItem.onclick = () => selectVariant(variant);
        variantGrid.appendChild(variantItem);
    });
}

// Function to handle variant selection
function selectVariant(variantName) {
    document.getElementById("selected-variant").innerText = variantName;

    // Variant selected, proceed to fuel type
}

// Function to handle fuel type selection
function selectFuelType() {
    const selectedFuel = document.querySelector('input[name="fuel-type"]:checked').value;
    document.getElementById("selected-fuel").innerText = selectedFuel;

    // Hide the variant selection form
    document.getElementById("variant-selection-form").style.display = "none";

    // Show the ownership selection form
    document.getElementById("ownership-selection-form").style.display = "block";
}

// Function to handle ownership selection
function selectOwnership() {
    const selectedOwnership = document.querySelector('input[name="ownership"]:checked').value;
    document.getElementById("selected-ownership").innerText = selectedOwnership;

    // Hide the ownership selection form
    document.getElementById("ownership-selection-form").style.display = "none";

    // Show the kilometer selection form
    document.getElementById("kilometer-selection-form").style.display = "block";
}

// Function to handle kilometers input
function selectKilometers() {
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

// Function to handle location selection
function selectLocation() {
    const selectedLocation = document.querySelector('input[name="location"]:checked').value;
    document.getElementById("selected-location").innerText = selectedLocation;

    // Hide the location selection form
    document.getElementById("location-selection-form").style.display = "none";

    // Show the registration year form
    document.getElementById("year-selection-form").style.display = "block";
}
function selectYear(year) {
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
      reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
  
        // Clear previous content in the box
        previewBox.innerHTML = '';
        previewBox.appendChild(img);
        const p=document.createElement('p');
        p.innerHTML=`<span class="remove-icon" id="remove-icon-${boxId}" onclick="removeImage(event, ${boxId})">✖</span>`
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
  

