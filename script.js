window.onload = function () {

    function verify(text) {
        console.log(text);

    }


    console.group('verify');
    console.log('verify("---(++++)----") -> 1 ', verify("---(++++)----") )
    console.log('verify("") -> 1',  verify(""))
    console.log('verify("before ( middle []) after ") -> 1',  verify("before ( middle []) after "))
    console.log('verify(") (") -> 0',  verify(") ("))
    console.log(' verify("<(   >)") -> 0', verify("<(   >)") )
    console.log('verify("(  [  <>  ()  ]  <>  )") -> 1',  verify("(  [  <>  ()  ]  <>  )"))
    console.log('verify("   (      [)") -> 0 ', verify("   (      [)") )


    console.groupEnd();


};