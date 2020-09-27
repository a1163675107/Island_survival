class mapEle {
  constructor(eventType = "u", isDetect = false) { //u代表undefined,表示事件类型还未确定
    this.eventType = eventType;
    this.isDetect = isDetect;
    this.show = "mapEle-1";
  }
}

function CreateMap(complexIndex) {
  let map = [];
  for (let i = 0; i < complexIndex; i++) {
    let row = [];
    for (let j = 0; j < complexIndex; j++) {
      row.push(new mapEle("u", false));
    }
    map.push(row);
  }
  return map
}
export default CreateMap;
