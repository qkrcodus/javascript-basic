document.getElementById('hello').innerHTML='안녕';
        // html문서. 의 html엘레멘트 겟해주세요 id에 의 해서
        //등호는 오른쪽거를 왼쪽에 집어넣어주세요
        //html의 모든것을 바꿀수있다.
document.getElementById('hello').style.fontSize="400px";
      //바꿀요소, 무엇을, 어떻게
      //셀렉터
      //컴퓨터한테 일을 시키는게 프로그래밍
      //정확한 명령을 내려줘야한다. 구체적으로 지시를 해줘야함.
      
function 알림창열기(){
  document.getElementById('alert').style.display='block';

}
function 알림창닫기(){
  document.getElementById('alert').style.display='none';
}
//파라미터
function displayFunction(display){
  document.getElementById('alert').style.display=display;

}