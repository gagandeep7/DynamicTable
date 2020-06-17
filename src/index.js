// Select table heading
const tHead = document.querySelector("table thead");
const tBody = document.querySelector("table tbody");
const Input = document.querySelector("input");
// Heading data
const Headings = [
  {
    col1: "Name",
    col2: "Class",
    col3: "RollNo",
  },
];

// BodyData

const Body = [
  {
    name: "Gagan",
    class: "Btech",
    RollNo: 7,
  },
  {
    name: "Anuj",
    class: "Btech",
    RollNo: 8,
  },
  {
    name: "Akash",
    class: "Btech",
    RollNo: 9,
  },
  {
    name: "anon",
    class: "Btech",
    RollNo: 17,
  },
  {
    name: "Dhiman",
    class: "Btech",
    RollNo: 81,
  },
  {
    name: "Guri",
    class: "Btech",
    RollNo: 91,
  },
];

// Creates Row for thead
let headingRow = "<tr>";

// Get headings data
for (let data of Headings) {
  // get td of headings
  Object.values(data).map(
    //   get values of columns
    (headings) => (headingRow += `<th>${headings}</th>`)
  );
  //   end the row tag
  headingRow += "</tr>";
}
// put inside thead
tHead.innerHTML = headingRow;

// TBody Rows
for (let student of Body) {
  let BodyRow = "<tr>";
  Object.values(student).map((val) => (BodyRow += `<td>${val}</td>`));
  BodyRow += "</tr>";
  tBody.innerHTML += BodyRow;
}

// Searching

// Get the input data
Input.addEventListener("keyup", (e) => {
  // get all rows data
  const TableRows = document.querySelectorAll("tbody > tr");

  // Input value
  let InputData = e.target.value.toUpperCase();
  // SEARCH ROW WISE
  // get tds from rows
  for (let i = 0; i < TableRows.length; i++) {
    // Intially hide all rows
    TableRows[i].style.display = "none";
    // store All TDS from a  row
    let Tds = TableRows[i].querySelectorAll("td");
    // SEARCH COLUMN WISE
    for (let j = 0; j < Tds.length; j++) {
      // Check individual td inside row
      let cell = Tds[j];
      if (cell) {
        // If td content is same as Searched
        if (cell.innerText.toUpperCase().indexOf(InputData) > -1) {
          // Show Table row
          TableRows[i].style.display = "";
          break;
        }
      }
    }
  }
});
