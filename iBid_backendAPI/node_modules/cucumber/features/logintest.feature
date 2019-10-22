Feature: <User Login>

Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: User login check
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples:
      | URL                                    | data                                         | expectval                                        |
      | http://localhost:5500/profiles/login | { "Email":"aryal12@gmail.com","Password":"password" } | { "status": 200, "message": "Logged in sucessfully"} |