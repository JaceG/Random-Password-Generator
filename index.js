document.addEventListener('DOMContentLoaded', function() {
    // Function to generate password
    function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let characters = '';
        let password = '';

        characters += includeLowerCase ? lowerCase : '';
        characters += includeUpperCase ? upperCase : '';
        characters += includeNumbers ? numbers : '';
        characters += includeSymbols ? symbols : '';

        if (length <= 0) {
            return '(Password length must be at least 1)';
        }

        if (characters.length === 0) {
            return '(At least one set of characters needs to be selected)';
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
    }

    // Function to display generated password
    function generateAndDisplayPassword() {
        const passwordLength = 12;
        const includeLowerCase = true;
        const includeUpperCase = true;
        const includeNumbers = true;
        const includeSymbols = true;

        const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

        // Display the password in the HTML element
        document.getElementById('generated-password').textContent = `Generated password: ${password}`;
    }

    // Add event listener for button click
    document.getElementById('generate-password-btn').addEventListener('click', generateAndDisplayPassword);
});
