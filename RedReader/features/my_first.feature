Feature: Página principal

  Scenario: 1) As a user I touch the option Pagina principal
    When I press the "BE ANONYMOUS" button
    And I press "Front Page"
    And I wait for 3 seconds
    And I wait
    Then I see "Front Page"

  Scenario: 2) As a user I touch the option Todos los subreddits
    When I press the "CLOSE" button
    And I press "All Subreddits"
    And I wait for 5 seconds
    And I wait
    Then I see "Subreddits"

  Scenario: 3) As a user I see Subreddits suscritos in home screen
    When I wait
    Then I see "Subscribed Subreddits"

  Scenario: 4) As a user I touch the option Cuentas and the popup Cuentas de Reddit is shown
    When I press the menu key
    And I press "Accounts"
    Then I see "Reddit Accounts"
    
  Scenario: 5) As a user I touch the option Temas and the popup Tema is shown
    When I press the menu key
    And I press "Themes"
    Then I see "Night"

  Scenario: 6) As a user I erase a Subreddit from home screen
    When I press "art"
    And I wait
    And I press the menu key
    And I press "Pin to Main Menu"
    And I wait
    And I go back
    And I wait
    And I long press "/r/art"
    Then I press "Unpin from Main Menu"

  Scenario: 7) As a user I touch the option "Acerca de" and press the option Novedades
    When I press the menu key
    And I press "Settings"
    And I press "About"	
    And I press "What\'s New"
    Then I see "1.9.10"

  Scenario: 8) As a user I long press the aww Subreddit and press Fijar al menú principal
    When I long press "aww"
    And I wait
    Then I press "Pin to Main Menu"