function pairElement(str) {
  let solos = str.split('');
  let adnTotal = [];

  for(let i = 0;i<solos.length;i++){
    switch(solos[i]){
      case 'A':
        adnTotal.push(['A','T']);
        break;
      case 'T':
        adnTotal.push(['T','A']);
        break;
      case 'C':
        adnTotal.push(['C','G']);
        break;
      case 'G':
        adnTotal.push(['G','C']);
        break;
    }
  }
  console.log(adnTotal);
  return adnTotal;
}

pairElement("GCG");
