
var zodiacArray = [
	{
		sign: "Aquarius",
		img: "img/aquarius.png",
		description: "Perhaps the most misunderstood sign of the zodiac, we can for sure say that the Aquarius personality values intelligence, ideas and loves a good theory."
	},
	{
		sign: "Pisces",
		img: "img/pisces.png",
		description: "Pisces embodies the idea that the world is created by opposite energies that complement and balance one another, you are the living embodiment of yin and yang."
	},
	{
		sign: "Aries",
		img: "img/aries.png",
		description: "Self-assertive, sometimes bold, sometimes cloaking deep insecurity with that boldness, Aries is always up for an adventure."
	},
	{
		sign: "Taurus",
		img: "img/taurus.png",
		description: "Calm, collected and attractive on the outside, raging like a tempest on the inside, Taurus is the blacksmith shop of the soul."
	},
	{
		sign: "Gemini",
		img: "img/gemini.png",
		description: "Gemini people are many sided, quick both in the mind and physically. They are brimming with energy and vitality, they are clever with words."
	},
	{
		sign: "Cancer",
		img: "img/cancer.png",
		description: "Nurturing, loving, devoted, cuddly, and self-centered, Cancer has it all."
	},
	{
		sign: "Leo",
		img: "img/leo.png",
		description: "Leo people possess a kingdom which they protest and cherish.  They are high-esteemed, honorable, and very devoted to themselves in particular."
	},
	{
		sign: "Virgo",
		img: "img/virgo.png",
		description: "Virgo exist in the mind, everything is inside.  To the world, Virgo presents a calm and collected exterior but on the inside, nervous unctonrolled intensity in the mind."
	},
	{
		sign: "Libra",
		img: "img/libra.png",
		description: "Libras are the diplomat of the zodiac. They are able to put themselves in other's shoes and see things through another person's point of view."
	},
	{
		sign: "Scorpio",
		img: "img/scorpio.png",
		description: "Scorpios are extremely ambitious, persistent and determined which is shown through a power hungry, controlling attitude."
	},
	{
		sign: "Sagittarius",
		img: "img/sagittarius.png",
		description: "Sagittarius seem to be guided by luck, good things happen to Sagittarius and this is usually because of their optimistic outlook and positive disposition which attracts good fortune."
	},
	{
		sign: "Capricorn",
		img: "img/capricorn.png",
		description: "Capricorns are very ambitious people, they always have something they are pursuing and they want their lives to be fulfilled and important."
	}
]


function getInfo() {
	var month = document.getElementById("month").value
	var day = document.getElementById("day").value

	if((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
		document.getElementById("Sign").innerHTML = zodiacArray[0].sign
		document.getElementById("img").setAttribute("src", zodiacArray[0].img)
		document.getElementById("description").innerHTML = zodiacArray[0].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
		document.getElementById("Sign").innerHTML = zodiacArray[1].sign
		document.getElementById("img").setAttribute("src", zodiacArray[1].img)
		document.getElementById("description").innerHTML = zodiacArray[1].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
		document.getElementById("Sign").innerHTML = zodiacArray[2].sign
		document.getElementById("img").setAttribute("src", zodiacArray[2].img)
		document.getElementById("description").innerHTML = zodiacArray[2].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
		document.getElementById("Sign").innerHTML = zodiacArray[3].sign
		document.getElementById("img").setAttribute("src", zodiacArray[3].img)
		document.getElementById("description").innerHTML = zodiacArray[3].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
		document.getElementById("Sign").innerHTML = zodiacArray[4].sign
		document.getElementById("img").setAttribute("src", zodiacArray[4].img)
		document.getElementById("description").innerHTML = zodiacArray[4].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
		document.getElementById("Sign").innerHTML = zodiacArray[5].sign
		document.getElementById("img").setAttribute("src", zodiacArray[5].img)
		document.getElementById("description").innerHTML = zodiacArray[5].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
		document.getElementById("Sign").innerHTML = zodiacArray[6].sign
		document.getElementById("img").setAttribute("src", zodiacArray[6].img)
		document.getElementById("description").innerHTML = zodiacArray[6].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
		document.getElementById("Sign").innerHTML = zodiacArray[7].sign
		document.getElementById("img").setAttribute("src", zodiacArray[7].img)
		document.getElementById("description").innerHTML = zodiacArray[7].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
		document.getElementById("Sign").innerHTML = zodiacArray[8].sign
		document.getElementById("img").setAttribute("src", zodiacArray[8].img)
		document.getElementById("description").innerHTML = zodiacArray[8].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
		document.getElementById("Sign").innerHTML = zodiacArray[9].sign
		document.getElementById("img").setAttribute("src", zodiacArray[9].img)
		document.getElementById("description").innerHTML = zodiacArray[9].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
		document.getElementById("Sign").innerHTML = zodiacArray[10].sign
		document.getElementById("img").setAttribute("src", zodiacArray[10].img)
		document.getElementById("description").innerHTML = zodiacArray[10].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	} if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
		document.getElementById("Sign").innerHTML = zodiacArray[11].sign
		document.getElementById("img").setAttribute("src", zodiacArray[11].img)
		document.getElementById("description").innerHTML = zodiacArray[11].description
		document.getElementById("Sign").className = "animated zoomIn"
		document.getElementById("img").className = "animated zoomIn"
		document.getElementById('description').className = "animated zoomIn"
	}
}
