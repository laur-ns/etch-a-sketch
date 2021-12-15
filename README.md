# TOP-etch-a-sketch

Etch a sketch project.
[Live Demo](https://laur-ns.github.io/TOP-etch-a-sketch)
__________

### Planning stage:
get the width of sketchbox
add eventlisteners to each button
when button grid size is clicked, display prompt

user enters number of squares on one row

take width of sketchbox container
divide it by userinput, this will be the width of each square
clear the current grid
use a for loop to loop until (userinput * userinput)

for each loop, append a new square with a width specified in line 10
and add event handlers for each square on mousedown

write a function for that event handler that will append a class
to each square
