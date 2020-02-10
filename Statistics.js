class Statistics{
  constructor(){
    this.walletValue=document.querySelector('.wallet')
    this.numberOfGames= document.querySelector('.number');
    this.numberOfWins= document.querySelector('.win');
    this.numberOfLosses= document.querySelector('.loss');
    // console.log(this.walletValue);
   
    this.valueOfGames=0;
    this.valueOfWins=0;
    this.valueOfLosses=0;
    
  }
  render(){
    this.walletValue.textContent=wallet.walletValue;
    this.numberOfWins.textContent=`${this.valueOfWins}`;
    this.numberOfLosses.textContent=`${this.valueOfLosses}`;
    this.numberOfGames.textContent=`${this.valueOfGames}`;
  }

}
const stats = new Statistics();
stats.render();