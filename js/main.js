$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: "Mar 25 2021",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});

// Date cible : 14 décembre (année automatique)
const targetDate = new Date(new Date().getFullYear(), 11, 14, 0, 0, 0).getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Joyeux Anniversaire ! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
    <div style="display:flex; flex-direction:column; text-align:center; line-height:1;">
        <span style="font-size:110px; font-weight:800;">${days}</span>
        <span style="font-size:28px; font-weight:600; margin-top:8px; letter-spacing:2px;">DAYS</span>
    </div>

    <div style="display:flex; flex-direction:column; text-align:center; line-height:1;">
        <span style="font-size:110px; font-weight:800;">${hours}</span>
        <span style="font-size:28px; font-weight:600; margin-top:8px; letter-spacing:2px;">HRS</span>
    </div>

    <div style="display:flex; flex-direction:column; text-align:center; line-height:1;">
        <span style="font-size:110px; font-weight:800;">${minutes}</span>
        <span style="font-size:28px; font-weight:600; margin-top:8px; letter-spacing:2px;">MIN</span>
    </div>

    <div style="display:flex; flex-direction:column; text-align:center; line-height:1;">
        <span style="font-size:110px; font-weight:800;">${seconds}</span>
        <span style="font-size:28px; font-weight:600; margin-top:8px; letter-spacing:2px;">SEC</span>
    </div>
`;

}, 1000);
