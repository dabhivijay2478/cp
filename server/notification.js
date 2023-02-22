var { google } = require("googleapis");
var express = require("express");
const { response, json } = require("express");
var app = express();

app.use(express.json());

app.post("/getAccessToken", async (req, res) => {
  const accessToken = await getAccessToken();

  const message = req.body.message;

  const mesg = await fetch(
    "https://fcm.googleapis.com/v1/projects/test-46415/messages:send",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          topic: "Notify",
          notification: {
            title: "Jan Seva Kendra",
            body: ` ${message}`,
          },
          data: {
            story_id: "story_12345",
          },
        },
      }),
    }
  );
  console.log(mesg);
  res.send("Done");
});
var MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
var SCOPES = [MESSAGING_SCOPE];

function getAccessToken() {
  return new Promise(function (resolve, reject) {
    var key = require("./creds.json");
    var jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
