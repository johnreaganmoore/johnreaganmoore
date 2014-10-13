
// Applyance Object

var applyance = {
	itemId: $("#applyance"),
	itemClass: $(".applyance"),
	itemHide: $(".applyance--hide"),
	itemColor: "#f2bc36"
};

// Jumpstart Object

var jumpstart = {
	itemId: $("#jumpstart"),
	itemClass: $(".jumpstart"),
	itemHide: $(".jumpstart--hide"),
	itemColor: "#FF9000"
};

var hackapp = {
	itemId: $("#hackapp"),
	itemClass: $(".hackapp"),
	itemHide: $(".hackapp--hide"),
	itemColor: "#3ABC80"
};

var makersquare = {
	itemId: $("#makersquare"),
	itemClass: $(".makersquare"),
	itemHide: $(".makersquare--hide"),
	itemColor: "#549CCC"
};

var oneHope = {
	itemId: $("#onehope"),
	itemClass: $(".onehope"),
	itemHide: $(".onehope--hide"),
	itemColor: "#02B0F1"
};

var suitUp = {
	itemId: $("#suitup"),
	itemClass: $(".suitup"),
	itemHide: $(".suitup--hide"),
	itemColor: "#FF0000"
};

var gordonCollege = {
	itemId: $("#gordon"),
	itemClass: $(".gordon"),
	itemHide: $(".gordon--hide"),
	itemColor: "#014783"
};

var allItems = [jumpstart, applyance, hackapp, makersquare, oneHope, suitUp, gordonCollege];


applyance.itemClass.on('click', function() {
	activateItem(applyance, allItems);
});

applyance.itemHide.on('click', function() {
	hideDetails(applyance.itemHide);
});

jumpstart.itemClass.on('click', function() {
	activateItem(jumpstart, allItems);
});

jumpstart.itemHide.on('click', function() {
   hideDetails(jumpstart.itemHide);
});

hackapp.itemClass.on('click', function() {
	activateItem(hackapp, allItems);
});

hackapp.itemHide.on('click', function() {
   hideDetails(hackapp.itemHide);
});

makersquare.itemClass.on('click', function() {
	activateItem(makersquare, allItems);
});

makersquare.itemHide.on('click', function() {
   hideDetails(makersquare.itemHide);
});

oneHope.itemClass.on('click', function() {
	activateItem(oneHope, allItems);
});

oneHope.itemHide.on('click', function() {
   hideDetails(oneHope.itemHide);
});

suitUp.itemClass.on('click', function() {
	activateItem(suitUp, allItems);
});

suitUp.itemHide.on('click', function() {
   hideDetails(suitUp.itemHide);
});

gordonCollege.itemClass.on('click', function() {
	activateItem(gordonCollege, allItems);
});

gordonCollege.itemHide.on('click', function() {
   	hideDetails(gordonCollege.itemHide);
});


function closeOtherDetails(item, allItems) {
	for (var i = allItems.length - 1; i >= 0; i--) {
		if (allItems[i] != item) {
			//deactivate resume item
			deactivateItem(allItems[i]);
		};
	};
};

function showHideDetails(item) {
	item.itemHide.slideToggle(500);
};

function activateItem(item, allItems) {
	//Close inactive item details
	closeOtherDetails(item, allItems);
	// Open Active Item details

	showHideDetails(item);

	// Adjust header to active item styling 
	colorHeader(item.itemColor);

	//Bring active item to top of page.
	bringToTop(item.itemId);
};

// Hide details when a class item--hide element is clicked
function hideDetails(itemHide) {
	itemHide.slideUp(500);
};

function bringToTop(itemId) {
	//Bring active item to top of page.
   	$('html, body').animate({
   	    scrollTop: itemId.offset().top -300 
   	}, 500);
};

function deactivateItem(item) {
	$(item.itemHide).slideUp(500);
};

function defaultHeader() {
	    $("#header").css("background-color", "none");
    	$("#header").css("padding-top","50px");
    	$("#header").css("padding-bottom","50px");
    	$("#name--logo").css("color","#374249");
    	$("#em").attr("src", "/assets/email.png");
    	$("#fb").attr("src", "/assets/facebook.png");
    	$("#gh").attr("src", "/assets/github.png");
    	$("#li").attr("src", "/assets/linkedin.png");
    	$("#tw").attr("src", "/assets/twitter.png");
    	$("#header").css("box-shadow", "none");
};

function colorHeader(color) {
    $("#name--logo").css("color","white")
	$("#header").css("background-color", color);
	$("#header").css("padding-top","15px");
	$("#header").css("padding-bottom","15px");
	$("#em").attr("src", "/assets/emailwhite.png");
	$("#fb").attr("src", "/assets/facebookwhite.png");
	$("#gh").attr("src", "/assets/githubwhite.png");
	$("#li").attr("src", "/assets/linkedinwhite.png");
	$("#tw").attr("src", "/assets/twitterwhite.png");
};

function addHeaderShadow() {
	$("#header").css("box-shadow", "0px 0px 5px rgba(150, 150, 150, 0.3)");
};

$(window).on("scroll", function () {
    if ($(this).scrollTop() >= 50) {
    	addHeaderShadow();
    }
    else {
    	defaultHeader();
    };
});


