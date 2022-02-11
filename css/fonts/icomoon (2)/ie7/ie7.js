/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-left': '&#xe900;',
		'icon-arrow-right': '&#xe901;',
		'icon-calendar': '&#xe902;',
		'icon-cerrar': '&#xe903;',
		'icon-download': '&#xe904;',
		'icon-hour': '&#xe905;',
		'icon-pause': '&#xe906;',
		'icon-perfil': '&#xe907;',
		'icon-play': '&#xe908;',
		'icon-record': '&#xe909;',
		'icon-volume': '&#xe90a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
