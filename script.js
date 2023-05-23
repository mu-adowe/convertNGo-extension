

// script that listens to highlighted text and sends back response
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.method == "getSelection")
      sendResponse({ data: window.getSelection().toString() });
    else
      sendResponse({});
  }
);

// var conv = document.createElement("button")
// conv.id = "cv"
// conv.innerHTML = "now"
// document.body.appendChild(conv);

// var button = document.createElement("button");
// const fromIn = document.createElement("input");
// fromIn.id = "selector";
// const dL = document.createElement("datalist");
// dL.id = 'select-from';
// measurements.forEach(element => {
//   let hm = document.createElement("option");
//   hm.value = element.name;
//   //hm.innerHTML = element.name;
//   dL.appendChild(hm);
// });

// fromIn.setAttribute("list", 'select-from')

// button.id = "f";
// button.innerHTML = "convert";
// var divMain = document.createElement('div');
// divMain.id = 'dm';
// divMain.appendChild(fromIn);
// divMain.appendChild(dL);
// // divMain.appendChild(dh);

// divMain.appendChild(button);

// document.body.appendChild(divMain);


// range = null;
// fragment = null;
// sel = null;
// prev = null;

// function saveSelection() {
//   if (window.getSelection) {
//     sel = window.getSelection();
//     if (sel.getRangeAt && sel.rangeCount) {
//       return sel.getRangeAt(0);
//     }
//   } else if (doc.selection && doc.selection.createRange) {
//     return doc.selection.createRange();
//   }
//   return null;
// }

// function restoreSelection(range) {
//   if (range) {
//     if (window.getSelection) {
//       var sel = window.getSelection();
//       sel.removeAllRanges();
//       sel.addRange(range);
//     } else if (document.selection && range.select) {
//       range.select();
//     }
//   }
// }

// document.getElementById('dm').addEventListener('mousedown', e => {
//   restoreSelection(prev)
// })


// var r;
// var relative;
// var fromSelector;
// document.addEventListener('mouseup', e => {

//   sel = window.getSelection();
//   r = sel.getRangeAt(0).getBoundingClientRect();
//   relative = document.body.parentNode.getBoundingClientRect();
//   var ele = document.getElementById('cv');
//   oRange = sel.getRangeAt(0); //get the text range
//   oRect = oRange.getBoundingClientRect();

//   if (sel.toString().length) {
//     ele.style.top = (r.bottom - relative.top) + 'px'//this will place ele below the selection
//     ele.style.right = -(r.right - relative.right) + 'px'
//     ele.style.display = "block"
//     //prev = saveSelection()
//   }
//   else {
//     if (!document.getElementById('dm').contains(e.target)) {
//       ele.style.display = "none"
//       document.getElementById('dm').style.display = "none"
//     }
//   }


// });



// const convert = document.getElementById('f');
// const para = document.createElement("input");
// para.id = 'k';
// divMain.appendChild(para);
// var newRes = [];
// var exists;

// document.getElementById("cv").addEventListener('click', e => {
//   r = sel.getRangeAt(0).getBoundingClientRect();
//   relative = document.body.parentNode.getBoundingClientRect();
//   document.getElementById('dm').style.top = (r.bottom - relative.top + 20) + 'px'//this will place ele below the selection
//   document.getElementById('dm').style.right = -(r.right - relative.right) + 'px'
//   document.getElementById('dm').style.display = "block"
//   var find = sel.toString();
//   fromSelector = find.substring(find.indexOf(find.match(/([a-zA-Z])/)[0]));
//   alert(fromSelector)
//   exists = measurements.findIndex(r => r.types.includes(fromSelector.toLowerCase()))
//   alert(exists)
//   //    if(exists > -1)
//   //     {

//   //         document.getElementById('selector').value = measurements[exists].name
//   //         newRes = measurements.filter(n => n.category == measurements[exists].category)
//   //     }
//   //     else
//   //     {
//   //     document.getElementById('selector').value = measurements[0].name
//   //     newRes = measurements.filter(n => n.category == measurements[0].category)
//   //     alert("doesnt exist")
//   //     }
// })

// document.getElementById('k').addEventListener('mouseup', e => {
//   restoreSelection(prev)
// })

// document.getElementById('selector').addEventListener('change', () => {
//   var h = document.getElementById('selector')
//   newRes = [];
//   if (h.value != null) {
//     if (document.getElementById('select-result') !== null) {
//       divMain.removeChild(document.querySelector('[list="select-result"]'))
//       divMain.removeChild(document.getElementById('select-result'))
//     }


//     const yup = document.createElement('input')
//     var dr = document.createElement("datalist");
//     yup.id = 'nm';
//     dr.id = 'select-result';

//     newRes = measurements.filter(n => n.category == measurements[n.name.includes(h.value)].category)
//     var Res = newRes.filter(e => e.name != h.value)
//     Res.forEach(element => {
//       let hm = document.createElement("option");
//       hm.value = element.name;
//       // hm.innerHTML = element.name;
//       dr.appendChild(hm);
//     });

//     yup.setAttribute("list", "select-result");


//     divMain.insertBefore(dr, document.getElementById('f'))
//     divMain.insertBefore(yup, dr)
//   }
// });

// convert.addEventListener('click', () => {
//   para.innerHTML = "";
//   data = sel.toString()
//   let resultVal = document.getElementById('nm').value.toString();
//   let index = measurements.findIndex(x => x.name === document.getElementById('selector').value.toString());
//   para.value = measurements[index][resultVal](data);

// })

