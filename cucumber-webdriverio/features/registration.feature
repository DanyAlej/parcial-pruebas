Feature: Registering into todoist
    As an user I want to create an account in todoist

Scenario Outline: Registration failed with existing email

  Given I go to todoist home screen
    When I open the 'Signup' screen
    And Put input <email>
    And I try to register
    Then I expect to see error <error>

    Examples:
      | email                           | error    | 
      |                                 | "Email isn't valid"  |
      
Scenario Outline: Registration failed with existing email

  Given I go to todoist home screen
    When I open the 'Signup' screen
    And Put input <email>
    And I try to register
    Then I expect to see error <error>

    Examples:
      | email                           | error    | 
      | da.benavides@uniandes.edu.co    | "Your email is already registered with us"  |

Scenario Outline: Registration failed password too short 

  Given I go to todoist home screen
    When I open the 'Signup' screen
    And Put input <email>
    And I try to register
    And Type <name> and <password>
    And I try to register second step
    Then I expect to see error <error>

    Examples:
      | name             | email             | password   | error    | 
      | dany             | danyalejandro@gmail.com    | dany12     | "Password must be at least 8 characters long"  |

Scenario Outline: Registration failed empty fields 

  Given I go to todoist home screen
  When I open the 'Signup' screen
  And Put input <email>
  And I try to register
  And Type <name> and <password>
  And I try to register second step
  Then I expect to see error <error>

  Examples:
    | name             | email             | password   | error    | 
    |                  | danyalejandro@gmail.com    | dany12     | "Full name can't be empty"  |
    | dany             | danyalejandro@gmail.com    |            | "Password must be at least 8 characters long"  |
    |                  | danyalejandro@gmail.com    |            | "Full name can't be empty"  |

Scenario Outline: Registration success

  Given I go to todoist home screen
  When I open the 'Signup' screen
  And Put input <email>
  And I try to register
  And Type <name> and <password>
  And I try to register second step
  Then I expect to see success <success>

  Examples:
    | name             | email             | password        | success    | 
    | dany             | danyalejandrioooo@gmail.com    | dany1245678     | "Hi, dany"  |
