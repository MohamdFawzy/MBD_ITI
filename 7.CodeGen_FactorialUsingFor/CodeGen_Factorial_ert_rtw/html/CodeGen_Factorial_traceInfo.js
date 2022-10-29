function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["CodeGen_Factorial:26"] = "CodeGen_Factorial.c:40,52&CodeGen_Factorial.h:32";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["CodeGen_Factorial:1"] = "CodeGen_Factorial.c:34,53";
	/* <Root>/Out1 */
	this.urlHashMap["CodeGen_Factorial:27"] = "CodeGen_Factorial.c:42&CodeGen_Factorial.h:37";
	/* <S1>/For Iterator */
	this.urlHashMap["CodeGen_Factorial:3"] = "CodeGen_Factorial.c:35";
	/* <S1>/Product */
	this.urlHashMap["CodeGen_Factorial:7"] = "CodeGen_Factorial.c:43";
	/* <S1>/Unit Delay */
	this.urlHashMap["CodeGen_Factorial:8"] = "CodeGen_Factorial.c:37,44,48";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "CodeGen_Factorial"};
	this.sidHashMap["CodeGen_Factorial"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "CodeGen_Factorial:1"};
	this.sidHashMap["CodeGen_Factorial:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "CodeGen_Factorial:26"};
	this.sidHashMap["CodeGen_Factorial:26"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "CodeGen_Factorial:1"};
	this.sidHashMap["CodeGen_Factorial:1"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "CodeGen_Factorial:27"};
	this.sidHashMap["CodeGen_Factorial:27"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "CodeGen_Factorial:2"};
	this.sidHashMap["CodeGen_Factorial:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "CodeGen_Factorial:3"};
	this.sidHashMap["CodeGen_Factorial:3"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "CodeGen_Factorial:7"};
	this.sidHashMap["CodeGen_Factorial:7"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "CodeGen_Factorial:8"};
	this.sidHashMap["CodeGen_Factorial:8"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "CodeGen_Factorial:4"};
	this.sidHashMap["CodeGen_Factorial:4"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
