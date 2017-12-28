var Point_info = [
    [118.105444,24.443135,"芙蓉湖",741],
    [118.10371,24.443419,"颂恩楼",78],
    [118.103009,24.444928,"厦大图书馆",995],
    [118.101693,24.44272,"陈嘉庚铜像",142],
    [118.110537,24.44351,"思源谷",21+178],
    [118.104455,24.441972,"科学艺术中心",296],
    [118.103957,24.440257,"上弦场",150],
    [118.101662,24.442284,"演武场",118],
    [118.109621,24.441618,"芙蓉隧道",696],
    [118.106593,24.441478,"三家村学生广场",446],
    [118.105488,24.444842,"克立楼",63],
    [118.108677,24.441807,"芙蓉餐厅",1650],
    [118.104069,24.445212,"厦大南门",785],
    [118.099802,24.443514,"厦大西村",322],
    [118.108646,24.439192,"厦大白城",2290],
    [118.120486,24.435886,"海韵园",15]
];
var Point_Set=new Array(Point_info.length);


var N=Point_info.length;//N为顶点个数

//邻接权重矩阵
var Edge_Weight =  new Array(N);   //表格有N行  
for(var i = 0;i < Edge_Weight.length; i++){  
   Edge_Weight[i] = new Array(N);    //每行有N列 
  
}  



//解最短路径的矩阵
var Dist =  new Array(N);   //表格有N行  
for(var i = 0;i < Dist.length; i++){  
   Dist[i] = new Array(N);    //每行有N列 
}  

//路径矩阵
var Path =  new Array(N);   //表格有N行  
for(var i = 0;i < Path.length; i++){  
   Path[i] = new Array(N);    //每行有N列 
}  



