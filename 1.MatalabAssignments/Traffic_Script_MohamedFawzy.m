clc;    % Clear the command window.

%% black rectangle as background.. Using build-in rectangle function (form Help)
% rectangle('Position',pos,'Curvature',cur)
%       Specify pos as a four-element vector of the form [x y w h] in data units.
%       specify cur as a two-element vector of the form [horizontal vertical]...
%       For the same length of curvature along all sides, specify cur as a scalar value...
%       Specify values between 0 (no curvature) and 1 (maximum curvature). Use [1 1] to create an ellipse or circle.
%       The function plots into the current axes without clearing existing content from the axes.

%% array of position and colors
% Rectangle hight is 4, circles centers are 1, 2 ,3
% circle of radius 1 should start from x=0.5 , y=0.25,1.5,2.75

pos_red=[0.5 2.75 1 1];
pos_yellow=[0.5 1.5 1 1];
pos_green=[0.5 0.25 1 1];
pos=[pos_red;pos_yellow ;pos_green];
c_color=['r';'y';'g']; %'g' for green  'y' for yellow   'r' for red


%% Init rectangle
rectangle('Position', [0 0 2 4],'Curvature', 0.1,'FaceColor', 'k'); % 'k'for black

%% make a rotating circle of grey color
i=1;
while(1)
    rectangle('Position', pos(3,:),'Curvature', 1,'FaceColor', darkGray); 
    rectangle('Position', pos(2,:),'Curvature', 1,'FaceColor', darkGray); 
    rectangle('Position', pos(1,:),'Curvature', 1,'FaceColor', darkGray); 
    rectangle('Position', pos(i,:),'Curvature', 1,'FaceColor', c_color(i));
    %adjusting plot configs
    axis equal
    xlim([-0.5, 2.5]);
    ylim([-0.5, 4.5]);
    pause(1);
    i=i+1;
    if i==4
        i=1;
    end
end

