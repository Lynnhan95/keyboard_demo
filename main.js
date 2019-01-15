//declare keys as an array
var keys = {
    '0':['q','w','e','r','t','y','u','i','o','p'],
    '1':['a','s','d','f','g','h','j','k','l'],
    '2':['z','x','c','v','b','n','m'],
    'length': 3
}
//declare hash as a hash table
var hash = {
    'q':'http://qq.com',
    'w':'http://weibo.com'
}
var hashInLocalStorage = JSON.parse(localStorage.getItem('uuu') || 'null'); //null和undefined有啥区别
            if(hashInLocalStorage){
                hash = hashInLocalStorage
            }
count = keys.length;
var wrapper = document.getElementById('wrapper');
for(i=0; i < count; i++){
    console.log('ok');
    var div = document.createElement('div');
    wrapper.appendChild(div);
    row = keys[i];
    for(j=0; j < row.length ; j++){
    var kbd = document.createElement('kbd');
        kbd.textContent = row[j];
        var btn = document.createElement('button');
        btn.textContent = 'edit';
        btn.id = row[j]
        btn.onclick = function(kkk){
            console.log('button clicked');
            btnKey = kkk.target.id;
            enterWeb = prompt('Please enter a website URL');
            hash[btnKey] = enterWeb;
            localStorage.setItem('uuu', JSON.stringify(hash));

        }
        kbd.appendChild(btn);
        div.appendChild(kbd);
    }

}

// document.addEventListener("onkeypress", function(){
//     console.log('what')
// })

document.onkeypress = function(eee){
    var keyValue = eee['key'];
    var website = hash[keyValue];
    // location.href = website
    window.open(website, '_blank');
}
