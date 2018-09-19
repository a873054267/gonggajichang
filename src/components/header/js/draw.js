/**
 * Created by Administrator on 2018/8/28.
 */
class Methods {
  drawLine(name){
    var canvas=document.getElementById(name);//获取canvas对象
    var height=canvas.clientHeight;
    console.log(height)
    var width=canvas.clientWidth;
    canvas.width = width;
    canvas.height = height;
    var ctx=canvas.getContext("2d"); //创建二维的绘图上下文对象
  //通过上下文对象调用属性或方法来绘图
    ctx.beginPath();//  “beginPath()” 表开始一条路径或者重置当前的路径
    ctx.lineCap="round";//圆角线条
    var p1=width*14/15;
    ctx.moveTo(0,height/2-height/8);//开始点坐标
    ctx.lineTo(p1,height/2-height/8);//结束点坐标
    ctx.lineTo(width,height/2-height/3);
    ctx.moveTo(0,height/2+height/8);//开始点坐标
    ctx.lineTo(p1,height/2+height/8);//结束点坐标
    ctx.lineTo(width,height/2+height/3);

    var gnt1 =ctx.createLinearGradient(0,0,width,height);//线性渐变的起止坐标
    gnt1.addColorStop(1,'cyan');//创建渐变的开始颜色，0表示偏移量，个人理解为直线上的相对位置，最大为1，一个渐变中可以写任意个渐变颜色
    gnt1.addColorStop(0,'blue');

    ctx.lineWidth=1;//“lineWidth”定义路径的宽度（有继承性，如要定义不同宽度的路径则要单独定义）
    ctx.strokeStyle=gnt1;//“strokeStyle”填充路径的颜色
    ctx.stroke();//调用 绘制
  }
  drawLineReverse(name){
    var canvas=document.getElementById(name);//获取canvas对象
    var height=canvas.clientHeight;
    console.log(height)
    var width=canvas.clientWidth;
    canvas.width = width;
    canvas.height = height;
    var ctx=canvas.getContext("2d"); //创建二维的绘图上下文对象
    //通过上下文对象调用属性或方法来绘图
    ctx.beginPath();//  “beginPath()” 表开始一条路径或者重置当前的路径
    ctx.lineCap="round";//圆角线条
    var p1=width*14/15;
    ctx.moveTo(width,height/2-height/8);//开始点坐标
    ctx.lineTo(width-p1,height/2-height/8);//结束点坐标
    ctx.lineTo(0,height/2-height/3);
    ctx.moveTo(width,height/2+height/8);//开始点坐标
    ctx.lineTo(width-p1,height/2+height/8);//结束点坐标
    ctx.lineTo(0,height/2+height/3);

    var gnt1 =ctx.createLinearGradient(0,0,width,height);//线性渐变的起止坐标
    gnt1.addColorStop(0,'cyan');//创建渐变的开始颜色，0表示偏移量，个人理解为直线上的相对位置，最大为1，一个渐变中可以写任意个渐变颜色
    gnt1.addColorStop(1,'blue');

    ctx.lineWidth=1;//“lineWidth”定义路径的宽度（有继承性，如要定义不同宽度的路径则要单独定义）
    ctx.strokeStyle=gnt1;//“strokeStyle”填充路径的颜色
    ctx.stroke();//调用 绘制
  }
}
export default new Methods ()


