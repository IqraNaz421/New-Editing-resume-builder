var _a, _b;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var educationInput = document.getElementById("education");
    var summaryInput = document.getElementById("summary");
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var skills = skillsInput.value;
    var experience = experienceInput.value;
    var education = educationInput.value;
    var summary = summaryInput.value;
    if (name && email && phone && skills && experience && education && summary) {
        // Display the resume content
        document.getElementById("outputName").textContent = "Name: ".concat(name);
        document.getElementById("outputEmail").textContent = "Email: ".concat(email);
        document.getElementById("outputPhone").textContent = "Phone: ".concat(phone);
        document.getElementById("outputSkills").textContent = skills;
        document.getElementById("outputExperience").textContent = experience;
        document.getElementById("outputEducation").textContent = education;
        document.getElementById("outputSummary").textContent = summary;
        // Show the resume container
        document.getElementById("resumeContainer").style.display = "block";
        // Enable the edit button
        document.getElementById("edit").style.display = "inline-block";
    }
    else {
        alert("Please fill out all fields!");
    }
});
// Adding event listener for the Edit button
(_b = document.getElementById("edit")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a, _b, _c;
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var educationInput = document.getElementById("education");
    var summaryInput = document.getElementById("summary");
    // Populating the form fields with the existing data for editing
    nameInput.value = ((_a = document.getElementById("outputName").textContent) === null || _a === void 0 ? void 0 : _a.replace("Name: ", "")) || "";
    emailInput.value = ((_b = document.getElementById("outputEmail").textContent) === null || _b === void 0 ? void 0 : _b.replace("Email: ", "")) || "";
    phoneInput.value = ((_c = document.getElementById("outputPhone").textContent) === null || _c === void 0 ? void 0 : _c.replace("Phone: ", "")) || "";
    skillsInput.value = document.getElementById("outputSkills").textContent || "";
    experienceInput.value = document.getElementById("outputExperience").textContent || "";
    educationInput.value = document.getElementById("outputEducation").textContent || "";
    summaryInput.value = document.getElementById("outputSummary").textContent || "";
    // Hide the resume container while editing
    document.getElementById("resumeContainer").style.display = "none";
    // Disable the edit button while editing
    document.getElementById("edit").style.display = "none";
});
