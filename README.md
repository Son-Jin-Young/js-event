# js-event
javascript 이벤트 study

# Event bubbling, capturing
예시)
<pre>
    <code>
        <div>
            <p>
                <span>
                    click
                </span>
            </p>
        </div>
    </code>
</pre>

 - bubbling: 선택된 엘리먼트에서 최상위(body) 엘리먼트로 올라가며 이벤트 전달
 - 예시와 같이 구성되어 있고, element 모두 click 이벤트가 적용되어 있는 경우, span -> p -> div 순으로 실행

 - capturing: 최상위(body) 엘리먼트에서 해당 엘리먼트까지의 엘리먼트들에게 이벤트가 전달
 - 예시와 같이 구성되어 있고, element 모두 click 이벤트가 적용되어 있는 경우, bubbling과 반대로 div -> p -> span 순으로 실행

#Custom Event
 - 사용자 입력이 발생하였을 때, dispatcher에 의해 CustomEvent가 생성하고 dispatchEvent로 생성된 CustomEvent의 listener를 통해 실행
 - custom event의 흐름: 사용자입력 --input--> dispatcher --dispatchEvent--> listener ----> 실행
 - custom event는 Window 객체 내에 등록된다(addEventListener)