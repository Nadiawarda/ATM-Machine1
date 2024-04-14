#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.cyan.italic.bold `*********************** "Greetings! Begin Your Transaction Here" ****************`);
console.log(" ");
const myBalance = 30000;
const myPinCode = 3333;
const pinCode = await inquirer.prompt([
    {
        name: "input",
        message: `Enter Your Pin Code`,
        type: "number",
    }
]);
if (pinCode.input === myPinCode) {
    console.log(chalk.magentaBright `You Entered Correct Pin Code!`);
    console.log("");
    const operation = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select an Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        }
    ]);
    if (operation.operation === "Withdraw") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: `Enter the Amount to Withdraw:`,
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.yellowBright.italic `Sorry, You Have Insufficient Balance. Your Current Balance is ${myBalance} $: `);
        }
        else {
            console.log(chalk.blue.italic.bold `Withdrawal Successful! Your Remaining Balance is ${myBalance - amountAns.amount} $: `);
            console.log(chalk.green.italic.bold `"congratulations Transaction Successful!"`);
        }
    }
    else if (operation.operation === "Check Balance") {
        console.log(chalk.yellowBright `Your Total Balance is ${myBalance} $: `);
    }
    else if (operation.operation === "Fast Cash") {
        const fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the Amount",
                type: "list",
                choices: [1000, 2500, 5000, 7500, 10000, 15000, 35000,]
            }
        ]);
        if (fastCashAns.fastcash > myBalance) {
            console.log(chalk.redBright.italic `Insufficient Balance`);
        }
        else {
            console.log(chalk.blueBright.bold `Withdrawal Successful! Your Remaining Balance is ${myBalance - fastCashAns.fastcash} $: `);
            console.log(chalk.green.italic.bold `"congratulations Transaction Successful!"`);
        }
    }
}
else {
    console.log(chalk.green.bold `Invalid Pin Code`);
    console.log("");
}
;
