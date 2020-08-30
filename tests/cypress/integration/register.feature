Feature: Register

    I want to register into customer site

    @success
    Scenario Outline: Successfully register an account
        Given the user navigates to the signup page
        And clicks on create an account

        When the user fills in the registration form "<FixtureValue>"
        And clicks on the register button

        Then the user is directed to the successful main page
        And validates the contact information is correct "<FixtureValue>" 

    Examples:
        | FixtureValue              | 
        | allPersonalInfo.json      |
        | requiredPersonalInfo.json | 

    @failed
    Scenario Outline: Failed to register an account - required fields left empty
        Given the user navigates to the signup page
        And clicks on create an account

        When the user fills in the registration form "<FixtureValue>"
        And clicks on the register button

        Then the user will be provided with missing information error message

    Examples:
        | FixtureValue                | 
        | noRequiredPersonalinfo.json |

    @failed
    Scenario Outline: Failed to register an account
        Given the user navigates to the signup page
        And enters email address "<emailAddress>"

        When the user clicks on create an account

        Then the user will be provided with error message containing "<errorMessage>"

    Examples:
        | emailAddress                | errorMessage                                                                                                         | 
        | empty                       | Invalid email address.                                                                                               |
        | markimations@googlemail.com | An account using this email address has already been registered. Please enter a valid password or request a new one. |
