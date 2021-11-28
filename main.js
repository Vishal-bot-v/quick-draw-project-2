quick_draw_data=["boat","airplane","alarm clock","ambulance","ant","anvil","apple","arm","pen","axe","backpack","banana","bandaid","barn","baseball","baseball bat","baseball glove", "basketball","bat","shower","beach","teady bear","face","bed","bee","belt","bench","bycicle","bonoculiers","bird","birthday cake","yarn ball","tomato","book","boomarang","hair","bowtie","bracelet","brain","bread","brigde","tree","broom","bucket","tractor","bus","bush","butterfly","cactus","cake","calculator","calender","camel","camera","t-shirt","fire","candle","canon","paddle boat","car","carrot","castle","cat","fan","gituar","phone","chair","candelier","church","circle","screw","clock","cloud","coffee cup","pizza","computer","cookie","frige","couch","cow","crab","crayon","aligator","crown","yhact","cup","daimond","lemonade stand","ladder","dog","dolphine","dounut","door","dragon","drawers","drill","drum","duck","glasses","ear","elbow","elephant","envolope","eraser","eye","specicles","smily face","heatet fan","feathet","fence","finger","firehigerent","piture","truck","fish","crane","flashight","snandle","lamp","flower","ufo","toe","fork","frog","pan"]
random_number = Math.floor((Math.ramdom()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+Element_of_array;
 
timer_counter = 0;
timer_clock = "";
drawn_sketch = "";
asnwer_holder = "";
score = 0;

sketch = Element_of_array

function draw()
{
    check_sketch();
    if(drawn_sketch == sketch);
    {
        asnwer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score: "+score;

    }
}

function check_sketch()
{
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>400)
    {
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || asnwer_holder == "set")
    {
        timer_check = "";
        asnwer_holder = "";
        updateCanvas();
    }
}

function updateCanvas()
{
    backgroung("white");
    sketch = Element_of_array;
    document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch to be Drawn:"+sketch;
}

function setup()
{
    canvas = createCanvas(280,280);
    background("white");
    canvas.center();
}