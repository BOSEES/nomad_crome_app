# 바닐라 자바스크립트 메소드 정리
## getElementById() 는 무엇인가?
    element = document.getElementById(id);
id를 통해 엘리먼트를 반환한다. 만약 document에 구체적인 ID의 엘리먼트가 없다면 null을 반환한다.

---

## querySelector()는 무엇인가?
    element = document.querySelector(selectors);

- Document.querySelector() : Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환.
    
    
    참고: 탐색은 깊이우선depth-first 전위pre-order순회로, 문서의 첫 번째 요소부터 시작해 자식 노드의 수를 기준으로 순회합니다.

## EventTarget.addEventListener()는 무엇인가?
EventTarget의 addEventListener() 메서드는 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정합니다. 일반적인 대상은 Element, Document, Window지만, XMLHttpRequest와 같이 이벤트를 지원하는 모든 객체를 대상으로 지정할 수 있습니다.

    var st = document.getElementById("stalker"); st.addEventListener('이벤트종류', '함수이름');

- change : 변동이 있을 때 발생 
- click : 클릭시 발생 
- focus : 포커스를 얻었을 때 발생
- keydown : 키를 눌렀을 때 발생 
- keyup : 키에서 손을 땟을 때 발생 
- load : 로드가 완료 되었을 때 발생 
- mousedown : 마우스를 클릭 했을 때 발생
- mouseout : 마우스가 특정 객체 밖으로 나갔을 때 발생 
- mouseover : 마우스가 특정 객체 위로 올려졌을 때 발생 
- mousemove : 마우스가 움직였을 때 발생 
- mouseup : 마우스에서 손을 땟을 때 발생 
- select : option 태그 등에서 선택을 햇을 때 발생 

# 느낀점
- css에서 할 수있는 일은 되도록 css 에서 하자. 자바스크립트로도 css의 효과를 줄수 있긴하지만 분리하는게 디버깅,가독성,일관성을 얻을수 있을거같다. 그리고 이렇게 하면 동적으로 제어하기위한 자바스크립트 기능만 사용할수 있어서 불필요한 기능을 외울 필요가 없음.
