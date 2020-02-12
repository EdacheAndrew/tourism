
// var a=10;
// var b=20;
// var c= a+b;
// console.log(c);

// var name ='astrovile'
// var age= '40'
// var location= 'jos'
//  console.log('my name '+ name +' and i am ' + age +' years old and i stay in '+ location + '.')

// console.log(`my name is ${name} and i am ${age} year old and my location is ${location}`);
// var a=4;
// var b=2;
// var c=6;
// var d=(b+c);
// var x=a*d
// console.log(x);
// var a=5;
// var b=4;
// console.log(a%=b);

// var a = 1;
// var b = - 5;
// var c = 6;
// var y = -b + Math.sqrt((b * b) - 4 * a * c) / 2 *a;
// var z = -b - Math.sqrt((b * b) - 4 * a * c) / 2*a;
// console.log(y);
// console.log(z);

// console.log('welcome' + 'to nhub');
// var a= 12;
// var b='books';
// var d=4;
// var c= a + d + b;
// var e=b + a +d;
// console.log(c);
// console.log(e);
 
//=============================== object

// var projector={
//     color:'orange',
//     sound:'vomvom',
//     price:120000
// }

// var x= 2
// var y= x + projector.price;
// console.log(projector);
// console.log(projector.price);
// console.log(y);

// var person = {
//     name : 'john',
//     age : '16',
//     height :'1.4',
//     location : 'jos'
// }
// var car ={
//     color:'black car',
//     modal:'2021',
//     price:20000
// }
// var johnProps =`my name is ${person.name} and i am ${person.age}`;
// var john_car =` i aslo have a ${car.color} and it is model ${car.modal} which cost ${car.price} dollar`;
// var join =johnProps + john_car;
// console.log(join);


// ========================================= array
// var x=[391,302 ,120 , 70 ,492];
// console.log(x);
// console.log(x[0]);
// console.log(x.length);

// var y = x.pop();
// console.log(x);
// console.log(y);
// var z=x.push('push');
// console.log(x);

// ===========================typeof=====
// var a = typeof 'my name' + '...' + typeof 4 + '...' + typeof false + '...' + typeof [1,2,4] + '...' + typeof {name:'clef', age:12};
// console.log(a);


// ==========functions=====================
// function funname(){
//     var x =3;
//     var y =7;
//     var z =x+y;
//     return z;
// }
// var result = funname();
// console.log(result);
// document.write(result);


// function funname(one, two){
//     var sum =one + two;
//     return sum;
// }
// var result = funname(13, 2);
// console.log(result);
// document.write(result);

document.getElementById('output').style.visibility ='hidden';
document.getElementById('lbsInput').addEventListener('input' ,function(e){
    document.getElementById('output').style.visibility = 'visible';
    var lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
})