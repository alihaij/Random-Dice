
var player1 = prompt('Player1 name: ')
var player2 = prompt('Player2 name: ')
document.querySelector("#player1").innerHTML = player1;
document.querySelector("#player2").innerHTML = player2;
img_array = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
]

function get_random_img() {
  index_img1 = Math.floor(Math.random() * img_array.length);
  index_img2 = Math.floor(Math.random() * img_array.length);
  select_img_1 = img_array[index_img1];
  select_img_2 = img_array[index_img2];
  document.getElementById('img1').src = `img/${select_img_1}`
  document.getElementById('img2').src = `img/${select_img_2}`

  if(index_img1>index_img2){
    document.querySelector("h1").innerHTML = player1+" Wins!";
  }
  else if (index_img2>index_img1) {
    document.querySelector("h1").innerHTML = player2+" Wins!";
  }else{
    document.querySelector("h1").innerHTML = "Draw!";
  }

}
