const supertest = require("supertest");
const app = require("../app");
const User = require("../models/user");

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
  const newUser = {
    fullname: "Nyongsang Lama",
    email: "lama.123@gmail.com",
    password: "1234",
  };
  await (await api.post("/api/user/signup")).send(newUser);
}, 100000);

describe("User registration", () => {
  test("new user registered", async () => {
    const newUser = {
      fullname: "Bhim Bahadur Tamang",
      email: "tamang.123@gmail.com",
      password: "1234",
    };
    await api
      .post("/api/user/signup")
      .send(newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  }, 100000);

  test("if user already exist, no new user will create", async () => {
    const newUser = {
      fullname: "Bhim Bahadur Tamang",
      email: "tamang.123@gmail.com",
      password: "1234",
    };
    const response = await api
      .post("/api/user/signup")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.msg).toContain("User already exists.");
  }, 100000);

  test("no user is created, if any fields are missing", async () => {
    const newUser = {};
    const response = await api
      .post("/api/user/signup")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.msg).toContain("All fields are required!");
  });

  test("if password credentials is not adequate, user will not be create", async () => {
    const newUser = {
      fullname: "Arjun Tamang",
      email: "tamang.123@gmail.com",
      password: "12",
    };
    const response = await api
      .post("/api/user/signup")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.msg).toContain(
      "Password must be at least 4 character long."
    );
  });
});

describe("User login", () => {
  test("user logged in", async () => {
    const user = {
      email: "lama.123@gmail.com",
      password: "1234",
    };
    const response = await api
      .post("api/user/signin")
      .send(user)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.token).toBeDefined();
    expect(response.body.refreshToken).toBeDefined();
  });

  test("user does not get logged in, if any fields are missing", async () => {
    const user = {};
    const response = await api
      .post("/api/user/signin")
      .send(user)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.msg).toContain("All fields are required!");
  });

  test("if email does not exist, user can not logged in", async () => {
    const user = {
      email: "nobody.123@gmail.com",
      password: "1234",
    };
    const response = await api
      .post("/api/user/signin")
      .send(user)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.msg).toContain("User does not exist!");
  });

  test("credentials should be correct for user to logged in", async () => {
    const user = {
      email: "lama.123@gmail.com",
      password: "12345678",
    };
    const response = await api
      .post("/api/user/signin")
      .send(user)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.msg).toContain("Invalid credentials");
  });
});

describe("Refresh token generated", () => {
  test("refresh token is generated", async () => {
    const loggedInUser = await api
      .post("/api/user/signin")
      .send({
        email: "lama.123@gmail.com",
        password: "1234",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const response = await api
      .post("/api/user/refresh-token")
      .send({ refresh_token: loggedInUser.body.refresh_token })
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.token).toBeDefined;
    expect(response.body.refreshToken).toBeDefined;
  });
});
