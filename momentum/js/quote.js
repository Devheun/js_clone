const quotes=[
	{
		quote:"When you have faults, do not fear to abandon them.",
		author:"Confucius",
	},
	{
		quote:"Youth isn’t always all it’s touted to be.",
		author:"Lawana Blackwell",
	},
	{
		quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author:"Nelson Mandela",
	},
	{
		quote:"This too shall pass.",
		author:"Et hoc transibit",
	},
	{
		quote:"Only I can change me life, no one can do it for me.",
		author:"Carol Burnett",
	}
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;