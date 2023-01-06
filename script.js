const doctors = [
  { name: "Dr. Jane Smith", specialty: "Pediatrics" },
  { name: "Dr. John Doe", specialty: "Family Medicine" },
  { name: "Dr. Mary Johnson", specialty: "Surgery" },
  { name: "Dr. Robert Williams", specialty: "Internal Medicine" },
  { name: "Dr. Rachel Davis", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Christopher Rodriguez", specialty: "Pediatrics" },
  { name: "Dr. Melissa Kim", specialty: "Family Medicine" },
  { name: "Dr. Benjamin Brown", specialty: "Surgery" },
  { name: "Dr. Emily Davis", specialty: "Internal Medicine" },
  { name: "Dr. William Johnson", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Ashley Smith", specialty: "Pediatrics" },
  { name: "Dr. Michael Brown", specialty: "Family Medicine" },
  { name: "Dr. Samantha Kim", specialty: "Surgery" },
  { name: "Dr. David Williams", specialty: "Internal Medicine" },
  { name: "Dr. Elizabeth Johnson", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Matthew Davis", specialty: "Pediatrics" },
  { name: "Dr. Rachel Rodriguez", specialty: "Family Medicine" },
  { name: "Dr. Christopher Kim", specialty: "Surgery" },
  { name: "Dr. John Brown", specialty: "Internal Medicine" },
  { name: "Dr. Olivia Smith", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Jessica Johnson", specialty: "Pediatrics" },
  { name: "Dr. William Davis", specialty: "Family Medicine" },
  { name: "Dr. Robert Rodriguez", specialty: "Surgery" },
  { name: "Dr. Benjamin Kim", specialty: "Internal Medicine" },
  { name: "Dr. Emily Brown", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. Christopher Williams", specialty: "Pediatrics" },
  { name: "Dr. Rachel Johnson", specialty: "Family Medicine" },
  { name: "Dr. Michael Davis", specialty: "Surgery" },
  { name: "Dr. Olivia Rodriguez", specialty: "Internal Medicine" },
  { name: "Dr. Jessica Kim", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. William Brown", specialty: "Pediatrics" },
  { name: "Dr. Robert Johnson", specialty: "Family Medicine" },
  { name: "Dr. Christopher Davis", specialty: "Surgery" },
  { name: "Dr. Rachel Williams", specialty: "Internal Medicine" },
  { name: "Dr. Mary Rodriguez", specialty: "Obstetrics and Gynecology" },
  { name: "Dr. John Kim", specialty: "Pediatrics" },
  { name: "Dr. Benjamin Smith", specialty: "Family Medicine" },
  { name: "Dr. Emily Johnson", specialty: "Surgery" },
];

function findDoctors(specialty) {
  return doctors.filter(
    (doctor) => doctor.specialty.toLowerCase() === specialty.toLowerCase()
  );
}

function displayDoctors(doctors) {
  // Show the doctor list, hide the form, and show the clear button
  const clearButton = document.getElementById("clear-button");
  clearButton.style.display = "block";
  // console.log(clearButton);

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
}

const form = document.getElementById("doctor-form");
form.addEventListener("submit", handleFormSubmit);

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearResults);
