
window.onload = function () {

    class character {
        constructor(name, heal, attackP, counterP, img) {
            this.name = name;
            this.health = heal;
            this.attackPow = attackP;
            this.counterPow = counterP;
        }
    };

    const maceWindu = new character("Mace Windu", 100, 25, 18);
    const obiWan = new character("Obi Wan", 150, 5, 12);
    const keyloRen = new character("Keylo Ren", 90, 20, 19);
    const darthVader = new character("Darth Vader", 120, 5, 20);


    var currentHero = false;
    var currentVillian = false;
    var killCount = 0;

    function whoThis(char) {
        if (char == 1) {
            return obiWan;
        } else if (char == 2) {
            return maceWindu;
        } else if (char == 3) {
            return darthVader;
        } else {
            return keyloRen;
        }
    }

    function updateHealth() {
        $(".obiHealth").text(obiWan.health);
        $(".maceHealth").text(maceWindu.health);
        $(".darthHealth").text(darthVader.health);
        $(".keyloHealth").text(keyloRen.health);
    }

    function attack() {

        currentVillian.health -= currentHero.attackPow;
        currentHero.health -= currentVillian.counterPow;

        if (currentHero.health < 1) {
            $(".narration").text(`${currentVillian.name} struck you down! GAME OVER!`);
            $("#HeroBox").empty();
        } else if (currentVillian.health < 1) {
            currentVillian = false;
            VillianHealth = false;
            killCount = killCount + 1;

            if (killCount === 3) {
                $("#playerPrompt").empty();
                $("#VillianBox").empty();
                $(".narration").text(`YOU WIN!`);
                updateHealth();
            } else {
                $("#VillianBox").empty();
                $(".narration").text(`You Defeated ${currentVillian.name}! pick another foe!`);
                updateHealth();
            }


        } else {
            $(".narration").text(`You hit ${currentVillian.name} for ${currentHero.attackPow} points of damage, recieving ${currentVillian.counterPow} points of damage in return!`);
            updateHealth();
        }



        if (currentVillian) {
            currentHero.attackPow += currentHero.attackPow;

        }

    }


    $(".charBox").on("click", function () {
        charSelected = this;

        console.log($(this).val());
        $("#playerPrompt").text("Available foes to fight");

        if ((currentHero) && (currentVillian)) {
            return;
        } else if (currentHero) {
            currentVillian = whoThis($(this).val());
            $(this).addClass("enemy");
            $("#VillianBox").append(charSelected);


        } else {
            $(this).addClass("hero");
            currentHero = whoThis($(this).val());
            $(charSelected).appendTo("#HeroBox");

        }
        console.log(currentHero);
        console.log(currentVillian);
    })

    $("#theAttack").on("click", function () {
        if ((currentHero) && (currentVillian)) {
            attack();
        } else {
            return;
        }
    });

    $("#theReset").on("click", function () {
        location.reload();
    })




}