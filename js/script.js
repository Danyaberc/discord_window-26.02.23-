let showhtml = document.querySelector('.wrapper');

const renderstructure = () => {
   createhtml = `<div class="main_container">
                  <div class="main_block"></div>
                     <div class="container_secondary">
                        <div class="secondary_block">1</div>
                        <div class="secondary_block">2</div>
                        <div class="secondary_block">3</div>
                        <div class="secondary_block">4</div>
                     </div>
                  </div>`;
   showhtml.innerHTML = createhtml;
   const perebor = () => {
      let mainblock = document.querySelector('.main_block')
      let containersecond = document.querySelectorAll('.secondary_block')
      for (let i = 0; i < containersecond.length; i++) {
         containersecond[i].addEventListener('click', () => {
            mainblock.innerHTML = containersecond[i].innerHTML
         })
      }
   }
   perebor()
}
renderstructure()





































































































































// let inp = document.querySelector('.input_text')

// let blockname = document.querySelector('.message')

// let btnPush = document.querySelector('.buttonRun')

// let btnClear = document.querySelector('.buttonClear')

// let gender = document.querySelector('.genderselect')

// let name = "";

// let html = []

// let genimg = [
//    { image: "../img/01.png" },
//    { image: "../img/02.png" },
//    { image: "../img/03.png" },
// ]


// btnPush.addEventListener('click', () => {
//    let name = (inp.value);
//    if (inp.value === '') {
//       return
//    }
//    else if (gender.value === 'male') {
//       html.push({ name: inp.value, image: genimg[0].image });
//       render()
//       return
//    }
//    else if (gender.value === 'female') {
//       html.push({ name: inp.value, image: genimg[1].image });
//       render()
//       return
//    }
//    else if (gender.value === 'other') {
//       html.push({ name: inp.value, image: genimg[2].image });
//       render()
//       return
//    }

// })
// const render = () => {
//    const newhtml = html.map((item) => {
//       structhtml = `<li class="li">${item.name}<img class="img" src="${item.image}"></li>`
//       return structhtml;
//    })

//    blockname.innerHTML = newhtml.join('');
// }

// btnClear.addEventListener('click', () => {
//    html.splice(0)
//    blockname.innerHTML = '';
// })





// // btnPush.addEventListener('click', () => {
// //    newtextinput = textinput.value
// //    init()
// //    render()
// //    choisegender()
// // })

// // btnClear.addEventListener('click', () => {
// //    blockname.innerHTML = '';
// //    html.splice(0)
// // })

// // const init = function () {
// //    const newhtml = html.push(newtextinput)
// //    console.log(html)
// // }

// // const render = function () {
// //    const renderFun = html.map((item) => {
// //       let newname = `<li>${item.image}<img class="img" src="${item.image}"</li> `
// //       return newname
// //    })
// //    blockname.innerHTML = renderFun.join('');
// // }










