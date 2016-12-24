$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("user_crud.feature");
formatter.feature({
  "line": 1,
  "name": "CRUD on users",
  "description": "",
  "id": "crud-on-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create user",
  "description": "",
  "id": "crud-on-users;create-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I get a \u0027CREATED\u0027 response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.I_create_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 7,
  "name": "Delete user",
  "description": "",
  "id": "crud-on-users;delete-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "there exists a user",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I delete the user",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get a \u0027OK\u0027 response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.there_exists_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_delete_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Update user",
  "description": "",
  "id": "crud-on-users;update-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "there exists a user",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I update the users\u0027s address",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I get a \u0027OK\u0027 response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.there_exists_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_update_the_users_s_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Update non existing user",
  "description": "",
  "id": "crud-on-users;update-non-existing-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "there exists a user",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I update the address of a non-existent user",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get a \u0027NOT_FOUND\u0027 response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.there_exists_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_update_the_address_of_a_non_existent_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NOT_FOUND",
      "offset": 9
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
});