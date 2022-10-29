function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["StateflowFactorial:4"] = "StateflowFactorial.c:35&StateflowFactorial.h:32";
	/* <Root>/Chart */
	this.urlHashMap["StateflowFactorial:1"] = "StateflowFactorial.c:34,52";
	/* <Root>/Out1 */
	this.urlHashMap["StateflowFactorial:5"] = "StateflowFactorial.c:54&StateflowFactorial.h:37";
	/* <S1>:17 */
	this.urlHashMap["StateflowFactorial:1:17"] = "StateflowFactorial.c:40";
	/* <S1>:18 */
	this.urlHashMap["StateflowFactorial:1:18"] = "StateflowFactorial.c:45";
	/* <S1>:19 */
	this.urlHashMap["StateflowFactorial:1:19"] = "StateflowFactorial.c:46";
	/* <S1>:20 */
	this.urlHashMap["StateflowFactorial:1:20"] = "StateflowFactorial.c:42";
	/* <S1>:21 */
	this.urlHashMap["StateflowFactorial:1:21"] = "StateflowFactorial.c:49";
	/* <S1>:22 */
	this.urlHashMap["StateflowFactorial:1:22"] = "StateflowFactorial.c:55";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "StateflowFactorial"};
	this.sidHashMap["StateflowFactorial"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "StateflowFactorial:1"};
	this.sidHashMap["StateflowFactorial:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "StateflowFactorial:4"};
	this.sidHashMap["StateflowFactorial:4"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "StateflowFactorial:1"};
	this.sidHashMap["StateflowFactorial:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "StateflowFactorial:5"};
	this.sidHashMap["StateflowFactorial:5"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:17"] = {sid: "StateflowFactorial:1:17"};
	this.sidHashMap["StateflowFactorial:1:17"] = {rtwname: "<S1>:17"};
	this.rtwnameHashMap["<S1>:18"] = {sid: "StateflowFactorial:1:18"};
	this.sidHashMap["StateflowFactorial:1:18"] = {rtwname: "<S1>:18"};
	this.rtwnameHashMap["<S1>:19"] = {sid: "StateflowFactorial:1:19"};
	this.sidHashMap["StateflowFactorial:1:19"] = {rtwname: "<S1>:19"};
	this.rtwnameHashMap["<S1>:20"] = {sid: "StateflowFactorial:1:20"};
	this.sidHashMap["StateflowFactorial:1:20"] = {rtwname: "<S1>:20"};
	this.rtwnameHashMap["<S1>:21"] = {sid: "StateflowFactorial:1:21"};
	this.sidHashMap["StateflowFactorial:1:21"] = {rtwname: "<S1>:21"};
	this.rtwnameHashMap["<S1>:22"] = {sid: "StateflowFactorial:1:22"};
	this.sidHashMap["StateflowFactorial:1:22"] = {rtwname: "<S1>:22"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
