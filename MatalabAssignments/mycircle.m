function circle = mycircle(x_center,y_center, radius,color)
    theta = 0:1:360;
    x=radius *cosd(theta)+x_center;
    y=radius*sind(theta)+y_center;
    plot(x,y,'r.');
    fill(x,y,color);
    hold on
end