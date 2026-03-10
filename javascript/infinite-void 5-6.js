// ===================================
// AUTO-INCREMENT STATUS TRACKER

// ===================================
let currentRep = 0;

function updateStatus() {
  currentRep++;

  // Update rep counter
  document.getElementById('rep-tracker').textContent = `${currentRep} / 300`;

  // Update completion percentage
  const percentage = ((currentRep / 300) * 100).toFixed(1);
  document.getElementById('completion').textContent = `${percentage}%`;

  // Update phase name based on rep number
  let phase = 'Manual Selection';
  if (currentRep >= 226) phase = 'Domain Expansion';
  else if (currentRep >= 151) phase = 'Safety & Defense';
  else if (currentRep >= 76) phase = 'Data & Interaction';

  document.getElementById('phase-name').textContent = phase;
}

// ===================================
// SETUP ALL INITIAL STATES
// ===================================
function setupAll() {
  console.log('🔥 Setting up Infinite Void...');

  // PHASE 1: Manual Selection & Styling (1-75)
  document.getElementById('target-2').classList.add('active'); // Rep 2: remove .active
  document.getElementById('target-6').classList.add('hidden'); // Rep 6: remove .hidden
  document.getElementById('target-11').classList.add('spinning'); // Rep 11: remove .spinning
  document
    .getElementById('target-15')
    .classList.add('temp-class-1', 'temp-class-2'); // Rep 15: clear all
  document.getElementById('target-43').classList.add('some-class'); // Rep 53: remove all classes
  document.getElementById('target-39').classList.add('active'); // Rep 49: remove .active
  document.getElementById('target-54').classList.add('active'); // Rep 64: remove .active
  document.getElementById('target-64').classList.add('error'); // Rep 74: toggle

  // Set text that needs to be changed
  document.getElementById('target-29').textContent = 'change me to uppercase'; // Rep 34

  // PHASE 2: Data & Interaction (76-150)
  // Pre-fill inputs with values for extraction/manipulation
  document.getElementById('input-1').value = 'Sample Text Data';
  document.getElementById('input-2').value = 'Log This Value';
  document.getElementById('input-3').value = 'Will Be Replaced';
  document.getElementById('input-4').value = '';
  document.getElementById('input-5').value = 'lowercase text';
  document.getElementById('input-6').value = '10';
  document.getElementById('input-7').setAttribute('data-field', 'field7data');
  document.getElementById('input-8').value = '5';
  document.getElementById('input-9').value = 'notemail';
  document.getElementById('input-10').value = 'secret';
  document.getElementById('input-11').value = 'test@email.com';
  document.getElementById('input-12').value = 'This is a test sentence';
  document.getElementById('input-13').value = 'Validation Test';
  document.getElementById('input-14').value = 'pass1';
  document.getElementById('input-15').value = 'pass2';
  document.getElementById('input-16').checked = true;
  document.getElementById('input-17').checked = false;
  document.getElementById('input-21').value = '  trim this  ';
  document.getElementById('input-22').value = 'UPPERCASE TEXT';
  document.getElementById('input-23').value = 'Count these words here';
  document.getElementById('input-24').value = 'NotANumber';
  document.getElementById('input-28').value = 'Reverse This';
  document.getElementById('input-29').value = 'div';
  document.getElementById('input-31').value = 'convert me'; // Added for Rep 162

  // Set data attributes
  document.getElementById('target-67').setAttribute('data-value', '42');
  document.getElementById('target-75').textContent = 'Original';
  document.getElementById('target-76').setAttribute('data-value', '75'); // Added for Rep 93
  document.getElementById('target-81').textContent = 'Reverse This Text';
  document.getElementById('target-83').setAttribute('data-value', '123'); // Added for Rep 103
  document.getElementById('target-91').textContent = 'Count my characters';
  document.getElementById('target-94').setAttribute('data-value', '55');
  document.getElementById('target-99').textContent = 'racecar';

  // Added for Rep 150
  document.getElementById('target-142').setAttribute('data-info', 'test');
  document.getElementById('target-142').setAttribute('data-status', 'active');

  // Container data
  document.getElementById('container-5').setAttribute('data-id', 'c5');

  // PHASE 3: Safety & Defense (151-225)
  document.getElementById('target-148').textContent = 'Replace Me';
  document.getElementById('target-150').textContent = 'Has Parent';
  document.getElementById('target-153').setAttribute('data-value', '99');
  document.getElementById('target-157').setAttribute('data-prevent', 'true');
  document.getElementById('target-171').setAttribute('data-disabled', 'true'); // Added for Rep 207
  document.getElementById('input-34').checked = false;
  document.getElementById('input-35').value = 'split this string';
  document.getElementById('input-36').value = 'test@example.com';
  document.getElementById('input-37').value = 'Test Length';
  document.getElementById('form-input-1').setAttribute('name', 'formInput1');
  document.getElementById('form-input-2').setAttribute('name', 'formInput2');
  document.getElementById('form-input-3').setAttribute('name', 'formInput3');
  // PHASE 4: Domain Expansion (226-300)
  // Delegation zone elements are already set up in HTML

  console.log('✅ All elements configured for interactive practice');
  console.log("📝 Ready for 300 reps. Let's go!");
}

// Initialize everything
setupAll();

// ===================================
// PHASE 1: MANUAL SELECTION & STYLING (Reps 1-75)
// ===================================

// 1. Select #target-1 and add class '.active'
document.getElementById('target-1').classList.add('active');
updateStatus();
// 2. Select #target-2 and remove class '.active'
document.getElementById('target-2').classList.remove('active');
updateStatus();
// 3. Select #target-3 and toggle class '.highlight'
document.getElementById('target-3').classList.toggle('highlight');
updateStatus();
// 4. Select #target-4 and change textContent to 'Modified'
document.getElementById('target-4').textContent = 'Modified';
updateStatus();
// 5. Select #target-5 and add class '.hidden'
document.getElementById('target-5').classList.add('hidden');
updateStatus();
// 6. Select #target-6 and remove class '.hidden'
document.getElementById('target-6').classList.remove('hidden');
updateStatus();
// 7. Select #target-7 and add class '.error'
document.getElementById('target-7').classList.add('error');
updateStatus();
// 8. Select #target-8 and toggle class '.shake'
document.getElementById('target-8').classList.toggle('shake');
updateStatus();
// 9. Select #target-9 and change textContent to 'Updated'
document.getElementById('target-9').textContent = 'Updated';
updateStatus();
// 10. Select #target-10 and add class '.spinning'
document.getElementById('target-10').classList.add('spinning');
updateStatus();
// 11. Select #target-11 and remove class '.spinning'
document.getElementById('target-11').classList.remove('spinning');
updateStatus();
// 12. Select #target-12 and toggle class '.rainbow'
document.getElementById('target-12').classList.toggle('rainbow');
updateStatus();
// 13. Select #target-13 and change textContent to 'Changed'
document.getElementById('target-13').textContent = 'Changed';
updateStatus();
// 14. Select #target-14 and add classes '.active' and '.highlight'
document.getElementById('target-14').classList.add('active', 'highlight');
updateStatus();
// 15. Select #target-15 and remove all classes with className = ''
document.getElementById('target-15').className = '';
updateStatus();
// 16. Select #target-16 and add class '.error' then toggle '.shake'
document.getElementById('target-16').classList.add('error');
document.getElementById('target-16').classList.toggle('shake');
updateStatus();

// 17. Select #target-17 and change textContent to current timestamp
document.getElementById('target-17').textContent = Date.now();
updateStatus();
// 18. Select #target-18 and toggle class '.hidden'
document.getElementById('target-18').classList.toggle('hidden');
updateStatus();
// 19. Select #target-19 and add class '.rainbow'
document.getElementById('target-19').classList.add('rainbow');
updateStatus();
// 20. Select #target-20 and change textContent to 'Rep 20 Complete'
document.getElementById('target-20').textContent = 'Rep 20 Complete';
updateStatus();
// 21. Select #target-21 and toggle between '.active' and '.error'
const el = document.getElementById('target-21');
if (el.classList.contains('active')) {
  el.classList.remove('active');
  el.classList.add('error');
} else {
  el.classList.add('active');
}
updateStatus();
// 22. Select #target-22 and add class '.highlight', remove after 1 second
const t22 = document.getElementById('target-22');
t22.classList.add('highlight');
setTimeout(() => {
  t22.classList.remove('highlight');
}, 1000);

updateStatus();
// 23. Select #target-23 and change background color directly via style.background
document.getElementById('target-23').style.background = `#ff0000`;
updateStatus();
// 24. Select #target-24 and add class '.spinning', stop after 2 seconds
const t24 = document.getElementById('target-24');
t24.classList.add('spinning');
setTimeout(() => {
  t24.classList.remove('spinning');
}, 2000);

updateStatus();
// 25. Select #target-25 and change textContent to 'Quarter Done'
document.getElementById('target-25').textContent = 'Quarter Done';
updateStatus();
// 26. Select #container-1 and add class '.active'
document.getElementById('container-1').classList.add('active');
updateStatus();
// 27. Select #container-2 and toggle class '.highlight'
document.getElementById('container-2').classList.toggle('highlight');
updateStatus();
// 28. Select #target-101 (inside #container-1) and change textContent to 'Nested'
document.getElementById('target-101').textContent = 'Nested';
updateStatus();
// 29. Select #target-102 and add class '.error'
document.getElementById('target-102').classList.add('error');
updateStatus();
// 30. Select #container-3 and add class '.rainbow'
document.getElementById('container-3').classList.add('rainbow');
updateStatus();
// 31. Select #target-26 and change textContent to the value of data-value attribute
const target26 = document.getElementById('target-26');
if (target26) {
  target26.textContent = target26.dataset.value;
}
updateStatus();
// 32. Select #target-27 and add class '.shake', log data-value to console
const target27 = document.getElementById('target-27');
if (target27) {
  target27.classList.add('shake');
  console.log(target27.dataset.value);
}
updateStatus();
// 33. Select #target-28 and toggle class '.active' twice (ends in original state)
document.getElementById('target-28').classList.toggle('active');
document.getElementById('target-28').classList.toggle('active');
updateStatus();
// 34. Select #target-29 and change textContent to uppercase version of current text
const target29 = document.getElementById('target-29');
if (target29) {
  target29.textContent = target29.textContent.toUpperCase();
}
updateStatus();
// 35. Select #target-30 and add class '.highlight'
document.getElementById('target-30').classList.add('highlight');
updateStatus();
// 36. Select #input-1 and change placeholder to 'New Placeholder'
document.getElementById('input-1').placeholder = 'New Placeholder';
updateStatus();
// 37. Select #input-2 and set value to 'Default Value'
document.getElementById('input-2').value = 'Default Value';
updateStatus();
// 38. Select #input-3 and clear value to empty string
document.getElementById('input-3').value = '';
updateStatus();
// 39. Select #input-4 and toggle disabled property
const input4 = document.getElementById('input-4');
if (input4) {
  input4.disabled = !input4.disabled;
}
updateStatus();
// 40. Select #input-5 and add class '.error' to the input
document.getElementById('input-5').classList.add('error');
updateStatus();
// 41. Select #target-31 and change textContent to 'Mid-Section'
document.getElementById('target-31').textContent = 'Mid-Section';
updateStatus();
// 42. Select #target-32 and add class '.active'
document.getElementById('target-32').classList.add('active');
updateStatus();
// 43. Select #target-33 and toggle class '.hidden' three times
document.getElementById('target-33').classList.toggle('hidden');
document.getElementById('target-33').classList.toggle('hidden');
document.getElementById('target-33').classList.toggle('hidden');
updateStatus();
// 44. Select #target-34 and add class '.rainbow'
document.getElementById('target-34').classList.add('rainbow');
updateStatus();
// 45. Select #target-35 and change textContent to random number 1-100
document.getElementById('target-35').textContent =
  Math.floor(Math.random() * 100) + 1;
updateStatus();
// 46. Select #target-36 and add class '.spinning'
document.getElementById('target-36').classList.add('spinning');
updateStatus();
// 47. Select #target-37 and toggle class '.error'
document.getElementById('target-37').classList.toggle('error');
updateStatus();
// 48. Select #target-38 and change textContent to 'Almost Halfway'
document.getElementById('target-38').textContent = 'Almost Halfway';
updateStatus();
// 49. Select #target-39 and add class '.highlight', remove '.active' if present
document.getElementById('target-39').classList.add('highlight');
document.getElementById('target-39').classList.remove('active');
updateStatus();
// 50. Select #target-40 and toggle class '.shake'
document.getElementById('target-40').classList.toggle('shake');
updateStatus();
// 51. Select #target-41 and change textContent to 'Halfway Point'
document.getElementById('target-41').textContent = 'Halfway Point';
updateStatus();
// 52. Select #target-42 and add class '.active'
document.getElementById('target-42').classList.add('active');
updateStatus();
// 53. Select #target-43 and remove all classes
document.getElementById('target-43').className = '';
updateStatus();
// 54. Select #target-44 and add class '.rainbow'
document.getElementById('target-44').classList.add('rainbow');
updateStatus();
// 55. Select #target-45 and change textContent to 'Rep 55'
document.getElementById('target-45').textContent = 'Rep 55';
updateStatus();
// 56. Select #target-46 and toggle class '.hidden'
document.getElementById('target-46').classList.toggle('hidden');
updateStatus();
// 57. Select #target-47 and add class '.error' and '.shake'
document.getElementById('target-47').classList.add('error', 'shake');
updateStatus();
// 58. Select #target-48 and change textContent to current date
document.getElementById('target-48').textContent = new Date(
  Date.now()
).toLocaleDateString('en-US');
updateStatus();
// 59. Select #target-49 and add class '.spinning'
document.getElementById('target-49').classList.add('spinning');
updateStatus();
// 60. Select #target-50 and toggle class '.highlight'
document.getElementById('target-50').classList.toggle('highlight');
updateStatus();
// 61. Select #target-51 and change textContent to 'Final Sprint'
document.getElementById('target-51').textContent = 'Final Sprint';
updateStatus();
// 62. Select #target-52 and add class '.active'
document.getElementById('target-52').classList.add('active');
updateStatus();
// 63. Select #target-53 and toggle class '.rainbow'
document.getElementById('target-53').classList.toggle('rainbow');
updateStatus();
// 64. Select #target-54 and remove class '.active'
document.getElementById('target-54').classList.remove('active');
updateStatus();
// 65. Select #target-55 and add class '.highlight'
document.getElementById('target-55').classList.add('highlight');
updateStatus();
// 66. Select #target-56 and change textContent to 'Two Thirds Done'
document.getElementById('target-56').textContent = 'Two Thirds Done';
updateStatus();
// 67. Select #target-57 and toggle class '.error'
document.getElementById('target-57').classList.toggle('error');
updateStatus();
// 68. Select #target-58 and add class '.spinning', remove after 1 second
document.getElementById('target-58').classList.add('spinning');
setTimeout(() => {
  document.getElementById('target-58').classList.remove('spinning');
}, 1000);
updateStatus();
// 69. Select #target-59 and change textContent to 'Almost There'
document.getElementById('target-59').textContent = 'Almost There';
updateStatus();
// 70. Select #target-60 and add class '.rainbow'
document.getElementById('target-60').classList.add('rainbow');
updateStatus();
// 71. Select #target-61 and toggle class '.active'
document.getElementById('target-61').classList.toggle('active');
updateStatus();
// 72. Select #target-62 and add class '.highlight' and '.shake'
document.getElementById('target-62').classList.add('highlight', 'shake');
updateStatus();
// 73. Select #target-63 and change textContent to 'Final Five'
document.getElementById('target-63').textContent = 'Final Five';
updateStatus();
// 74. Select #target-64 and toggle class '.error'
document.getElementById('target-64').classList.toggle('error');
updateStatus();
// 75. Select #target-65 and add class '.active', change textContent to 'Phase 1 Complete'
document.getElementById('target-65').classList.add('active');
document.getElementById('target-65').textContent = 'Phase 1 Complete';
updateStatus();
// ===================================
// PHASE 2: DATA & INTERACTION (Reps 76-150)
// ===================================

// 76. Get value from #input-1 and set it as textContent of #target-66
const value76 = document.getElementById('input-1').value;
document.getElementById('target-66').textContent = value76;
updateStatus();
// 77. Get value from #input-2 and log it to console
console.log(document.getElementById('input-2').value);
updateStatus();
// 78. Set value of #input-3 to 'Injected Value'
document.getElementById('input-3').value = 'Injected Value';
updateStatus();
// 79. Get data-value from #target-67 and set as textContent of #target-68
const target67value = document.getElementById('target-67').dataset.value;
document.getElementById('target-68').textContent = target67value;
updateStatus();
// 80. Read #input-4 value and if empty, add class '.error'
const i4 = document.getElementById('input-4');
if (i4.value === '') {
  i4.classList.add('error');
} else {
  i4.classList.remove('error');
}
updateStatus();
// 81. Get value from #input-5, convert to uppercase, set to #target-69 textContent
const i5v = document.getElementById('input-5').value.toUpperCase();
const target69 = document.getElementById('target-69');
target69.textContent = i5v;
updateStatus();
// 82. Create a new <div> with textContent 'Created Element' and append to #container-4
const newDiv = document.createElement('div');
newDiv.textContent = 'Created Element';
document.getElementById('container-4').appendChild(newDiv);
updateStatus();
// 83. Get data-id from #container-5 and set as textContent of #target-70
const cont5id = document.getElementById('container-5').dataset.id;
document.getElementById('target-70').textContent = cont5id;
updateStatus();
// 84. Set innerHTML of #target-71 to '<span>Injected HTML</span>'
document.getElementById('target-71').innerHTML = '<span>Injected HTML</span>';
updateStatus();
// 85. Get value from #input-6 (number), multiply by 2, display in #target-72
const i6v = document.getElementById('input-6').value * 2;
const target72 = document.getElementById('target-72');
target72.textContent = i6v;
updateStatus();
// 86. Read dataset.field from #input-7 and log to console
console.log(document.getElementById('input-7').dataset.field);
updateStatus();
// 87. Create new <button> with id 'dynamic-btn-1', append to #container-6
const newBtn = document.createElement('button');
newBtn.id = 'dynamic-btn-1';
document.getElementById('container-6').appendChild(newBtn);
updateStatus();
// 88. Get value from #input-8, parse as integer, add 10, display in #target-73
const i8 = parseInt(document.getElementById('input-8').value) + 10;
const target73 = document.getElementById('target-73');
target73.textContent = i8;
updateStatus();
// 89. Set data-custom attribute on #target-74 to 'custom-value'
document.getElementById('target-74').dataset.custom = 'custom-value';
updateStatus();
// 90. Get textContent from #target-75, append ' - Modified', set back
const t75cont = document.getElementById('target-75');
t75cont.textContent = t75cont.textContent + ' - Modified';
updateStatus();
// 91. Read value from #input-9, check if contains '@', add '.error' if not
const i9 = document.getElementById('input-9');
if (!i9.value.includes('@')) {
  i9.classList.add('error');
} else {
  i9.classList.remove('error');
}
updateStatus();
// 92. Create <li> element with text 'Dynamic Item', append to #list-1
const newLi = document.createElement('li');
newLi.textContent = 'Dynamic Item';
document.getElementById('list-1').appendChild(newLi);
updateStatus();
// 93. Get data-value from #target-76, convert to number, log if > 50
const t76val = Number(document.getElementById('target-76').dataset.value);
if (t76val > 50) {
  console.log(t76val);
}
updateStatus();
// 94. Set innerHTML of #container-7 to '<p>New Content</p>'
document.getElementById('container-7').innerHTML = '<p>New Content</p>';
updateStatus();
// 95. Get value from #input-10 and if it equals 'secret', add '.rainbow' to #target-77
const i10 = document.getElementById('input-10');
if (i10.value === 'secret') {
  document.getElementById('target-77').classList.add('rainbow');
}
updateStatus();
// 96. Create <span> with textContent from #input-11, append to #target-78
const i11t = document.getElementById('input-11').value;
const span = document.createElement('span');
span.textContent = i11t;
document.getElementById('target-78').appendChild(span);
updateStatus();
// 97. Read data-id from #container-8, set as id of newly created <div>
const c8did = document.getElementById('container-8');
const newDiv2 = document.createElement('div');
newDiv2.id = c8did.dataset.id;
c8did.appendChild(newDiv2);
updateStatus();
// 98. Get value from #input-12, split by space, count words, display in #target-79
const i12v = document.getElementById('input-12');
const text = i12v.value.trim();
const words = text.split(' ').filter((w) => w.length > 0);
const count = words.length;
document.getElementById('target-79').innerHTML =
  `<span>Text: ${text}</span><span>Count: ${count}</span>`;
updateStatus();
// 99. Set multiple data attributes on #target-80: data-a='1', data-b='2', data-c='3'
document.getElementById('target-80').dataset.a = '1';
document.getElementById('target-80').dataset.b = '2';
document.getElementById('target-80').dataset.c = '3';
updateStatus();
// 100. Get textContent from #target-81, reverse string, set back
const t81 = document.getElementById('target-81');
const rvrs = t81.textContent.split('').reverse().join('');
t81.textContent = rvrs;
updateStatus();
// 101. Create new <input> with type='text' and placeholder='Dynamic', append to #form-1
const newInput2 = document.createElement('input');
newInput2.type = 'text';
newInput2.placeholder = 'Dynamic';
newInput2.name = 'dynamicInput';
document.getElementById('form-1').appendChild(newInput2);
updateStatus();
// 102. Get value from #input-13, check length > 5, toggle '.active' on #target-82
const i13 = document.getElementById('input-13');
const t82 = document.getElementById('target-82');
if (i13.value.length > 5) {
  t82.classList.add('active');
} else {
  t82.classList.remove('active');
}
updateStatus();
// 103. Read dataset.value from #target-83, log to console
console.log(document.getElementById('target-83').dataset.value);
updateStatus();
// 104. Set innerHTML of #target-84 to include current timestamp
document.getElementById('target-84').innerHTML = new Date(
  Date.now()
).toLocaleDateString();
updateStatus();
// 105. Get values from #input-14 and #input-15, concatenate, display in #target-85
const i14t = document.getElementById('input-14').value;
const i15t = document.getElementById('input-15').value;
document.getElementById('target-85').textContent = `${i14t} ${i15t}`;
updateStatus();
// 106. Create <button> with onclick that logs 'Clicked', append to #container-9
const newBtn2 = document.createElement('button');
newBtn2.addEventListener('click', (e) => {
  console.log('Clicked');
});
document.getElementById('container-9').appendChild(newBtn2);
updateStatus();
// 107. Get checked status of #input-16, if true add '.active' to #target-86
const i16s = document.getElementById('input-16').checked;
if (i16s) {
  document.getElementById('target-86').classList.add('active');
}
updateStatus();
// 108. Read data-list from #list-2, set as textContent of #target-87
const l2l = document.getElementById('list-2').dataset.list;
document.getElementById('target-87').textContent = l2l;
updateStatus();
// 109. Create <div class="card">, append to #container-10
const card = document.createElement('div');
card.classList.add('card');
document.getElementById('container-10').appendChild(card);
updateStatus();
// 110. Get value from #input-17 (checkbox), toggle '.highlight' on #target-88
const i17v = document.getElementById('input-17');
document
  .getElementById('target-88')
  .classList.toggle('highlight', i17v.checked);
updateStatus();
// 111. Set innerHTML of #target-89 to '<strong>Bold Text</strong>'
document.getElementById('target-89').innerHTML = '<strong>Bold Text</strong>';
updateStatus();
// 112. Get dataset.field from #input-18, create element with that as id
const i18 = document.getElementById('input-18');
const newEl = document.createElement('div');
newEl.id = i18.dataset.field;
i18.appendChild(newEl);
updateStatus();
// 113. Read value from #input-19 (radio), if checked add '.active' to #target-90
const i19v = document.getElementById('input-19');
document.getElementById('target-90').classList.toggle('active', i19v.checked);
updateStatus();
// 114. Create new <ul> with id 'dynamic-list-1', append 2 <li>s with text
const newUl = document.createElement('ul');
newUl.id = 'dynamic-list-1';
const li1 = document.createElement('li');
li1.textContent = 'text';
const li2 = document.createElement('li');
li2.textContent = 'text';
newUl.append(li1, li2);
updateStatus();
// 115. Get textContent from #target-91, calculate character count, display in #target-92
const t91c = document
  .getElementById('target-91')
  .textContent.replaceAll(' ', '').length;
document.getElementById('target-92').textContent = t91c;
updateStatus();
// 116. Set data-processed='true' on #target-93
document.getElementById('target-93').dataset.processed = true;
updateStatus();
// 117. Get value from #input-20 (radio), log to console if checked
const i20 = document.getElementById('input-20');
if (i20.checked) {
  console.log('i20 is checked');
}
updateStatus();
// 118. Create <div> with innerHTML '<span>Nested</span>', append to #container-11
const newDiv3 = document.createElement('div');
const c11 = document.getElementById('container-11');
newDiv3.innerHTML = '<span>Nested</span>';
c11.appendChild(newDiv3);
updateStatus();
// 119. Read data-value from #target-94, add to array, log array
const t94dv = document.getElementById('target-94').dataset.value;
const arr119 = [t94dv];
console.log(arr119);
updateStatus();
// 120. Get value from #input-21, trim whitespace, set to #target-95
const i21v = document.getElementById('input-21').value.trim(' ', '');
document.getElementById('target-95').textContent = i21v;
updateStatus();
// 121. Create <button class="delegate-btn">, append to #delegation-zone
const newBtn121 = document.createElement('button');
newBtn121.classList.add('delegate-btn');
document.getElementById('delegation-zone').appendChild(newBtn121);
updateStatus();
// 122. Get selected value from #input-26 (select), display in #target-96
const i26v = document.getElementById('input-26').value;
document.getElementById('target-96').textContent = i26v;
updateStatus();
// 123. Set innerHTML of #target-97 to '<ul><li>Item 1</li><li>Item 2</li></ul>'
document.getElementById('target-97').innerHTML =
  '<ul><li>Item 1</li><li>Item 2</li></ul>';
updateStatus();
// 124. Read data-id from #item-1 (in #list-1), log to console
console.log(document.getElementById('item-1').dataset.id);
updateStatus();
// 125. Create <span> with textContent 'Span Text', set id 'dynamic-span-1'
const ns125 = document.createElement('span');
ns125.id = 'dynamic-span-1';
ns125.textContent = 'Span Text';
updateStatus();
// 126. Get value from #input-22, convert to lowercase, display in #target-98
const i22v = document.getElementById('input-22').value.toLowerCase();
document.getElementById('target-98').textContent = i22v;
updateStatus();
// 127. Read dataset.zone from #target-201, log to console
console.log(document.getElementById('target-201').dataset.zone);
updateStatus();
// 128. Create new form element with id 'dynamic-form-1', append input and button
const nform = document.createElement('form');
nform.id = 'dynamic-form-1';
const nbtn = document.createElement('button');
const ninp = document.createElement('input');
nform.append(nbtn, ninp);
updateStatus();
// 129. Get textContent from #target-99, check if palindrome, add '.rainbow' if true
const t99 = document.getElementById('target-99');
if (t99.textContent === t99.textContent.split('').reverse().join('')) {
  t99.classList.add('rainbow');
}
updateStatus();
// 130. Set multiple classes on #target-100: '.active', '.highlight', '.rainbow'
document
  .getElementById('target-100')
  .classList.add('active', 'highlight', 'rainbow');
updateStatus();
// 131. Get value from #input-23, calculate word count, display in #target-131
const t131 = document.getElementById('target-131');
const text131 = document.getElementById('input-23').value.trim();
const words131 = text131.split(' ').filter((w) => w.length > 0);
t131.textContent = words131.length;
updateStatus();
// 132. Create <div class="nested-chaos">, append to #nest-1
const div132 = document.createElement('div');
div132.classList.add('nested-chaos');
div132.textContent = '132';
document.getElementById('nest-1').appendChild(div132);
updateStatus();
// 133. Read data-depth from #nest-2, log to console
console.log(document.getElementById('nest-2').dataset.depth);
updateStatus();
// 134. Get value from #input-24, check if numeric, add '.error' if not
const i24 = document.getElementById('input-24');
if (i24.value.trim() === '' || isNaN(i24.value.trim())) {
  i24.classList.add('error');
} else {
  i24.classList.remove('error');
}
updateStatus();
// 135. Set innerHTML of #target-132 to '<em>Italic Text</em>'
document.getElementById('target-132').innerHTML = '<em>Italic Text</em>';
updateStatus();
// 136. Create <li> with data-id='999', append to #list-3
const li136 = document.createElement('li');
li136.dataset.id = '999';
document.getElementById('list-3').appendChild(li136);
updateStatus();
// 137. Get textContent from #target-133, split into chars, log array length
console.log(document.getElementById('target-133').textContent.split('').length);
updateStatus();
// 138. Read data-action from #target-202, set as textContent of #target-134
const t202da = document.getElementById('target-202').dataset.action;
document.getElementById('target-134').textContent = t202da;
updateStatus();
// 139. Create <button> with textContent 'Dynamic Button', add click listener
const btn139 = document.createElement('button');
btn139.textContent = 'Dynamic Button';
btn139.addEventListener('click', () => {
  console.log('clicked');
});
document.getElementById('delegation-zone').appendChild(btn139);
updateStatus();
// 140. Get value from #input-25, parse as JSON if possible, log result
const i25v = document.getElementById('input-25').value;
try {
  const result = JSON.parse(i25v);
  console.log('Success:', result);
} catch (err) {
  console.log('Not valid JSON yet...');
}
updateStatus();

// 141. Set data-timestamp on #target-135 to current Date.now()
document.getElementById('target-135').dataset.timestamp = Date.now();
updateStatus();
// 142. Get selected option text from #input-27, display in #target-136
const i27v = document.getElementById('input-27').value;
document.getElementById('target-136').textContent = i27v;
updateStatus();
// 143. Create <div> with multiple children, append to #container-12
const div143 = document.createElement('div');
const div1431 = document.createElement('div');
const div1432 = document.createElement('div');
const div1433 = document.createElement('div');
const div1434 = document.createElement('div');
div143.append(div1431, div1432, div1433, div1434);
document.getElementById('container-12').appendChild(div143);
updateStatus();
// 144. Read data-form from #form-2, log to console
console.log(document.getElementById('form-2').dataset.form);
updateStatus();
// 145. Get value from #input-28, reverse string, display in #target-137
const i28v = document
  .getElementById('input-28')
  .value.split('')
  .reverse()
  .join('');
document.getElementById('target-137').textContent = i28v;
updateStatus();
// 146. Create <span class="badge">, set textContent to 'Badge', append to #target-138
const s146 = document.createElement('span');
s146.classList.add('badge');
s146.textContent = 'Badge';
document.getElementById('target-138').appendChild(s146);
updateStatus();
// 147. Get textContent from #target-139, count vowels, display count in #target-140
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vCount = 0;
const t139t = document.getElementById('target-139').textContent.toLowerCase();
vowels.forEach((v) => {
  const count = t139t.split('').filter((c) => c === v).length;
  vCount += count;
});
document.getElementById('target-140').textContent = vCount;
updateStatus();
// 148. Set innerHTML of #target-141 to '<code>Code Block</code>'
document.getElementById('target-141').innerHTML = '<code>Code Block</code>';
updateStatus();
// 149. Create new element based on value from #input-29 (tag name), append to body
const i29v = document.getElementById('input-29').value;
const el149 = document.createElement(i29v);
updateStatus();
// 150. Get all data attributes from #target-142, log object of all dataset values
console.log(document.getElementById('target-142').dataset);
updateStatus();
// ===================================
// PHASE 3: SAFETY & DEFENSE (Reps 151-225)
// ===================================

// 151. Add click listener to #form-btn-1, prevent form submission
// document.getElementById('form-btn-1').addEventListener('click', (e) => {
//   e.preventDefault();
// });
updateStatus();
// 152. Add click listener to #target-143, use e?.target to safely get id
document.getElementById('target-143').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e?.target.id);
});
updateStatus();
// 153. Add submit listener to #form-1, prevent default and log form data
document.getElementById('form-1').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted');
  const data = new FormData(e.target); // Step 2: Collect data
  const formValues = Object.fromEntries(data); // Step 3: Convert to object
  console.log(formValues);
});
updateStatus();
// 154. Get #target-144 safely with optional chaining, add '.active' if exists
document.getElementById('target-144')?.classList.add('active');
updateStatus();
// 155. Add click listener to #target-145, prevent default, stop propagation
document.getElementById('target-145').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(e.target);
});
updateStatus();
// 156. Safely read #input-30?.value, default to 'N/A' if null
document.getElementById('input-30')?.value ?? 'N/A';
updateStatus();
// 157. Add click to #form-btn-2, prevent submit, validate #form-input-2 not empty
// document.getElementById('form-btn-2').addEventListener('click', (e) => {
//   e.preventDefault();
//   const fi2 = document.getElementById('form-input-2');
//   if (fi2?.value) {
//     console.log(fi2.value);
//   } else {
//     console.log('empty');
//   }
// });
updateStatus();
// 158. Get #target-146 safely, check if exists before adding class
document.getElementById('target-146')?.classList.add('error');
updateStatus();
// 159. Add submit to #form-2, preventDefault, check if input value contains '@'
document.getElementById('form-2').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const { formInput2 } = Object.fromEntries(data);
  console.log(formInput2?.includes('@'));
});
updateStatus();
// 160. Safely access #nest-3?.dataset?.depth, log with ?? 'unknown'
console.log(document.getElementById('nest-3')?.dataset?.depth ?? 'unknown');
updateStatus();
// 161. Add click to #target-147, e.stopPropagation(), toggle '.active'
document.getElementById('target-147').addEventListener('click', (e) => {
  e.stopPropagation();
  e.target.classList.toggle('active');
});
updateStatus();
// 162. Get #input-31?.value, safely convert to uppercase with ?.toUpperCase()
console.log(document.getElementById('input-31')?.value?.toUpperCase());
updateStatus();
// 163. Add submit to #form-3, prevent default, get submitter button id
document.getElementById('form-3').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.submitter.id);
});
updateStatus();
// 164. Safely read #target-148?.textContent, default 'Empty' if falsy
console.log(document.getElementById('target-148')?.textContent ?? 'Empty');
updateStatus();
// 165. Add click to #target-149, prevent if has class '.disabled'
document.getElementById('target-149').addEventListener('click', (e) => {
  if (e.target.classList.contains('disabled')) {
    e.preventDefault();
    console.log('blocked');
    return;
  }
  console.log('allowed');
});
updateStatus();
// 166. Get #container-13?.querySelector('#target-113'), add '.highlight' if exists
const c13 = document.getElementById('container-13');
const target = c13?.querySelector('#target-113');
if (target) {
  target.classList.add('highlight');
}
updateStatus();
// 167. Add submit to #form-4, preventDefault, validate multiple fields safely
document.getElementById('form-4').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = e.target.elements['form-input-4'].value.trim();
  console.log(data === '' ? 'empty' : data);
});
updateStatus();
// 168. Safely chain #target-150?.parentElement?.classList?.add('active')
document.getElementById('target-150')?.parentElement?.classList.add('active');
updateStatus();
// 169. Add click to #target-151, check e?.target?.matches('.card'), prevent if true
document.getElementById('target-151').addEventListener('click', (e) => {
  e?.target?.matches('.card') ? e.preventDefault() : console.log(false);
});
updateStatus();
// 170. Get #input-32?.value, parse as int safely with parseInt() ?? 0
console.log(parseInt(document.getElementById('input-32')?.value) || 0);
updateStatus();
// 171. Add contextmenu listener to #target-152, preventDefault to block right-click
document.getElementById('target-152').addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
updateStatus();
// 172. Safely access #item-5?.dataset?.id, log with nullish coalescing
console.log(document.getElementById('item-5')?.dataset?.id ?? 'none');
updateStatus();
// 173. Add submit to #form-5, prevent default, use e?.submitter?.value
document.getElementById('form-5').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e?.submitter?.value || 'none');
});
updateStatus();
// 174. Get #target-153 safely, read data-value with ??, default '0'
console.log(document.getElementById('target-153')?.dataset?.value ?? 0);
updateStatus();
// 175. Add click to #target-154, e.stopPropagation(), safely toggle class
document.getElementById('target-154').addEventListener('click', (e) => {
  e.stopPropagation();
  e?.target?.classList.toggle('error');
});
updateStatus();
// 176. Read #input-33?.value, safely call ?.trim()?.toLowerCase()
console.log(
  document.getElementById('input-33')?.value?.trim()?.toLowerCase() || 'empty'
);
updateStatus();
// 177. Add submit to #form-6, preventDefault, check if reset or submit button
document.getElementById('form-6').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.submitter.type);
});
document.getElementById('form-6').addEventListener('reset', (e) => {
  e.preventDefault();
  console.log('reset');
});
updateStatus();
// 178. Safely get #target-155?.closest('.card'), add '.active' if exists
document
  .getElementById('target-155')
  ?.closest('.card')
  ?.classList.add('active');
updateStatus();
// 179. Add dragstart to #target-156, preventDefault to block drag
document.getElementById('target-156').addEventListener('dragstart', (e) => {
  e.preventDefault();
});
updateStatus();
// 180. Get #nest-4?.dataset?.depth, safely convert to number with ?? 0
console.log(document.getElementById('nest-4')?.dataset?.depth ?? 0);
updateStatus();
// 181. Add click to #target-157, prevent default only if data-prevent='true'
document.getElementById('target-157').addEventListener('click', (e) => {
  if (e.target.dataset.prevent === 'true') {
    e.preventDefault();
  }
});
updateStatus();
// 182. Safely read #input-34?.checked, default false with ?? false
console.log(document.getElementById('input-34')?.checked ?? false);
updateStatus();
// 183. Add submit to #form-7, preventDefault, safely access form elements
document.getElementById('form-7').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e?.target?.elements);
});
updateStatus();
// 184. Get #target-158, use e?.target?.closest('.card'), safely read data-id
console.log(
  document.getElementById('target-158')?.closest('.card')?.dataset.id ?? 'none'
);
updateStatus();
// 185. Add click to #target-159, stopPropagation, safely access parent
document.getElementById('target-159').addEventListener('click', (e) => {
  e.stopPropagation();
});
updateStatus();
// 186. Read #input-35?.value, safely split with ?.split(' ') ?? []
console.log(document.getElementById('input-35')?.value?.split(' ') ?? []);
updateStatus();
// 187. Add submit to #form-8, prevent default, validate with optional chaining

// 188. Get #target-160 safely, check existence with ?., add class conditionally

// 189. Add click to #target-161, use e?.target?.matches('button'), prevent if true

// 190. Safely access #container-14?.children?.[0]?.textContent

// 191. Add submit to #form-9, preventDefault, safely get all input values

// 192. Get #target-162?.dataset?.value, parse safely with Number() ?? 0

// 193. Add click to #target-163, check if e?.ctrlKey, prevent if true

// 194. Read #input-36?.value, safely validate email with ?.includes('@')

// 195. Add submit to #form-10, prevent default, use e?.target?.elements

// 196. Get #target-164 safely, use ?.classList?.toggle()

// 197. Add click to #target-165, e.preventDefault(), safely log e?.type

// 198. Safely access #nest-5?.parentElement?.dataset?.depth

// 199. Add click to #target-166, check e?.target?.tagName === 'BUTTON'

// 200. Get #input-37?.value, safely calculate length with ?.length ?? 0

// 201. Add click to #target-167, prevent default, safely access e?.currentTarget

// 202. Read #target-168?.getAttribute('data-value'), use ?? 'default'

// 203. Add submit to #form-1 (again), prevent, safely serialize form data

// 204. Get #target-169 safely, check if null before accessing properties

// 205. Add click to #target-170, e.stopPropagation(), safely get siblings

// 206. Safely read #input-38?.type, default 'text' with ?? 'text'

// 207. Add click to #target-171, prevent if data-disabled='true' exists

// 208. Get #container-15?.querySelector('span'), safely access textContent

// 209. Add click to #target-172, use e?.target?.dataset?.action

// 210. Safely access #target-173?.previousElementSibling?.id

// 211. Add submit to form, prevent, safely access e?.submitter?.name

// 212. Get #input-39?.value, safely validate with ?.match(/pattern/) ?? false

// 213. Add click to #target-174, check e?.shiftKey, toggle class if true

// 214. Safely chain #target-175?.closest('.nested-chaos')?.dataset?.depth

// 215. Add click to #target-176, prevent default, safely log event properties

// 216. Get #target-177 with ??, add class only if element exists

// 217. Add click to #target-178, e.stopPropagation(), safely modify parent

// 218. Read #input-40?.disabled, safely toggle with ?? false

// 219. Add click to #target-179, prevent if element has '.disabled' class

// 220. Safely access #list-5?.children?.[0]?.dataset?.id

// 221. Add click to #target-180, use e?.target?.closest('button')

// 222. Get #input-41?.value, safely convert with Number() and ?? 0

// 223. Add click to #target-181, prevent, safely access e?.target?.attributes

// 224. Safely read #target-182?.nextElementSibling?.textContent

// 225. Add click to #target-183, check multiple conditions safely with ?.

// ===================================
// PHASE 4: DOMAIN EXPANSION (Reps 226-300)
// ===================================

// 226. Add ONE click listener to #delegation-zone, handle all .delegate-btn clicks

// 227. On click of .delegate-btn, use e.target.closest() to find button, log data-action

// 228. Delegate click to #delegation-zone, toggle '.active' on clicked button only

// 229. On .delegate-btn click, read data-zone, add '.highlight' to all buttons in same zone

// 230. Delegate to #delegation-zone, on click get data-action and update #target-184 text

// 231. On .delegate-btn click, find closest .card parent, toggle '.active'

// 232. Delegate click, if data-action='action1', update #target-185, #target-186, #target-187

// 233. On button click in #delegation-zone, read data-value, update 3 different targets

// 234. Delegate to parent, on click check e.target.matches('.delegate-btn'), stop if not

// 235. On .delegate-btn click, get data-zone, count buttons in that zone, display count

// 236. Delegate click, find closest button, read dataset, update multiple IDs based on logic

// 237. On click in #delegation-zone, prevent default, get submitter if form

// 238. Delegate to parent, toggle class on clicked item AND next sibling

// 239. On .delegate-btn click, read data-action, if 'action5' update 5 targets

// 240. Delegate click, use e.target.closest() to find card, update card AND child span

// 241. On button click, read data-zone, remove '.active' from all in zone, add to clicked

// 242. Delegate to #delegation-zone, on click update rep counter in status panel

// 243. On .delegate-btn click, check if Ctrl key pressed, different action if true

// 244. Delegate click, get data-action, switch statement with 5 cases, each updates target

// 245. On click, find closest button, get index in parent, update target with that index

// 246. Delegate to parent, on click toggle class on clicked AND previous element

// 247. On .delegate-btn click, read data-value, update #target-188 if value > 50

// 248. Delegate click, use closest() to find container, update all children

// 249. On click in #delegation-zone, count total active buttons, display in #target-189

// 250. Delegate click, on button press read data, update 3 targets with different values

// 251. On .delegate-btn click, remove all '.highlight' classes, add to clicked only

// 252. Delegate to parent, on click get button id, parse number, update that numbered target

// 253. On click, use e.target.dataset to read multiple attrs, update multiple targets

// 254. Delegate click, if data-zone='zone25', update #target-190 AND toggle #target-191

// 255. On .delegate-btn click, find all buttons in same zone, toggle class on all

// 256. Delegate to #delegation-zone, on click update phase name in status tracker

// 257. On click, read data-action, if starts with 'action2', update #target-192

// 258. Delegate click, use closest() to find button, update button AND parent container

// 259. On .delegate-btn click, calculate index in list, update target at that index

// 260. Delegate to parent, on click toggle class on clicked, next, AND previous elements

// 261. On click in #delegation-zone, read data-zone, highlight first button in that zone

// 262. Delegate click, if button has '.active', remove from all, else add to clicked

// 263. On .delegate-btn click, get id number, update target with same number + 100

// 264. Delegate to parent, on click check if shift key, select range if true

// 265. On click, read data-action number, update that many consecutive targets

// 266. Delegate click, find closest card, update card AND all children with class

// 267. On .delegate-btn click, count clicks on that button, display count in target

// 268. Delegate to #delegation-zone, on click update completion % in status panel

// 269. On click, use closest() chain to find grandparent, update grandparent class

// 270. Delegate click, read data-zone, add '.rainbow' to all odd buttons in zone

// 271. On .delegate-btn click, if data-action contains 'action3', chain 3 updates

// 272. Delegate to parent, on click swap classes between clicked and sibling

// 273. On click, read multiple data attributes, update targets based on values

// 274. Delegate click, find button by closest(), update button text to click count

// 275. On .delegate-btn click, get zone, toggle all buttons in zone simultaneously

// 276. Delegate to #delegation-zone, on click create new element and append

// 277. On click, use e.target.matches() to check type, different logic for each

// 278. Delegate click, read data-action, filter targets, update filtered set

// 279. On .delegate-btn click, find position in parent, update that numbered container

// 280. Delegate to parent, on click update clicked AND all matching data-zone

// 281. On click in #delegation-zone, read data, update rep-tracker dynamically

// 282. Delegate click, use closest() to find button, clone and append to parent

// 283. On .delegate-btn click, calculate distance from first button, update target

// 284. Delegate to parent, on click toggle class on clicked, siblings, AND parent

// 285. On click, read data-action, split by number, update that ID

// 286. Delegate click, find closest button, get all data attrs, update 5 targets

// 287. On .delegate-btn click, check if last in zone, special action if true

// 288. Delegate to #delegation-zone, on click get index, update target-(index)

// 289. On click, use closest() to find container, update container AND nested children

// 290. Delegate click, read data-zone, remove '.error' from all, add to clicked zone

// 291. On .delegate-btn click, get id, extract number, update input with that number

// 292. Delegate to parent, on click find all buttons with same data-action, toggle all

// 293. On click in #delegation-zone, calculate total buttons, update #target-193

// 294. Delegate click, use e.submitter if form, else use e.target for button

// 295. On .delegate-btn click, read data-value, update multiple targets if value matches

// 296. Delegate to parent, on click get clicked element, update it AND 2 random targets

// 297. On click, use closest() multiple times to traverse DOM, update each level

// 298. Delegate click, find button by id, swap textContent with another button

// 299. On .delegate-btn click, read all data attrs, create object, log to console

// 300. FINAL REP: Add ONE master listener to entire body, log every click with target id, update rep-tracker to 300, add '.rainbow' to all targets, celebrate completion
