//declare keys as an array
//keys global variable
var keys = {
    '0':['q','w','e','r','t','y','u','i','o','p'],
    '1':['a','s','d','f','g','h','j','k','l'],
    '2':['z','x','c','v','b','n','m'],
    'length': 3
}
//declare hash as a hash table
var hash = {
    'q':'www.qq.com',
    'w':'www.weibo.com',
    'e':'www.explainshell.com'
}
//封装localStorage函数
function getFromLocal(name){
    return JSON.parse(localStorage.getItem('name') || 'null');
}
function tag(tagName, attributes){
    var element = document.createElement(tagName);
    for(var key in attributes){  // key 为 className id
        element[key] = attributes[key]
    }
    return element
}
//取出local storage中 zzz 中的hash
var hashInLocalStorage = getFromLocal('zzz'); //null和undefined有啥区别
            if(hashInLocalStorage){
                hash = hashInLocalStorage
            }


//2.生成键盘
//遍历keys，生成kbd标签
count = keys.length;
for(i=0; i < count; i++){
    // var div = document.createElement('div');
    div = tag('div', {className: 'row'});
    var wrapper = document.getElementById('wrapper');
    wrapper.appendChild(div);
    row = keys[i];
    for(j=0; j < row.length ; j++){
    var span = tag('span');
    span.textContent = row[j];
    span.className = 'text';

    var btn = document.createElement('button');
    btn.textContent = 'edit';
    btn.id = row[j]
    btn.onclick = function(kkk){
        console.log('button clicked');
        //get the button clicked by users
        button2 = kkk['target'];
        img2 = button2.nextSibling;
        btnKey = kkk.target.id;
        enterWeb = prompt('Please enter a website URL');
        hash[btnKey] = enterWeb;
        localStorage.setItem('uuu', JSON.stringify(hash));

        }
    var kbd = tag('kbd');
    kbd.appendChild(span);


    var img = document.createElement('img');
    if(hash[row[j]]){
        img.src = 'http://' + hash[row[j]] + '/favicon.ico'
    }else{
        img.src = 'https://i.loli.net/2019/01/17/5c3f7b0d14d70.png'
    }
    img.onerror = function(yyy){
        yyy.target.src = 'https://i.loli.net/2019/01/17/5c3f7b0d14d70.png'
    }
    kbd.appendChild(btn);
    kbd.appendChild(img);
    div.appendChild(kbd);
    }

}

// document.addEventListener("onkeypress", function(){
//     console.log('what')
// })
//3.全局键盘监听
document.onkeypress = function(eee){
    var keyValue = eee['key'];
    var website = hash[keyValue];
    // location.href = website
    window.open(website, '_blank');
}
