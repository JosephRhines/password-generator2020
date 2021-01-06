# password-generator2020
Description: Application that generates random passwords for employees

Steps taken to build the Password Generator

1. I had to create two seperate functions for the length of the password and the characters
2. I created I created a prompt asking the user of the password length within the var of myLength
3. I created an If statement which enabled the user to pick between 8 - 128 characters or get an invalid alert
4. In the generateChar function I created the vars with confirms to capture the users input on what type of characters they want in the     password.
5. I created all vars to contain all of the characters the user could choose from
6. I created an if statement allowing the user to choose which out of the 4 character options the user wanted in the password
7. I created a for loop so the questions for the confirms could be asked properly and run smoothly
8. I tested the generate password button to insure that all options for the password worked correctly and insured that the user couldn't
enter in letters or symbols for the password length

Functionality of the Password-Generator:

When the user presses the generate password button the application prompts the user for the password lenght between 8 and 128 characters long. Then the user gets 4 confirm prompts asking if the user wants uppercase, lowercase, numbers, and symbols in the password. 
Depending on what the user selects a password is generated with the correct criteria. If the user tries to use letters , symbols, or numbers
not between 8 and 128, then the user gets an invalid message.



