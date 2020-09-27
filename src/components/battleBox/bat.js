class monster{
  constructor(name,atk,def){
    this.HP=100;
    this.name=name;
    this.atk=atk;
    this.def=def;
  }
  attack(player){
    player.HP-=this.atk;
  }
  beAttacked(hurtVal){
    this.HP-=hurtVal
  }
}
let monsterList=[
  {'野猪':'5|1'},
  {'野兔':"2|0"}
]
function createMonster(){
   let mlLength=monsterList.length;
   let selectOne=Math.floor(Math.random()*mlLength);
   selectOne=monsterList[selectOne];
   let data=Object.entries(selectOne);
   data=data[0];
   let name=data[0];
   let atk=data[1].split('|')[0];
   atk=Number.parseInt(atk)
   let def=data[1].split('|')[1];
   def=Number.parseInt(def)
   return new monster(name,atk,def)
}
function monsterAtk(monster,player){
  let id = setInterval(() => {
    monster.attack(player);
    if (player.HP < 0) {
      clearInterval(id);
    }
  }, 1000);
  return id;
}

export {createMonster,monsterAtk};
