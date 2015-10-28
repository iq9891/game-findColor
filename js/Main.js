/**
 * Created with EditPlus.
 * User: leemagnum
 * Date: 14-8-1
 * Time: 上午10.20
 * 主程序对象.
 */
 function Main(){

    var _this = this;
	
	base(_this, LSprite, []);

	_this.init();

	//新建分数对象
	_this.scoreLayer = new Score();
	_this.scoreLayer.x = 30;
	_this.scoreLayer.y = 40;
	_this.addChild(_this.scoreLayer);

	//新建时间对象
	_this.timeLayer = new Time();
	_this.timeLayer.x = 230;
	_this.timeLayer.y = 40;
	_this.addChild(_this.timeLayer);
	
	//console.log(_this.scoreLayer.childList[1].childList[0].text);

	

 };

 
var m = {
	init: function(json){

		var _this = this;
		
		_this.gridAllLayer = new LSprite();
		_this.addChild(_this.gridAllLayer);

		//添加格子
		_this.loopFn();

	},
	loopFn: function(){	//添加一群格子

		var _this = this,
			i = 0,
			l = oData.oGame.n * oData.oGame.n,
			color = Tool.randomColor(),
			r = Tool.rand(3, l-1);
		//console.log(color);

		for(i=0; i < l; i++){
			if(i == r){
				_this.addFn(i, color, true);
			}else{
				_this.addFn(i, color);
			}
		}

	},
	addFn: function(i, color, bAlpha){		//添加1个格子

		var _this = this,
			iGridGap = oData.oGame.s - oData.oGame.n,
			iGridL = (LGlobal.width - oData.oGame.w - iGridGap*(oData.oGame.n - 1)) * 0.5;
		//console.log(iGridL);
		_this.gridLayer = new LSprite();
		
		_this.gridLayer.graphics.drawRect(0, "", [ 0, 0, oData.oGame.w / oData.oGame.n, oData.oGame.h / oData.oGame.n], true, color);
		
		_this.gridLayer.x = iGridL + Tool.oMath.floor(i/oData.oGame.n) * (oData.oGame.w / oData.oGame.n + iGridGap);
		_this.gridLayer.y = oData.oGame.t + i%oData.oGame.n * (oData.oGame.h / oData.oGame.n + iGridGap);
		_this.gridAllLayer.addChild(_this.gridLayer);

		if(bAlpha){	//如果是那个不一样色的格子
			_this.gridLayer.alpha = Tool.rand(4, 9) * 0.1;
			_this.gridLayer.addEventListener(LMouseEvent.MOUSE_DOWN, $.proxy(_this.downFn, _this));
		}

	},
	downFn: function(){

		var _this = this;

		if(!oData.bIsStart){
			return;
		}
		
		//更新分数
		//console.log(_this.scoreLayer.childList[0].text);
		_this.scoreLayer.childList[0].text = "得分：" + ++oData.score;

		//添加格子数量
		if(oData.oGame.n < 9){
			oData.oGame.n++;
		}

		_this.gridAllLayer.removeAllChild();

		//添加格子
		_this.loopFn();
		
		//开始倒计时
		oData.bStartTime = true;

	}
};

for(var k in m)Main.prototype[k] = m[k];