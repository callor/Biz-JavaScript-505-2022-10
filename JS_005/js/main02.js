const inputSearch = document.querySelector("input[name='search']");
const btnSearch = document.querySelector("button.search");

btnSearch?.addEventListener("click", () => {
  const txtSearch = inputSearch.value;

  if (!txtSearch) {
    alert("검색어를 입력해 주세요");
    inputSearch.focus();
    return false;
  }

  const googleURL = "https://google.co.kr/search";
  const naverURL = "https://search.naver.com/search.naver";
  const daumURL = "https://search.daum.net/search";

  // googleURL + "?q=" + txtSearch 이렇게 만들 것을
  // back Tit 을 이용하여 자연스럽게 생성
  // 문자열(String) Template 라고 한다
  window.open(`${googleURL}?q=${txtSearch}`, "_blank");
  // 브라우저의 popup 이 차단되었는지 확인하기
  //   if (popup == null || popup.screenLeft == 0) {
  //     alert("팝업이 차단되었습니다\n팝업 차단을 해제 해주세요");
  //     return false;
  //   }
  window.open(`${naverURL}?query=${txtSearch}`, "_blank");
  window.open(`${daumURL}?q=${txtSearch}`, "_blank");
});
