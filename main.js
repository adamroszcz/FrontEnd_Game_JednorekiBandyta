class Main{
  constructor(){
    this.btnPlay = document.getElementById('start');
    this.input = document.getElementById('bid');
    this.colorArray = ['red','green','blue'];
   this.drawColors= [];
    this.divsColor=document.getElementsByClassName('color');
    this.betValue=0;

  }
  CheckCanPlay(){
  //  console.log(main.input.value)
  main.betValue=main.input.value;
   if(main.input.value>0){
    if(main.input.value<=wallet.walletValue){
      wallet.walletValue-=main.betValue;
      main.DrawColors();
      
    }else alert('You do not have enough money!');
   }else alert('enter the bet !')
  }

 DrawColors(){
  for(let i = 0 ; i<main.colorArray.length;i++){    
    const number = Math.floor(Math.random()*main.colorArray.length);
    main.drawColors[i]=main.colorArray[number];
    main.divsColor[i].style.backgroundColor=main.drawColors[i];
 } 
 stats.valueOfGames++;
 
  main.CheckWhoWin();
 
}
CheckWhoWin(){
  console.log(main.drawColors[0]);
  console.log(main.drawColors[1]);
  console.log(main.drawColors[2]);
  if(main.drawColors[0]==main.drawColors[1]&&main.drawColors[1]==main.drawColors[2]&&main.drawColors[0]==main.drawColors[2]||main.drawColors[0]!=main.drawColors[1]&&main.drawColors[1]!=main.drawColors[2]&&main.drawColors[0]!=main.drawColors[2]) {stats.valueOfWins++;
    wallet.walletValue+=main.betValue*2;
    main.betValue=0;
    
  }else{
    stats.valueOfLosses++;
  }
  stats.render();
}

}
const main = new Main();
main.btnPlay.addEventListener('click',main.CheckCanPlay)