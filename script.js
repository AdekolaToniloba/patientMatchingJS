const doctors = [
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Zhang San", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },

  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },

  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },

  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
];

function findDoctors(specialty) {
  return doctors.filter(
    (doctor) => doctor.specialty.toLowerCase() === specialty
  );
}

function displayDoctors(doctors) {
  // Show the doctor list, hide the form, and show the clear button
  const clearButton = document.getElementById("clear-button");
  clearButton.style.display = "block";

  const doctorListElement = document.getElementById("doctor-list");
  doctorListElement.style.display = "block";
  const formElement = document.getElementById("doctor-form");
  formElement.style.display = "none";

  // Clear the current list of doctors
  doctorListElement.innerHTML = "";

  // Add each doctor to the list
  for (const doctor of doctors) {
    doctorListElement.innerHTML += `<li>${doctor.name}</li>`;
  }
}

function clearResults() {
  // Hide the doctor list, show the form, and hide the clear button
  const doctorListElement = document.getElementById("doctor-list");
  doctorListElement.style.display = "none";
  const clearButton = document.getElementById("clear-button");
  clearButton.style.display = "none";
  const formElement = document.getElementById("doctor-form");
  formElement.style.display = "block";
}

function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from reloading the page
  const medicalIssue = document.getElementById("medical-issue").value;
  const matchingDoctors = findDoctors(medicalIssue);
  displayDoctors(matchingDoctors);
  const clearButton = document.getElementById("clear-button");
  clearButton.style.display = "none";
}

const form = document.getElementById("doctor-form");
form.addEventListener("submit", handleFormSubmit);

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearResults);
