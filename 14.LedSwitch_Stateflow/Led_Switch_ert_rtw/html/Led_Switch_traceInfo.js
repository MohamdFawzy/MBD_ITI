function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Led_Switch:17"] = "Led_Switch.c:40&Led_Switch.h:49";
	/* <Root>/Function-Call
Generator */
	this.urlHashMap["Led_Switch:10"] = "Led_Switch.c:37,44,50,75,80,85,87,91,94,99,101";
	/* <Root>/LedState */
	this.urlHashMap["Led_Switch:5"] = "Led_Switch.c:45,81,95&Led_Switch.h:37,43&LedState.c:32,43,54&LedState.h:28,33";
	/* <Root>/Pulse
Generator */
	this.urlHashMap["Led_Switch:14"] = "msg=rtwMsg_notTraceable&block=Led_Switch:14";
	/* <Root>/Scope */
	this.urlHashMap["Led_Switch:15"] = "msg=rtwMsg_notTraceable&block=Led_Switch:15";
	/* <Root>/SwitchState */
	this.urlHashMap["Led_Switch:1"] = "Led_Switch.c:38,76,88&Led_Switch.h:38,44&SwitchState.c:30,38,46&SwitchState.h:28,33";
	/* <Root>/Out1 */
	this.urlHashMap["Led_Switch:18"] = "Led_Switch.c:52&Led_Switch.h:54";
	/* <S1>/LEDChart */
	this.urlHashMap["Led_Switch:13"] = "LedState.c:25,36,47,58,100&LedState.h:30,35,36,37";
	/* <S2>/SwitchChart */
	this.urlHashMap["Led_Switch:12"] = "SwitchState.c:25,33,41,50,95&SwitchState.h:30,35,36";
	/* <S3>:3 */
	this.urlHashMap["Led_Switch:13:3"] = "LedState.c:97";
	/* <S3>:1 */
	this.urlHashMap["Led_Switch:13:1"] = "LedState.c:69,76";
	/* <S3>:4 */
	this.urlHashMap["Led_Switch:13:4"] = "LedState.c:73,78,92";
	/* <S3>:6 */
	this.urlHashMap["Led_Switch:13:6"] = "LedState.c:83,87";
	/* <S3>:2 */
	this.urlHashMap["Led_Switch:13:2"] = "LedState.c:66";
	/* <S3>:5 */
	this.urlHashMap["Led_Switch:13:5"] = "LedState.c:70";
	/* <S3>:8 */
	this.urlHashMap["Led_Switch:13:8"] = "LedState.c:89";
	/* <S3>:7 */
	this.urlHashMap["Led_Switch:13:7"] = "LedState.c:80";
	/* <S4>:1 */
	this.urlHashMap["Led_Switch:12:1"] = "SwitchState.c:59,67";
	/* <S4>:3 */
	this.urlHashMap["Led_Switch:12:3"] = "SwitchState.c:63,69,88";
	/* <S4>:5 */
	this.urlHashMap["Led_Switch:12:5"] = "SwitchState.c:76,81";
	/* <S4>:2 */
	this.urlHashMap["Led_Switch:12:2"] = "SwitchState.c:58";
	/* <S4>:4 */
	this.urlHashMap["Led_Switch:12:4"] = "SwitchState.c:60";
	/* <S4>:10 */
	this.urlHashMap["Led_Switch:12:10"] = "SwitchState.c:85";
	/* <S4>:11 */
	this.urlHashMap["Led_Switch:12:11"] = "SwitchState.c:73";
	/* <S4>:3:1 */
	this.urlHashMap["Led_Switch:12:3:1"] = "SwitchState.c:64,89";
	/* <S4>:11:1 */
	this.urlHashMap["Led_Switch:12:11:1"] = "SwitchState.c:70,71";
	/* <S4>:5:1 */
	this.urlHashMap["Led_Switch:12:5:1"] = "SwitchState.c:77";
	/* <S4>:10:1 */
	this.urlHashMap["Led_Switch:12:10:1"] = "SwitchState.c:82,83";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Led_Switch"};
	this.sidHashMap["Led_Switch"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Led_Switch:5"};
	this.sidHashMap["Led_Switch:5"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Led_Switch:1"};
	this.sidHashMap["Led_Switch:1"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "Led_Switch:13"};
	this.sidHashMap["Led_Switch:13"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "Led_Switch:12"};
	this.sidHashMap["Led_Switch:12"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Led_Switch:17"};
	this.sidHashMap["Led_Switch:17"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Function-Call Generator"] = {sid: "Led_Switch:10"};
	this.sidHashMap["Led_Switch:10"] = {rtwname: "<Root>/Function-Call Generator"};
	this.rtwnameHashMap["<Root>/Function-Call Split"] = {sid: "Led_Switch:11"};
	this.sidHashMap["Led_Switch:11"] = {rtwname: "<Root>/Function-Call Split"};
	this.rtwnameHashMap["<Root>/LedState"] = {sid: "Led_Switch:5"};
	this.sidHashMap["Led_Switch:5"] = {rtwname: "<Root>/LedState"};
	this.rtwnameHashMap["<Root>/Pulse Generator"] = {sid: "Led_Switch:14"};
	this.sidHashMap["Led_Switch:14"] = {rtwname: "<Root>/Pulse Generator"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "Led_Switch:15"};
	this.sidHashMap["Led_Switch:15"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/SwitchState"] = {sid: "Led_Switch:1"};
	this.sidHashMap["Led_Switch:1"] = {rtwname: "<Root>/SwitchState"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Led_Switch:18"};
	this.sidHashMap["Led_Switch:18"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Led_Switch:6"};
	this.sidHashMap["Led_Switch:6"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/function"] = {sid: "Led_Switch:7"};
	this.sidHashMap["Led_Switch:7"] = {rtwname: "<S1>/function"};
	this.rtwnameHashMap["<S1>/LEDChart"] = {sid: "Led_Switch:13"};
	this.sidHashMap["Led_Switch:13"] = {rtwname: "<S1>/LEDChart"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Led_Switch:8"};
	this.sidHashMap["Led_Switch:8"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "Led_Switch:2"};
	this.sidHashMap["Led_Switch:2"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/function"] = {sid: "Led_Switch:3"};
	this.sidHashMap["Led_Switch:3"] = {rtwname: "<S2>/function"};
	this.rtwnameHashMap["<S2>/SwitchChart"] = {sid: "Led_Switch:12"};
	this.sidHashMap["Led_Switch:12"] = {rtwname: "<S2>/SwitchChart"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Led_Switch:4"};
	this.sidHashMap["Led_Switch:4"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>:3"] = {sid: "Led_Switch:13:3"};
	this.sidHashMap["Led_Switch:13:3"] = {rtwname: "<S3>:3"};
	this.rtwnameHashMap["<S3>:1"] = {sid: "Led_Switch:13:1"};
	this.sidHashMap["Led_Switch:13:1"] = {rtwname: "<S3>:1"};
	this.rtwnameHashMap["<S3>:4"] = {sid: "Led_Switch:13:4"};
	this.sidHashMap["Led_Switch:13:4"] = {rtwname: "<S3>:4"};
	this.rtwnameHashMap["<S3>:6"] = {sid: "Led_Switch:13:6"};
	this.sidHashMap["Led_Switch:13:6"] = {rtwname: "<S3>:6"};
	this.rtwnameHashMap["<S3>:2"] = {sid: "Led_Switch:13:2"};
	this.sidHashMap["Led_Switch:13:2"] = {rtwname: "<S3>:2"};
	this.rtwnameHashMap["<S3>:5"] = {sid: "Led_Switch:13:5"};
	this.sidHashMap["Led_Switch:13:5"] = {rtwname: "<S3>:5"};
	this.rtwnameHashMap["<S3>:8"] = {sid: "Led_Switch:13:8"};
	this.sidHashMap["Led_Switch:13:8"] = {rtwname: "<S3>:8"};
	this.rtwnameHashMap["<S3>:7"] = {sid: "Led_Switch:13:7"};
	this.sidHashMap["Led_Switch:13:7"] = {rtwname: "<S3>:7"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "Led_Switch:12:1"};
	this.sidHashMap["Led_Switch:12:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:3"] = {sid: "Led_Switch:12:3"};
	this.sidHashMap["Led_Switch:12:3"] = {rtwname: "<S4>:3"};
	this.rtwnameHashMap["<S4>:5"] = {sid: "Led_Switch:12:5"};
	this.sidHashMap["Led_Switch:12:5"] = {rtwname: "<S4>:5"};
	this.rtwnameHashMap["<S4>:2"] = {sid: "Led_Switch:12:2"};
	this.sidHashMap["Led_Switch:12:2"] = {rtwname: "<S4>:2"};
	this.rtwnameHashMap["<S4>:4"] = {sid: "Led_Switch:12:4"};
	this.sidHashMap["Led_Switch:12:4"] = {rtwname: "<S4>:4"};
	this.rtwnameHashMap["<S4>:10"] = {sid: "Led_Switch:12:10"};
	this.sidHashMap["Led_Switch:12:10"] = {rtwname: "<S4>:10"};
	this.rtwnameHashMap["<S4>:11"] = {sid: "Led_Switch:12:11"};
	this.sidHashMap["Led_Switch:12:11"] = {rtwname: "<S4>:11"};
	this.rtwnameHashMap["<S4>:3:1"] = {sid: "Led_Switch:12:3:1"};
	this.sidHashMap["Led_Switch:12:3:1"] = {rtwname: "<S4>:3:1"};
	this.rtwnameHashMap["<S4>:11:1"] = {sid: "Led_Switch:12:11:1"};
	this.sidHashMap["Led_Switch:12:11:1"] = {rtwname: "<S4>:11:1"};
	this.rtwnameHashMap["<S4>:5:1"] = {sid: "Led_Switch:12:5:1"};
	this.sidHashMap["Led_Switch:12:5:1"] = {rtwname: "<S4>:5:1"};
	this.rtwnameHashMap["<S4>:10:1"] = {sid: "Led_Switch:12:10:1"};
	this.sidHashMap["Led_Switch:12:10:1"] = {rtwname: "<S4>:10:1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
