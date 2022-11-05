function CodeDefine() { 
this.def = new Array();
this.def["rt_OneStep"] = {file: "ert_main_c.html",line:36,type:"fcn"};
this.def["main"] = {file: "ert_main_c.html",line:72,type:"fcn"};
this.def["Led_Switch_B"] = {file: "Led_Switch_c.html",line:23,type:"var"};
this.def["Led_Switch_DW"] = {file: "Led_Switch_c.html",line:26,type:"var"};
this.def["Led_Switch_U"] = {file: "Led_Switch_c.html",line:29,type:"var"};
this.def["Led_Switch_Y"] = {file: "Led_Switch_c.html",line:32,type:"var"};
this.def["Led_Switch_step"] = {file: "Led_Switch_c.html",line:35,type:"fcn"};
this.def["Led_Switch_initialize"] = {file: "Led_Switch_c.html",line:57,type:"fcn"};
this.def["Led_Switch_terminate"] = {file: "Led_Switch_c.html",line:105,type:"fcn"};
this.def["B_Led_Switch_T"] = {file: "Led_Switch_h.html",line:39,type:"type"};
this.def["DW_Led_Switch_T"] = {file: "Led_Switch_h.html",line:45,type:"type"};
this.def["ExtU_Led_Switch_T"] = {file: "Led_Switch_h.html",line:50,type:"type"};
this.def["ExtY_Led_Switch_T"] = {file: "Led_Switch_h.html",line:55,type:"type"};
this.def["Led_Switch_LedState_Init"] = {file: "LedState_c.html",line:33,type:"fcn"};
this.def["Led_Switch_LedState_Reset"] = {file: "LedState_c.html",line:44,type:"fcn"};
this.def["Led_Switch_LedState"] = {file: "LedState_c.html",line:55,type:"fcn"};
this.def["B_LedState_Led_Switch_T"] = {file: "LedState_h.html",line:31,type:"type"};
this.def["DW_LedState_Led_Switch_T"] = {file: "LedState_h.html",line:38,type:"type"};
this.def["Led_Switch_SwitchState_Init"] = {file: "SwitchState_c.html",line:31,type:"fcn"};
this.def["Led_Switch_SwitchState_Reset"] = {file: "SwitchState_c.html",line:39,type:"fcn"};
this.def["Led_Switch_SwitchState"] = {file: "SwitchState_c.html",line:47,type:"fcn"};
this.def["B_SwitchState_Led_Switch_T"] = {file: "SwitchState_h.html",line:31,type:"type"};
this.def["DW_SwitchState_Led_Switch_T"] = {file: "SwitchState_h.html",line:37,type:"type"};
this.def["int8_T"] = {file: "rtwtypes_h.html",line:50,type:"type"};
this.def["uint8_T"] = {file: "rtwtypes_h.html",line:51,type:"type"};
this.def["int16_T"] = {file: "rtwtypes_h.html",line:52,type:"type"};
this.def["uint16_T"] = {file: "rtwtypes_h.html",line:53,type:"type"};
this.def["int32_T"] = {file: "rtwtypes_h.html",line:54,type:"type"};
this.def["uint32_T"] = {file: "rtwtypes_h.html",line:55,type:"type"};
this.def["real32_T"] = {file: "rtwtypes_h.html",line:56,type:"type"};
this.def["real64_T"] = {file: "rtwtypes_h.html",line:57,type:"type"};
this.def["real_T"] = {file: "rtwtypes_h.html",line:63,type:"type"};
this.def["time_T"] = {file: "rtwtypes_h.html",line:64,type:"type"};
this.def["boolean_T"] = {file: "rtwtypes_h.html",line:65,type:"type"};
this.def["int_T"] = {file: "rtwtypes_h.html",line:66,type:"type"};
this.def["uint_T"] = {file: "rtwtypes_h.html",line:67,type:"type"};
this.def["ulong_T"] = {file: "rtwtypes_h.html",line:68,type:"type"};
this.def["char_T"] = {file: "rtwtypes_h.html",line:69,type:"type"};
this.def["uchar_T"] = {file: "rtwtypes_h.html",line:70,type:"type"};
this.def["byte_T"] = {file: "rtwtypes_h.html",line:71,type:"type"};
this.def["creal32_T"] = {file: "rtwtypes_h.html",line:81,type:"type"};
this.def["creal64_T"] = {file: "rtwtypes_h.html",line:86,type:"type"};
this.def["creal_T"] = {file: "rtwtypes_h.html",line:91,type:"type"};
this.def["cint8_T"] = {file: "rtwtypes_h.html",line:98,type:"type"};
this.def["cuint8_T"] = {file: "rtwtypes_h.html",line:105,type:"type"};
this.def["cint16_T"] = {file: "rtwtypes_h.html",line:112,type:"type"};
this.def["cuint16_T"] = {file: "rtwtypes_h.html",line:119,type:"type"};
this.def["cint32_T"] = {file: "rtwtypes_h.html",line:126,type:"type"};
this.def["cuint32_T"] = {file: "rtwtypes_h.html",line:133,type:"type"};
this.def["pointer_T"] = {file: "rtwtypes_h.html",line:151,type:"type"};
}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["ert_main_c.html"] = "../ert_main.c";
	this.html2Root["ert_main_c.html"] = "ert_main_c.html";
	this.html2SrcPath["Led_Switch_c.html"] = "../Led_Switch.c";
	this.html2Root["Led_Switch_c.html"] = "Led_Switch_c.html";
	this.html2SrcPath["Led_Switch_h.html"] = "../Led_Switch.h";
	this.html2Root["Led_Switch_h.html"] = "Led_Switch_h.html";
	this.html2SrcPath["Led_Switch_private_h.html"] = "../Led_Switch_private.h";
	this.html2Root["Led_Switch_private_h.html"] = "Led_Switch_private_h.html";
	this.html2SrcPath["Led_Switch_types_h.html"] = "../Led_Switch_types.h";
	this.html2Root["Led_Switch_types_h.html"] = "Led_Switch_types_h.html";
	this.html2SrcPath["LedState_c.html"] = "../LedState.c";
	this.html2Root["LedState_c.html"] = "LedState_c.html";
	this.html2SrcPath["LedState_h.html"] = "../LedState.h";
	this.html2Root["LedState_h.html"] = "LedState_h.html";
	this.html2SrcPath["SwitchState_c.html"] = "../SwitchState.c";
	this.html2Root["SwitchState_c.html"] = "SwitchState_c.html";
	this.html2SrcPath["SwitchState_h.html"] = "../SwitchState.h";
	this.html2Root["SwitchState_h.html"] = "SwitchState_h.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "rtwtypes_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"ert_main_c.html","Led_Switch_c.html","Led_Switch_h.html","Led_Switch_private_h.html","Led_Switch_types_h.html","LedState_c.html","LedState_h.html","SwitchState_c.html","SwitchState_h.html","rtwtypes_h.html"];
