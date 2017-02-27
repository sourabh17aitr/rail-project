function imageLoop(){				
	
									/*for watches*/
									
									var divwatchHtml ="";
									for(var i=1; i<=6;i++)
										{
										divwatchHtml += "<div class='portfolio card mix_all  wow bounceIn' data-wow-delay='0.4s' data-cat='card' style='display: inline-block; opacity: 1;'>"+
										 					"<div class='portfolio-wrapper grid_box'>"+		
										 						"<a href ='images/brand/watches/watch ("+i+").png' class='swipebox'  title='Image Title'><img src='/assets/images/brand/watches/watch ("+i+").png' class='img-responsive' alt=''style='height: 103px;width: 195px; margin-Bottom:60px;'><span class='zoom-icon' style='height: 95px;width: 175px;'> </span> </a> </a>"+
										 					"</div>"+
										 				"</div>";
										}
									$("#portfoliolist #watch").html(divwatchHtml);
	
									/*for lifestyle jpg*/
									var divlifeHtml ="";
									for(var i=1; i<=76;i++)
										{
											divlifeHtml += "<div class='portfolio card mix_all  wow bounceIn' data-wow-delay='0.4s' data-cat='app' style='display: inline-block; opacity: 1;'>"+
										 					"<div class='portfolio-wrapper grid_box'>"+		
										 						"<a href ='images/brand/jpg/lifestyle ("+i+").jpg' class='swipebox'  title='Image Title'> <img src='/assets/images/brand/jpg/lifestyle ("+i+").jpg' class='img-responsive' alt=''style='height: 103px;width: 195px;  margin-Bottom:60px;'><span class='zoom-icon' style='height: 95px;width: 175px;'> </span> </a> </a>"+
										 					"</div>"+
										 				"</div>";
										}
									$("#portfoliolist #lifeStyleJpg").html(divlifeHtml);
									
									/*for lifestyle png*/
									var divHtml ="";
									for(var i=1; i<=68;i++)
										{
										  divHtml += "<div class='portfolio card mix_all  wow bounceIn' data-wow-delay='0.4s' data-cat='app' style='display: inline-block; opacity: 1;'>"+
										 					"<div class='portfolio-wrapper grid_box'>"+		
										 						"<a href ='images/brand/png/lifestyle ("+i+").png' class='swipebox'  title='Image Title'> <img src='/assets/images/brand/png/lifestyle ("+i+").png' class='img-responsive' alt=''style='height: 103px;width: 195px;  margin-Bottom:60px;'><span class='zoom-icon' style='height: 95px;width: 175px;'> </span> </a> </a>"+
										 					"</div>"+
										 				"</div>";
										}
									$("#portfoliolist #lifeStylePng").html(divHtml);
									
									
									/*for sport*/
									var divsportHtml ="";
									for(var i=1; i<=3;i++)
										{
										divsportHtml += "<div class='portfolio card mix_all  wow bounceIn' data-wow-delay='0.4s' data-cat='icon' style='display: inline-block; opacity: 1;'>"+
										 					"<div class='portfolio-wrapper grid_box'>"+		
										 						"<a href ='images/brand/sport/sport ("+i+").jpg' class='swipebox'  title='Image Title'> <img src='/assets/images/brand/sport/sport ("+i+").jpg' class='img-responsive' alt=''style='height: 103px;width: 195px;  margin-Bottom:60px;'><span class='zoom-icon' style='height: 95px;width: 175px;'> </span> </a> </a>"+
										 					"</div>"+
										 				"</div>";
										}
									$("#portfoliolist #sport").html(divsportHtml);
									
									
									
									
									
									
					}
																		