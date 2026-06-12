let part1
let part2
let part3
let part4
let part5
let hinge1
let hinge2
let hinge3
let rope
let proj
 let screw1

function setup (){
	new Canvas(700, 700, 'fullscreen')

    function environment(){
        world.gravity.y = 9.81
        let floor = new Sprite(350, 500, 1000, 10, STATIC)
    }
    
    environment()

    function trebuchet(){
       part1 = new Sprite(350, 470, 350, 40)
       part2 = new Sprite(350, 300, 50, 300)
       screw1 = new GlueJoint(part1, part2)
       part3 = new Sprite(350, 200, 450, 40)
       let hinge1 = new HingeJoint(part2, part3)
       hinge1.offsetA.x = 350
       hinge1.offsetA.y = 250
       hinge1.offsetB.x = part3.x
       hinge1.offsetB.y = part3.y

          debug = true
    }

    trebuchet()

}



world.gravity.y = 10;




function update() {
    background('skyblue')

if ((mouse.pressed())){

    new Sprite(mouse.x, mouse.y, 30, 30)

    

}

}
