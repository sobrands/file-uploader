const express = require("express");
const cors = require("cors"); // Cross-Origin Resource Sharing
const dotenv = require("dotenv");
const session = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");
const passport = require("./utils/passport");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Session stuff
app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: "my milkshake brings all the boys to the yard",
    resave: false,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.session());

app.listen(3000, () => console.log("app listening on port 3000"));
