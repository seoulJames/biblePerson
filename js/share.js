// TO DO : 배포 url 추가
// TO DO : 카카오톡 API > 내 어플리케이션 > 플랫폼 > 웹 플랫폼 등록
const sendUrl = '';

function shareKakao(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '성경 속 나와 닮은 인물 찾기';
  const shareDes = infoList[resultAlt].name;
  const shareImage = sendUrl + './images/resultSheet/result' + resultAlt + '.png';
  const shareURL = sendUrl + './result' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}
