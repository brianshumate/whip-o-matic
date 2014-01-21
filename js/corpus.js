/*
 * whip-o-matic
 * https://github.com/brianshumate/whip-o-matic
 * Based on:
 *
 * WTF Engine
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */

var templates = [
  "@adjective @propernoun was perfect",
  "@amount people appeared at the @adjective jam session in @place at @time",
  "He picked up a @noun and hit me upside the @noun once and in the @noun @amount times",
  "I also @pastverb in front of a @adjective @noun",
  "I love you like @noun",
  "I @pastverb a lot of @noun",
  "I saw @propernoun jamming live to a crowd of @amount in @place at @time on @date",
  "I then got off the @adjective @noun and @pastverb like a @adjective @noun",
  "I whipped @propernoun's ass",
  "I whipped @propernoun's ass for @durations on @day",
  "It whipped a @noun's ass",
  "It whipped a @noun's ass for @durations",
  "It whipped a @noun's ass real good",
  "@name can really jam hard like a @adjective @noun",
  "@name was mad as a @noun",
  "@name threatened my life with a @weapon",
  "@name tried to @verb my @adjective @noun at least @amount times",
  "@name pointed a @weapon at me in @place at @time on @date",
  "Rock the @noun on @noun",
  "Stop the @noun",
  "Suddenly, @noun and @noun went to @place and rocked the @noun",
  "The @adjective joyride transformed into a @adjective @noun",
  "The @adjective @noun was out of this world",
  "The @adjective @noun weighed @mass at @time",
  "The @noun is the reason why people @verb you",
  "The @noun was whipping the @noun's ass",
  "The year was @year and I had a @adjective @noun with @propernoun",
  "Tree my @noun and @verb me off my @noun",
  "When I went to @place that same @day, I picked up a @noun",
  "You can really @verb with @name's @noun",
  "You are the most dangerous @noun that I have ever felt",
  "Your @adjective @noun is the @noun to our @noun"
];

var phrases = [
  "About to take you on a joyride...",
  "A magical joyride appears...",
	"This is a random joyride...",
  "This joyride brought to you by entropy..."
];

var labels = [
	"Whip it again!"
];

corpus = {};

corpus.address = ["737 New Hampshire Street", "4358 South Cottage Grove Avenue"];

corpus.adjective = ["affordable", "artistic", "awesome", "12-gauge", "40-minute", "beautiful", "black", "chronic", "dead", "drunk", "early", "everlasting", "fabulous", "fat", "fatal", "fatty", "filthy", "first-degree", "freaking", "fucking", "good", "good-for-nothing", "good time", "greatest", "healthy", "high", "life-threatening", "little", "lowdown", "loving", "merry", "metal", "miserable", "nasty", "no-good", "poor", "psychotic", "punk", "rock and roll", "rotten", "shitty", "smelly", "stupid"];

corpus.adverb = ["vulgarly"];

corpus.age = ["thirty", "35", "46", "47", "52"];

corpus.anadjective = ["affordable", "artistic", "awesome"];

corpus.amount = ["14", "200", "800", "900", "950", "1400", "4,000", "5,000", "35,000", "50,000", "100,000", "300,000", "one thousand", "six", "ten million", "twenty"];

corpus.date = ["April 2nd", "April 4th", "August 31st", "February 5th", "March 5th", "March 9th", "March 10th"];

corpus.day = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"];

corpus.distance = ["326 miles"];

corpus.duration = ["40-minute", "three-hour"];

corpus.durations = ["18 years", "25 years", "five days", "thirty minutes"];

corpus.exclamatoin = ["Amen!", "punk!"];

corpus.height = ["35,000 feet"];

corpus.mass = ["26 grams", "28 grams", "360 pounds", "397 pounds"];

corpus.name = ["Aftab Noorani", "Al Capone", "Alanis Morissette", "Arnold Schwarzenegger", "Ben Wigman", "Bill Clinton", "Bon Jovi", "Carla Winterbottom", "Clarence Weeks", "Courtney Love", "Dale Meiners", "Dave Grohl", "Eazy E", "Elvis Presley", "Jello Biafra", "Jesus Christ", "Jim Simm", "John Cook", "Johnny Depp", "John Dillard", "Johnny Inkslinger", "John Pole", "Johnny Rotten", "John Snap", "Kris Kringle", "Kurt Cobain", "Larry Nevers", "Liz Phair", "Louie Griff", "Louis Farrakhan", "Malice Green", "Michael Jackson", "Officer James Dudley", "O.J. Simpson", "Oprah Winfrey", "Reverend Henry E. Miller", "Reverend Richard Price", "Rick Sims", "Rodney King", "Saddam Hussein", "Trooper D. R. Johnson", "Walter Willis Shabazz", "Wesley Willis", "William Bell"];

corpus.noun = ["addict", "agent", "airplane", "alcohol", "album", "antelope shit", "artwork", "ass", "asscrack", "asshole", "baboon", "band", "beating", "blood", "bootyhole", "brother", "buffalo", "bullshit", "bus", "bus ride", "camel", "cannabis", "car", "caribou", "chain", "cheetah", "chicken", "church", "clink", "city", "cityscape", "cocaine", "cow", "crack", "crack rock", "creep", "daddy", "death metal", "demon", "dick", "dog", "dogshit", "dope", "drug", "dumpster", "electric eel", "face", "family", "friend", "gangster", "ghetto", "godfather", "godson", "grave", "head", "hell", "hellride", "holiday", "hospital", "house", "hyena", "inkpen", "jackoff", "jam", "jerk", "job", "joyride", "keyboard", "kiss", "law", "life", "light", "lion", "llama", "loser", "love", "magikist", "man", "metal band", "millionaire", "milkshake", "money", "mother", "motherfucker", "mule shit", "mullet", "music joyride", "music", "oil change", "outburst", "panda bear", "paraphernalia pipe", "people", "police", "policeman", "prison", "pulpit", "reindeer", "scalawag", "schizophrenia", "schmuck", "sedative", "session", "show", "skull", "skyscraper", "song", "stage", "star", "star ship", "snow leopard", "state police", "stoplight", "sweetheart", "tiger", "time", "trooper", "unit", "vampire", "van", "violence", "vulture", "wagon", "war hell ride", "weed", "whiskey", "woman", "woolly mammoth"];

corpus.pastverb = ["ate", "beat", "blasted", "brandished", "burned", "busted", "cracked", "cursed", "cut", "discharged", "drove", "felt", "filled", "fucked", "hit", "knocked", "kicked", "killed", "kissed", "loved", "made", "murdered", "persecuted", "played", "pulled", "rode", "roared", "rocked", "ran", "sang", "screwed", "shot", "slashed", "slimmed", "smoked", "stabbed", "sucked", "threw", "turned", "whipped", "yelled"];

corpus.place = ["America", "Aragon Ballroom", "Bottleneck", "California", "Chapel A.M.E. Zion Church", "Chicago", "Des Moines", "Detroit", "East Orange", "Europe", "Fort Dodge", "Hollywood", "Illinois", "Iowa", "jail", "Kansas", "Lawrence", "Los Angeles", "New Jersey", "Russia", "San Diego", "Seattle", "Texas", "the City Centre Theater", "Washington", "Wrigley Field"];

corpus.propernoun = ["88.1 KICB", "Agent Orange", "Alice in Chains", "Batman", "Big Mac", "Birdman", "Bolt Thrower", "Burger King", "Bushwick Bill", "CTA Bus", "Carquest", "Chevrolet", "Christmas", "CompUSA", "Dead Kennedys", "Earth", "El Dorado", "Electra 225", "FBI", "Folgers", "Ford Windstar", "God", "Greyhound", "Harpo Studios", "Illinois State Police", "In Utero", "Jadroplov", "KKK", "Knights of Columbus", "Maverick", "McDonalds", "Milk Bone", "Miracle Whip", "Mitsubishi", "Nirvana", "Northwest Airlines", "Packard Bell", "Pantera", "Pontiac", "Quarter Pounder", "Raid", "Smith & Wesson", "Sprint", "Sports Authority", "Subway", "Superman", "Technics KN3000 keyboard", "Taco Bell", "The Empty Bottle", "The Foo Fighters", "The Frogs", "The Home Depot", "The Metro", "The Wesley Willis Fiasco", "Western Union", "Viper Room", "Walgreens", "Westone",  "Wheaties", "White Castle", "WMFU", "Xerox"];

corpus.speed = ["90 miles per hour", "150 miles per hour"];

corpus.time = ["1:30 AM", "2:10 AM", "11:20 AM", "11:30 AM", "11:55 AM", "1:55 PM", "2:30 PM", "4:30 PM", "6:00 PM", "6:30 PM", "7:30 PM", "8:55 PM", "9:30 PM", "10:00 PM", "midnight"];

corpus.verb = ["beat", "blast", "brandish", "burn", "bust", "crack", "curse", "cut", "discharge", "drive", "duke", "eat", "eject", "feel", "fill", "fuck", "hit", "knock", "kick", "kill", "kiss", "love", "make", "murder", "persecute", "play", "pull", "ride", "roar", "rock", "run", "screw", "shoot", "sing", "slim", "smash", "smoke", "stab", "suck", "throw", "turn", "whip", "whip", "yell at"];

corpus.weapon = [".357 Magnum", ".38", ".38 caliber revolver", "12-gauge",  "baseball bat", "beating stick", "billy club", "box cutter", "gun", "handgun", "karate stick", "pistol", "semi-automatic", "Uzi submachine gun"];

corpus.year = ["1930", "1987", "1990", "1991", "1992", "1996", "1997"];

