CREATE TABLE Heros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  character TEXT,
  name TEXT,
  fiction TEXT,
  power TEXT,
  power_image TEXT,
  character_image TEXT
);


INSERT INTO Heros (character,name,fiction,power,power_image,character_image) values ('Captain America','Steve Rogers','Marvel','Sheild','https://upload.wikimedia.org/wikipedia/commons/d/dc/CapShield05.jpg','http://i.annihil.us/u/prod/marvel/movies/civilwar/images/captainamerica_hero.png');

INSERT INTO Heros (character,name,fiction,power,power_image,character_image) values ('Han Solo','Harrison Ford','Star Wars','Millenium Falcon','http://i.imgur.com/FkYKudB.jpg','http://screencrush.com/442/files/2013/03/ford-star-wars.jpg?w=720&cdnnode=1');
