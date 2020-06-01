
//1 初始化數據

    var keys = {
        0: ['Esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '~'],
        1: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete'],
        2: ['Control', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Return'],
        3: ['shl', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'shr', 'fn'],
        length: 4
    }

    var hash = {
        w: 'wix.com',
        e: 'evernote.com',
        y: 'yahoo.com.hk',
        u: 'unwire.hk',
        p: 'paypal.com',
        a: 'apple.com',
        g: 'www.google.com',
        h: 'hk01.com',
        j: 'javascript.ruanyifeng.com',
        x: 'xiedaimala.com',
        c: 'chinese.engadget.com',
        b: 'bbc.com',
        n: 'dcfever.com',
        m: 'medium.com',
    }



function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem('name') || 'null')
}

function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var span1 = tag('span')
    span1.textContent = textContent
    span1.className = 'text'
    return span1
}

function createButton(id) {
    var button1 = tag('button')
    button1.textContent = 'edit'
    button1.id = id
    button1.onclick = function (click1) {
        var key = click1.target.id
        var x = prompt('input new link')
        hash[key] = x
        localStorage.setItem('storage1', JSON.stringify(hash))
    }
    return button1
}

function createImage(domain) {
    var img1 = tag('img')
    if (domain) {
        img1.src = 'https://' + domain + '/favicon.ico'
    } else {
        img1.src = 'https://i.loli.net/2019/02/07/5c5b9d224db60.png'
    }
    img1.onerror = function (x) {
        x.target.src = 'https://i.loli.net/2019/02/07/5c5b9d224db60.png'
    }
    return img1
}


//取出localstorage 中的 storage1 對應的 hash
var hashInLocalStorage = getFromLocalStorage('storage1')
if (hashInLocalStorage) {
    hash = hashInLocalStorage
}



//2 根據初始化數據建立鍵盤
for (var index = 0; index < keys['length']; index = index + 1) {
    var div1 = tag('div')
    main1.appendChild(div1)
    var row = keys[index]
    for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {

        var span = createSpan(row[index2])

        var button = createButton(row[index2])

        var img = createImage(hash[row[index2]])

        var kbd1 = tag('kbd')
        kbd1.className = 'key'
        kbd1.id = row[index2] + '-key'

        kbd1.appendChild(span)
        kbd1.appendChild(img)
        kbd1.appendChild(button)

        div1.appendChild(kbd1)
    }
}




//優化部分鍵帽樣式
Esc.parentElement.className = 'key esc second-keycap';
Tab.parentElement.className = 'key tab second-keycap';
Delete.parentElement.className = 'key delete second-keycap';
Control.parentElement.className = 'key control second-keycap';
Return.parentElement.className = 'key return second-keycap';
shl.parentElement.className = 'key shl second-keycap';
shr.parentElement.className = 'key shr second-keycap';
fn.parentElement.className = 'key fn second-keycap';

var presedKey = '';

//3 監聽鍵盤
document.onkeypress = function (press) {
    var key = press.key
    var website = hash[key]
    document.getElementById('p1').innerHTML = website
    window.open('https://'+ website, '_blank')
}





