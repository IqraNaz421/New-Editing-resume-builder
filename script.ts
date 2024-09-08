document.getElementById("generate")?.addEventListener("click", function () {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
  const educationInput = document.getElementById("education") as HTMLTextAreaElement;
  const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const skills = skillsInput.value;
  const experience = experienceInput.value;
  const education = educationInput.value;
  const summary = summaryInput.value;

  if (name && email && phone && skills && experience && education && summary) {
      // Display the resume content
      (document.getElementById("outputName") as HTMLParagraphElement).textContent = `Name: ${name}`;
      (document.getElementById("outputEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
      (document.getElementById("outputPhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
      (document.getElementById("outputSkills") as HTMLParagraphElement).textContent = skills;
      (document.getElementById("outputExperience") as HTMLParagraphElement).textContent = experience;
      (document.getElementById("outputEducation") as HTMLParagraphElement).textContent = education;
      (document.getElementById("outputSummary") as HTMLParagraphElement).textContent = summary;

      // Show the resume container
      (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";

      // Enable the edit button
      (document.getElementById("edit") as HTMLButtonElement).style.display = "inline-block";
  } else {
      alert("Please fill out all fields!");
  }
});

// Adding event listener for the Edit button
document.getElementById("edit")?.addEventListener("click", function () {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
  const educationInput = document.getElementById("education") as HTMLTextAreaElement;
  const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;

  // Populating the form fields with the existing data for editing
  nameInput.value = (document.getElementById("outputName") as HTMLParagraphElement).textContent?.replace("Name: ", "") || "";
  emailInput.value = (document.getElementById("outputEmail") as HTMLParagraphElement).textContent?.replace("Email: ", "") || "";
  phoneInput.value = (document.getElementById("outputPhone") as HTMLParagraphElement).textContent?.replace("Phone: ", "") || "";
  skillsInput.value = (document.getElementById("outputSkills") as HTMLParagraphElement).textContent || "";
  experienceInput.value = (document.getElementById("outputExperience") as HTMLParagraphElement).textContent || "";
  educationInput.value = (document.getElementById("outputEducation") as HTMLParagraphElement).textContent || "";
  summaryInput.value = (document.getElementById("outputSummary") as HTMLParagraphElement).textContent || "";

  // Hide the resume container while editing
  (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "none";

  // Disable the edit button while editing
  (document.getElementById("edit") as HTMLButtonElement).style.display = "none";
});
