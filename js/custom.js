function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#parallax').css('top',(72 - (scrollPosition * 0.3))+'px' ); // bg image moves at 30% of scrolling speed
}

$(document).ready(function() {

	/* ========== PARALLAX BACKGROUND ========== */

	$(window).on('scroll', function(e) {
		parallax();
	});



	/* ========== FITVIDS PLUGIN ========== */
	
	$('.fitvids').fitVids();



	/* ========== BOOTSTRAP CAROUSEL ========== */

	$('.carousel').carousel({
	  interval: 4000
	});



	/* ========== NEWSLETTER SIGNUP ========== */

    $("#newsletter-signup").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/newsletter.php",
			data: str,
			success: function(msg) {
				msg = $.trim(msg.replace(/[\n\r]/g, ''));
				if(msg == 'OK') {
					result = '<div class="alert alert-success">Sí, usted está suscrito!"</div>';
					setTimeout("location.reload(true);",7000);
			  	} else {
					result = msg;
			  	}
			  	$('#error-info').html(result);
		    }
		});
		return false;
	});

	
	/* ========== CONTACT FORM ========== */

    $("#contact-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: str,
			success: function(msg) {
				msg = $.trim(msg.replace(/[\n\r]/g, ''));
				if(msg == 'OK') {
					result = '<div class="alert alert-success">Todo bien, mensaje enviado!</div>';
					$(".input-group").hide();
					setTimeout("location.reload(true);",7000);
			  	} else {
					result = msg;
			  	}
			  	$('#contact-error').html(result);
		    }
		});
		return false;
	});



	/* ========== SMOOTH SCROLLING BETWEEN SECTIONS ========== */

	$('[href^=#]').not('.carousel a, .panel a, .modal-trigger a').click(function (e) {
		e.preventDefault();
		var div = $(this).attr('href');
		if ($(".navbar").css("position") == "fixed" ) {
			$("html, body").animate({
				scrollTop: $(div).position().top-$('.navbar').height()
			}, 700, 'swing');
		} else {
			$("html, body").animate({
				scrollTop: $(div).position().top
			}, 700, 'swing');
		}
	});


	/* ========== TWITTER FEED ========== */
	
	$("#tweets-feed").tweet({
	  join_text: false,
	  username: "heymentorme", // Change username here
	  modpath: '../assets/twitter/', 
	  avatar_size: 48,//false,
	  count: 2, // number of tweets
	  loading_text: "loading tweets...",
	  seconds_ago_text: "about %d seconds ago",
	  a_minutes_ago_text: "about a minute ago",
	  minutes_ago_text: "about %d minutes ago",
	  a_hours_ago_text: "about an hour ago",
	  hours_ago_text: "about %d hours ago",
	  a_day_ago_text: "about a day ago",
	  days_ago_text: "about %d days ago",
	  view_text: "view tweet on twitter"
	});

	
	/* =========== CUSTOM STYLE FOR SELECT DROPDOWN ========== */

	$("select").selectpicker({style: 'btn-hg btn-primary', menuStyle: 'dropdown'});

	// style: select toggle class name (which is .btn)
	// menuStyle: dropdown class name

	// You can always select by any other attribute, not just tag name.
	// Also you can leave selectpicker arguments blank to apply defaults.


	/* ========== TOOLTIPS & POPOVERS =========== */

	$("[data-toggle=tooltip]").tooltip();

	$('.popover-trigger').popover('show');




    /* ========== MAGNIFIC POPUP ========== */

    $('.gallery-popup').magnificPopup({
	  	delegate: 'a.zoom', // child items selector, by clicking on it popup will open
	  	type: 'image',
	  	closeOnContentClick: 'true',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below
	  	zoom: {
		    enabled: true, // By default it's false, so don't forget to enable it
		    duration: 300, // duration of the effect, in milliseconds
		    easing: 'ease-in-out', // CSS transition easing function 

		    // The "opener" function should return the element from which popup will be zoomed in
		    // and to which popup will be scaled down
		    // By defailt it looks for an image tag:
		    opener: function(openerElement) {
		      // openerElement is the element on which popup was initialized, in this case its <a> tag
		      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
		}
	});

	/* ========== END OF SCRIPTS ========== */

});


/* ========== ISOTOPE FILTERING ========== */

$(window).load(function(){
	$('.popover-custom').show();
	var $container = $('#gallery-items'),
        $select = $('#filters select'),
        $categorias = $('#categAgendas');        

    //$(".btn-group .btn-group-vertical").css('vertical-align','middle');

    var objAgendas = {
    	 '.agenda' : 'Los mejores modelos y precios de agendas disponibles aquí.',
    	 '.encuadernada' : 'Agenda anillada y encuadernada. Disponible en todos los modelos. Los precios están en función a la cantidad de agendas y tipo de modelo.',
    	 '.diaria' : '<strong>Medida:</strong> 14.5 x 20.5 cms.<br>Interior con 384 paginas en papel marfileño alisado importado.<br><strong>Tipo:</strong> “día a la vista”. Impreso a 2 colores.<br><strong>Incluye:</strong> Cartografia, directorio telefónico, cinta señalizadora, encuadernación francesa cocida y encolada (con cola caliente y refuerzo de tela).<br>Estuche de Agenda en caja de lujo.',
		 '.ejecutiva' : '<strong>Medida:</strong> 17.5 x 24.5 cms.<br>Interior con 184 paginas en papel marfileño alisado importado.<br><strong>Tipo:</strong> “semana a la vista”. Impreso a 2 colores.<br><strong>Incluye:</strong> Cartografia, directorio telefónico, cinta señalizadora, encuadernación francesa cocida y encolada (con cola caliente y refuerzo de tela).<br>Estuche de Agenda en caja de lujo.',
         '.presidencial' : '<strong>Medida:</strong> 17.5 x 24.5 cms.<br>Interior con 384 paginas en papel marfileño alisado importado.<br><strong>Tipo:</strong> “día a la vista”. Impreso a 2 colores.<br><strong>Incluye:</strong> Cartografia, directorio telefónico, cinta señalizadora, encuadernación francesa cocida y encolada (con cola caliente y refuerzo de tela).<br>Estuche de Agenda en caja de lujo.',
         '.bolsillo' : '<strong>Medida:</strong> 8 x 17.5 cms.<br>Interior con 144 paginas en papel marfileño alisado importado.<br><strong>Tipo:</strong> “día a la vista”. Impreso a 2 colores.<br><strong>Incluye:</strong> Cartografia, directorio telefónico, cinta señalizadora, encuadernación francesa cocida y encolada (con cola caliente y refuerzo de tela).<br>Estuche de Agenda en caja de lujo.',
         '.incaica' : 'Modelos en versiones Presidencial, Ejecutiva, Diaria y Bolsillo. Telar incaico o cinta incaica en la tapa. Precio por Agenda: S/. 1.00. (Adicional al modelo elegido)',

         '.cuaderno' : '<strong>Cuadernos Empresariales</strong><br><ol><li>Cuadernos de 100, 150 y 200 hojas impresas en tira y retira</li><li>Tamaño A4, A5, 17.5 X 24.5 cm y tamaños especiales de acuerdo al requerimiento</li><li>Carátula, contracaratula y retiras impresas a full color en couche mate de 150 grs.</li><li>Hojas internas a uno, dos o tres colores, en bond importado brasilero de 75 grs. Con el logotipo de su empresa (rayado o cuadriculado)</li><li>Acabado plastificado mate, barnizado UV o sectorizado</li><li>Anillo doble ring (blanco, azul, negro o plata)</li><li>El arte final deberá ser proporcionado por el cliente.</li></ol>',
         '.tarjeta-personal' : '<strong>Tarjetas Personales</strong><ol><li>Medida 9x5.5 cm o tamaño especiales de acuerdo al requerimiento del cliente</li><li>Impresión a full color y plastificado mate tira y retira (ambas caras)</li><li>Incluye diseño</li></ol>',
         '.calendario' : '<strong>Calendarios</strong><ol><li>Medidas de acuerdo al requerimiento del cliente</li><li>Autocopiativo</li></ol>',
         '.merchandising' : '<strong>Merchandising</strong><ol><li>El precio según al modelo y cantidad que solicite el cliente</li></ol>'
    };

    $container.isotope({
        itemSelector: '.gallery-item',
        filter: '.agenda'
    });

    $select.change(function() {
        var filters1 = $(this).val();

        $('.popover-custom').show('fast');

        if(filters1 == '.agenda'){
        	$(".btn-group-vertical").css('vertical-align','top');
        	$('#categAgendas').show('slow');
        }
        else{
        	$(".btn-group", ".btn-group-vertical").css('vertical-align','middle');
        	// $('.popover-custom').hide('fast');
        	$('#categAgendas').hide('fast');
        }


        $container.isotope({
            filter: filters1
        });

        if(!showContentPopover(filters1))
        	$('.popover-custom').hide('fast');

        $("#filters select").css("top", function(){
			var w_h = $(document).height() / 2;
			var b_h = $(".popover-custom").height() / 2;
			return w_h - b_h;
		});
        
    });

    var filters = {};

    $categorias.on('click', '.btn', function() {
    	var $this = $(this);
	    // get group key
	    var $buttonGroup = $this.parents('.btn-group');
	    var filterGroup = $buttonGroup.attr('data-filter-group');
	    // set filter for group
	    var dataFilter = $this.attr('data-filter');
	    filters[ filterGroup ] = dataFilter;
	    // combine filters
	    var filterValue = '';
	    for ( var prop in filters ) {
	      filterValue += filters[ prop ];
	    }

	    
	    if(!showContentPopover(dataFilter))
	    	$('.popover-custom').hide('fast');
	    

	    // set filter for Isotope
	    $container.isotope({ filter: filterValue });
    });

    function showContentPopover(dataFilter){
    	var exist = false;
	    $.each(objAgendas, function(name, value) {
		  	if(name == dataFilter){
		  		$(".popover-custom .popover-content").html('').append('<p>'+value+'</p>');
		  		exist = true;
		  	}
		 });
	    return exist;
    }
    
})