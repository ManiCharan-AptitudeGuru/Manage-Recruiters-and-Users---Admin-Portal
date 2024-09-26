const mongoose = require("mongoose");
const Recruiter = require("./models/Recruiter");
const User = require("./models/User");
const connectDB = require("./config/db");

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Recruiter.deleteMany({});
    await User.deleteMany({});

    // Seed recruiters (10 entries)
    const recruiters = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        status: "pending",
        verified: false,
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password456",
        status: "approved",
        verified: true,
      },
      {
        name: "Michael Brown",
        email: "michael@example.com",
        password: "password789",
        status: "pending",
        verified: false,
      },
      {
        name: "Linda Taylor",
        email: "linda@example.com",
        password: "passwordabc",
        status: "approved",
        verified: true,
      },
      {
        name: "Chris Evans",
        email: "chris@example.com",
        password: "passworddef",
        status: "rejected",
        verified: false,
      },
      {
        name: "Sarah Connor",
        email: "sarah@example.com",
        password: "passwordghi",
        status: "pending",
        verified: false,
      },
      {
        name: "David Clark",
        email: "david@example.com",
        password: "passwordjkl",
        status: "approved",
        verified: true,
      },
      {
        name: "Emma Watson",
        email: "emma@example.com",
        password: "passwordmno",
        status: "pending",
        verified: false,
      },
      {
        name: "Daniel Radcliffe",
        email: "daniel@example.com",
        password: "passwordpqr",
        status: "approved",
        verified: true,
      },
      {
        name: "Henry Cavill",
        email: "henry@example.com",
        password: "passwordstu",
        status: "rejected",
        verified: false,
      },
    ];

    await Recruiter.insertMany(recruiters);

    // Seed users (15 entries)
    const users = [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "password789",
        certification: {
          name: "Web Development",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Bob Williams",
        email: "bob@example.com",
        password: "passwordabc",
        certification: {
          name: "Data Science",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Charlie Davis",
        email: "charlie@example.com",
        password: "password123",
        certification: {
          name: "Machine Learning",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Diana Prince",
        email: "diana@example.com",
        password: "password456",
        certification: {
          name: "Cyber Security",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Eve Adams",
        email: "eve@example.com",
        password: "password789",
        certification: {
          name: "Artificial Intelligence",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Frank Miller",
        email: "frank@example.com",
        password: "passwordabc",
        certification: {
          name: "Cloud Computing",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Grace Kelly",
        email: "grace@example.com",
        password: "passworddef",
        certification: {
          name: "Data Analytics",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Harry Potter",
        email: "harry@example.com",
        password: "passwordghi",
        certification: {
          name: "DevOps",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Ivy Green",
        email: "ivy@example.com",
        password: "passwordjkl",
        certification: {
          name: "Full Stack Development",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Jack White",
        email: "jack@example.com",
        password: "passwordmno",
        certification: {
          name: "Networking",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Karen Black",
        email: "karen@example.com",
        password: "passwordpqr",
        certification: {
          name: "Mobile App Development",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Leo King",
        email: "leo@example.com",
        password: "passwordstu",
        certification: {
          name: "UI/UX Design",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Maria Hill",
        email: "maria@example.com",
        password: "passwordvwx",
        certification: {
          name: "Database Administration",
          status: "approved",
        },
        verified: true,
      },
      {
        name: "Nathan Drake",
        email: "nathan@example.com",
        password: "passwordyz",
        certification: {
          name: "Blockchain",
          status: "pending",
        },
        verified: false,
      },
      {
        name: "Olivia Newton",
        email: "olivia@example.com",
        password: "passwordabc",
        certification: {
          name: "Quantum Computing",
          status: "approved",
        },
        verified: true,
      },
    ];

    await User.insertMany(users);

    console.log("Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
