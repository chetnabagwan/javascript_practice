var arr = ["cat","rabbit",4,"dog","bird"];
var num;
function start(){
    shuffle_array(arr);
    console.log(arr);   
}

function shuffle_array(arr){
    for(var x = arr.length-1;x>0;x--){
        var holder = Math.floor(Math.random()*(x+1));
    }

}