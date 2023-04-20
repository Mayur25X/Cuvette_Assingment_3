const ButtonValue = (val) => {
  let amount = Number(document.getElementById("amount").value);
  let personNo = Number(document.getElementById("PersonNumber").value);
  let perTip = Number(val);

  console.log(personNo);
  let tipAmount = amount * (perTip / 100);
  let tipAmount_per = tipAmount / personNo;
  let total_per = (amount + tipAmount) / personNo;

  document.getElementById("tipAmountPerprint").innerText = `₹ ${tipAmount_per}`;
  document.getElementById("totAmountprint").innerText = `₹ ${total_per}`;
};

const Rest = () => {
  document.getElementById("PersonNumber").value = 1;
  document.getElementById("amount").value = 0;
  document.getElementById("tipAmountPerprint").innerText = `₹0`;
  document.getElementById("totAmountprint").innerText = `₹0`;
};

const incre = () => {
  const person = document.getElementById("PersonNumber");
  let personNo = Number(document.getElementById("PersonNumber").value);
  personNo++;
  person.value = personNo;
};
const decre = () => {
  const person = document.getElementById("PersonNumber");
  let personNo = Number(document.getElementById("PersonNumber").value);
  personNo--;
  personNo <= 1 ? (person.value = 1) : (person.value = personNo);
};
// const Bvalue = ButtonValue(this)
// console.log(Bvalue);
