
window.onload = function () {

    class character {
        constructor(name,heal, attackP, counterP,img) {
            this.name = name;
            this.health = heal;
            this.attackPow = attackP;
            this.counterPow = counterP;
        }
    };

    const maceWindu = new character("Mace Windu",100, 7, 12);
    const obiWan = new character("Obi Wan",150, 6, 10);
    const keyloRen = new character("Keylo Ren",100, 8, 12);
    const darthVader = new character("Darth Vader",120, 5, 15);


    var currentHero = false;
    var currentVillian = false;
    

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
        updateHealth();
        if (currentVillian.health < 1) {
            $("#VillianBox").empty();
            $(".narration").text(`You Defeated ${currentVillian.name}! pick another foe!`);
            currentVillian = false;
            VillianHealth = false;

        } else if (currentHero < 1) {
            $(".narration").text(`You were defeated by ${currentVillian.name}! GAME OVER`);
        } else {
            $(".narration").text(`You hit ${currentVillian.name} for ${currentHero.attackPow} points of damage, recieving ${currentVillian.counterPow} points of damage in return!`);
        }
        
        if (currentVillian) {
        currentHero.attackPow += currentHero.attackPow;
        
        }
        
    }


    $(".charBox").on("click", function() {
        charSelected = this;

        console.log($(this).val());

        if ((currentHero) && (currentVillian)) {
            return;
        } else if (currentHero) {
            currentVillian = whoThis($(this).val());
            $("#VillianBox").append(charSelected);
            console.log(VillianHealth);
        } else {
            currentHero = whoThis($(this).val());
            $(charSelected).appendTo("#HeroBox");
            console.log(heroHealth);
        }
        console.log(currentHero);
        console.log(currentVillian);
    })

    $("#theAttack").on("click", function() {
        if ((currentHero) && (currentVillian)) {
            attack();
        } else {
            return;
        }
    });

    $("#theReset").on("click", function(){
        
    })


    

}