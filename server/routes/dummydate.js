const Post = require("../models/post");

function insertPostData() {
  Post.insertMany([
    {
      title: "The Fellowship of the Ring",
      body: "The first installment of The Lord of the Rings. in this epic we follow Frodo Baggins, a hobbit of the shire. When his uncle Bilbo leaves on his 111th birthday Frodo inherits Bilbo's house and a mysterious magic ring. Aided by the wizard Gandalf and three others of his hobbit friends Frodo must embark on an adventure to destroy this magic ring before the evil, dark lord Saruron can reclaim it and destroy all of middle earth. Along his journey Frodo will gain help from many individual from each of the four races as they seek to help him achieve his goal.",
      moviePoster:
        "https://www.blackgate.com/wp-content/uploads/2014/01/The-Fellowship-of-the-Ring-poster.jpg",
    },
    {
      title: "The Two Towers",
      body: "In the second instalment of The Lord of the Rings, we see Frodo continuing on his journey. At the conclusion of the first movie the fellowship is broken up. Frodo and Sam have gon off on their own, while Aragorn, Legolas and Gimlie chase after the Uruk-hi who captured Merry and Pippin. Each group will be faced with new friends and enemies while being cautious to determin who is which. War is brewing in Rohan and some of our broken fellowship will be drawn into that conflict. The ring will weigh heavier on Frodo as he grows closer to Mordor. The success of his quest no longer seems quite so assured.",
      moviePoster:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2549100c99181dbdaf0f5d4fe3f37a31d53dd14c5d754a72243882da9d2afb76._RI_V_TTW_.jpg",
    },
    {
      title: "The Return of the King",
      body: "In the third and final chapter of Lord of the Rings, events come to their epic conclusion. Gollum creates a rift between Frodo and Sam that threatens to cause the quest to fail. Rohan has been victorious at the battle of Helms Deep. Unfortunatly Rohan's fighting isn't over. The kingdom of Gondor is next on the enemies focous. King Theoden has to decide if he will give aid to the very people who left him and his own in their greatest hour of need. Compelled by a duty to the kingdom that Aragorn holds linieage to he is determined to go and fight no matter what. Gandalf has a different plan for the ranger and sets Aragorn on a path that will see him either crowned King of Gondor or dead and forgoton in a hall of undead warriors. Will they succeed? Will the realms of men, find victory over Sauron's forces or crushing defeat?",
      moviePoster:
        "https://2.bp.blogspot.com/-djIuucN9UUM/TbKeWpumHrI/AAAAAAAAA70/ZlNcrYG3G6I/s1600/The-Lord-of-the-Rings-The-Return-of-the-King-movie-poster.jpg",
    },
    {
      title: "Star Wars: A New Hope",
      body: "The galaxy spanning Empire has a hold everwher. However there are some who fight against this tyranical government. Amongst these rebels is the princes Leia. After gaining coppies of plans to the Empire's ultimate weapon she seaks to get them to her other rebels in hopes that a weakness can be discovered. As the Empire closes in on her she sends the plans away with two of her droids in a hopes that they will find a way to an old compatriate. Instead they find their way to a young mosture farmer on the planet Tattoine named Luke. Growing board with life on the farm Luke is all to eager to take up the call to fight against the empire. He will learn much about himself and the mysterious power known only as the force. Will it be enough to defeat the Empire?",
      moviePoster:
        "https://i.pinimg.com/736x/03/9d/31/039d31064097770ca1f71904a6299bae.jpg",
    },
  ]);
}

// insertPostData();

module.exports = insertPostData;
