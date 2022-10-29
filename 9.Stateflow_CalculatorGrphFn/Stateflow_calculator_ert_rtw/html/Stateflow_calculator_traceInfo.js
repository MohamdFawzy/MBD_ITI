function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Stateflow_calculator:8"] = "Stateflow_calculator.c:112&Stateflow_calculator.h:38";
	/* <Root>/In2 */
	this.urlHashMap["Stateflow_calculator:9"] = "Stateflow_calculator.c:113&Stateflow_calculator.h:39";
	/* <Root>/Chart */
	this.urlHashMap["Stateflow_calculator:1"] = "Stateflow_calculator.c:50,65,80,88,111,136,156,160,165,170,175&Stateflow_calculator.h:33";
	/* <Root>/Out1 */
	this.urlHashMap["Stateflow_calculator:10"] = "Stateflow_calculator.c:159&Stateflow_calculator.h:44";
	/* <Root>/Out2 */
	this.urlHashMap["Stateflow_calculator:11"] = "Stateflow_calculator.c:164&Stateflow_calculator.h:45";
	/* <Root>/Out3 */
	this.urlHashMap["Stateflow_calculator:12"] = "Stateflow_calculator.c:169&Stateflow_calculator.h:46";
	/* <Root>/Out4 */
	this.urlHashMap["Stateflow_calculator:13"] = "Stateflow_calculator.c:174&Stateflow_calculator.h:47";
	/* <S1>:36 */
	this.urlHashMap["Stateflow_calculator:1:36"] = "Stateflow_calculator.c:123,133";
	/* <S1>:4 */
	this.urlHashMap["Stateflow_calculator:1:4"] = "Stateflow_calculator.c:55";
	/* <S1>:13 */
	this.urlHashMap["Stateflow_calculator:1:13"] = "Stateflow_calculator.c:91";
	/* <S1>:10 */
	this.urlHashMap["Stateflow_calculator:1:10"] = "Stateflow_calculator.c:83";
	/* <S1>:7 */
	this.urlHashMap["Stateflow_calculator:1:7"] = "Stateflow_calculator.c:70";
	/* <S1>:37 */
	this.urlHashMap["Stateflow_calculator:1:37"] = "Stateflow_calculator.c:122";
	/* <S1>:23 */
	this.urlHashMap["Stateflow_calculator:1:23"] = "Stateflow_calculator.c:92";
	/* <S1>:24 */
	this.urlHashMap["Stateflow_calculator:1:24"] = "Stateflow_calculator.c:95";
	/* <S1>:25 */
	this.urlHashMap["Stateflow_calculator:1:25"] = "Stateflow_calculator.c:101";
	/* <S1>:26 */
	this.urlHashMap["Stateflow_calculator:1:26"] = "Stateflow_calculator.c:96";
	/* <S1>:27 */
	this.urlHashMap["Stateflow_calculator:1:27"] = "Stateflow_calculator.c:99";
	/* <S1>:28 */
	this.urlHashMap["Stateflow_calculator:1:28"] = "Stateflow_calculator.c:105";
	/* <S1>:9 */
	this.urlHashMap["Stateflow_calculator:1:9"] = "Stateflow_calculator.c:71";
	/* <S1>:12 */
	this.urlHashMap["Stateflow_calculator:1:12"] = "Stateflow_calculator.c:84";
	/* <S1>:6 */
	this.urlHashMap["Stateflow_calculator:1:6"] = "Stateflow_calculator.c:56";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Stateflow_calculator"};
	this.sidHashMap["Stateflow_calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Stateflow_calculator:1"};
	this.sidHashMap["Stateflow_calculator:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Stateflow_calculator:8"};
	this.sidHashMap["Stateflow_calculator:8"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Stateflow_calculator:9"};
	this.sidHashMap["Stateflow_calculator:9"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Stateflow_calculator:1"};
	this.sidHashMap["Stateflow_calculator:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Stateflow_calculator:10"};
	this.sidHashMap["Stateflow_calculator:10"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Stateflow_calculator:11"};
	this.sidHashMap["Stateflow_calculator:11"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Stateflow_calculator:12"};
	this.sidHashMap["Stateflow_calculator:12"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Stateflow_calculator:13"};
	this.sidHashMap["Stateflow_calculator:13"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<S1>:36"] = {sid: "Stateflow_calculator:1:36"};
	this.sidHashMap["Stateflow_calculator:1:36"] = {rtwname: "<S1>:36"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "Stateflow_calculator:1:4"};
	this.sidHashMap["Stateflow_calculator:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:13"] = {sid: "Stateflow_calculator:1:13"};
	this.sidHashMap["Stateflow_calculator:1:13"] = {rtwname: "<S1>:13"};
	this.rtwnameHashMap["<S1>:10"] = {sid: "Stateflow_calculator:1:10"};
	this.sidHashMap["Stateflow_calculator:1:10"] = {rtwname: "<S1>:10"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "Stateflow_calculator:1:7"};
	this.sidHashMap["Stateflow_calculator:1:7"] = {rtwname: "<S1>:7"};
	this.rtwnameHashMap["<S1>:37"] = {sid: "Stateflow_calculator:1:37"};
	this.sidHashMap["Stateflow_calculator:1:37"] = {rtwname: "<S1>:37"};
	this.rtwnameHashMap["<S1>:23"] = {sid: "Stateflow_calculator:1:23"};
	this.sidHashMap["Stateflow_calculator:1:23"] = {rtwname: "<S1>:23"};
	this.rtwnameHashMap["<S1>:24"] = {sid: "Stateflow_calculator:1:24"};
	this.sidHashMap["Stateflow_calculator:1:24"] = {rtwname: "<S1>:24"};
	this.rtwnameHashMap["<S1>:25"] = {sid: "Stateflow_calculator:1:25"};
	this.sidHashMap["Stateflow_calculator:1:25"] = {rtwname: "<S1>:25"};
	this.rtwnameHashMap["<S1>:26"] = {sid: "Stateflow_calculator:1:26"};
	this.sidHashMap["Stateflow_calculator:1:26"] = {rtwname: "<S1>:26"};
	this.rtwnameHashMap["<S1>:27"] = {sid: "Stateflow_calculator:1:27"};
	this.sidHashMap["Stateflow_calculator:1:27"] = {rtwname: "<S1>:27"};
	this.rtwnameHashMap["<S1>:28"] = {sid: "Stateflow_calculator:1:28"};
	this.sidHashMap["Stateflow_calculator:1:28"] = {rtwname: "<S1>:28"};
	this.rtwnameHashMap["<S1>:9"] = {sid: "Stateflow_calculator:1:9"};
	this.sidHashMap["Stateflow_calculator:1:9"] = {rtwname: "<S1>:9"};
	this.rtwnameHashMap["<S1>:12"] = {sid: "Stateflow_calculator:1:12"};
	this.sidHashMap["Stateflow_calculator:1:12"] = {rtwname: "<S1>:12"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Stateflow_calculator:1:6"};
	this.sidHashMap["Stateflow_calculator:1:6"] = {rtwname: "<S1>:6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
