/**
 * Result
 * 
 * 누가: ISTJ, 0
 * 베드로: ISFJ, 1
 * 욥: INFJ, 2
 * 노아: INTJ, 3
 * 마가: ISTP(INTP), 4
 * 아브라함: ISFP, 5
 * 요셉: INFP, 6
 * 도마: INTP, 7
 * 야곱: ESTP, 8
 * 다윗: ESFP, 9
 * 예레미야: ENFP, 10
 * 솔로몬: ENTP, 11
 * 바울: ESTJ, 12
 * 스데반: ESFJ, 13
 * 요한: ENFJ, 14
 * 모세: ENTJ, 15
 * 
 */

// TO DO : 콘텐츠 추가
 const qnaList = [
    {
        c: '<div class="center-box">'+
            '<div class="intro-description">'+
                '<img src="images/flower-icon.png" class="flower-icon"/><br/>'+
                '당신은 이제부터<br/>약 2,000년 전으로 돌아가게 됩니다.<br/>예수를 믿으면 핍박 받고 죽임을 당하던 시대.<br/><br/>'+
                '선지사도와 같은 상황에 처한 당신의 선택으로<br/>나와 닮은 성경 인물은 누구인지 알아보세요!'+
            '</div>'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'intro-btn', answer: '테스트 시작하기', type: [] }
        ]
    },
    {
        c: '<div class="center-box">'+
            '<div class="intro-bible">좁은 문으로 들어가라<br/>멸망으로 인도하는 문은 크고<br/>그 길이 넓어 그리로 들어가는 자가 많고<br/>'+
            '생명으로 인도하는 문은 좁고<br/>길이 협착하여 찾는 이가 적음이니라<br/>'+
            '<span>마 7:13-14</span>'+
            '</div>'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'intro-btn', answer: '계속', type: [] }
        ]
    },
    {
        c: '<div class="center-box" style="background: black">'+
            '<div class="intro"><div class="center-text">'+
            '이게 무슨 소리지?<br/><br/><br/><br/><br/><br/><br/>'+
            '대체 뭐라고 하는지<br/>잘 알아듣지 못하겠어...<br/><br/><br/><br/><br/><br/>'+
            '</div>'+
            '<div class="left-text">'+
            '(사람들이 떠드는 소리에<br/>그 쪽으로 귀를 귀울여본다...)'+
            '</div>'+
            '</div>'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn', answer: '천천히 눈을 떠본다', type: [] }
        ],
        b: '<audio autoplay><source src="audio/crowd.mp3" type="audio/mp3"></audio>',
    },
    {
        c: '<div class="img-box-long">'+
            '<img src="images/eye1.gif" alt="eye1">'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn', answer: '계속', type: [] }
        ]
    },
    {
        c: '<div class="img-box">'+
            '<img src="images/5.png" alt="5">'+
            '</div>'+
            '<div class="balloon-right" style="top: 10%">'+
            '여기가 어디지?<br />분명 난 내 방에서 잠들었는데...?'+
            '</div>'+
            '<div class="balloon-right" style="top: 50%">'+
            '웬 사람들이<br />이렇게 모여 있는거야?'+
            '</div>',
        q: '무슨 일이 일어나고 있는건지 궁금해진 나는...',
        a: [
            { cssClass: 'none', answer: '먼저 말을 걸어 무슨일인지 물어본다', type: [8, 9, 10, 11, 12, 13, 14, 15] },
            { cssClass: 'none', answer: '혼자 생각을 정리하며 <br /> 조용히 상황을 파악한다', type: [0, 1, 2, 3, 4, 5, 6, 7] }
        ]
    }, 
    {
        c: '<div class="img-box">'+
            '<img src="images/6.png" alt="6">'+
            '</div>'+
            '<div class="text-box" style="bottom: 30%">'+
            '사람들 말에 의하면 방금 그들의 동료가<br />로마 군병들에게 잡혀갔다고 한다.<br /><br />아마 곧 사형집행이<br />진행 될 것 같다고 하는데...'+
            '</div>', 
        q: '나는 일단,',
        a: [
            { cssClass: 'none', answer: '주변 사람들에게 물어보며 <br /> 상황을 정리하자', type: [8, 9, 10, 11, 12, 13, 14, 15] },
            { cssClass: 'none', answer: '일단 구석으로 가서 혼자 <br/> 잠깐 정리할 시간을 갖자', type: [0, 1, 2, 3, 4, 5, 6, 7] }
        ]
    }, 
    {
        c: '<div class="img-box">'+
            '<img src="images/7.png" alt="7">'+
            '</div>'+
            '<div class="text-box" style="bottom: 30%">'+
            '어찌 된 영문인지 시간여행을 온 것 같다.<br />날이 밝는 대로 동굴 밖으로 나가<br />상황을 알아보려는데…<br />'+
            '</div>',
        q: '나는', 
        a: [
            { cssClass: 'none', answer: '나갈 때 챙겨갈 것과 필요한 것을 <br /> 미리 준비한다', type: [0, 1, 2, 3, 12, 13, 14, 15] },
            { cssClass: 'none', answer: '조금 더 누워있다가 <br /> 나가기 전에 챙긴다', type: [4, 5, 6, 7, 8, 9, 10, 11] }
        ]
    }, 
    {
        c: '<div class="img-box">'+
            '<img src="images/8.JPG" alt="8">'+
            '</div>'+
            '<div class="text-box" style="bottom: 30%">'+
            '동굴 밖으로 나오니 눈 앞에 낯선 풍경이 펼쳐졌다.'+
            '</div>',
        q: '시간여행을 실감하게 된 나는',
        a: [
            { cssClass: 'none', answer: '주변을 더욱 경계하며 <br /> 계획대로 움직인다', type: [0, 1, 2, 3, 12, 13, 14, 15] },
            { cssClass: 'none', answer: '기왕 온 시간여행, 즐기면서 <br /> 발길 가는대로 움직인다', type: [4, 5, 6, 7, 8, 9, 10, 11] }
        ]
    }, 
    {
        c: '<div class="img-box"><img src="images/9.JPG" alt="9"></div><div class="text-box" style="bottom: 30%">장터에 가니 저마다 대화하는 무리가 보인다.</div>',
        q: '나는 이 중 어떤 무리에게 가서 말을 걸까?', 
        a: [
            { cssClass: 'none', answer: '조용히 대화하는 소수의 무리', type: [0, 1, 2, 3, 4, 5, 6, 7] },
            { cssClass: 'none', answer: '왁자지껄하고 친근해 보이는 무리', type: [8, 9, 10, 11, 12, 13, 14, 15] }
        ],
        b: '<audio autoplay><source src="audio/market.mp3" type="audio/mp3"></audio>',
    }, 
    {
        c: '<div class="img-box-long"><img src="images/10.png" alt="10"></div><div class="balloon-right" style="top: 15%">저기요! 어제 밤에 밖이 많이<br />소란스럽던데... 무슨 일이 있나요?</div><div class="balloon-left" style="top: 55%">로마 군병들이 예수라는 작자 믿는<br />이단들 잡으러 갔다 합디다!</div><div class="balloon-right" style="top: 67%">예수가 이단이라고요??</div>',
        q: '', 
        a: [
            { cssClass: 'continue-btn alone', answer: '계속', type: [] },
        ]
    }, 
    {
        c: '<div class="img-box-long">'+
                '<img src="images/11.png" alt="11">'+
            '</div>'+
            '<div class="balloon-left" style="top: 10%">'+
                '자기가 하나님의 아들이라 그러고,<br />'+
                '자기 피와 살을 먹으면 영생한다던데<br />'+
                '그게 이단이 아니면 뭐요?'+
            '</div>'+
            '<div class="balloon-right" style="top: 25%">'+
                '아니... 그래도...'+
            '</div>'+
            '<div class="balloon-left" style="top: 48%">'+
                '설마 당신도 예수쟁이요?<br />'+
                '당신도 그 이단 나부랭이를 믿는 거요?'+
            '</div>'+
            '<div class="balloon-right" style="top: 60%">'+
                '아.. 아뇨!<br />'+
                '아닙니다 그런거...!'+
            '</div>',
        q: '', 
        a: [
            { cssClass: 'continue-btn', answer: '계속', type: [] },
        ]
    },
    {
        c: '<div class="img-box-long">'+
                '<img src="images/16.JPG" alt="12">'+
            '</div>'+
            '<div class="text-box" style="bottom: 20%">'+
                '쳐다보는 시장 사람들의 눈길이 무서워졌다...<br><br>'+
                '게다가 날도 어두워지고 있으니<br>'+
                '슬슬 돌아가기로 하자..!'+
            '</div>',
        q: '', 
        a: [
            { cssClass: 'continue-btn alone', answer: '계속', type: [] },
        ]
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/17.jpg" alt="13">'+
            '</div>'+
            '<div class="text-box" style="top: 10%">'+
                '돌아가는 길에 어제 밤에 만났던<br>'+
                '그리스도인들과 재회했다..'+
            '</div>'+
            '<div class="balloon-left" style="top: 25%">'+
                '이제 해가 저물어 예수님의 복음을<br>'+
                '전하러 가는 길인데...<br>같이 가겠소?'+
            '</div>',
        q: '그래서 나는...',
        a: [
            { cssClass: 'none', answer: '그래 까짓 거 한번 해보자! <br /> 함께간다', type: [4, 5, 6, 7, 8, 9, 10, 11] },
            { cssClass: 'none', answer: '오늘 계획에 없던 일이라 <br /> 당황스러워한다', type: [0, 1, 2, 3, 12, 13, 14, 15] }
        ]
    }, 
    {
        c: '<div class="img-box-long">'+
                '<img src="images/18.jpg" alt="14">'+
            '</div>'+
            '<div class="text-box" style="top: 10%">'+
                '고민하는 사이,<br>'+
                '저 멀리서 말 발굽소리가 들려온다.'+
            '</div>'+
            '<div class="text-box" style="bottom: 20%">'+
                '로마 군병들이다..!!<br><br>'+
                '우리는 지체할 시간도 없이<br>'+
                '황급히 카타콤으로 향했다<br><br>'+
                '<div class="sub-text script" style="bottom: 5%">'+
                    '* 카타콤 : 초기 그리스도 교도의 지하묘지'+
                '</div>'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn alone', answer: '이동하기', type: [] }
        ],
        b: '<audio autoplay><source src="audio/horse.mp3" type="audio/mp3"></audio>',
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/20.jpg" alt="15">'+
            '</div>'+
            '<div class="text-box" style="top: 10%">'+
                '카타콤에 모인 사람들.<br>'+
                '복음 전하는 방법을 두고 의견이 분분하다.'+
            '</div>',
        q: '여러 의견이 팽팽한 가운데... 나의 선택은?',
        a: [
            { cssClass: 'none', answer: '미래를 생각하고 움직여야 한다.<br /> 지금은 숨죽이고 나중을 위한 준비를 하자.', type: [2, 3, 6, 7, 10, 11, 14, 15] },
            { cssClass: 'none', answer: '현재가 없으면 미래도 없다. <br /> 멈춰서지 말고 즉시 행동으로 옮기자.', type: [0, 1, 4, 5, 8, 9, 12, 13] }
        ]
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/21.jpg" alt="16">'+
            '</div>'+
            '<div class="text-box" style="bottom: 35%">'+
                '머리가 복잡하고 답답해진 나는..<br>'+
                '바깥공기도 쐬고 상황도 살피러<br>'+
                '몇몇 사람들과 함께 나가보기로 한다.'+
            '</div>',
        q: '이때 나는',
        a: [
            { cssClass: 'none', answer: '내가 주도하여 사람들을 이끌어 나간다.', type: [2, 3, 6, 7, 10, 11, 14, 15] },
            { cssClass: 'none', answer: '다른 사람들의 의견을 듣고 나간다.', type: [0, 1, 4, 5, 8, 9, 12, 13] }
        ]
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/21.jpg" alt="17">'+
            '</div>'+
            '<div class="text-box" style="bottom: 35%">'+
                '밤이 어두워 잘 보이진 않지만<br>'+
                '이 근처는 안전한 것 같다...<br><br>'+
                '이때 무리 중 누군가<br>'+
                '기왕 나온 김에 시장까지 내려가보자고 한다.'+
            '</div>',
        q: '썩 내키지 않은 당신의 선택은?',
        a: [
            { cssClass: 'none', answer: '고민하다가 마지못해 들어준다', type: [1, 2, 5, 6, 9, 10, 13, 14] },
            { cssClass: 'none', answer: '이유를 조목조목 들며 강력하게 반대한다.', type: [0, 3, 4, 7, 8, 11, 12, 15] }
        ]
    }, 
    {
        c: '<div class="img-box-long">'+
                '<img src="images/23.jpg" alt="18">'+
            '</div>'+
            '<div class="text-box" style="bottom: 20%">'+
                '갈팡질팡하는 사이...<br>'+
                '갑자기 주위가 밝아졌다<br><br>'+
                '주위를 둘러싼 로마 군병들로 인해<br>'+
                '우리는 그 자리에서 붙잡히고 말았다.'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn alone', answer: '계속', type: [] }
        ]
    }, 
    {
        c: '<div class="img-box-long">'+
                '<img src="images/24.jpg" alt="19">'+
            '</div>'+
            '<div class="balloon-left" style="top: 25%">'+
                '카악 퉤!<br>재수가 없다니까!<br>'+
                '더러운 예수쟁이들'+
            '</div>'+
            '<div class="balloon-left" style="top: 43%">'+
                '너네가 믿는 하나님의 아들한테<br>'+
                '와서 구해달라 하지 왜?!'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn alone', answer: '걸어가기', type: [] }
        ]
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/26.jpg" alt="20">'+
            '</div>',
        q: '너무 분하고 억울한 나는...',
        a: [
            { cssClass: 'none', answer: '예수님이 왜 하나님의 아들인지 <br /> 큰 소리로 외친다.', type: [0, 3, 4, 7, 8, 11, 12, 15] },
            { cssClass: 'none', answer: '하고 싶은 말이 너무 많은데 <br /> 분해서 눈물부터 난다.', type: [1, 2, 5, 6, 9, 10, 13, 14] }
        ]
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/27.jpg" alt="22">'+
            '</div>'+
            '<div class="text-box" style="bottom: 30%">'+
                '더럽고 냄새나는 감옥에 같혔다<br>'+
                '단지 예수님을 믿는다는 이유로<br>'+
                '나는 지금 죽게 생겼다...<br><br>'+
                '이 때, 두려움에 떨며 예수를 괜히 믿었다는<br>'+
                '사람들이 생기기 시작했다.<br><br>'+
                '나는 그들에게<br>'+
                '미래의 신앙인들이 당신들을 어떻게 생각하게<br>'+
                '되는지 말해주고 싶다.'+
            '</div>',
        q: '어떻게 말해줄 것인가?',
        a: [
            { cssClass: 'none', answer: '좋게좋게 <br /> 돌려서 잘 말해준다.', type: [1, 2, 5, 6, 9, 10, 13, 14] },
            { cssClass: 'none', answer: '당신의 생각은 잘못되었다고 <br /> 직설적으로 말해준다.', type: [0, 3, 4, 7, 8, 11, 12, 15] }
        ]
    },
    {
        c: '<div class="img-box-long">'+
                '<img src="images/29.jpg" alt="23">'+
            '</div>'+
            '<div class="text-box" style="bottom: 20%">'+
                '시간이 지나 군병들이 돌아왔고<br>'+
                '길고 어두운 감옥을 지나<br><br>'+
                '콜로세움 광장에 다다랐다.'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn alone', answer: '계속', type: [] }
        ]
    },
    {
        c: '<div class="img-box">'+
                '<img src="images/30.JPG" alt="24">'+
            '</div>'+
            '<div class="text-box" style="bottom: 30%">'+
                '군병들이 사자를 묶고있던 쇠사슬이 풀었다.<br>'+
                '사자는 기다렸다는 듯이 나를 향해 달려왔다!!'+
            '</div>',
        q: '나는 지금 어떤 생각을 하고 있나?',
        a: [
            { cssClass: 'none', answer: '과거의 경험과 데이터를 통해 <br /> 위기를 극복하려 한다.', type: [0, 1, 4, 5, 8, 9, 12, 13] },
            { cssClass: 'none', answer: '현재의 직감과 판단력으로 <br /> 위기를 극복하려 한다.', type: [2, 3, 6, 7, 10, 11, 14, 15] }
        ]
    },
    {
        c: '<div class="center-box" style="background: black">'+
            '<div class="center-text">'+
                '아직 못 해본게 너무 많은데...<br />'+
                '음..? 근데 왜 아직 의식이 있는거지?'+
            '</div>'+
            '<div class="koong-text">쿵...!!</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn', answer: '눈을 뜬다', type: [] }
        ]
    },
    {
        c: '<div class="img-box-long">'+
            '<img src="images/eye2.gif" alt="eye2">'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn', answer: '계속', type: [] }
        ]
    },
    {
        c: '<div class="img-box-long">'+
                '<img src="images/32.png" alt="26">'+
            '</div>'+
            '<div class="text-box" style="bottom: 40%">'+
                '이게 다 꿈이었구나...<br />'+
                '그냥 다 꿈이라고 믿기엔 너무 생생해...<br /><br />'+
                '목숨을 걸고 밤마다 전도하러<br />'+
                '나가던 이들의 결연한 얼굴,<br /><br />'+
                '이단이 아닌데 이단이라는 오해를 받고도<br />'+
                '신앙의 자리를 지키던 그들이 생각난다...'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'continue-btn alone', answer: '침대에서 일어나기', type: [] }
        ]
    },
    {
        c: '<div class="center-box" style="background: black">'+
            '<div class="last-text">'+
                '2천 년 전, 하나님을 믿는다면서<br/>'+
                '하나님이 약속대로 보내신 예수님과<br/>'+
                '믿는 자들을 이단이라며 핍박했다.<br/><br/>'+
                '오늘날 우리가 정말 2천 년 전으로 돌아간다면,<br/>'+
                '모두가 손가락질하는 예수님을<br/>'+
                '끝까지 믿고 따를 수 있었을까?<br/><br/>'+
                '과연 나는 2천 년 전의 유대인과<br/>'+
                '다르다고 말할 수 있을까?'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'none', answer: '계속', type: [] }
        ]
    },
    {
        c: '<div class="center-box" style="background: black">'+
                '<div class="center-text">'+
                    '<img src="images/flower-icon.png" class="flower-icon"/><br/>'+
                    '순교자들의 유언<br/><br/>'+
                    '나는 죽어도 좋습니다.<br/>'+
                    '그러나 나의 구주를 배신할 수 없습니다<br/>'+
                    '- 셀비리 포리오 (투기장에서 찢겨 순교)<br/><br/>'+
                    '나는 내 입술로 그리스도를 부인할 수 없소.<br/>'+
                    '- 바실 (A.D 362년 몸이 찢겨 순교)'+
                '</div>'+
                '<div class="right-text">*순교: 자신이 믿는 신앙을 지키기 위해<br/>'+
                    '죽음을 선택하는 것</div>'+
            '</div>',
        q: '',
        a: [
            { cssClass: 'none', answer: '결과보기', type: [] }
        ]
    }
]

/**
 * infoList: 결과 정보
 */
const infoList = [
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>누가</h1><h2>(Luke)<h2><img class="result-bar right"/><p>사실에 근거하여 사고하고 신용과 신뢰를 구축하는 현실주의자</p>',
        desc: [
            { text: '당신은 신뢰의 사람 누가를 닮았습니다.'},
            { text: '누가는 예수님과 제자들의 사역을 보고 느끼며 누구보다 충실하게 역사를 기록해나갔습니다.' },
            { text: '누가는 바울이 로마에서 옥에 갇혀있을 때에도 그의 옆을 지켰습니다.' },
            { text: '당신은 누가처럼 믿을만한 대상에게 헌신할 줄 아는 사람입니다.'},
            { text: '어떤 궂은 일도 마다하지 않는 믿음과 헌신을 보고 사람들은 당신에게 중요한 일을 맡기고자 할 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>다윗</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>모세</h1>' }
        ],
        bible: '<p>참고성구</p><p><a target="_blank" href="https://bible.godpia.com/read/reading.asp?ver=han&vol=luk&chap=1&sec=1&positionId=han_luk_1_1#han_luk_1_1">눅1:1~4,</a> <a target="_blank" href="https://bible.godpia.com/read/reading.asp?ver=han&vol=2ti&chap=4&sec=11&positionId=han_2ti_4_11#han_2ti_4_11">딤후4:11</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>베드로</h1><h2>(Peter)<h2><img class="result-bar right"/><p>소중한 이들을 수호하고 헌신하는 강하고 성실한 방어자형</p>',
        desc: [
            { text: '당신은 강직한 성품과 뛰어난 리더쉽을 지녔던 바울을 닮았습니다.'},
            { text: '하나님과 그의 성도들을 위해 자기 몸을 아끼지 않았던 베드로는 이후 그리스도의 반석으로 우리 신앙의 든든한 기둥이 되어주었습니다.' },
            { text: '당신은 베드로처럼 진리를 수호하고 성도들에게 헌신하기를 원합니다.' },
            { text: '당신은 믿음을 주기로 마음먹은 상대에게 자신의 모든 것을 내어줄 수 있는 진실됨을 지니고 있습니다.'},
            { text: '이러한 당신의 의리와 충정에 힘입어 많은 성도들이 그리스도의 길에 동참하기를 원할 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>야곱</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>솔로몬</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=jhn&chap=21&sec=7&positionId=han_jhn_21_7#han_jhn_21_7">요21:7,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=act&chap=2&sec=1&positionId=han_act_2_1#han_act_2_1">행2~5장,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=act&chap=5&sec=40&positionId=han_act_5_40#han_act_5_40">행5:40~42</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>욥</h1><h2>(Job)<h2><img class="result-bar right"/><p>조용하고 신비로우며 영감이 샘솟는 이상주의자</p>',
        desc: [
            { text: '당신은 심오한 영감의 소유자 욥을 닮았습니다.'},
            { text: '욥은 자신의 마음 깊이까지 하나님을 들이고자 했던 사람입니다. 늘 마음으로 하나님을 배반할까봐 두려워하며 묵상하였습니다.' },
            { text: '이렇게 갈고 닦은 인내의 영성을 바탕으로 욥은 이유 없는 재앙에도 사단에게 굴복하지 않았습니다.' },
            { text: '당신은 조용한 가운데서 하나님 일의 방향과 계획하심을 늘 생각하고 있습니다.'},
            { text: '하나님의 깊은 것을 추구하는 마음이 인내심의 원천이 되어 얄팍한 유혹이나 꾀는 당신에게 통하지 않습니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>예레미야</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>예레미야</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=job&chap=1&sec=5&positionId=han_job_1_5#han_job_1_5">욥1:5,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=job&chap=1&sec=21&positionId=han_job_1_21#han_job_1_21">욥1:21~22</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>노아</h1><h2>(Noah)<h2><img class="result-bar right"/><p>현실적인 상상력이 풍부하며 철두철미한 계획을 세우는 전략가형</p>',
        desc: [
            { text: '당신은 철두철미한 전략가 노아를 닮았습니다.'},
            { text: '노아는 묵묵히 하나님의 방주를 만들었습니다. 산 위에 짓는 배를 보고 많은 이들이 그의 어리석음을 비웃었지만 노아는 철저한 현실주의자였습니다.' },
            { text: '100여년이라는 긴 시간동안 발휘한 풍부한 상상력과 계획은 마침내 대홍수로부터 생명을 지켜낼 수 있는 튼튼한 방주를 만들어냅니다.' },
            { text: '당신은 노아처럼 계획성을 지니고 신앙을 하고자 합니다. 당신은 상상력과 현실감각이라는 두 마리 토끼를 다 잡으며 규모 있는 신앙을 해낼 줄 아는 사람입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>예레미야</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>예레미야</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=gen&chap=8&sec=7&positionId=han_gen_8_7#han_gen_8_7">창8:7~12</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>도마</h1><h2>(Thomas)<h2><img class="result-bar right"/><p>대담하고 현실적이며 다양한 지식에 능한 지적탐험가</p>',
        desc: [
            { text: '당신은 대담한 지적탐험가 도마를 닮았습니다.'},
            { text: '현실적인 도마는 정확한 정보, 근거가 있어야 믿기에 부활하신 예수님의 못자국을 만져보고 믿었습니다.' },
            { text: '당신은 도마처럼 확실한 정보와 지식에 근거해 믿음을 세우고자 합니다.' },
            { text: '당신은 주변의 분위기나 생각에 휘둘리지 않고 자신의 의문을 철저하게 해명하기 원합니다.'},
            { text: '당신의 날카로운 분석과 철저한 논증은 성경에 대한 성도들의 의심을 속시원하게 해결해 줄 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>바울</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>솔로몬</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=jhn&chap=20&sec=24&positionId=han_jhn_20_24#han_jhn_20_24">요20:24~28</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>아브라함</h1><h2>(Abraham)<h2><img class="result-bar right"/><p>마음이 넓고 진중하며 감수성이 높은 조용한 예술가형</p>',
        desc: [
            { text: '당신은 마음씨 넓은 아브라함을 닮았습니다.'},
            { text: '아브라함은 소돔 땅을 멸하시려는 하나님 앞에서 이스라엘 백성의 인정과 선처를 호소합니다.' },
            { text: '진중하고 넓은 마음과 두터운 신의를 지닌 아브라함을 하나님은 "친구"라고 일컫습니다.' },
            { text: '당신은 평화를 사랑하고 포용을 원하는 아브라함의 마음을 닮았습니다.'},
            { text: '당신은 하나님과 그의 말씀에 대한 굳건한 믿음을 원하며, 행동을 통해 그것을 증명하고 있습니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>스데반</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>스데반</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=gen&chap=19&sec=16&positionId=han_gen_19_16#han_gen_19_16">창19:16~33</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>요셉</h1><h2>(Joseph)<h2><img class="result-bar right"/><p>상냥하고 연민이 많으며 뛰어난 감수성을 가진 섬세한 낭만가</p>',
        desc: [
            { text: '당신은 감수성이 뛰어나고 상냥한 요셉을 닮았습니다.'},
            { text: '요셉은 형제로부터 버려져 오랜 시간동안 이집트의 종으로 살았습니다.' },
            { text: '한순간에 종살이를 하게 된 처지를 원망하고 자신의 삶을 비관할 수도 있었겠으나, 그는 하나님의 비전과 돌보심을 놓지 않았습니다.' },
            { text: '요셉은 결국 이집트의 재상 자리에 오르며 형제들의 악행까지도 진심으로 용서하게 됩니다.'},
            { text: '당신의 고요한 성품으로 인해 사람들은 당신의 숨겨진 강인함을 잘 알지 못합니다. 그러나 위기와 역경의 순간에 당신이 보이는 침착하고 섬세한 태도는 많은 성도들에게 영감과 위로를 줄 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>요한</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>스데반</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=gen&chap=50&sec=20&positionId=han_gen_50_20#han_gen_50_20">창50:20~21</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>도마</h1><h2>(Thomas)<h2><img class="result-bar right"/><p>대담하고 현실적이며 다양한 지식에 능한 지적탐험가</p>',
        desc: [
            { text: '당신은 대담한 지적탐험가 도마를 닮았습니다.'},
            { text: '현실적인 도마는 정확한 정보, 근거가 있어야 믿기에 부활하신 예수님의 못자국을 만져보고 믿었습니다.' },
            { text: '당신은 도마처럼 확실한 정보와 지식에 근거해 믿음을 세우고자 합니다.' },
            { text: '당신은 주변의 분위기나 생각에 휘둘리지 않고 자신의 의문을 철저하게 해명하기 원합니다.'},
            { text: '당신의 날카로운 분석과 철저한 논증은 성경에 대한 성도들의 의심을 속시원하게 해결해 줄 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>바울</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>솔로몬</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=jhn&chap=20&sec=24&positionId=han_jhn_20_24#han_jhn_20_24">요20:24~28</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>야곱</h1><h2>(Jacob)<h2><img class="result-bar right"/><p>명석한 두뇌, 넘치는 에너지, 뛰어난 직관력의 천상 엘리트</p>',
        desc: [
            { text: '당신은 신앙의 엘리트 야곱을 닮았습니다.'},
            { text: '야곱은 차남으로 태어났지만 하나님 축복에 대한 사모와 뛰어난 기지에 힘입어 장자의 명분을 얻어냈습니다.' },
            { text: '야곱의 새 이름 이스라엘은 "이긴 자"라는 뜻이며 나중에 그의 민족의 이름이 됩니다.' },
            { text: '당신은 야곱처럼 자기 한계를 뛰어넘는 신앙을 하고자 합니다. 비상한 의지와 명철한 전략을 바탕으로 하나님의 면류관을 얻고자 힘씁니다.'},
            { text: '신앙에 대한 당신의 도약을 보고 성도들은 하나님 백성의 이름이 왜 이스라엘인지 깨닫게 될 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>베드로</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>스데반</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=gen&chap=25&sec=29&positionId=han_gen_25_29#han_gen_25_29">창25:29~34,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=gen&chap=27&sec=1&positionId=han_gen_27_1#han_gen_27_1">창27:1~40,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=gen&chap=32&sec=24&positionId=han_gen_32_24#han_gen_32_24">창32:24~30</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>다윗</h1><h2>(David)<h2><img class="result-bar right"/><p>열정과 에너지가 넘치고, 사람 좋은 즉흥적 박애주의자</p>',
        desc: [
            { text: '당신은 아량이 넓은 박애주의자 다윗을 닮았습니다.'},
            { text: '다윗의 용기와 재능을 시기했던 사울왕은 그를 죽이고자 했으나 다윗은 사울을 죽이지 않았습니다.' },
            { text: '당신은 다윗처럼 진정한 리더의 덕목을 가지고 있습니다.' },
            { text: '당신은 과감하고 추진력 강한 리더쉽과 더불어 자신을 해코지하거나 위협하는 사람도 감싸고 품을 수 있는 배포를 지녔습니다.'},
            { text: '성도들은 당신의 넉넉한 성품을 믿고 자유롭게 자신의 재능을 펼쳐나가며 하나님 나라에 헌신할 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>베드로</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>요한</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=1sa&chap=17&sec=32&positionId=han_1sa_17_32#han_1sa_17_32">삼상17:32~49</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>예레미야</h1><h2>(Jeremiah)<h2><img class="result-bar right"/><p>창의적, 낙천적 성격으로 사람들과 자유로이 어울리는 열정가형</p>',
        desc: [
            { text: '당신은 열정적인 중재자 예레미야를 닮았습니다.'},
            { text: '우는 사람 예레미야는 패역한 백성이 하나님께 돌아오도록 온 몸을 불태웠습니다. 치욕스러운 대접에도 불구하고 예레미야는 백성을 위해 종일토록 우는 것을 그치지 않았습니다.' },
            { text: '당신은 예레미야처럼 개방적이고 낙천적인 성격으로 사람들과 하나님 사이를 중재하고자 합니다.' },
            { text: '당신은 성도들의 부족함을 탓하지 않고 넓은 마음으로 하나님의 말씀을 전하고자 합니다.'},
            { text: '당신의 열정을 기름 삼아 성도들은 신앙에 활력을 얻고 진심에서 우러나온 회개를 하게 될 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>욥</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>욥</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=lam&chap=3&sec=19&positionId=han_lam_3_19#han_lam_3_19">애3:19~39,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=lam&chap=3&sec=38&positionId=han_lam_3_38#han_lam_3_38">애3:38~49,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=jer&chap=20&sec=8&positionId=han_jer_20_8#han_jer_20_8">렘20:8~9</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>솔로몬</h1><h2>(Solomon)<h2><img class="result-bar right"/><p>지적인 도전을 두려워 않는 똑똑한 호기심형</p>',
        desc: [
            { text: '당신은 지혜의 왕 솔로몬을 닮았습니다.'},
            { text: '솔로몬은 그 지혜가 먼 이국에까지 닿았다고 전해지는 이스라엘의 왕입니다.' },
            { text: '선과 악을 분별하는 지혜를 구하고자 하나님께 일천 번제를 드렸다는 일화는 그가 진정한 지혜의 사모자였음을 드러냅니다.' },
            { text: '당신은 솔로몬처럼 진정한 지식과 지혜를 사모합니다. 당신은 그릇된 사상과 편견에 치우치지 않고 참과 거짓을 분별코자 합니다.'},
            { text: '성도들은 당신을 지혜의 면류관으로 여길 것이며 하나님 나라의 미래와 소망을 의탁하게 될 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>노아</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>도마</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=1ki&chap=4&sec=29&positionId=han_1ki_4_29#han_1ki_4_29">왕상4:29~30,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=1ki&chap=10&sec=1&positionId=han_1ki_10_1#han_1ki_10_1">왕상10:1~13,</a> <a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=1ki&chap=3&sec=16&positionId=han_1ki_3_16#han_1ki_3_16">왕상3:16~28</a></p>'
    },
    {
      name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>바울</h1><h2>(Paul)<h2><img class="result-bar right"/><p>살과 조직을 관리하는데<br/>뛰어난 실력을 가진 사업가형</p>',
      desc: [
          { text: '당신은 강직한 성품과 뛰어난 리더쉽을 지녔던 바울을 닮았습니다.'},
          { text: '하나님의 법에 충실했던 바울은 많은 성도들을 올바른 길로 구제해나갔습니다.' },
          { text: '공의공도한 리더쉽을 펼쳤던 바울의 모습은 오늘날 까지도 많은 성도들의 귀감이 되고 있습니다.' },
          { text: '당신은 사적인 감정이나 편견에 휘둘리지 않고 말씀대로 사람의 행실을 판단할 수 있는 능력이 있습니다.'},
          { text: '당신의 정직하고 공정한 성품은 당신이 사람과 조직을 관리하는 데 뛰어난 리더쉽을 발휘하게 해줍니다.'}
      ],
      combi: [
          { combiName: '<h2>최고의 협력자</h2><h1>마가</h1>' },
          { combiName: '<h2>영혼의 단짝</h2><h1>누가</h1>' }
      ],
      bible: '<p>참고성구</p><p><a href="">딤전3:1~13,</a> <a href="">딤전5장,</a> <a href="">살전4:1~12,</a> <a href="">딛1:5~9</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>스데반</h1><h2>(Stephen)<h2><img class="result-bar right"/><p>사교적이며, 타인을 향한 세심한 관심과 배려를 소유한 도우미</p>',
        desc: [
            { text: '당신은 따뜻한 지지자 스데반을 닮았습니다.'},
            { text: '스데반은 은혜와 권능이 충만한 집사였습니다.' },
            { text: '사람들에게 죽임당하면서도 그들에게 죄를 돌리지 말아달라는 스데반의 모습은 예수님의 한량없는 자비를 닮아있습니다.' },
            { text: '당신은 어떤 부당하고 억울한 상황에서도 타인에 대한 이해와 사랑을 놓는 법이 없습니다.'},
            { text: '당신의 무조건적인 헌신에 사람들은 결국 돌이켜 자신의 죄를 뉘우치곤 합니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>아브라함</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>스데반</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=act&chap=7&sec=54&positionId=han_act_7_54#han_act_7_54">행7:54~60</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>요한</h1><h2>(John)<h2><img class="result-bar right"/><p>넘치는 자신감과 긍정적 영향력을 펼치는 착한 리더형</p>',
        desc: [
            { text: '당신은 넘치는 사랑으로 선한 영향을 미치는 요한을 닮았습니다.'},
            { text: '요한은 예수께서 가장 사랑하시는 제자였습니다. 요한은 온건하고 따뜻한 성품을 바탕으로 하나님의 말씀을 전했습니다.' },
            { text: '당신은 요한처럼 성도들에 대한 사랑이 넘치는 사람입니다.' },
            { text: '대가없는 당신의 사랑으로 인하여 성도들은 하나님의 은혜와 사랑을 실감하게 될 것입니다.'},
            { text: '성도들은 당신의 사랑을 먹고 자라며 든든한 하나님의 자제로 성장할 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>요셉</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>요셉</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=act&chap=4&sec=13&positionId=han_act_4_13#han_act_4_13">행4:13~22</a></p>'
    },
    {
        name: '<img class="result-icon" src="images/flower-icon.png"/><img class="result-bar left"/><h1>모세</h1><h2>(Moses)<h2><img class="result-bar right"/><p>대담, 강한 의지, 현실적 문제해결과 방안창출에 탁월한 리더형</p>',
        desc: [
            { text: '당신은 온유한 사람 모세를 닮았습니다.'},
            { text: '모세는 온유한 성품으로 하나님의 양떼들을 먹이고 이끌었습니다. 백성들의 모든 불만과 어리석음을 참으며 하나님 앞에 인도했던 모세는 위대한 지도자로 여겨지고 있습니다.' },
            { text: '당신은 모세처럼 넉넉하고 따뜻한 리더쉽을 발휘할 줄 아는 사람입니다.' },
            { text: '많은 사람들을 중재하고 이끌 수 있는 힘은 하나님 역사에 있어 가장 중요한 능력 중 하나일 것입니다.'}
        ],
        combi: [
            { combiName: '<h2>최고의 협력자</h2><h1>도마</h1>' },
            { combiName: '<h2>영혼의 단짝</h2><h1>스데반</h1>' }
        ],
        bible: '<p>참고성구</p><p><a href="https://bible.godpia.com/read/reading.asp?ver=han&vol=exo&chap=32&sec=11&positionId=han_exo_32_11#han_exo_32_11">출32:11~12</a></p>'
    }
]