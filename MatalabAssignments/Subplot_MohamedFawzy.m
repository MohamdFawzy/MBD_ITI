%% x_init
x = linspace(0,360);
%% plot 1
subplot(2,2,1)
y1= sind(x);
plot(x,y1)
title('Subplot 1: sin(x)')
%% plot 2
subplot(2,2,2)
y2= cosd(x);
plot(x,y2)
title('Subplot 1: cos(x)')
%% plot 3
subplot(2,2,3)
y3=tand(x);
plot(x,y3)
title('Subplot 1: tan(x)')
%% plot 4
subplot(2,2,4)
y4= exp(-x);
plot(x,y4)
title('Subplot 1: e(-x)')