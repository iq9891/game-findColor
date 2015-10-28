/**
 * Created with EditPlus.
 * User: leemagnum
 * Date: 14-8-5
 * Time: 下午1.05
 * 数据对象.
 */

var oData = {
		sInfo: "找出所有色块里颜色不同的一个",
		bIsStart: true,	//是否开始
		mainBg: '#f6f6f6',	//背景颜色
		startColor: '#27242b',	//欢迎页字体颜色
		oGame:{				//游戏方块数据
			w: 444,			//格子总宽度
			h: 444,			//格子总高度
			l: 15,			//格子左边距离
			t: 190,			//格子上边距离
			n: 2,			//格子起始一行的数量 行和列是一样的数量
			s: 10			//格子之间的间隔
		},
		iTime: 40,			//倒计时时间 /s
		bIsStart: true,	//是否可以点
		bStartTime: false,	//开始倒计时按钮
		overTit: ["色盲", "色弱", "色迷", "色狼","色鬼", "色神", "色仙"],
		score: 0			//分数
	};