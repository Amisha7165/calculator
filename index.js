const display = document.querySelector('#display');
const button = document.querySelectorAll('button');

buttons.foreach((item) => {
    item.oneclick =() => {
        if(item.id == 'clear'){
            display.innertext ='';
        } else if (item.id == 'backspace'){
            let string = display.innertext.tostring();
            display.innertext= string.substr(0, string.length - 1);
        }  else if ( display.innertext != ''&& item.id == 'equal'){
            display.innertext = eval(display.innertext);
        }  else if (display.innertext ==''&& item.id == 'equal'){
           display.innertext ='empty!';
           setTimeout(() => ( display.innertext = ''), 2000);
            
           } else {
            display.innertext += item.id;
           }
        }
    }
})
const themetogglerbtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-Icon');
let isdark = true;
themetogglebtn.oneclick = () => {
    calculator.classList.toggle('dark');
    themetogglebtn.classlist.toggle ('active');
    isdark = !isdark;
}