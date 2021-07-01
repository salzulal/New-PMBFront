var chart_circle,
    intervals,
    per_num;

intervals = [];
per_num = [];
chart_circle = {
	items : $('.circle-chart'),
	set : function(obj, per, index){
		var path,
			pathLen,
			perLen;

		path = $('.chart-circle-progress').get(index);
		//pathLen = Math.round(path.getTotalLength());
		pathLen = Math.round((obj.outerHeight()) * 3.14);
		perLen = Math.round(pathLen - (per*(pathLen/100)));
		if(per == 0){
			perLen = pathLen;
		}else if(per > 50){
			perLen += (per == 100) ? 5 : Math.round(pathLen / 10);
		}
		path.setAttribute('stroke-dasharray', pathLen);
		path.setAttribute('stroke-dashoffset', pathLen);
		setTimeout(function(){
			chart_circle.num_evt(per, obj, index);
			chart_circle.init(obj, path, perLen);
		}, 100);
	},
	init : function(obj, path, perLen){
		obj.addClass('active');
		path.setAttribute('stroke-dashoffset', perLen);
	},
	num_evt : function(per, obj, index){
		chart_circle.num_interval(per, obj, index);
	},
	num_interval : function(per, obj, index){
		var interv,
			per_box;

		per_num[index] = 0;
		interv = 1000/per;

		// very slowly interv
		if(interv > 50){
			interv = 50;
		}

		per_box = obj.find('.per-num span');
		intervals[index] = setInterval(function(){
			chart_circle.num_set(obj, per_box, per, index);
		}, interv);
	},
	num_set : function(obj, per_box, per, index){
		if(per_num[index] >= per){
			clearInterval(intervals[index]);
		}

		per_box.text(per_num[index]);
		per_num[index]++;
	},
	call : function(){
		chart_circle.items.each(function(index){
			var per;

			per = $(this).attr('data-percent');
			chart_circle.set($(this), per, index);
		});
	}
}

chart_circle.call();