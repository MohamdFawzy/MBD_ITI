function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["Stateflow_Traffic:1"] = "Stateflow_Traffic.c:22,42,123,171&Stateflow_Traffic.h:33,34,35,53,54";
	/* <Root>/Scope */
	this.urlHashMap["Stateflow_Traffic:11"] = "msg=rtwMsg_reducedBlock&block=Stateflow_Traffic:11";
	/* <Root>/red */
	this.urlHashMap["Stateflow_Traffic:2"] = "Stateflow_Traffic.c:125&Stateflow_Traffic.h:59";
	/* <Root>/yellow
 */
	this.urlHashMap["Stateflow_Traffic:3"] = "Stateflow_Traffic.c:128&Stateflow_Traffic.h:60";
	/* <Root>/greem
 */
	this.urlHashMap["Stateflow_Traffic:4"] = "Stateflow_Traffic.c:131&Stateflow_Traffic.h:61";
	/* <S1>:30 */
	this.urlHashMap["Stateflow_Traffic:1:30"] = "Stateflow_Traffic.c:53,60";
	/* <S1>:7 */
	this.urlHashMap["Stateflow_Traffic:1:7"] = "Stateflow_Traffic.c:63,66,86";
	/* <S1>:6 */
	this.urlHashMap["Stateflow_Traffic:1:6"] = "Stateflow_Traffic.c:70,78,82,92,114";
	/* <S1>:4 */
	this.urlHashMap["Stateflow_Traffic:1:4"] = "Stateflow_Traffic.c:57,96,107,110";
	/* <S1>:31 */
	this.urlHashMap["Stateflow_Traffic:1:31"] = "Stateflow_Traffic.c:52";
	/* <S1>:5 */
	this.urlHashMap["Stateflow_Traffic:1:5"] = "Stateflow_Traffic.c:54";
	/* <S1>:11 */
	this.urlHashMap["Stateflow_Traffic:1:11"] = "Stateflow_Traffic.c:109";
	/* <S1>:12 */
	this.urlHashMap["Stateflow_Traffic:1:12"] = "Stateflow_Traffic.c:81";
	/* <S1>:13 */
	this.urlHashMap["Stateflow_Traffic:1:13"] = "Stateflow_Traffic.c:65";
	/* <S1>:14 */
	this.urlHashMap["Stateflow_Traffic:1:14"] = "Stateflow_Traffic.c:91";
	/* <S2>/Data Type
Propagation */
	this.urlHashMap["Stateflow_Traffic:10:1"] = "msg=rtwMsg_reducedBlock&block=Stateflow_Traffic:10:1";
	/* <S2>/Output */
	this.urlHashMap["Stateflow_Traffic:10:4"] = "Stateflow_Traffic.c:43,136,142,147&Stateflow_Traffic.h:52";
	/* <S3>/FixPt
Constant */
	this.urlHashMap["Stateflow_Traffic:10:3:2"] = "Stateflow_Traffic.c:135";
	/* <S3>/FixPt
Data Type
Duplicate */
	this.urlHashMap["Stateflow_Traffic:10:3:3"] = "msg=rtwMsg_reducedBlock&block=Stateflow_Traffic:10:3:3";
	/* <S3>/FixPt
Sum1 */
	this.urlHashMap["Stateflow_Traffic:10:3:4"] = "Stateflow_Traffic.c:134";
	/* <S4>/Constant */
	this.urlHashMap["Stateflow_Traffic:10:5:4"] = "Stateflow_Traffic.c:143";
	/* <S4>/FixPt
Data Type
Duplicate1 */
	this.urlHashMap["Stateflow_Traffic:10:5:2"] = "msg=rtwMsg_reducedBlock&block=Stateflow_Traffic:10:5:2";
	/* <S4>/FixPt
Switch */
	this.urlHashMap["Stateflow_Traffic:10:5:3"] = "Stateflow_Traffic.c:140,151";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Stateflow_Traffic"};
	this.sidHashMap["Stateflow_Traffic"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Stateflow_Traffic:1"};
	this.sidHashMap["Stateflow_Traffic:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Stateflow_Traffic:10"};
	this.sidHashMap["Stateflow_Traffic:10"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "Stateflow_Traffic:10:3"};
	this.sidHashMap["Stateflow_Traffic:10:3"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "Stateflow_Traffic:10:5"};
	this.sidHashMap["Stateflow_Traffic:10:5"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Stateflow_Traffic:1"};
	this.sidHashMap["Stateflow_Traffic:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Counter Limited"] = {sid: "Stateflow_Traffic:10"};
	this.sidHashMap["Stateflow_Traffic:10"] = {rtwname: "<Root>/Counter Limited"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "Stateflow_Traffic:5"};
	this.sidHashMap["Stateflow_Traffic:5"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Lamp1"] = {sid: "Stateflow_Traffic:8"};
	this.sidHashMap["Stateflow_Traffic:8"] = {rtwname: "<Root>/Lamp1"};
	this.rtwnameHashMap["<Root>/Lamp2"] = {sid: "Stateflow_Traffic:9"};
	this.sidHashMap["Stateflow_Traffic:9"] = {rtwname: "<Root>/Lamp2"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "Stateflow_Traffic:11"};
	this.sidHashMap["Stateflow_Traffic:11"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/red"] = {sid: "Stateflow_Traffic:2"};
	this.sidHashMap["Stateflow_Traffic:2"] = {rtwname: "<Root>/red"};
	this.rtwnameHashMap["<Root>/yellow "] = {sid: "Stateflow_Traffic:3"};
	this.sidHashMap["Stateflow_Traffic:3"] = {rtwname: "<Root>/yellow "};
	this.rtwnameHashMap["<Root>/greem "] = {sid: "Stateflow_Traffic:4"};
	this.sidHashMap["Stateflow_Traffic:4"] = {rtwname: "<Root>/greem "};
	this.rtwnameHashMap["<S1>:30"] = {sid: "Stateflow_Traffic:1:30"};
	this.sidHashMap["Stateflow_Traffic:1:30"] = {rtwname: "<S1>:30"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "Stateflow_Traffic:1:7"};
	this.sidHashMap["Stateflow_Traffic:1:7"] = {rtwname: "<S1>:7"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Stateflow_Traffic:1:6"};
	this.sidHashMap["Stateflow_Traffic:1:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "Stateflow_Traffic:1:4"};
	this.sidHashMap["Stateflow_Traffic:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:31"] = {sid: "Stateflow_Traffic:1:31"};
	this.sidHashMap["Stateflow_Traffic:1:31"] = {rtwname: "<S1>:31"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "Stateflow_Traffic:1:5"};
	this.sidHashMap["Stateflow_Traffic:1:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:11"] = {sid: "Stateflow_Traffic:1:11"};
	this.sidHashMap["Stateflow_Traffic:1:11"] = {rtwname: "<S1>:11"};
	this.rtwnameHashMap["<S1>:12"] = {sid: "Stateflow_Traffic:1:12"};
	this.sidHashMap["Stateflow_Traffic:1:12"] = {rtwname: "<S1>:12"};
	this.rtwnameHashMap["<S1>:13"] = {sid: "Stateflow_Traffic:1:13"};
	this.sidHashMap["Stateflow_Traffic:1:13"] = {rtwname: "<S1>:13"};
	this.rtwnameHashMap["<S1>:14"] = {sid: "Stateflow_Traffic:1:14"};
	this.sidHashMap["Stateflow_Traffic:1:14"] = {rtwname: "<S1>:14"};
	this.rtwnameHashMap["<S2>/Data Type Propagation"] = {sid: "Stateflow_Traffic:10:1"};
	this.sidHashMap["Stateflow_Traffic:10:1"] = {rtwname: "<S2>/Data Type Propagation"};
	this.rtwnameHashMap["<S2>/Force to be scalar"] = {sid: "Stateflow_Traffic:10:2"};
	this.sidHashMap["Stateflow_Traffic:10:2"] = {rtwname: "<S2>/Force to be scalar"};
	this.rtwnameHashMap["<S2>/Increment Real World"] = {sid: "Stateflow_Traffic:10:3"};
	this.sidHashMap["Stateflow_Traffic:10:3"] = {rtwname: "<S2>/Increment Real World"};
	this.rtwnameHashMap["<S2>/Output"] = {sid: "Stateflow_Traffic:10:4"};
	this.sidHashMap["Stateflow_Traffic:10:4"] = {rtwname: "<S2>/Output"};
	this.rtwnameHashMap["<S2>/Wrap To Zero"] = {sid: "Stateflow_Traffic:10:5"};
	this.sidHashMap["Stateflow_Traffic:10:5"] = {rtwname: "<S2>/Wrap To Zero"};
	this.rtwnameHashMap["<S2>/y"] = {sid: "Stateflow_Traffic:10:6"};
	this.sidHashMap["Stateflow_Traffic:10:6"] = {rtwname: "<S2>/y"};
	this.rtwnameHashMap["<S3>/u"] = {sid: "Stateflow_Traffic:10:3:1"};
	this.sidHashMap["Stateflow_Traffic:10:3:1"] = {rtwname: "<S3>/u"};
	this.rtwnameHashMap["<S3>/FixPt Constant"] = {sid: "Stateflow_Traffic:10:3:2"};
	this.sidHashMap["Stateflow_Traffic:10:3:2"] = {rtwname: "<S3>/FixPt Constant"};
	this.rtwnameHashMap["<S3>/FixPt Data Type Duplicate"] = {sid: "Stateflow_Traffic:10:3:3"};
	this.sidHashMap["Stateflow_Traffic:10:3:3"] = {rtwname: "<S3>/FixPt Data Type Duplicate"};
	this.rtwnameHashMap["<S3>/FixPt Sum1"] = {sid: "Stateflow_Traffic:10:3:4"};
	this.sidHashMap["Stateflow_Traffic:10:3:4"] = {rtwname: "<S3>/FixPt Sum1"};
	this.rtwnameHashMap["<S3>/y"] = {sid: "Stateflow_Traffic:10:3:5"};
	this.sidHashMap["Stateflow_Traffic:10:3:5"] = {rtwname: "<S3>/y"};
	this.rtwnameHashMap["<S4>/U"] = {sid: "Stateflow_Traffic:10:5:1"};
	this.sidHashMap["Stateflow_Traffic:10:5:1"] = {rtwname: "<S4>/U"};
	this.rtwnameHashMap["<S4>/Constant"] = {sid: "Stateflow_Traffic:10:5:4"};
	this.sidHashMap["Stateflow_Traffic:10:5:4"] = {rtwname: "<S4>/Constant"};
	this.rtwnameHashMap["<S4>/FixPt Data Type Duplicate1"] = {sid: "Stateflow_Traffic:10:5:2"};
	this.sidHashMap["Stateflow_Traffic:10:5:2"] = {rtwname: "<S4>/FixPt Data Type Duplicate1"};
	this.rtwnameHashMap["<S4>/FixPt Switch"] = {sid: "Stateflow_Traffic:10:5:3"};
	this.sidHashMap["Stateflow_Traffic:10:5:3"] = {rtwname: "<S4>/FixPt Switch"};
	this.rtwnameHashMap["<S4>/Y"] = {sid: "Stateflow_Traffic:10:5:5"};
	this.sidHashMap["Stateflow_Traffic:10:5:5"] = {rtwname: "<S4>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
