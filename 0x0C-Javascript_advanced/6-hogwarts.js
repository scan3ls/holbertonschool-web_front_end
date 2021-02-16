
class studentHogwarts {
    #privateScore = 0;
    #name = null;
    constructor() {

    }

    #changeScoreBy(points){
        this.#privateScore += points;
    }

    setName(newName){
        this.#name = newName;
    }

    rewardStudent(){
        this.#changeScoreBy(1);
    }

    penalizeStudent(){
        this.#changeScoreBy(-1);
    }

    getScore(){
        return (`${this.#name}: ${this.#privateScore}`);
    }
}

var harry = new studentHogwarts();
harry.setName("Harry");

harry.rewardStudent();  //1
harry.rewardStudent();  //2
harry.rewardStudent();  //3
harry.rewardStudent();  //4

console.log(harry.getScore());

var draco = new studentHogwarts();
draco.setName("Draco");

draco.rewardStudent();   //1
draco.penalizeStudent(); //1
draco.penalizeStudent(); //2
draco.penalizeStudent(); //3

console.log(draco.getScore());
