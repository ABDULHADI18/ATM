#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let mybalance = 20000; // Dollar
const mypin = 8989;
console.log(chalk.white("\n \t<<==="), chalk.blue.bold("WELCOME TO THE ATM MACHINE"), chalk.white("===>>\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow.italic("\nEnter your pin code: "),
    },
]);
if (pinAnswer.pin === mypin) {
    console.log(chalk.green("\nSuccessfully login !!"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow.italic("\nPlease select option"),
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let withdrawAnswer = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk.yellow.italic("\nSelect a withdrawal method"),
                choices: ["Fast Cash", "Enter Amount"],
            },
        ]);
        if (withdrawAnswer.withdrawMethod === "Fast Cash") {
            let fastCashAnswer = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: chalk.yellow.italic("\nSelect Amount :"),
                    choices: [2500, 5000, 7000, 10000, 15000, 20000, 25000],
                },
            ]);
            if (fastCashAnswer.fastCash > mybalance) {
                console.log(chalk.red("\nInsufficient Balance !"));
            }
            else {
                mybalance -= fastCashAnswer.fastCash;
                console.log(chalk.cyan(`\n${fastCashAnswer.fastCash} Withdraw Successfully`));
                console.log(chalk.cyan(`\nYour Remaining Balance is ${mybalance}`));
            }
        }
        else if (withdrawAnswer.withdrawMethod === "Enter Amount") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellow.italic("\nEnter your amount to withdraw "),
                },
            ]);
            if (amountAnswer.amount > mybalance) {
                console.log(chalk.red("\nInsufficient Balance !"));
            }
            else {
                mybalance -= amountAnswer.amount;
                console.log(chalk.cyan(`\n${amountAnswer.amount} Withdraw Successfully`));
                console.log(chalk.cyan(`\nYour Remaining Balance is ${mybalance}`));
            }
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(chalk.cyan(`\nYour current balance is = ${mybalance}`));
    }
    let somethingElse = await inquirer.prompt([
        {
            name: "else",
            type: "list",
            message: chalk.yellow.italic("\nWould you rather do something else?"),
            choices: ["YES", "NO"]
        }
    ]);
    if (somethingElse.else === "YES") {
        let operationAnswer = await inquirer.prompt([
            {
                name: "operation",
                message: chalk.yellow.italic("\nPlease select option"),
                type: "list",
                choices: ["Withdraw", "Check Balance"],
            },
        ]);
        if (operationAnswer.operation === "Withdraw") {
            let withdrawAnswer = await inquirer.prompt([
                {
                    name: "withdrawMethod",
                    type: "list",
                    message: chalk.yellow.italic("\nSelect a withdrawal method"),
                    choices: ["Fast Cash", "Enter Amount"],
                },
            ]);
            if (withdrawAnswer.withdrawMethod === "Fast Cash") {
                let fastCashAnswer = await inquirer.prompt([
                    {
                        name: "fastCash",
                        type: "list",
                        message: chalk.yellow.italic("\nSelect Amount :"),
                        choices: [2500, 5000, 7000, 10000, 15000, 20000, 25000],
                    },
                ]);
                if (fastCashAnswer.fastCash > mybalance) {
                    console.log(chalk.red("\nInsufficient Balance !"));
                }
                else {
                    mybalance -= fastCashAnswer.fastCash;
                    console.log(chalk.cyan(`\n${fastCashAnswer.fastCash} Withdraw Successfully`));
                    console.log(chalk.cyan(`\nYour Remaining Balance is ${mybalance}`));
                }
            }
            else if (withdrawAnswer.withdrawMethod === "Enter Amount") {
                let amountAnswer = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: chalk.yellow.italic("\nEnter your amount to withdraw "),
                    },
                ]);
                if (amountAnswer.amount > mybalance) {
                    console.log(chalk.red("\nInsufficient Balance !"));
                }
                else {
                    mybalance -= amountAnswer.amount;
                    console.log(chalk.cyan(`\n${amountAnswer.amount} Withdraw Successfully`));
                    console.log(chalk.cyan(`\nYour Remaining Balance is ${mybalance}`));
                }
            }
        }
        else if (operationAnswer.operation === "Check Balance") {
            console.log(chalk.cyan(`\nYour current balance is = ${mybalance}`));
        }
        else if (somethingElse.else === "No") { }
    }
}
else {
    console.log(chalk.red("\nIncorrect pin !!"));
}
;
console.log(chalk.magentaBright.bold("\nTHANKYOU FOR USING ATM\n"));
