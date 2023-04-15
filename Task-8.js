// TASK 8
// -You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

const worldCupSquad = ['Babar Azam', 'Fakhar Zaman', 'Imam-ul-Haq', 'Mohammad Rizwan', 'Sarfaraz Ahmed', 'Shadab Khan', 'Shoaib Malik', 'Asif Ali', 'Haris Sohail', 'Imad Wasim', 'Faheem Ashraf', 'Hasan Ali', 'Junaid Khan', 'Mohammad Amir', 'Shaheen Afridi'];
const finalTeam = worldCupSquad.slice(0, 11);
alert(`Final team to play against India: ${finalTeam.join(', ')}`);