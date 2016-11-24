/**********這個檔案是 JQuery Mobile 的初始化設定 **********/
document.addEventListener("deviceready", onDeviceReady, false);

function quitMe(){
	if (navigator.app && navigator.app.exitApp) {
		navigator.app.exitApp();
	} else if (navigator.device && navigator.device.exitApp) {
		navigator.device.exitApp();
	}
}
function quitMeConfirm(button){
	if(button==1) quitMe();
}
function onDeviceReady() {
	//alert('navigator.connection.type='+navigator.connection.type);
	//alert('navigator.network.connection.type='+navigator.network.connection.type);
	//cordova.exec(null, null, "SplashScreen", "hide", []);	//關閉SplashScreen
	if (navigator.connection.type==Connection.NONE){
		navigator.notification.alert(
			'本程式執行時需要網路連線，請開啟網路連線後，重新執行本程式!',  // message
			quitMe,         // callback
			'無網路連線',            // title
			'我知道了'                  // buttonName
		);
	}
	document.addEventListener("backbutton", processBackButton, false);
}

function processBackButton(e){
	e.preventDefault();
	if($.mobile.activePage.attr('id')=='home'){
		navigator.notification.confirm(
			'結束且離開MyVIBO服務？',  // message
			quitMeConfirm,              // callback to invoke with index of button pressed
			'離開確認',            // title
			'結束程式,繼續使用'          // buttonLabels
		);
	}else {
		//history.go(-1);
		navigator.app.backHistory();
	}
}	//function processBackButton(e){
