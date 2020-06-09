let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
	const choices = ["Rock", "Paper", "Scissors"];
	const choice = choices[Math.floor(Math.random() * 3)];
	return choice;
}

function win(user, computer)
{
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = user + " beats " + computer + ", you win! 🎉";
}

function lose(user, computer)
{
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = user + " loses to " + computer + ", you lose! 😓";
}

function tie(user, computer)
{
	result_div.innerHTML = user + " versus " + computer + ", it's a tie! 😎";
}

function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice)
	{
		case "RockScissors":
		case "ScissorPaper":
		case "PaperRock":
			win(userChoice, computerChoice);
			break;
		case "RockPaper":
		case "ScissorsRock":
		case "PaperScissors":
			lose(userChoice, computerChoice);
			break;
	}
	if(computerChoice === userChoice)
	{
		tie(userChoice, computerChoice);
	}
}

function main()
{
	rock_div.addEventListener('click', function()
	{
		game("Rock");
	})

	paper_div.addEventListener('click', function()
	{
		game("Paper");
	})

	scissors_div.addEventListener('click', function()
	{
		game("Scissors");
	})

}


main();