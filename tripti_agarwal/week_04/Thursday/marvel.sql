CREATE TABLE Marvel (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  character_name TEXT,
  human_name TEXT,
  actor_name TEXT,
  bio TEXT,
  super_powers TEXT,
  hero BOOLEAN,
  linked_to TEXT,
  comic_image TEXT,
  character_image TEXT
);


INSERT INTO Marvel  (character_name,human_name,bio,super_powers,hero,comic_image,character_image) values ('Iron Man','Tony Stark','During a visit to the Persian Gulf to show off the latest Stark Industries weaponry, Tony Stark was captured by the enemy and forced to build a new super weapon. Instead (with the assistance of renowned physicist and fellow prisoner Ho Yinsen) Stark crafted the first version of his now-famous powered battle armor. He soon escaped captivity, though Yinsen gave his life to buy Stark the few extra moments he needed to activate his armor.
Since that day, Stark has lived two lives: one as the playboy industrialist in charge of Stark Industries, and the other as the high-flying golden Avenger known as Iron Man!
','Iron suit',1,'http://spinoff.comicbookresources.com/wp-content/uploads/2012/06/avengers-emh-iron-man.jpg','http://allmovieswallpaper.com/wp-content/uploads/tony-stark-iron-man-7.jpg');

INSERT INTO Marvel  (character_name,human_name,bio,super_powers,hero,comic_image,character_image) values ('Scarlet Witch','Wanda Maximoff','Born to a mutant father, imbued with sorcerous potential by a demon trapped in Wundagore Mountain, and raised by her adoptive gypsy parents, Wanda Maximoffs life was full of intrigue long before she became aware of her powers.
The Scarlet Witch began her career fighting the X-Men as a member of her father Magnetos Brotherhood of Evil Mutants.
But she became disillusioned with villainy, instead joining the Avengers after several of that teams founding members left.

As both a mutant and a sorceress, Wandas reality-altering powers and devastating hex bolts make her a formidable opponent.  ','',1,'http://static.comicvine.com/uploads/original/11114/111145314/3599863-4771607191-20652.jpg','http://i0.wp.com/d3qljroq8e8j0n.cloudfront.net/wp-content/uploads/2015/09/03141300/scarlet-witch1.jpg?fit=615%2C342');

INSERT INTO Marvel  (character_name,human_name,bio,super_powers,hero,comic_image,character_image) values ('Loki','Loki Laufeyson','Throughout their childhood and into adolescence, Loki becomes resentful of how differently he and Thor are treated by the general Asgardian citizenry. Valuing great strength, tenacity and battle-bravery above all, the Asgardians clearly favor Thor. Lokis gifts, however, lay in other areas, most notably sorcery. Possessing a natural affinity for commanding great magical forces, he schemes to use his power to destroy Thor and become the most powerful in all of Asgard.','',0,'https://s-media-cache-ak0.pinimg.com/236x/42/4f/37/424f378b4986fcef421dfa25bd331862.jpg','http://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5548db48e4b0c208be7920aa/1430838096137');
