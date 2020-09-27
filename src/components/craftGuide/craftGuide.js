let tools=[
  {
    name:'初级镐',
    materials:{
      '木材':4,
      '石材':4,
    },
    introduce:'凿开矿石',
    createFunc(){
      console.log('生成ing');
    }
  },
]

let foods=[
  {
    name:'熟成鱼',
    materials:{
      '炉子':1,
      '木炭':1,
    },
    introduce:'可更好食用',
    createFunc(){
      console.log('生成ing');
    }
  }
]
let ship=[
  {
    name:'扩大船体',
    materials:{
      '木材':50,
      '石材':50,
    },
    introduce:'提升船的航行能力就有机会发现资源更丰厚的岛',
    createFunc(){
      console.log('生成ing');
    }
  }
]
let battleTools=[
  {
    name:'初级剑',
    materials:{
      '木材':4,
      '石材':4,
    },
    introduce:'增强战斗能力',
    createFunc(){
      console.log('生成ing');
    }
  }
]




let craftList={
  tools,
  foods,
  ship,
  battleTools,
}
export default craftList;
