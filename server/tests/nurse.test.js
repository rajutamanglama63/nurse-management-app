const supertest = require("supertest");
const app = require("../app");
const Nurse = require("../models/nurse");

const api = supertest(app);

let token = "";

beforeEach(async () => {
  await Nurse.deleteMany({});
  const newNurse = [
    {
      fullname: "Desy Pudasaini",
      email: "pudasaini.123@gmail.com",
      contact: 9855210123,
      address: "Dhulikhel, Kavre",
      gender: "female",
      photo:
        "https://res.cloudinary.com/dydwwtmnj/image/upload/v1670994198/nurse/dq6bmanze0a2xruaziet.jpg",
      workingDays: ["Monday", "Tuesday", "Wednesday"],
      dutyStartTime: "9am",
      dutyEndTime: "4pm",
      role: "Staff",
    },
    {
      fullname: "Roshni Karki",
      email: "karki.123@gmail.com",
      contact: 9852010236,
      address: "Panuti, Kavre",
      gender: "female",
      photo:
        "https://res.cloudinary.com/dydwwtmnj/image/upload/v1670994198/nurse/dq6bmanze0a2xruaziet.jpg",
      workingDays: ["Monday", "Tuesday", "Wednesday"],
      dutyStartTime: "9am",
      dutyEndTime: "4pm",
      role: "Rounding manager",
    },
  ];

  await Nurse.insertMany(newNurse);

  const user = {
    email: "lama.123@gmail.com",
    password: "1234",
  };
  const response = await api
    .post("/api/user/signin")
    .send(user)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  token = response.body.token;
});

describe("Nurse APIs", () => {
  test("get all nurses", async () => {
    const response = await api
      .get("/api/nurse")
      .set("authorization", "bearer " + token);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].fullname).toBe("Desy Pudasaini");
  });

  test("add a new nurse", async () => {
    const newNurse = {
      fullname: "Priyanka Limbu",
      email: "limbu.123@gmail.com",
      contact: 9874512036,
      address: "Charikot, Dolakha",
      gender: "female",
      photo:
        "https://res.cloudinary.com/dydwwtmnj/image/upload/v1670994198/nurse/dq6bmanze0a2xruaziet.jpg",
      workingDays: ["Monday", "Tuesday", "Wednesday"],
      dutyStartTime: "9am",
      dutyEndTime: "4pm",
      role: "Staff",
    };

    await api
      .post("/api/nurse")
      .send(newNurse)
      .set("authorization", "bearer " + token)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    const allNurseAfterAddingNewNurse = await Nurse.find({});
    expect(allNurseAfterAddingNewNurse).toHaveLength(3);
  });

  test("update a nurse", async () => {
    const updatedNurse = {
      fullname: "Roshni Karki",
      email: "karki.123@gmail.com",
      contact: 9856650236,
      address: "Panuti, Kavre",
      gender: "female",
      photo:
        "https://res.cloudinary.com/dydwwtmnj/image/upload/v1670994198/nurse/dq6bmanze0a2xruaziet.jpg",
      workingDays: ["Monday", "Tuesday", "Wednesday"],
      dutyStartTime: "9am",
      dutyEndTime: "4pm",
      role: "Rounding manager",
    };
    const initialNurseState = await Nurse.find({});
    await api
      .put("/api/nurse/" + initialNurseState[0]._id)
      .send(updatedNurse)
      .set("authorization", "bearer " + token)
      .expect(200);
    const nurseStateAfterUpdate = await Nurse.findById(
      initialNurseState[0]._id
    );
    expect(nurseStateAfterUpdate.contact).toContain(9856650236);
  });

  test("delete a nurse", async () => {
    const initialNurseState = await Nurse.find({});
    await api
      .delete("/api/nurse/" + initialNurseState[0]._id)
      .set("authorization", "bearer " + token)
      .expect(200);
    const nurseStateAfterDelete = await Nurse.findById(
      initialNurseState[0]._id
    );
    expect(nurseStateAfterDelete).toBeNull();
  });
});
