// add this to top of polyfills.845d83d94e685fd554f9.js
let setTimeout=(func,time)=>{
    if (!func.toString().includes("{if(9999===")) return window.setTimeout(func,time);
    func();
    return 0;
};
