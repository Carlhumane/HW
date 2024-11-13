const node_for_click_all = document.getElementById("for_click_all")

function edit_all(){
    document.getElementsByTagName('p')[0].innerText = 'Miheilis'
    document.getElementsByTagName('p')[1].innerText = 'Kirill'
    document.getElementsByTagName('p')[3].innerText = '2002'
}
node_for_click_all.addEventListener('click', edit_all)





