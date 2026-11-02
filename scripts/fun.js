var monsters =
[
    "resources/monster1.png",
    "resources/monster2.png",
    "resources/monster3.png"
]

function GenerateMonster()
{
    var monster = monsters[Math.floor(Math.random() * monsters.length)];
    var root = document.getElementById("about-image");
    var image = document.createElement("img");

    image.src = monster;

    root.append(image);
}

function GenerateString()
{
    
}