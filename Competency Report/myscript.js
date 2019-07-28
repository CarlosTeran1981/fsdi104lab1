class Character{
    constructor(name,lifePoints,attackPoints){
    this.name=name;
    this.lifePoints=lifePoints;
    this.attackPoints=attackPoints;
    }
    
    attack=function(opponent){
      let
      newLifePoints=opponent.lifePoints-this.attackPoints;
      
      if(opponent.lifePoints<=0){
        update();
        document.getElementById('console').innerHTML=`<p> IS ALL OVER..... <BR> ${this.name} WINS!!!!!!!!`;
        }

    else{
        
        document.getElementById('console').innerHTML=`<p>${this.name} Attacking.... `;
        opponent.lifePoints=newLifePoints;
        update();
    }
    }
      
    print=function(){
        document.getElementById(this.name).innerHTML=`<h3>Name: ${this.name} <br> Life Points: ${this.lifePoints} <br> Attack Points: ${this.attackPoints} <br> </h3>`
    }
}


const jerry=new Character('Jerry',100,20);
const tom=new Character('Tom',110,22);

function update(){
    jerry.print();
    tom.print();
}

update();

/* let points = jerry.attack(tom.lifePoints);
tom.lifePoints = points;
 */