function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["CalculatorSubSys:1"] = "CalculatorSubSys.c:36,61&CalculatorSubSys.h:43";
	/* <Root>/In2 */
	this.urlHashMap["CalculatorSubSys:2"] = "CalculatorSubSys.c:37,62&CalculatorSubSys.h:44";
	/* <Root>/AlgorthmicCalculator */
	this.urlHashMap["CalculatorSubSys:74"] = "CalculatorSubSys.c:34,42&CalculatorSubSys.h:38&AlgorthmicCalculator.c:25&AlgorthmicCalculator.h:28";
	/* <Root>/BitwiseCalculator */
	this.urlHashMap["CalculatorSubSys:92"] = "CalculatorSubSys.c:59,67&CalculatorSubSys.h:37&BitwiseCalculator.c:25&BitwiseCalculator.h:28";
	/* <Root>/Out1 */
	this.urlHashMap["CalculatorSubSys:4"] = "CalculatorSubSys.c:44&CalculatorSubSys.h:49";
	/* <Root>/Out2 */
	this.urlHashMap["CalculatorSubSys:6"] = "CalculatorSubSys.c:47&CalculatorSubSys.h:50";
	/* <Root>/Out3 */
	this.urlHashMap["CalculatorSubSys:11"] = "CalculatorSubSys.c:50&CalculatorSubSys.h:51";
	/* <Root>/Out4 */
	this.urlHashMap["CalculatorSubSys:12"] = "CalculatorSubSys.c:53&CalculatorSubSys.h:52";
	/* <Root>/Out5 */
	this.urlHashMap["CalculatorSubSys:13"] = "CalculatorSubSys.c:56&CalculatorSubSys.h:53";
	/* <Root>/Out6 */
	this.urlHashMap["CalculatorSubSys:62"] = "CalculatorSubSys.c:69&CalculatorSubSys.h:54";
	/* <Root>/Out7 */
	this.urlHashMap["CalculatorSubSys:63"] = "CalculatorSubSys.c:72&CalculatorSubSys.h:55";
	/* <Root>/Out8 */
	this.urlHashMap["CalculatorSubSys:64"] = "CalculatorSubSys.c:76&CalculatorSubSys.h:56";
	/* <Root>/Out9 */
	this.urlHashMap["CalculatorSubSys:65"] = "CalculatorSubSys.c:80&CalculatorSubSys.h:57";
	/* <Root>/Out10 */
	this.urlHashMap["CalculatorSubSys:71"] = "CalculatorSubSys.c:84&CalculatorSubSys.h:58";
	/* <S1>/Add */
	this.urlHashMap["CalculatorSubSys:3"] = "AlgorthmicCalculator.c:29&AlgorthmicCalculator.h:32";
	/* <S1>/Divide */
	this.urlHashMap["CalculatorSubSys:9"] = "AlgorthmicCalculator.c:32&AlgorthmicCalculator.h:33";
	/* <S1>/Dot Product */
	this.urlHashMap["CalculatorSubSys:8"] = "AlgorthmicCalculator.c:36&AlgorthmicCalculator.h:30";
	/* <S1>/Product */
	this.urlHashMap["CalculatorSubSys:7"] = "AlgorthmicCalculator.c:39&AlgorthmicCalculator.h:31";
	/* <S1>/Subtract */
	this.urlHashMap["CalculatorSubSys:5"] = "AlgorthmicCalculator.c:42&AlgorthmicCalculator.h:34";
	/* <S2>/Bitwise
Operator */
	this.urlHashMap["CalculatorSubSys:67"] = "BitwiseCalculator.c:29&BitwiseCalculator.h:30";
	/* <S2>/Bitwise
Operator1 */
	this.urlHashMap["CalculatorSubSys:68"] = "BitwiseCalculator.c:32&BitwiseCalculator.h:31";
	/* <S2>/Bitwise
Operator2 */
	this.urlHashMap["CalculatorSubSys:69"] = "BitwiseCalculator.c:35&BitwiseCalculator.h:32";
	/* <S2>/Bitwise
Operator3 */
	this.urlHashMap["CalculatorSubSys:70"] = "BitwiseCalculator.c:38&BitwiseCalculator.h:33";
	/* <S2>/Bitwise
Operator4 */
	this.urlHashMap["CalculatorSubSys:72"] = "BitwiseCalculator.c:41&BitwiseCalculator.h:34";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "CalculatorSubSys"};
	this.sidHashMap["CalculatorSubSys"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "CalculatorSubSys:74"};
	this.sidHashMap["CalculatorSubSys:74"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "CalculatorSubSys:92"};
	this.sidHashMap["CalculatorSubSys:92"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "CalculatorSubSys:1"};
	this.sidHashMap["CalculatorSubSys:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "CalculatorSubSys:2"};
	this.sidHashMap["CalculatorSubSys:2"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/AlgorthmicCalculator"] = {sid: "CalculatorSubSys:74"};
	this.sidHashMap["CalculatorSubSys:74"] = {rtwname: "<Root>/AlgorthmicCalculator"};
	this.rtwnameHashMap["<Root>/BitwiseCalculator"] = {sid: "CalculatorSubSys:92"};
	this.sidHashMap["CalculatorSubSys:92"] = {rtwname: "<Root>/BitwiseCalculator"};
	this.rtwnameHashMap["<Root>/From1"] = {sid: "CalculatorSubSys:88"};
	this.sidHashMap["CalculatorSubSys:88"] = {rtwname: "<Root>/From1"};
	this.rtwnameHashMap["<Root>/From2"] = {sid: "CalculatorSubSys:89"};
	this.sidHashMap["CalculatorSubSys:89"] = {rtwname: "<Root>/From2"};
	this.rtwnameHashMap["<Root>/From3"] = {sid: "CalculatorSubSys:100"};
	this.sidHashMap["CalculatorSubSys:100"] = {rtwname: "<Root>/From3"};
	this.rtwnameHashMap["<Root>/From4"] = {sid: "CalculatorSubSys:101"};
	this.sidHashMap["CalculatorSubSys:101"] = {rtwname: "<Root>/From4"};
	this.rtwnameHashMap["<Root>/Goto"] = {sid: "CalculatorSubSys:102"};
	this.sidHashMap["CalculatorSubSys:102"] = {rtwname: "<Root>/Goto"};
	this.rtwnameHashMap["<Root>/Goto1"] = {sid: "CalculatorSubSys:103"};
	this.sidHashMap["CalculatorSubSys:103"] = {rtwname: "<Root>/Goto1"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "CalculatorSubSys:4"};
	this.sidHashMap["CalculatorSubSys:4"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "CalculatorSubSys:6"};
	this.sidHashMap["CalculatorSubSys:6"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "CalculatorSubSys:11"};
	this.sidHashMap["CalculatorSubSys:11"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "CalculatorSubSys:12"};
	this.sidHashMap["CalculatorSubSys:12"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "CalculatorSubSys:13"};
	this.sidHashMap["CalculatorSubSys:13"] = {rtwname: "<Root>/Out5"};
	this.rtwnameHashMap["<Root>/Out6"] = {sid: "CalculatorSubSys:62"};
	this.sidHashMap["CalculatorSubSys:62"] = {rtwname: "<Root>/Out6"};
	this.rtwnameHashMap["<Root>/Out7"] = {sid: "CalculatorSubSys:63"};
	this.sidHashMap["CalculatorSubSys:63"] = {rtwname: "<Root>/Out7"};
	this.rtwnameHashMap["<Root>/Out8"] = {sid: "CalculatorSubSys:64"};
	this.sidHashMap["CalculatorSubSys:64"] = {rtwname: "<Root>/Out8"};
	this.rtwnameHashMap["<Root>/Out9"] = {sid: "CalculatorSubSys:65"};
	this.sidHashMap["CalculatorSubSys:65"] = {rtwname: "<Root>/Out9"};
	this.rtwnameHashMap["<Root>/Out10"] = {sid: "CalculatorSubSys:71"};
	this.sidHashMap["CalculatorSubSys:71"] = {rtwname: "<Root>/Out10"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "CalculatorSubSys:75"};
	this.sidHashMap["CalculatorSubSys:75"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "CalculatorSubSys:76"};
	this.sidHashMap["CalculatorSubSys:76"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "CalculatorSubSys:3"};
	this.sidHashMap["CalculatorSubSys:3"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "CalculatorSubSys:9"};
	this.sidHashMap["CalculatorSubSys:9"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Dot Product"] = {sid: "CalculatorSubSys:8"};
	this.sidHashMap["CalculatorSubSys:8"] = {rtwname: "<S1>/Dot Product"};
	this.rtwnameHashMap["<S1>/From"] = {sid: "CalculatorSubSys:14"};
	this.sidHashMap["CalculatorSubSys:14"] = {rtwname: "<S1>/From"};
	this.rtwnameHashMap["<S1>/From1"] = {sid: "CalculatorSubSys:15"};
	this.sidHashMap["CalculatorSubSys:15"] = {rtwname: "<S1>/From1"};
	this.rtwnameHashMap["<S1>/From2"] = {sid: "CalculatorSubSys:16"};
	this.sidHashMap["CalculatorSubSys:16"] = {rtwname: "<S1>/From2"};
	this.rtwnameHashMap["<S1>/From3"] = {sid: "CalculatorSubSys:17"};
	this.sidHashMap["CalculatorSubSys:17"] = {rtwname: "<S1>/From3"};
	this.rtwnameHashMap["<S1>/From4"] = {sid: "CalculatorSubSys:18"};
	this.sidHashMap["CalculatorSubSys:18"] = {rtwname: "<S1>/From4"};
	this.rtwnameHashMap["<S1>/From5"] = {sid: "CalculatorSubSys:21"};
	this.sidHashMap["CalculatorSubSys:21"] = {rtwname: "<S1>/From5"};
	this.rtwnameHashMap["<S1>/From6"] = {sid: "CalculatorSubSys:22"};
	this.sidHashMap["CalculatorSubSys:22"] = {rtwname: "<S1>/From6"};
	this.rtwnameHashMap["<S1>/From7"] = {sid: "CalculatorSubSys:23"};
	this.sidHashMap["CalculatorSubSys:23"] = {rtwname: "<S1>/From7"};
	this.rtwnameHashMap["<S1>/From8"] = {sid: "CalculatorSubSys:24"};
	this.sidHashMap["CalculatorSubSys:24"] = {rtwname: "<S1>/From8"};
	this.rtwnameHashMap["<S1>/From9"] = {sid: "CalculatorSubSys:25"};
	this.sidHashMap["CalculatorSubSys:25"] = {rtwname: "<S1>/From9"};
	this.rtwnameHashMap["<S1>/Goto"] = {sid: "CalculatorSubSys:20"};
	this.sidHashMap["CalculatorSubSys:20"] = {rtwname: "<S1>/Goto"};
	this.rtwnameHashMap["<S1>/Goto1"] = {sid: "CalculatorSubSys:26"};
	this.sidHashMap["CalculatorSubSys:26"] = {rtwname: "<S1>/Goto1"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "CalculatorSubSys:7"};
	this.sidHashMap["CalculatorSubSys:7"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "CalculatorSubSys:5"};
	this.sidHashMap["CalculatorSubSys:5"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "CalculatorSubSys:77"};
	this.sidHashMap["CalculatorSubSys:77"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "CalculatorSubSys:78"};
	this.sidHashMap["CalculatorSubSys:78"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "CalculatorSubSys:79"};
	this.sidHashMap["CalculatorSubSys:79"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "CalculatorSubSys:80"};
	this.sidHashMap["CalculatorSubSys:80"] = {rtwname: "<S1>/Out4"};
	this.rtwnameHashMap["<S1>/Out5"] = {sid: "CalculatorSubSys:81"};
	this.sidHashMap["CalculatorSubSys:81"] = {rtwname: "<S1>/Out5"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "CalculatorSubSys:93"};
	this.sidHashMap["CalculatorSubSys:93"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/In2"] = {sid: "CalculatorSubSys:94"};
	this.sidHashMap["CalculatorSubSys:94"] = {rtwname: "<S2>/In2"};
	this.rtwnameHashMap["<S2>/Bitwise Operator"] = {sid: "CalculatorSubSys:67"};
	this.sidHashMap["CalculatorSubSys:67"] = {rtwname: "<S2>/Bitwise Operator"};
	this.rtwnameHashMap["<S2>/Bitwise Operator1"] = {sid: "CalculatorSubSys:68"};
	this.sidHashMap["CalculatorSubSys:68"] = {rtwname: "<S2>/Bitwise Operator1"};
	this.rtwnameHashMap["<S2>/Bitwise Operator2"] = {sid: "CalculatorSubSys:69"};
	this.sidHashMap["CalculatorSubSys:69"] = {rtwname: "<S2>/Bitwise Operator2"};
	this.rtwnameHashMap["<S2>/Bitwise Operator3"] = {sid: "CalculatorSubSys:70"};
	this.sidHashMap["CalculatorSubSys:70"] = {rtwname: "<S2>/Bitwise Operator3"};
	this.rtwnameHashMap["<S2>/Bitwise Operator4"] = {sid: "CalculatorSubSys:72"};
	this.sidHashMap["CalculatorSubSys:72"] = {rtwname: "<S2>/Bitwise Operator4"};
	this.rtwnameHashMap["<S2>/From10"] = {sid: "CalculatorSubSys:52"};
	this.sidHashMap["CalculatorSubSys:52"] = {rtwname: "<S2>/From10"};
	this.rtwnameHashMap["<S2>/From11"] = {sid: "CalculatorSubSys:53"};
	this.sidHashMap["CalculatorSubSys:53"] = {rtwname: "<S2>/From11"};
	this.rtwnameHashMap["<S2>/From12"] = {sid: "CalculatorSubSys:54"};
	this.sidHashMap["CalculatorSubSys:54"] = {rtwname: "<S2>/From12"};
	this.rtwnameHashMap["<S2>/From13"] = {sid: "CalculatorSubSys:55"};
	this.sidHashMap["CalculatorSubSys:55"] = {rtwname: "<S2>/From13"};
	this.rtwnameHashMap["<S2>/From14"] = {sid: "CalculatorSubSys:73"};
	this.sidHashMap["CalculatorSubSys:73"] = {rtwname: "<S2>/From14"};
	this.rtwnameHashMap["<S2>/From15"] = {sid: "CalculatorSubSys:57"};
	this.sidHashMap["CalculatorSubSys:57"] = {rtwname: "<S2>/From15"};
	this.rtwnameHashMap["<S2>/From16"] = {sid: "CalculatorSubSys:58"};
	this.sidHashMap["CalculatorSubSys:58"] = {rtwname: "<S2>/From16"};
	this.rtwnameHashMap["<S2>/From17"] = {sid: "CalculatorSubSys:59"};
	this.sidHashMap["CalculatorSubSys:59"] = {rtwname: "<S2>/From17"};
	this.rtwnameHashMap["<S2>/From18"] = {sid: "CalculatorSubSys:60"};
	this.sidHashMap["CalculatorSubSys:60"] = {rtwname: "<S2>/From18"};
	this.rtwnameHashMap["<S2>/Goto"] = {sid: "CalculatorSubSys:90"};
	this.sidHashMap["CalculatorSubSys:90"] = {rtwname: "<S2>/Goto"};
	this.rtwnameHashMap["<S2>/Goto1"] = {sid: "CalculatorSubSys:91"};
	this.sidHashMap["CalculatorSubSys:91"] = {rtwname: "<S2>/Goto1"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "CalculatorSubSys:95"};
	this.sidHashMap["CalculatorSubSys:95"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S2>/Out2"] = {sid: "CalculatorSubSys:96"};
	this.sidHashMap["CalculatorSubSys:96"] = {rtwname: "<S2>/Out2"};
	this.rtwnameHashMap["<S2>/Out3"] = {sid: "CalculatorSubSys:97"};
	this.sidHashMap["CalculatorSubSys:97"] = {rtwname: "<S2>/Out3"};
	this.rtwnameHashMap["<S2>/Out4"] = {sid: "CalculatorSubSys:98"};
	this.sidHashMap["CalculatorSubSys:98"] = {rtwname: "<S2>/Out4"};
	this.rtwnameHashMap["<S2>/Out5"] = {sid: "CalculatorSubSys:99"};
	this.sidHashMap["CalculatorSubSys:99"] = {rtwname: "<S2>/Out5"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
