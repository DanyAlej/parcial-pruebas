Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to todoist home screen
  When I open the login screen
  And Write <email> and <password>
  And I want to login
  Then I expect to see error <error>

    Examples:
      | email            | password | error                    |
      | dany@gmail.com   | fjkalsl  | "Wrong email or password"|
      | dany@gmail.com   |          | "Blank password"         |
      |                  |          | "Invalid email address." |
      | fksajfll         |          | "Invalid email address." |

Scenario Outline: Login succeded with correct inputs

  Given I go to todoist home screen
  When I open the login screen
  And Write <email> and <password>
  And I want to login
  Then I expect to see the application 

    Examples:
      | email            | password |
      | danyalej@gmail.com   | dany12345678  |
