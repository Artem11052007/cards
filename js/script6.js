document.body.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center; 
`;
const myNewElement = document.createElement('div');
myNewElement.style.cssText = `
  color: blue;
  background: #ffffffff;
  width: 700px;
  height: 350px;
  border-radius: 20px;
`;
let nameuser = prompt("Введіть своє ім'я...");
document.body.append(myNewElement);
const firstNewElement = document.createElement('div');
firstNewElement.style.cssText = `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
myNewElement.append(firstNewElement);
const userName = document.createElement('p');
userName.textContent = (nameuser);
userName.style.cssText = `
color: black;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
firstNewElement.append(userName);
const computerName = document.createElement('p');
computerName.textContent = "Комп’ютер";
computerName.style.cssText = `
  color: black;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
firstNewElement.append(computerName);
const secondNewElement = document.createElement('div');
secondNewElement.style.cssText = `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
myNewElement.append(secondNewElement)
const balUser = document.createElement('div');
balUser.style.cssText = `
  width: 200px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #00ffff 0%, #003366 100%);
  border-radius: 10%;
`;
secondNewElement.append(balUser);
const randombal1 = document.createElement('p');
randombal1.style.cssText = `
  color: #000;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
balUser.appendChild(randombal1);
const balComp = document.createElement('div');
balComp.style.cssText = `
  width: 200px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #00ffff 0%, #003366 100%);
  border-radius: 10%;
`;
secondNewElement.append(balComp);
const randombal2 = document.createElement('p');
randombal2.style.cssText = `
  color: #000;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
balComp.appendChild(randombal2);
const thirdNewElement = document.createElement('div');
thirdNewElement.style.cssText = `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;
myNewElement.append(thirdNewElement)
const bulsUsers = document.createElement('img');
bulsUsers.style.width = "100px";
bulsUsers.src = "https://deckofcardsapi.com/static/img/KC.png";
thirdNewElement.append(bulsUsers);

const generateBul = document.createElement('button');
generateBul.textContent = "Генерувати";
generateBul.style.cssText = `
  background: #1C6EA4;
  color: #fff;
  font-size: 20px;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
`;
thirdNewElement.append(generateBul);

const bulComp = document.createElement('img');
bulComp.style.width = "100px";
bulComp.src = "https://deckofcardsapi.com/static/img/KC.png";
thirdNewElement.append(bulComp);

const result = document.createElement('p');
result.style.cssText = `
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
myNewElement.append(result);

const cards = [
  {name: "6", id: 6, src: 'https://deckofcardsapi.com/static/img/6S.png'},   //https://deckofcardsapi.com/
  {name: "7", id: 7, src: 'https://deckofcardsapi.com/static/img/7S.png'},
  {name: "8", id: 8, src: 'https://deckofcardsapi.com/static/img/8H.png'},
  {name: "9", id: 9, src: 'https://deckofcardsapi.com/static/img/9H.png'},
  {name: "10", id: 10, src: 'https://deckofcardsapi.com/static/img/0D.png'},
  {name: "Валет", id: 11, src: 'https://deckofcardsapi.com/static/img/JD.png'},
  {name: "Дама", id: 12, src: 'https://deckofcardsapi.com/static/img/QD.png'},
  {name: "Король", id: 13, src: 'https://deckofcardsapi.com/static/img/KC.png'},
  {name: "Туз", id: 14, src: 'https://deckofcardsapi.com/static/img/AC.png'}
];

let scoreUser = 0;
let scoreComp = 0;
let rounds = 0;
const totalRounds = 3;

generateBul.onclick = () => {
  if (rounds >= totalRounds) return; 

  const bulCompCard = cards[Math.floor(Math.random() * cards.length)];
  const bulUserCard = cards[Math.floor(Math.random() * cards.length)];

  bulComp.src = bulCompCard.src;
  bulsUsers.src = bulUserCard.src;

  scoreComp += bulCompCard.id;
  scoreUser += bulUserCard.id;

  rounds++; 

  if (scoreUser > 21) {
    result.textContent = `${nameuser} перевищив 21! Комп’ютер виграв гру!`;
    generateBul.disabled = true;
  } else if (scoreComp > 21) {
    result.textContent = `Комп’ютер перевищив 21! ${nameuser} виграв гру!`;
    generateBul.disabled = true;
  } else if (rounds === totalRounds) { 
    generateBul.disabled = true;
    if (scoreUser > scoreComp) {
      result.textContent = `Гру завершено! ${nameuser} переміг з рахунком ${scoreUser}:${scoreComp}`;
    } else if (scoreComp > scoreUser) {
      result.textContent = `Гру завершено! Комп’ютер переміг з рахунком ${scoreComp}:${scoreUser}`;
    } else {
      result.textContent = `Нічия після ${totalRounds} раундів (${scoreUser}:${scoreComp})`;
    }
  }
  randombal1.textContent = scoreUser;
  randombal2.textContent = scoreComp;
};

const relod = document.createElement('a'); 
relod.textContent = "Почати спочатку"; 
relod.style.cssText = `
  display: inline-block;
  margin-top: 20px;
  margin-left: 253px;
  padding: 10px 20px;
  font-size: 20px;
  background-color: #370075ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

relod.onclick = () => {
  location.reload(); 
};

myNewElement.append(relod); 
