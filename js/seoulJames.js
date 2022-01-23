const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 28;    // 페이지 수
// 결과 계산
let select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let backTarget = [];

// 결과 계산
function calResult() {
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult(shared = false) {
    let point = calResult();
    if (shared) point = parseInt(getParam('result'));     // 공유하기로 들어온 경우
    var resultName = document.querySelector('.resultname');
    var resultTitle = document.createElement('div');
    resultTitle.classList.add('result-title')
    resultTitle.innerHTML = infoList[point].name;
    resultName.append(resultTitle);

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = './images/resultSheet/result' + point +'.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    var resultDesc = document.querySelector('.resultDesc');
    var desc = document.createElement('div');
    desc.classList.add('result-description');
    resultDesc.append(desc);
    var resultUl = document.createElement('ul');
    infoList[point].desc.forEach(value => {
        var resultLi = document.createElement('li');
        resultLi.innerHTML = value.text;
        resultUl.append(resultLi);
    })
    desc.append(resultUl);

    var resultLinks = document.createElement('div');
    resultLinks.classList.add('result-links');
    var link1 = document.createElement('div');
    var link2 = document.createElement('div');
    link1.innerText = '성경사전';
    link2.innerText = '영상마당';
    if (infoList[point].link1) link1.onclick = () => window.location.href = infoList[point].link1;
    if (infoList[point].link2) link2.onclick = () => window.location.href = infoList[point].link2;
    resultLinks.append(link1);
    resultLinks.append(link2);
    desc.append(resultLinks);

    var combi = document.querySelector('.combi');
    infoList[point].combi.forEach(value => {
        var item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = value.combiName;
        combi.append(item);
    });

    var bible = document.querySelector('.bible');
    bible.innerHTML = infoList[point].bible;

    // 결과페이지 url 파라미터 추가
    if (!shared) {
        history.pushState('', '', window.location.href + '?result=' + point);
    }
}

function goResult() {
    qna.style.WebKitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
        result.style.WebKitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";

        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
    })

    setResult();
}

function addAnswer(answerText, qIdx, idx, type) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.append(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebKitAnimation = "fadeOut 0.6s";
            children[i].style.animation = "fadeOut 0.6s";
        }
        
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            backTarget = target;
            if( target.length > 0 ) {
                for(let i = 0; i < target.length; i++){
                    select[target[i]] += 1;
                }
            } 
        
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx, 'next');
        }, 450);
    }, false);
}

function goNext(qIdx, type) {
    if(qIdx === endPoint) {
        goResult();
        return;
    }

    var c = document.querySelector('.contentBox');
    c.innerHTML = qnaList[qIdx].c;
    
    var q = document.querySelector('.qBox');
    q.innerHTML =  qnaList[qIdx].q;

    for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i, type);
    }

    var b = document.querySelector('.bgmBox');
    if (qnaList[qIdx].b) b.innerHTML = qnaList[qIdx].b;

    var backBox = document.querySelector('.backBox');
    var backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.textContent = '<';
    backBtn.onclick = function () {
        var backIdx = --qIdx;
        var a = document.querySelector('.answerBox');
        a.innerHTML = '';

        for(let i = 0; i < backTarget.length; i++) {
            select[backTarget[i]] -= 1;
        }
        goNext(backIdx, 'back');
        return;
    };
    
    if(qIdx >= 1) {
        backBox.append(backBtn);
    } else {
        backBox.innerHTML = '';
    }
}

function begin() {
    document.querySelector('.bgm').play();

    main.style.WebKitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
        qna.style.WebKitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450)
        let qIdx = 0;
        goNext(qIdx, 'next');
    }, 450);
}

function shareUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.")
}

// 말씀광장 연결
function goToWordSquare() {
    window.location.href = 'https://www.wordsquare.org/';
}

// 말씀광장 유형테스트 연결
function goToOtherTests() {
    window.location.href = 'https://www.wordsquare.org/square-crossroads/assessments';
}

// 테스트 첫 페이지 이동
function goToHome() {
    // 결과 reset
    select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // window.location.reload();
    window.location.href = window.location.href.split('?')[0];
}

// 트위터 공유
function shareTwitter() {
    var sendText = "성경 속 나와 닮은 인물";
    // TODO: 배포 url 추가
    var sendUrl = "";
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl, 'twittersharedialog',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
}

// 페이스북 공유
function shareFacebook() {
    // TODO: 배포 url 추가
    var sendUrl = "";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl, 'facebooksharedialog',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
}

// 네이버 블로그 공유
function shareNaverBlog() {
    // TODO: 배포 url 추가
    var sendUrl = "";
    window.open("http://blog.naver.com/openapi/share?url=" + sendUrl, 'naversharedialog',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
}

function goToSharedResult() {
    let resultParam = getParam('result');
    if (resultParam) {
        main.style.display = "none";
        result.style.display = "block";
        setResult(true);
    }
}

// url 에서 parameter 추출
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}