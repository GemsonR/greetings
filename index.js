const btnSubmit = document.querySelector(".submit");
const para = document.querySelector(".para");
const footer = document.getElementById("footer");

const currentYear = new Date().getFullYear();

footer.textContent = `Gemson Radjail, ${currentYear}`;

const handleClick = (e) => {
  e.preventDefault();
  const fName = document.querySelector(".fname").value;
  const lName = document.querySelector(".lname").value;
  const fullName = `${fName} ${lName}`;

  para.textContent = `Hello ${fullName ? fullName : "World"}`;
  console.log(fName, lName, fullName);
  document.querySelector(".fname").value = "";
  document.querySelector(".lname").value = "";
};

btnSubmit.addEventListener("click", handleClick);
