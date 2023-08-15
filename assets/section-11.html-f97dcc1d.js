import{_ as n}from"./StartFromGameBoard-c0b114f8.js";import{_ as s,p as l,q as d,Z as i,s as e}from"./framework-e85085f3.js";const t={},a=i('<h2 id="制作美观的棋盘" tabindex="-1"><a class="header-anchor" href="#制作美观的棋盘" aria-hidden="true">#</a> 制作美观的棋盘</h2><p>象棋棋盘，是界面的主体部分之一。除了十条横线和九条纵线以外，九宫格内还各自有两条斜线，以及河界之间是没有竖线的。</p><p>不妨再看看之前引言第三节《开始走入新的世界》中，棋盘的成品样貌。</p><p><img src="'+n+`" alt=""></p><h3 id="选择图形库" tabindex="-1"><a class="header-anchor" href="#选择图形库" aria-hidden="true">#</a> 选择图形库</h3><p>界面主要是用来观察程序行为和去除代码漏洞，图形库应以简便易用为主。</p><p>在此推荐Easyx图形库，主要原因是比较容易上手，而且在网络上，Easyx其实是有象棋棋盘绘制的现成程序的，只不过还是得自己写一写。否则，你会不太理解原作者是如何描述棋盘中棋子位置的。</p><h3 id="重要的函数" tabindex="-1"><a class="header-anchor" href="#重要的函数" aria-hidden="true">#</a> 重要的函数</h3><p>其实很简单，无非以下几个部分：</p><p>[1] 画直线</p><p>[2] 输出汉字</p><p>[3] 更改字体颜色和大小</p><p>具体的函数和用法，其实在下文已经给出了。</p><h3 id="初始化图形界面" tabindex="-1"><a class="header-anchor" href="#初始化图形界面" aria-hidden="true">#</a> 初始化图形界面</h3><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>	// BLOCK_SIZE (== 55) -&gt; 每个正方格的像素宽度
  void Start(void) {
	  initgraph(BLOCK_SIZE * COLNum, BLOCK_SIZE * RowNum);
	  HWND HD = GetHWnd();
	  SetWindowText(HD, &quot;天衍四九&quot;);
	  setbkcolor(RGB(221, 200, 157));
	  setlinestyle(PS_SOLID, 2);
	  cleardevice();
	  BeginBatchDraw();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"INFO"),e("p",null,"一点解释")],-1),c=e("p",null,"[1] initgraph(界面宽度，界面高度) -> 初始化对应尺寸的图形窗口",-1),o=e("p",null,"[2] HWND HD = GetHWnd() -> 获取图形窗口的句柄，用来更改窗口的样式",-1),v=e("p",null,"[3] SetWindowText(图形窗口句柄，被设定的名称) -> 修改图形界面名称",-1),u=e("p",null,"[4] setbkcolor(某种颜色) -> 设定窗口背景颜色为三原色:RGB(221, 200, 157)",-1),_=e("p",null,"[5] setlinestyle(PS_SOLID, 2) -> 设置线条的粗细(实线)",-1),m=e("p",null,"[6] cleardevice -> 清空屏幕",-1),h=e("p",null,"[7] BeginBatchDraw -> 批量绘图",-1),b=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"INFO"),e("p",null,"绘制需要在循环中不断进行，否则界面不会刷新！")],-1),p=i(`<h3 id="绘制棋盘格线" tabindex="-1"><a class="header-anchor" href="#绘制棋盘格线" aria-hidden="true">#</a> 绘制棋盘格线</h3><p>其实，界面坐标系的原点(0,0)，就在窗口的最左上</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>  // 绘制棋盘
	setlinecolor(BLACK); // 线条颜色为黑色
	setfillcolor(RGB(221, 200, 157)); // 更改填充图形的颜色(木棕色为宜)
	for (int i = 0; i &lt; RowNum - 2; i++) { // 每一行
		for (int j = 0; j &lt; COLNum - 2; j++) { // 每一列
			if (i != 4) {
          fillrectangle(
            (j + 1) * BLOCK_SIZE, (i + 1) * BLOCK_SIZE,
            (j + 2) * BLOCK_SIZE, (i + 2) * BLOCK_SIZE);
			}
		}
	}

  // line(起点坐标，终点坐标)

	// 画楚河汉界外的两笔(最左和最右的竖边线)
	line(1 * BLOCK_SIZE, 5 * BLOCK_SIZE, BLOCK_SIZE, 6 * BLOCK_SIZE);
	line(9 * BLOCK_SIZE, 5 * BLOCK_SIZE, 9 * BLOCK_SIZE, 6 * BLOCK_SIZE);

	// 画两个九宫格(共计四条斜线)
	line(4 * BLOCK_SIZE, 1 * BLOCK_SIZE, 6 * BLOCK_SIZE, 3 * BLOCK_SIZE);
	line(6 * BLOCK_SIZE, 1 * BLOCK_SIZE, 4 * BLOCK_SIZE, 3 * BLOCK_SIZE);
	line(4 * BLOCK_SIZE,10 * BLOCK_SIZE, 6 * BLOCK_SIZE, 8 * BLOCK_SIZE);
	line(4 * BLOCK_SIZE, 8 * BLOCK_SIZE, 6 * BLOCK_SIZE, 0 * BLOCK_SIZE);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绘制-楚河-汉界" tabindex="-1"><a class="header-anchor" href="#绘制-楚河-汉界" aria-hidden="true">#</a> 绘制“楚河/汉界”</h3><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>  // 调整输出样式和内容
	TCHAR s[20];
	setbkmode(TRANSPARENT);
	settextcolor(BLACK);
	settextstyle(55, 0, _T(&quot;华文行楷&quot;));
	_stprintf_s(s, _T(&quot;楚河&quot;));
	
  // 向界面的固定座标处，绘制&quot;楚河&quot;
  outtextxy(2 * BLOCK_SIZE, 5 * BLOCK_SIZE, s);

  // 更改“汉界”的字体为红色
	settextcolor(RED);
	_stprintf_s(s, _T(&quot;汉界&quot;));

  // 同理，向界面绘制&quot;汉界&quot;
	outtextxy(6 * BLOCK_SIZE, 5 * BLOCK_SIZE, s);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一点叮嘱" tabindex="-1"><a class="header-anchor" href="#一点叮嘱" aria-hidden="true">#</a> 一点叮嘱</h3><p>如果想要熟练掌握它，希望读者能自行查阅资料并着手尝试，不用担心，Easyx库的用法介绍，网络上还是非常多的。我并不想把所有的代码都贴出来，如果只是粘贴复制，那没有什么意义可言，也学不到什么有价值的知识。而且，欣赏爱学习的群体，显然也是我的个人偏好。</p>`,7),C=[a,r,c,o,v,u,_,m,h,b,p];function B(S,E){return l(),d("div",null,C)}const I=s(t,[["render",B],["__file","section-11.html.vue"]]);export{I as default};
