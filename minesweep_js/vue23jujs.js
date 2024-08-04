


const app = Vue.createApp({
    data(){
        return{
            name:["o","me","new"],
            showname: true,
            mines:[{msg:"safe",v:true},{msg:"Mine!!",v:false} ],
            //for (let i=0; i<3; i++){
                //for(let j=0; j<3; j++){
                   // ricj: true
            x : 0,
            y : 0,
            n : 0,
            win: false,
            t : 9,
            re : 0,
            ids:[{id:"r1c1",
                val:false,
            active: false},
                {
                id:"r1c2",val:false, active: false},
                {id:"r1c3",val:false, active: false },
                {id:"r2c1",val:false, active: false},
                {id:"r2c2",val:false, active: false},
                {id:"r2c3",val:false, active: false},{id:"r3c1",val:false, active: false},{id:"r3c2",val:false, active: false},
                {id:"r3c3",val:false, active: false}],
            books:[{
                title:"flight",
                author:"their fsv",
                isfav:true
            },
        {
            title:"the wind",
            author:"guiseppe",
            isfav:true
        }],
        url:"https://vuejs.org/guide/essentials/class-and-style.html"
    }
},
    
      

    methods:{
        new_name(){
            this.name= "they"

        },
        changefav(a){
            a.isfav = !a.isfav
        },
        change(){
            this.showname = !this.showname
        },
        log(e){
            console.log(e)
            
        },
        move(e){
            this.x = e.screenX
            this.y = e.screenY


        },
        activate(ab){
            const r1c1 = true
            this.ab = !this.ab  //this should be working
            console.log(this.r1c1)

        },
        end(x){
            if(x === "w"){
               console.log("win")
               this.win = true
               //const confetti = new JSConfetti
               //confetti.addConfetti() // give a button to click
            }
            
        },

        start(){
            this.n =0
            this.win = false
            this.t = 9
            this.re = 0
            for (i of this.ids){ // of and in
                //let state = document.getElementById(i)
                const r = Math.random()
                i.active = false
                
                if (r<0.5){
                    i.val = true; 
                    this.n = this.n+1 
                    this.re = 9-this.n           // means mine
                } else{
                    i.val = false;
                }
                console.log(i.val)
                //console.log(i)
                console.log(r)
                }
                console.log(this.n) 
            },
            game(){
                for (i of this.ids){

                }
            },
        minecheck(a){
            this.ids[a].active = !this.ids[a].active
            if (this.t>this.n) {
                
            if (this.ids[a].val === true){
                 this.mines[0].v = false
                 console.log(this.mines[0].v)
                 for(i of this.ids){
                    i.val = false // reset the game and the ids.
                 }
                 console.log(this.ids)
                 
                

            } else {
                this.mines[0].v = true
                this.t = this.t-1
                this.re--
                console.log(this.t)
                if (this.t === this.n){
                    this.end("w")

                }
                console.log(this.ids[a].id)
            }
        }

        }

        }
    
})




app.mount("#app")