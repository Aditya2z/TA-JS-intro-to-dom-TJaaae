/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(labelName, type = "text") {
label = document.createElement(`label`);
label.innerText = labelName + `:`;
let input = document.createElement(`input`);

label.append(input);
input.type = type;

return label;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(labelName, type = "text") {
  let label = `<label> ${labelName}: <input type = "${type}" > <label>`;
  return label;
  }

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(array) {
  let list = document.createElement(`ul`);
  array.forEach(element => {
    let li = document.createElement(`li`);
    li.innerText = element;
    list.append(li);
  });
  return list;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(array) {
  let list = document.createElement(`ul`);
  array.forEach(element => {
    let li = document.createElement(`li`);

    let p = document.createElement(`p`);
    p.innerText = element.name;
    li.append(p);

    let input = document.createElement(`input`);
    input.type = "checkbox";

      if(element.isDone === true) {
        input.setAttribute('checked',``);
      }

    input.name = "";
    input.id = "";
    li.append(input);
    
      if(element.isDone === false) {
        let span = document.createElement(`span`);
        span.innerText = "X";
        li.append(span);
      }

    list.append(li);
  })
  return list;
}


// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
