var userName = prompt ('type your name please ','name');

document.write ('WELCOME ' + userName);


document.write('<img  width = 100 , lenghth= 100 src ="https://e7.pngegg.com/pngimages/891/663/png-clipart-blushing-emoji-emoticon-smiley-emoji-face-embarrassment.png">');


var Q = prompt ( 'do you like fruit salad y/n');

if (Q == 'y'){alert ('GREAT !!')}

else if (Q== 'n'){ alert ('i invit you to try it ')} 

else { alert('you are in right place')} ;


var choose = prompt ( 'what do you prefer normal or whith cream ','n/c' ) ;
while (!(choose== 'n' || choose =='c'))
{ choose = prompt('please enter n or c')} ;


alert  ( 'Im happy to help you' + userName) ;

var rateUs = prompt('please rate us between 1-5 ','5');

if (rateUs > 0 && rateUs<= 5){ for (i=0 ; i < rateUs ; i++)
    {
    document.write ('<img width =50 lenghth =50  src=  https://webstockreview.net/images/star-clip-art-cute-15.png > ') }
} 
else alert ( 'we  hope you rate us at next time :') ;






