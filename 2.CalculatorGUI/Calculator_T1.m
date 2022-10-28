function varargout = Calculator_T1(varargin)
% CALCULATOR_T1 MATLAB code for Calculator_T1.fig
%      CALCULATOR_T1, by itself, creates a new CALCULATOR_T1 or raises the existing
%      singleton*.
%
%      H = CALCULATOR_T1 returns the handle to a new CALCULATOR_T1 or the handle to
%      the existing singleton*.
%
%      CALCULATOR_T1('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in CALCULATOR_T1.M with the given input arguments.
%
%      CALCULATOR_T1('Property','Value',...) creates a new CALCULATOR_T1 or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before Calculator_T1_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to Calculator_T1_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help Calculator_T1

% Last Modified by GUIDE v2.5 26-Oct-2022 13:45:27

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @Calculator_T1_OpeningFcn, ...
                   'gui_OutputFcn',  @Calculator_T1_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before Calculator_T1 is made visible.
function Calculator_T1_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to Calculator_T1 (see VARARGIN)

% Choose default command line output for Calculator_T1
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes Calculator_T1 wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = Calculator_T1_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;



function fnedit_Callback(hObject, eventdata, handles)
% hObject    handle to fnedit (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of fnedit as text
%        str2double(get(hObject,'String')) returns contents of fnedit as a double


% --- Executes during object creation, after setting all properties.
function fnedit_CreateFcn(hObject, eventdata, handles)
% hObject    handle to fnedit (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in addButton.
function addButton_Callback(hObject, eventdata, handles)
% hObject    handle to addButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
a=str2double(get(handles.in1,'string'));
b=str2double(get(handles.in2,'string'));
c=a+b;
if isnan(c)
    set(handles.message,'string','Please enter Valid Inputs');
end
set(handles.out,'string',num2str(c));
% Hint: get(hObject,'Value') returns toggle state of addButton


% --- Executes on button press in subbutton.
function subbutton_Callback(hObject, eventdata, handles)
% hObject    handle to subbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
a=str2double(get(handles.in1,'string'));
b=str2double(get(handles.in2,'string'));
c=a-b;
if isnan(c)
    set(handles.message,'string','Please enter Valid Inputs');
end
set(handles.out,'string',num2str(c));
% Hint: get(hObject,'Value') returns toggle state of subbutton


% --- Executes on button press in multbutton.
function multbutton_Callback(hObject, eventdata, handles)
% hObject    handle to multbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
a=str2double(get(handles.in1,'string'));
b=str2double(get(handles.in2,'string'));
c=a*b;
if isnan(c)
    set(handles.message,'string','Please enter Valid Inputs');
end
set(handles.out,'string',num2str(c));

% Hint: get(hObject,'Value') returns toggle state of multbutton


% --- Executes on button press in divbutton.
function divbutton_Callback(hObject, eventdata, handles)
% hObject    handle to divbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
a=str2double(get(handles.in1,'string'));
b=str2double(get(handles.in2,'string'));
if b==0
    set(handles.message,'string','Undefined:Dividing by zero');
    set(handles.out,'string','Error');
else
    c=a/b;
    if isnan(c)
        set(handles.message,'string','Please enter Valid Inputs');
    end
    set(handles.out,'string',num2str(c));
end
% Hint: get(hObject,'Value') returns toggle state of divbutton



function in1_Callback(hObject, eventdata, handles)
% hObject    handle to in1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of in1 as text
%        str2double(get(hObject,'String')) returns contents of in1 as a double


% --- Executes during object creation, after setting all properties.
function in1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to in1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function in2_Callback(hObject, eventdata, handles)
% hObject    handle to in2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of in2 as text
%        str2double(get(hObject,'String')) returns contents of in2 as a double


% --- Executes during object creation, after setting all properties.
function in2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to in2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --------------------------------------------------------------------
function uipanel5_ButtonDownFcn(hObject, eventdata, handles)
% hObject    handle to uipanel5 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)



function out_Callback(hObject, eventdata, handles)
% hObject    handle to out (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of out as text
%        str2double(get(hObject,'String')) returns contents of out as a double


% --- Executes during object creation, after setting all properties.
function out_CreateFcn(hObject, eventdata, handles)
% hObject    handle to out (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in clrbutton.
function clrbutton_Callback(hObject, eventdata, handles)
% hObject    handle to clrbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
set(handles.in1,'string','');    
set(handles.in2,'string','');
set(handles.out,'string','');
set(handles.message,'string','');


% --- Executes on button press in vecclr.
function vecclr_Callback(hObject, eventdata, handles)
% hObject    handle to vecclr (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)



function vecin1_Callback(hObject, eventdata, handles)
% hObject    handle to vecin1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of vecin1 as text
%        str2double(get(hObject,'String')) returns contents of vecin1 as a double


% --- Executes during object creation, after setting all properties.
function vecin1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to vecin1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function vecin2_Callback(hObject, eventdata, handles)
% hObject    handle to vecin2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of vecin2 as text
%        str2double(get(hObject,'String')) returns contents of vecin2 as a double


% --- Executes during object creation, after setting all properties.
function vecin2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to vecin2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in togglebutton7.
function togglebutton7_Callback(hObject, eventdata, handles)
% hObject    handle to togglebutton7 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of togglebutton7


% --- Executes on button press in togglebutton8.
function togglebutton8_Callback(hObject, eventdata, handles)
% hObject    handle to togglebutton8 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of togglebutton8


% --- Executes on button press in togglebutton9.
function togglebutton9_Callback(hObject, eventdata, handles)
% hObject    handle to togglebutton9 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of togglebutton9


% --- Executes on button press in togglebutton10.
function togglebutton10_Callback(hObject, eventdata, handles)
% hObject    handle to togglebutton10 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of togglebutton10



function vecout_Callback(hObject, eventdata, handles)
% hObject    handle to vecout (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of vecout as text
%        str2double(get(hObject,'String')) returns contents of vecout as a double


% --- Executes during object creation, after setting all properties.
function vecout_CreateFcn(hObject, eventdata, handles)
% hObject    handle to vecout (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in plotbutton.
function plotbutton_Callback(hObject, eventdata, handles)
% hObject    handle to plotbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
p=get(handles.fnedit,'string');
x=1:0.1:20;
axes(handles.axes1);
plot(eval(p));


% --- Executes on button press in axesclrbutton.
function axesclrbutton_Callback(hObject, eventdata, handles)
% hObject    handle to axesclrbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
hold off;
plot(0);


% --- Executes on button press in sinbutton.
function sinbutton_Callback(hObject, eventdata, handles)
% hObject    handle to sinbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=0:1:360;
axes(handles.axes1);
plot(sind(x),'b');


% Hint: get(hObject,'Value') returns toggle state of sinbutton


% --- Executes on button press in cosbutton.
function cosbutton_Callback(hObject, eventdata, handles)
% hObject    handle to cosbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=0:1:360;
axes(handles.axes1);
plot(cosd(x),'r');
hold on;
% Hint: get(hObject,'Value') returns toggle state of cosbutton


% --- Executes on button press in tanbutton.
function tanbutton_Callback(hObject, eventdata, handles)
% hObject    handle to tanbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=0:1:360;
axes(handles.axes1);
plot(tand(x),'g');

% Hint: get(hObject,'Value') returns toggle state of tanbutton


% --- Executes on button press in radiobutton5.
function radiobutton5_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton5 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton5


% --- Executes on button press in logbutton.
function logbutton_Callback(hObject, eventdata, handles)
% hObject    handle to logbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=1:0.1:20;
axes(handles.axes1);
plot(log(x));
% Hint: get(hObject,'Value') returns toggle state of logbutton


% --- Executes on button press in expbutton.
function expbutton_Callback(hObject, eventdata, handles)
% hObject    handle to expbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=1:0.1:20;
axes(handles.axes1);
plot(exp(x));
% Hint: get(hObject,'Value') returns toggle state of expbutton


% --- Executes on button press in lognegbutton.
function lognegbutton_Callback(hObject, eventdata, handles)
% hObject    handle to lognegbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=1:0.1:20;
axes(handles.axes1);
plot(log(-x));

% Hint: get(hObject,'Value') returns toggle state of lognegbutton


% --- Executes on button press in expnegbutton.
function expnegbutton_Callback(hObject, eventdata, handles)
% hObject    handle to expnegbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
x=1:0.1:20;
axes(handles.axes1);
plot(exp(-x));

% Hint: get(hObject,'Value') returns toggle state of expnegbutton


% --- Executes on button press in checkbox4.
function checkbox4_Callback(hObject, eventdata, handles)
% hObject    handle to checkbox4 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of checkbox4


% --- Executes on button press in checkbox5.
function checkbox5_Callback(hObject, eventdata, handles)
% hObject    handle to checkbox5 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of checkbox5


% --- Executes on button press in checkbox6.
function checkbox6_Callback(hObject, eventdata, handles)
% hObject    handle to checkbox6 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of checkbox6


% --- Executes on button press in holdbutton.
function holdbutton_Callback(hObject, eventdata, handles)
% hObject    handle to holdbutton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
hold on;
% Hint: get(hObject,'Value') returns toggle state of holdbutton
