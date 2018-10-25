var dad = {firstName:"James", lastName:"Duffy", age:49, favoriteTVShow:"Seinfeld", favoriteSong:"Black"};

var sister = {firstName:"Maysen", lastName:"NierDuffy", age:13, favoriteTVShow:"Grey's Anatomy", favoriteSong:"Lucid Dreams"};

var mom = {firstName:"Tamara", lastName:"NierDuffy", age:48, favoriteTVShow:"Scandal", favoriteSong:"Chasing Cars"};

var gram = {firstName:"Diane", lastName:"Nier", age:73, favoriteTVShow:"Castle", favoriteSong:"Bushel In A Peck"};

var cousin = {firstName:"Lily", lastName:"Sabine", age:16, favoriteTVShow:"Shameless", favoriteSong:"Dreams and Nightmares"};

var familyMembers = [dad, sister, mom, gram, cousin];

for(i=0; i < familyMembers.length; i++){
    console.log(familyMembers[i].firstName+ " " + familyMembers[i].lastName);
    console.log(familyMembers[i].favoriteSong);
}

function updateShow(a){
    a.favoriteSong="Girls Like You";
}

for(i=0; i < familyMembers.length; i++){
    familyMembers[i].favoriteTVShow="Narcos";
    console.log(familyMembers[i].favoriteTVShow);
}