function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["GradingSys:41"] = "GradingSys.c:33&GradingSys.h:32";
	/* <Root>/Constant */
	this.urlHashMap["GradingSys:32"] = "GradingSys.c:41";
	/* <Root>/Constant1 */
	this.urlHashMap["GradingSys:33"] = "GradingSys.c:54";
	/* <Root>/Constant2 */
	this.urlHashMap["GradingSys:34"] = "GradingSys.c:67";
	/* <Root>/Constant3 */
	this.urlHashMap["GradingSys:35"] = "GradingSys.c:80";
	/* <Root>/Constant4 */
	this.urlHashMap["GradingSys:36"] = "GradingSys.c:93";
	/* <Root>/Constant5 */
	this.urlHashMap["GradingSys:37"] = "GradingSys.c:106";
	/* <Root>/Gain */
	this.urlHashMap["GradingSys:28"] = "GradingSys.c:32";
	/* <Root>/Merge */
	this.urlHashMap["GradingSys:30"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradingSys:30";
	/* <Root>/Switch Case */
	this.urlHashMap["GradingSys:1"] = "GradingSys.c:31,115";
	/* <Root>/Switch Case Action
Subsystem */
	this.urlHashMap["GradingSys:2"] = "GradingSys.c:37,46";
	/* <Root>/Switch Case Action
Subsystem1 */
	this.urlHashMap["GradingSys:6"] = "GradingSys.c:50,59";
	/* <Root>/Switch Case Action
Subsystem2 */
	this.urlHashMap["GradingSys:10"] = "GradingSys.c:63,72";
	/* <Root>/Switch Case Action
Subsystem3 */
	this.urlHashMap["GradingSys:14"] = "GradingSys.c:76,85";
	/* <Root>/Switch Case Action
Subsystem4 */
	this.urlHashMap["GradingSys:18"] = "GradingSys.c:89,98";
	/* <Root>/Switch Case Action
Subsystem5 */
	this.urlHashMap["GradingSys:22"] = "GradingSys.c:102,111";
	/* <Root>/Out1 */
	this.urlHashMap["GradingSys:29"] = "GradingSys.c:40,53,66,79,92,105&GradingSys.h:37";
	/* <S1>/In1 */
	this.urlHashMap["GradingSys:3"] = "GradingSys.c:42";
	/* <S1>/Action Port */
	this.urlHashMap["GradingSys:4"] = "GradingSys.c:38";
	/* <S2>/In1 */
	this.urlHashMap["GradingSys:7"] = "GradingSys.c:55";
	/* <S2>/Action Port */
	this.urlHashMap["GradingSys:8"] = "GradingSys.c:51";
	/* <S3>/In1 */
	this.urlHashMap["GradingSys:11"] = "GradingSys.c:68";
	/* <S3>/Action Port */
	this.urlHashMap["GradingSys:12"] = "GradingSys.c:64";
	/* <S4>/In1 */
	this.urlHashMap["GradingSys:15"] = "GradingSys.c:81";
	/* <S4>/Action Port */
	this.urlHashMap["GradingSys:16"] = "GradingSys.c:77";
	/* <S5>/In1 */
	this.urlHashMap["GradingSys:19"] = "GradingSys.c:94";
	/* <S5>/Action Port */
	this.urlHashMap["GradingSys:20"] = "GradingSys.c:90";
	/* <S6>/In1 */
	this.urlHashMap["GradingSys:23"] = "GradingSys.c:107";
	/* <S6>/Action Port */
	this.urlHashMap["GradingSys:24"] = "GradingSys.c:103";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "GradingSys"};
	this.sidHashMap["GradingSys"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "GradingSys:2"};
	this.sidHashMap["GradingSys:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "GradingSys:6"};
	this.sidHashMap["GradingSys:6"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "GradingSys:10"};
	this.sidHashMap["GradingSys:10"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "GradingSys:14"};
	this.sidHashMap["GradingSys:14"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "GradingSys:18"};
	this.sidHashMap["GradingSys:18"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "GradingSys:22"};
	this.sidHashMap["GradingSys:22"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "GradingSys:41"};
	this.sidHashMap["GradingSys:41"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "GradingSys:32"};
	this.sidHashMap["GradingSys:32"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "GradingSys:33"};
	this.sidHashMap["GradingSys:33"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "GradingSys:34"};
	this.sidHashMap["GradingSys:34"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Constant3"] = {sid: "GradingSys:35"};
	this.sidHashMap["GradingSys:35"] = {rtwname: "<Root>/Constant3"};
	this.rtwnameHashMap["<Root>/Constant4"] = {sid: "GradingSys:36"};
	this.sidHashMap["GradingSys:36"] = {rtwname: "<Root>/Constant4"};
	this.rtwnameHashMap["<Root>/Constant5"] = {sid: "GradingSys:37"};
	this.sidHashMap["GradingSys:37"] = {rtwname: "<Root>/Constant5"};
	this.rtwnameHashMap["<Root>/Gain"] = {sid: "GradingSys:28"};
	this.sidHashMap["GradingSys:28"] = {rtwname: "<Root>/Gain"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "GradingSys:30"};
	this.sidHashMap["GradingSys:30"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Switch Case"] = {sid: "GradingSys:1"};
	this.sidHashMap["GradingSys:1"] = {rtwname: "<Root>/Switch Case"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem"] = {sid: "GradingSys:2"};
	this.sidHashMap["GradingSys:2"] = {rtwname: "<Root>/Switch Case Action Subsystem"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem1"] = {sid: "GradingSys:6"};
	this.sidHashMap["GradingSys:6"] = {rtwname: "<Root>/Switch Case Action Subsystem1"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem2"] = {sid: "GradingSys:10"};
	this.sidHashMap["GradingSys:10"] = {rtwname: "<Root>/Switch Case Action Subsystem2"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem3"] = {sid: "GradingSys:14"};
	this.sidHashMap["GradingSys:14"] = {rtwname: "<Root>/Switch Case Action Subsystem3"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem4"] = {sid: "GradingSys:18"};
	this.sidHashMap["GradingSys:18"] = {rtwname: "<Root>/Switch Case Action Subsystem4"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem5"] = {sid: "GradingSys:22"};
	this.sidHashMap["GradingSys:22"] = {rtwname: "<Root>/Switch Case Action Subsystem5"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "GradingSys:29"};
	this.sidHashMap["GradingSys:29"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "GradingSys:3"};
	this.sidHashMap["GradingSys:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "GradingSys:4"};
	this.sidHashMap["GradingSys:4"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "GradingSys:5"};
	this.sidHashMap["GradingSys:5"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "GradingSys:7"};
	this.sidHashMap["GradingSys:7"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "GradingSys:8"};
	this.sidHashMap["GradingSys:8"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "GradingSys:9"};
	this.sidHashMap["GradingSys:9"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "GradingSys:11"};
	this.sidHashMap["GradingSys:11"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "GradingSys:12"};
	this.sidHashMap["GradingSys:12"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "GradingSys:13"};
	this.sidHashMap["GradingSys:13"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "GradingSys:15"};
	this.sidHashMap["GradingSys:15"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "GradingSys:16"};
	this.sidHashMap["GradingSys:16"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "GradingSys:17"};
	this.sidHashMap["GradingSys:17"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/In1"] = {sid: "GradingSys:19"};
	this.sidHashMap["GradingSys:19"] = {rtwname: "<S5>/In1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "GradingSys:20"};
	this.sidHashMap["GradingSys:20"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "GradingSys:21"};
	this.sidHashMap["GradingSys:21"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/In1"] = {sid: "GradingSys:23"};
	this.sidHashMap["GradingSys:23"] = {rtwname: "<S6>/In1"};
	this.rtwnameHashMap["<S6>/Action Port"] = {sid: "GradingSys:24"};
	this.sidHashMap["GradingSys:24"] = {rtwname: "<S6>/Action Port"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "GradingSys:25"};
	this.sidHashMap["GradingSys:25"] = {rtwname: "<S6>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
