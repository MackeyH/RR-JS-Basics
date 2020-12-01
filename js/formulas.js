// Basic math formulaas


           // code for addition
            function addition(num1, num2){
            return -1;
          }

              // ex 1
                function addition(num1, num2){
                  let answer = num1 + num2;
                  console.log(answer);
                }

                addition (5,10);

              // ex 2

                function add(num1, num2) {
                  let answer = num1 + num2;
                  return answer;
                }

                let solution = add(6,3);
                console.log(solution);
              
              // ex 3
                function adding(num1,num2) {
                  return num1 + num2;
                }
                console.log(adding(6,3));

          // end code for addition



          // Code for Subtraction
            function subtraction(num1, num2){
            return -1;
              }

              // ex 1
                function subtraction(num1, num2){
                  let answer = num1 - num2;
                  console.log(answer);

                }

                subtraction (10,5);

              // ex 2

                function subtract(num1, num2){
                  let answer = num1 - num2;
                  return answer;
                }

                let solution = subtract(10,5);
                console.log(solution);

              // ex 3
                
                function subing(num1, num2) {
                  return num1 - num2;
                }
                console.log(subing(10,5));

          // End code for subtraction



          // Code for multiplication
            function multiplication(num1, num2){
            return -1;
          }

              // ex 1
                function multiplication(num1, num2){
                  let answer = num1 * num2;
                  console.log(answer);
                }
                multiplication(10,5);

              // ex 2

                function multiply(num1, num1){
                  let answer = num1 * num2;
                  return answer;
                }
                let solution = multiply(5,10);
                console.log(solution);

              // ex 3

                function multiplying(num1, num2) {
                  return num1 * num2;
                }
                console.log(multiplying(10,5));

          // end of code 



          // Code for Division
            function division(num1, num2){
            return -1;
          }

              // ex

                function division(num1, num2) {
                  return num1 / num2;
                }
                console.log(division(10,5));

          // end of code


// Area formulaas


          // Code for Square
            function areaSquare(side){
            return -1;
          }

              // ex

                function areaSquare(side) {
                  let answer = (Math.pow(side));
                  console.log(Math.pow(side, 2));
                }
                areaSquare(4);


              // not working
              function areaSquare (side); {
                return Math.pow(side, 2);
              }
              console.log(areaSquare(4));
              // not working

          // end of code



          // Code areaRectangle
              function areaRectangle(length, width){
                return -1;
              }

              // ex

              function areaRectangle(num1, num2) {
                return num1 * num2;
              }
              console.log(areaRectangle (4,5));

          // end of code



          // Code for Parallilogram
              function areaParallelogram(base, height){
                return -1;
              }

              // ex

              function areaParallelogram(num1, num2) {
                return num1 * num2;  
              }
              console.log(areaParallelogram (5, 10));

          // end of code



          // Code for Triangle Area
              function areaTriangle(base, height){
                return -1;
              }

              // ex

              function areaTriangle (base, height) {
                let answer = (base * height) / (2);
                console.log(answer);
              }
              areaTriangle(20,12);

          // end of code



          // Code for Circle Area
              function Circle(radius){
                return -1;
              }

              // ex

              function circle(radius) {
                let answer = Math.PI * Math.pow(radius, 2);
                console.log(Math.PI * (Math.pow(radius, 2)));
              }
              circle(20);

          //  end of code



          // Sphere Area
              function Sphere(radius){
                return -1;
              }

              // ex

              function sphere (radius) {
                let answer = 4 * (Math.PI * (Math.pow(radius, 2)));
                console.log(4 * (Math.PI * (Math.pow(radius, 2))));
              }
              sphere(20);

          // End of code



// Surface Area formulas


          // Cube Surface Area
              function surfaceAreaCube(side){
                return -1;
              }

              // ex

              function surfaceAreaCube(side) {
                let answer = 6 * (Math.pow(side, 2));
                console.log(6 * (Math.pow(side, 2)));
              }

              surfaceAreaCube(20);

          // End of code



          // Cylinder Surface Area

              function surfaceAreaCylinder(radius, height){
                return -1;
              }

              // ex

              function surfaceAreaCylinder(radius, height) {
                let answer = 2 * (Math.PI * radius * height) + 2 * Math.PI * (Math.pow(radius, 2));
                console.log(2 * (Math.PI * radius * height) + 2 * Math.PI * (Math.pow(radius, 2)));
              }

              surfaceAreaCylinder(20,30);

          // end of code



// Perimeter formulas
              

          // Square Perimeter
              function perimeterSquare(side){
                return -1;
              }

              // ex

              function perimeterSquare(side) {
                let answer = 4 * side;
                console.log(4 * side);
              }

              perimeterSquare(20);

          // end of code



          // Rectangle Perimeter
              function perimeterRectangle(length, height){
                return -1;
              }

              // ex

              function perimeterRectangle(length, height) {
                let answer = 2 * (length + height);
                console.log (2 * (length + height));
              }

              perimeterRectangle (30, 10);

          // end of code



          // Triangle Perimeter

              function perimeterTriangle(side1, side2, side3){
                return -1;
              }

              // ex

              function perimeterTriangle(side1, side2, side3) {
                let answer = side1 + side2 + side3;
                console.log (side1 + side2 + side3);
              }

              perimeterTriangle(5,15,11);

          //  end of code



          // Circle Perimeter

              function perimeterCircle(diameter){
                return -1;
              }

              // ex

              function perimeterCircle(diameter) {
                let answer = Math.PI * diameter;
                console.log (Math.PI * diameter);
              }

              perimeterCircle(10);


              // I looked up the Perimeter Circle Formula and found this. I wasn't sure which was the correct formula so I did both --> C = 2 π r

              // function perimeterCircle(radius) {
              //   let answer = 2 * Math.PI * radius;
              //   console.log (2 * Math.PI * radius);
              // }

              // perimeterCircle(10);

          // end of code



// Volume formulas


          // Cube Volume

              function volumeCube(side){
                return -1;
              }

              // ex

              function volumeCube(side) {
                let answer = Math.pow(side, 3);
                console.log(Math.pow(side, 3));
              }

              volumeCube(12);

          // end of code



          // Rectangular Volume

              function volumeRectangular(length, width, height){
                return -1;
              }

              // ex

              function volumeRectangular(length, width, height) {
                let answer = length * width * height;
                console.log(length * width * height);
              }

              volumeRectangular(10, 7, 9);

          // end of code



          // Cylinder Volume

              function volumeCylinder(radius, height){
                return -1;
              }

              // ex

              function volumeCylinder(radius, height) {
                let answer = Math.PI * Math.pow(radius, 2) * height;
                console.log(Math.PI * Math.pow(radius, 2) * height);
              }

              volumeCylinder(5,20);

          // end of code

          