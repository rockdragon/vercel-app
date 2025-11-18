const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
addBtn.addEventListener('click', addItem);
input.addEventListener('keydown', e=>{ if(e.key==='Enter') addItem(); });
function addItem(){
  const v = input.value.trim();
  if(!v) return;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = v;
  const btn = document.createElement('button');
  btn.textContent = 'Done';
  btn.onclick = ()=> li.remove();
  li.appendChild(span); li.appendChild(btn);
  list.appendChild(li); input.value=''; input.focus();
}