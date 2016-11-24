/**********這個檔案是頁面 header/footer的初始化設定 **********/


//若<a> 中有 "class=external"，點取連結時連到OS的 browser
$(document).on('click', ".external", function (e) {
	if (isRunInApp()){
		e.preventDefault();
		var targetURL = $(this).attr("href");
		var ref = window.open(targetURL, "_system", "");
	}
});

//hide the keyboard when input is actif，若不這樣做，當輸入文字時，螢幕下方的虛擬keyboard會將footer往上推，不只蓋住input box，可能會使點選input box的click事件變成click footer
$("input").blur(function() {
	$("[data-role=footer]").show();
	$("[data-role=footer]").redraw();
});

$("input").focus(function() {
	$("[data-role=footer]").hide();
});
