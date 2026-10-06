// ==========================================
// NESTED OBJECT - CRUD OPERATIONS
// ==========================================

let student = {
  id: 205,
  name: "Rahul",
  age: 22,
  gender: "Male",
  course: "B.Tech AI",
  year: "4th",
  cgpa: 7.65,
  phone: "9123456780",

  address: {
    city: "Bangalore",
    state: "Karnataka",

    location: {
      pincode: 560037,
    },
  },

  parent: {
    name: "Suresh",

    contact: {
      phone: "9988776655",
    },
  },

  college: {
    name: "ABC Institute",

    department: {
      hod: "Anitha Madam",
    },
  },

  email: "rahul@gmail.com",
  bloodGroup: "B+",

  skills: ["Java", "HTML"],

  isHosteller: true,
};

// ==========================================
// CREATE
// ==========================================

student.section = "B";

student.skills.push("CSS");

student.address.location.landmark = "Bus Stop";

// ==========================================
// READ / RETRIEVE
// ==========================================

console.log(student.name);

console.log(student.address.city);

console.log(student.address.location.pincode);

console.log(student.parent.contact.phone);

// ==========================================
// UPDATE
// ==========================================

student.cgpa = 8.2;

student.address.city = "Mysore";

student.parent.contact.phone = "9876543210";

// ==========================================
// DELETE
// ==========================================

delete student.bloodGroup;

delete student.address.location.landmark;

student.skills.pop();

// ==========================================
// FINAL OBJECT
// ==========================================

console.log(student);
