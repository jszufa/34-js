string1 = "Uwielbiam JavaScript";

string2 = "Jestem świetnym programistą";

 function longer (z1, z2){
    if (z1.length > z2.length){
        return z1;
    }
    else if (z1.length < z2.length) {
        return z2;
    }
    else {
        return 'Stringi nie różnią się długością';
    }
 };

console.log(longer(string1, string2));