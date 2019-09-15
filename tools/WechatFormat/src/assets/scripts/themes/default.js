var defaultTheme = {	//最新版
  BASE: {
    'text-align': 'left',
//    'color': '#3f3f3f',	//深灰色
    'color': '#000000',	//黑色
    'line-height': '2',
    'letter-spacing': '0.2em',	 //字间距
    'word-spacing':'1px',	//单词间距
    'word-break':'break-all',
  },
  BASE_BLOCK: {
    'margin': '20px 10px'
  },
  // block element
  block: {
    h2: {
      'font-weight': 'bolder',	//增
      'text-align':'left',	//改
      'font-size': '16px',	//改
      'margin': '20px 10px 20px 10px',
      'padding-left': '10px',	//内边距
      'border-left': '5px solid rgb(255,76,64)',	//左边框样式
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '12px',
      'margin':'0 auto',
      'text-align':'center',
      'margin': '10px 10px 20px 10px',
      'color': 'rgb(255,76,64)',
    },
    p: {
      'margin': '10px 10px',
//      'text-indent':'2em',	//首行缩进2字符
    },
    blockquote: {
      'font-size':'13px',
      'color': 'rgb(91, 91, 91)',
      'padding': '0px 0px 0px 5px',
      'background': 'rgba(158, 158, 158, 0.1)',
      'border-left': '3px solid rgb(255,76,64)',	//左边框样式
    },
    code: {			//代码
      'font-size': '80%',
      'overflow': 'auto',
      'color': '#333',
      'background': 'rgb(247, 247, 247)',
      'border-radius': '2px',
      'padding': '10px',
      'line-height': '1.3',
      'border': '1px solid rgb(236,236,236)',
      'margin': '20px 0',
    },
    image: {		//图片格式
      'border-radius': '5px 5px 5px 5px',	//左上、右上、右下、左下
      'display': 'block',
      'margin': '20px auto',
      'padding': '10% 0% 10% 0%',	//内边距像素或百分比[上右下左]
      'width': '100%',
      'height': '100%',		//好像可以不加
      'object-fit':'contain',	//fill	contain	cover	none	scale-down
      'background': 'rgba(255,255,255, 1.0)',
      'box-shadow': '#84A1A8 0px 10px 15px',
    },
    image_org: {
      'border-radius': '4px',
      'display': 'block',
      'font-size':'12px',
    },
    ol: {
      'color':'rgb(156,48,141)',
      'margin-left': '0',
      'padding-left': '20px',
      'column-count':'1',		//显示的列数
    },
    ul: {
      'color':'rgb(156,48,141)',
      'margin-left': '0',
      'padding-left': '20px',
      'list-style': 'square',	//列表样式：圆:circle  实心方块是：square
    },
    footnotes: {		//脚注
      'margin': '10px 10px',
      'font-size': '12px',
      'padding': '20px 20px 20px 20px',
      'color':'rgb(156,48,141)',
      'border':'1px rgb(173,0,45)',	//四边宽度、四边样式、四边颜色 [上、右、下、左]
      'box-shadow': '#84A1A8 0px 10px 15px',
      'border-radius': '0px 0px 0px 0px',	//左上、右上、右下、左下
    }  
  },
  inline: {
    // inline element		//内联元素
    listitem: {		//列表项
      'text-indent': '-20px',
      'display': 'block',
      'margin': '10px 10px',
      'color':'rgb(156,48,141)',
      'font-size':'13px',
    },
    codespan: {		//代码跨度
      'font-size': '90%',
      // 'font-family': FONT_FAMILY_MONO,
      'color': '#ff3502',
      'background': '#f8f5ec',
      'padding': '3px 5px',
      'border-radius': '2px',
    },
    link: {			//微信外链提示文字
      'color': '#ff3502',
//      'text-decoration':'underline',
    },
    strong: {		//加粗文本
      'color': '#ff3502'
    },
    table: {			//表单
      'border-collapse': 'collapse',	//边框合并属性，边框折叠
      'margin': '20px 0',
    },
    thead: {		//表头名
      'background': 'rgba(0,0,0,0.05)',
    },
    td: {			//表单内容
      'font-size': '80%',
      'border': '1px solid #dfdfdf',
      'padding': '4px 8px',
    },
    footnote: {		//脚注
      'font-size': '12px',
    },
  }
}
