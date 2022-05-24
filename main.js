// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// функция подбора подходящих курсов
// нужно помнить что если фильтр пусо, то есть вид requiredRange = [null, null], то проверка чисел с null будет всегда false (искл: 0)
// поэтому если пользователь не ввел фильтр значит мы можем отобразить ему все курсы

// проходимся по массиву courses и сравниваем нижний предел цены в фильтрах и в курсах 
// eсли нижний предел цены фильтра меньше чем нижний предел курса, 
// тогда можно брать верхний предел фильтра и сравнивать его с нижним пределом курса
// (если нижний предел цены курса подойдет -> он будет в пределе цены на курс)


function bestRang(requiredRange)  {
    var result = [];

    for (var i = 0; i < courses.length; i++) {
        if (requiredRange[0] == null && requiredRange[1] == null) {
            return courses;
        }

        if (requiredRange[0] >= courses[i].prices[0]) {
            result.push(courses[i]);
        } else if (requiredRange[1] >= courses[i].prices[0]) {
            result.push(courses[i]);
        } else if (requiredRange[1] == null) {
            result.push(courses[i]);
        }
    }
    return result;
}

 
//Bubble Sort
function rangSort(Arr) {
    // отсортирует чтоб price вида [null, number] был в начале списка
    var index = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i].prices[0] == null) {
            tmp = Arr[index];
            Arr[index] = Arr[i];
            Arr[i] = tmp;
            index++;
        }
    }

    // обычная сортировка пузырьком по возрастанию 
    for (var i = 0; i < Arr.length; i++) {
        for (var j = 0; j < Arr.length - 1 - i; j++) {
            if (Arr[j].prices[0] > Arr[j + 1].prices[0]) {
                tmp = Arr[j + 1];
                Arr[j + 1] = Arr[j];
                Arr[j] = tmp;
            }
            if (Arr[j].prices[0] == Arr[j + 1].prices[0] && Arr[j].prices[1] > Arr[j + 1].prices[1]) {
                tmp = Arr[j + 1];
                Arr[j + 1] = Arr[j];
                Arr[j] = tmp;
            }
        }
    }
  

    return Arr;
}


var Arr = bestRang(requiredRange1);
console.log(rangSort(Arr));
 
 
 
 