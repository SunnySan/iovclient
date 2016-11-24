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
			'This program needs network connection, please connect to internet then run this program again.',  // message
			quitMe,         // callback
			'No network connection',            // title
			'I got it.'                  // buttonName
		);
	}
	document.addEventListener("backbutton", processBackButton, false);
}

function processBackButton(e){
	e.preventDefault();
	if($.mobile.activePage.attr('id')=='home'){
		navigator.notification.confirm(
			'Exit IoV demo program?',  // message
			quitMeConfirm,              // callback to invoke with index of button pressed
			'System confirmation',            // title
			'Exit,Cancel'          // buttonLabels
		);
	}else {
		//history.go(-1);
		navigator.app.backHistory();
	}
}	//function processBackButton(e){
