var flag=0;
var flag_floyd=false;
	var StartPoint=new BMap.Point(118.105444,24.443135);
	var EndPoint=new BMap.Point(118.105444,24.443135);
	var From = function(e,ee,marker)
	{
		flag+=1;
		StartPoint=new BMap.Point(marker.getPosition().lng, marker.getPosition().lat);
	}
	
	var To = function(e,ee,marker)
	{
		flag-=1;
		if(flag==0)
		{
			EndPoint=new BMap.Point(marker.getPosition().lng, marker.getPosition().lat);
			
			walking.search(StartPoint, EndPoint);
			
			walking.setSearchCompleteCallback(function(){
            var distance=walking.getResults().getPlan(0).getRoute(0).getDistance(true);
                //alert("路径长度为"+distance);
            showinfo(StartPoint,"距离为"+distance);
            }
        )

		}
		else
		{
			walking.clearResults();
			flag=0;
		} 
			
	}
	
	
	var opts = {
            width : 250,     // 信息窗口宽度
            height: 80,     // 信息窗口高度
            title : "" , // 信息窗口标题
            enableMessage:true//设置允许信息窗发送短息
            };
            
function addClickHandler(content,marker){
    marker.addEventListener("click",function(e){
        var point = new BMap.Point(e.target.getPosition().lng, e.target.getPosition().lat);
        showinfo(point,content);
    }
    );
}

function showinfo(point,content)
{
    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
    map.openInfoWindow(infoWindow,point); //开启信息窗口
}


// 定义一个控件类,即function
function Market(){
    // 默认停靠位置和偏移量
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new BMap.Size(10, 10);
  }

  // 通过JavaScript的prototype属性继承于BMap.Control
  Market.prototype = new BMap.Control();

  // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
  // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
  Market.prototype.initialize = function(map){
    // 创建一个DOM元素
    var div = document.createElement("div");
    // 添加文字说明
    div.appendChild(document.createTextNode("使用Floyd方法寻找当前所有标志点中的最佳超市位置"));
    // 设置样式
    div.style.cursor = "pointer";
    div.style.border = "1px solid gray";
    div.style.backgroundColor = "white";
    // 绑定事件，寻找最适合建超市的位置
    div.onclick =Find_Market;
    // 添加DOM元素到地图中
    map.getContainer().appendChild(div);
    // 将DOM元素返回
    return div;
  }


var Floyd =function (e,ee,marker){
    var i=0;
    for(;i<point_set.length;i++) {="" if(map.getdistance(point_set[i],marker.getposition())<10)="" break;="" }="" sum="0;" for(var="" j="0;j<N;j++)" sum+="Dist[i][j];" alert(sum);="" var="" removemarker="function(e,ee,marker){" map.removeoverlay(marker);="" find_market="function(){" 初始化两个矩阵="" if(!flag_floyd)="" i="0;i<N;i++)" path[i][j]="j;" dist[i][j]="Edge_Weight[i][j];" for="" (var="" k="0;" <="" n;="" k++)="" row="0;" row++)="" col="0;" col++)="" 为了防止溢出，所以需要引入一个select值="" select="Dist[row][k]" +="" dist[k][col];="" if="" (dist[row][col]=""> select) {
                        //更新我们的D矩阵
                        Dist[row][col] = select;
                        //更新我们的P矩阵
                        Path[row][col] =Path[row][k];
                    }
                }
            }
        }
        flag_floyd=true;
    }

    var minsum=7199254740992;
    var min_j=0;
    for(var j =0;j</point_set.length;i++)>