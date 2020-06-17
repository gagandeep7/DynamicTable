// Select table heading
const tHead = document.querySelector("table thead");
const tBody = document.querySelector("table tbody");

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
    (headings) => (headingRow += `<td>${headings}</td>`)
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
