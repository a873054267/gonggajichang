/**
 * Created by Administrator on 2018/8/28.
 */
class Methods {
  drawCircle(circle,color){
    var d=document.getElementsByClassName("event");
    var c=document.getElementById(circle);
    var cxt=c.getContext("2d");
    //画圆
    cxt.fillStyle="rgba(20,43,60)";
    cxt.beginPath();
    cxt.arc(87,71,65,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
    cxt.beginPath();
    cxt.lineWidth=15;
    //画弧形
    cxt.strokeStyle = color;
    cxt.arc(87, 71, 40, Math.PI / 4, 3*Math.PI / 4, true);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(92,71);
    cxt.lineTo(82,66);
    cxt.lineTo(82,76);
    cxt.lineTo(92,71);
    cxt.closePath();
    cxt.fillStyle=color;
    //cxt.strokeText("应急处置", 77, 141);
    cxt.fill();
    cxt.stroke();//调用 绘




  }
}
export default new Methods ()
/**
 * Created by Administrator on 2018/8/29.
 */
