
let date = ''; 
//时间戳转换时间
export function timestamp(time) {
  return date = new Date(time);
}
export function tempToDate(temp) {
  let date = new Date();
  date.setTime(temp)
  return date
}

// 转换特定时间格式
export function formatDate(date,format){
  let time = {
      'M+':date.getMonth() + 1,
      'd+':date.getDate(),
      'h+':date.getHours(),
      'm+':date.getMinutes(),
      's+':date.getSeconds(),
      'S+':date.getMilliseconds(),
      'q+':Math.floor((date.getMonth()+3)/3)
  }
  if(/(y+)/i.test(format)){
      format = format.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
  }
  for(let k in time){
      if(new RegExp('('+ k + ')').test(format)){
          format = format.replace(RegExp.$1,RegExp.$1.length === 1 ? time[k] :('00'+time[k]).substr((''+time[k]).length));
      }
  }
  return format
}
//计算年龄
export function computedAge(birth){
  let arr = birth.split('-');
  let y = arr[0];
  let m = arr[1];
  let d = arr[2];
  let now = new Date();
  let ny = now.getFullYear();
  let nm = now.getMonth();
  let nd = now.getDate();
  // console.log(y,ny,m,nm,d,nd);
  let age ='';
  if(y == ny){
      age = 0  //同一年0岁
  }else{
      let ydiff = ny- y;
      if(ydiff>0){ //出生日期比现在晚
          // 比较月份
          // 同月
          if(nm == m){
              let ddiff = nd -d;
              if(ddiff<0){
                  age = ydiff - 1;
              }else{
                  age = ydiff;
              }
          }else{
              // 不同月
              let mdiff = nm - m;
              if(mdiff<0){
                  age = ydiff - 1; 
              }else{
                  age = ydiff;
              }
          }
      }else{
          age = -1;  //false
      }
  }
  return age 
}