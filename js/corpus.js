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
  "@name tried to @verb my @adjective @noun at least @amount times.",
  "The @noun was whipping the @noun's ass",
  "The @adjective @noun was out of this world",
  "@adjective @properNoun was perfect",
  "I saw @properNoun jamming live to a crowd of @amount in @place at @time on @date",
  "@name was mad as a @noun",
  "@name threatened my life with a @weapon",
  "@name can really jam hard like a @adjective @noun",
  "The @adjective joyride transformed into a @adjective @noun",
  "@amount people appeared at the @adjective jam session in @place at @time",
  "@name pointed a @weapon at me in @place at @time on @date",
  "The @adjective @noun weighed @mass at @time",
  "I whipped @properNoun's ass",
  "You can really @verb @name's @noun",
  "You are the most dangerous @noun that I have ever felt",
  "Your @adjective @noun is the @noun to our @noun",
  "I love you like a @noun",
  "The @noun is the reason why people @verb you",
  "Suddenly, @noun and @noun went to @place and rocked the @noun",
  "Tree my @noun and @verb me of my @noun",
  "He picked up a @noun and hit me upside the @noun once and in the @noun @amount times"
];

var phrases = [
	"This is a random joyride...",
  "A magical joyride appears...",
  "About to take you on a joyride...",
  "This joyride brought to you by entropy..."
];

var labels = [
	"Whip it!"
];

corpus = {};

corpus.address = ["737 New Hampshire Street", "4358 South Cottage Grove Avenue"];

corpus.adjective = ["12-gauge", "40-minute", "affordable", "artistic", "awesome", "black", "chronic", "dead", "drunk", "fat", "fatal", "first-degree", "freaking", "fucking", "good", "good-for-nothing", "good time", "greatest", "high", "life-threatening", "merry", "no-good", "poor", "psychotic", "punk", "rock and roll", "shitty", "smelly", "stupid"];

corpus.age = ["thirty", "35", "46", "47", "52"];

corpus.amount = ["14", "800", "900", "950", "1400", "4,000", "5,000", "35,000", "50,000", "100,000", "300,000", "one thousand", "six", "ten million", "twenty"];

corpus.date = ["August 31", "March 5", "March 10"];

corpus.distance = ["326 miles"];

corpus.duration = ["18 years", "25 years"];

corpus.height = ["35,000 feet"];

corpus.name = ["Aftab Noorani", "Al Capone", "Alanis Morissette", "Arnold Schwarzenegger", "Ben Wigman", "Bill Clinton", "Bon Jovi", "Carla Winterbottom", "Clarence Weeks", "Courtney Love", "Dale Meiners", "Dave Grohl", "Eazy E", "Elvis Presley", "Jello Biafra", "John Cook", "Johnny Depp", "John Dillard", "Johnny Inkslinger", "John Pole", "Johnny Rotten", "John Snap", "Kris Kringle", "Kurt Cobain", "Larry Nevers", "Liz Phair", "Louis Farrakhan", "Malice Green", "O.J. Simpson", "Oprah Winfrey", "Reverend Henry E. Miller", "Reverend Richard Price", "Rick Sims", "Rodney King", "Saddam Hussein", "Trooper D. R. Johnson", "Walter Willis Shabazz", "Wesley Willis", "William Bell"];

corpus.noun = ["addict", "agents", "alcohol", "album", "antelope shit", "artwork", "ass", "asshole", "asscrack", "baboon", "band", "beating", "bullshit", "bus", "bus ride", "camel", "cannabis", "car", "caribou", "chain", "cheetah", "chicken", "chop", "church", "city", "cow", "crack", "crack rock", "daddy", "death metal", "demon", "dick", "dog", "dog shit", "dope", "dumpster", "electric eel", "family", "friend", "gangster", "head", "hellride", "house", "inkpen", "jam", "jerk", "job", "joyride", "kiss", "law", "life", "lights", "lion", "love", "magikist", "man", "metal band", "millionaire", "money", "mother", "motherfucker", "mule shit", "mullet", "music joyride", "music", "oil", "outburst", "paraphernalia pipe", "people", "police", "policeman", "prison", "pulpit", "reindeer", "rock and roll", "scalawag", "schizophrenia", "session", "show", "song", "stage", "star", "star ship", "state police", "stoplight", "time", "trooper", "vampire", "violence", "vulture", "wagon", "war hell ride", "weed", "woman"];

corpus.place = ["America", "Bottleneck", "California", "Chicago", "Detroit", "Hollywood", "Illinois", "jail", "Los Angeles", "Texas", "the City Centre Theater"];

corpus.properNoun = ["88.1 KICB", "Agent Orange", "Alice in Chains", "Batman", "Big Mac", "Birdman", "Bolt Thrower", "Bushwick Bill", "Carquest", "Chevrolet", "Christmas", "CompUSA", "Electra 225", "FBI", "Ford Windstar", "God", "Greyhound", "Jadroplov", "Maverick", "McDonalds", "Milk Bone", "Mitsubishi", "Nirvana", "Northwest Airlines", "Packard Bell", "Pontiac", "Quarter Pounder", "Raid", "Sports Authority", "Subway", "Superman", "Technics KN3000 keyboard", "Taco Bell", "The Empty Bottle", "The Foo Fighters", "The Frogs", "The Home Depot", "The Wesley Willis Fiasco", "Walgreens", "Wheaties", "White Castle", "Xerox"];

corpus.speed = ["90 miles per hour", "150 miles per hour"];

corpus.time = ["1:30 AM", "2:10 AM", "11:20 AM", "11:30 AM", "11:55 AM", "1:55 PM", "2:30 PM", "4:30 PM", "6:00 PM", "6:30 PM", "7:30 PM", "8:55 PM", "9:30 PM", "10:00 PM", "midnight"];

corpus.verb = ["beat", "bust", "curse", "cut", "eat", "drive", "feel", "fuck", "hit", "kick", "kill", "make", "murder", "play", "pull", "ride", "roar", "rock", "run", "screw", "shoot", "slim", "sing", "smoke", "stab", "suck", "whip", "whip", "yell"];

corpus.weapon = [".357 Magnum", ".38", ".38 caliber revolver", "12-gauge",  "baseball bat", "beating stick", "billy club", "gun", "karate stick", "pistol", "Uzi submachine gun"];

corpus.mass = ["26 grams", "28 grams", "360 pounds", "397 pounds"];

corpus.year = ["1930", "1987", "1990", "1991", "1996"];

