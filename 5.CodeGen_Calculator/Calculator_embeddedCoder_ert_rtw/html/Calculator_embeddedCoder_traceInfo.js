function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Calculator_embeddedCoder:1"] = "Calculator_embeddedCoder.c:32,40,48,57,64&Calculator_embeddedCoder.h:33";
	/* <Root>/In2 */
	this.urlHashMap["Calculator_embeddedCoder:2"] = "Calculator_embeddedCoder.c:33,41,49,58,65&Calculator_embeddedCoder.h:34";
	/* <Root>/Add */
	this.urlHashMap["Calculator_embeddedCoder:3"] = "Calculator_embeddedCoder.c:34";
	/* <Root>/Divide */
	this.urlHashMap["Calculator_embeddedCoder:9"] = "Calculator_embeddedCoder.c:66";
	/* <Root>/Dot Product */
	this.urlHashMap["Calculator_embeddedCoder:8"] = "Calculator_embeddedCoder.c:56";
	/* <Root>/Product */
	this.urlHashMap["Calculator_embeddedCoder:7"] = "Calculator_embeddedCoder.c:50";
	/* <Root>/Subtract */
	this.urlHashMap["Calculator_embeddedCoder:5"] = "Calculator_embeddedCoder.c:42";
	/* <Root>/Out1 */
	this.urlHashMap["Calculator_embeddedCoder:4"] = "Calculator_embeddedCoder.c:31&Calculator_embeddedCoder.h:39";
	/* <Root>/Out2 */
	this.urlHashMap["Calculator_embeddedCoder:6"] = "Calculator_embeddedCoder.c:39&Calculator_embeddedCoder.h:40";
	/* <Root>/Out3 */
	this.urlHashMap["Calculator_embeddedCoder:11"] = "Calculator_embeddedCoder.c:47&Calculator_embeddedCoder.h:41";
	/* <Root>/Out4 */
	this.urlHashMap["Calculator_embeddedCoder:12"] = "Calculator_embeddedCoder.c:55&Calculator_embeddedCoder.h:42";
	/* <Root>/Out5 */
	this.urlHashMap["Calculator_embeddedCoder:13"] = "Calculator_embeddedCoder.c:63&Calculator_embeddedCoder.h:43";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Calculator_embeddedCoder"};
	this.sidHashMap["Calculator_embeddedCoder"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Calculator_embeddedCoder:1"};
	this.sidHashMap["Calculator_embeddedCoder:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Calculator_embeddedCoder:2"};
	this.sidHashMap["Calculator_embeddedCoder:2"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "Calculator_embeddedCoder:3"};
	this.sidHashMap["Calculator_embeddedCoder:3"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "Calculator_embeddedCoder:9"};
	this.sidHashMap["Calculator_embeddedCoder:9"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Dot Product"] = {sid: "Calculator_embeddedCoder:8"};
	this.sidHashMap["Calculator_embeddedCoder:8"] = {rtwname: "<Root>/Dot Product"};
	this.rtwnameHashMap["<Root>/From"] = {sid: "Calculator_embeddedCoder:14"};
	this.sidHashMap["Calculator_embeddedCoder:14"] = {rtwname: "<Root>/From"};
	this.rtwnameHashMap["<Root>/From1"] = {sid: "Calculator_embeddedCoder:15"};
	this.sidHashMap["Calculator_embeddedCoder:15"] = {rtwname: "<Root>/From1"};
	this.rtwnameHashMap["<Root>/From2"] = {sid: "Calculator_embeddedCoder:16"};
	this.sidHashMap["Calculator_embeddedCoder:16"] = {rtwname: "<Root>/From2"};
	this.rtwnameHashMap["<Root>/From3"] = {sid: "Calculator_embeddedCoder:17"};
	this.sidHashMap["Calculator_embeddedCoder:17"] = {rtwname: "<Root>/From3"};
	this.rtwnameHashMap["<Root>/From4"] = {sid: "Calculator_embeddedCoder:18"};
	this.sidHashMap["Calculator_embeddedCoder:18"] = {rtwname: "<Root>/From4"};
	this.rtwnameHashMap["<Root>/From5"] = {sid: "Calculator_embeddedCoder:21"};
	this.sidHashMap["Calculator_embeddedCoder:21"] = {rtwname: "<Root>/From5"};
	this.rtwnameHashMap["<Root>/From6"] = {sid: "Calculator_embeddedCoder:22"};
	this.sidHashMap["Calculator_embeddedCoder:22"] = {rtwname: "<Root>/From6"};
	this.rtwnameHashMap["<Root>/From7"] = {sid: "Calculator_embeddedCoder:23"};
	this.sidHashMap["Calculator_embeddedCoder:23"] = {rtwname: "<Root>/From7"};
	this.rtwnameHashMap["<Root>/From8"] = {sid: "Calculator_embeddedCoder:24"};
	this.sidHashMap["Calculator_embeddedCoder:24"] = {rtwname: "<Root>/From8"};
	this.rtwnameHashMap["<Root>/From9"] = {sid: "Calculator_embeddedCoder:25"};
	this.sidHashMap["Calculator_embeddedCoder:25"] = {rtwname: "<Root>/From9"};
	this.rtwnameHashMap["<Root>/Goto"] = {sid: "Calculator_embeddedCoder:20"};
	this.sidHashMap["Calculator_embeddedCoder:20"] = {rtwname: "<Root>/Goto"};
	this.rtwnameHashMap["<Root>/Goto1"] = {sid: "Calculator_embeddedCoder:26"};
	this.sidHashMap["Calculator_embeddedCoder:26"] = {rtwname: "<Root>/Goto1"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "Calculator_embeddedCoder:7"};
	this.sidHashMap["Calculator_embeddedCoder:7"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "Calculator_embeddedCoder:5"};
	this.sidHashMap["Calculator_embeddedCoder:5"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Calculator_embeddedCoder:4"};
	this.sidHashMap["Calculator_embeddedCoder:4"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Calculator_embeddedCoder:6"};
	this.sidHashMap["Calculator_embeddedCoder:6"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Calculator_embeddedCoder:11"};
	this.sidHashMap["Calculator_embeddedCoder:11"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Calculator_embeddedCoder:12"};
	this.sidHashMap["Calculator_embeddedCoder:12"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "Calculator_embeddedCoder:13"};
	this.sidHashMap["Calculator_embeddedCoder:13"] = {rtwname: "<Root>/Out5"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
