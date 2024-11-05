(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{3291:function(e,s,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useMousePosition",function(){return o(8872)}])},8872:function(e,s,o){"use strict";o.r(s),o.d(s,{__toc:function(){return a}});var n=o(5893),r=o(2673),l=o(2169),i=o(9770);o(9488);var t=o(2643),c=o(2154);let a=[{depth:2,value:"Introduce",id:"introduce"},{depth:3,value:"Props",id:"props"},{depth:4,value:"이벤트핸들링 빈도 및 애니메이션 옵션 활용",id:"이벤트핸들링-빈도-및-애니메이션-옵션-활용"},{depth:3,value:"Returns",id:"returns"},{depth:4,value:"기본",id:"기본"},{depth:4,value:"Element 지정 시",id:"element-지정-시"},{depth:2,value:"Examples",id:"examples"}];function h(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,t.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"useMousePosition"}),"\n",(0,n.jsx)(s.h2,{id:"introduce",children:"Introduce"}),"\n",(0,n.jsx)(s.p,{children:"마우스의 현재 위치를 감지하여 반환합니다."}),"\n",(0,n.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"UseMousePositionProps"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  delayTime"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  animationMode"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"UseMousePositionReturns"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  viewX"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  viewY"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  pageX"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  pageY"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  screenX"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  screenY"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  elementX"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  elementY"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  refW"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  refH"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  targetRef"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Dispatch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SetStateAction"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Element"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">>;"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useMousePosition"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (props"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"UseMousePositionProps"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"UseMousePositionReturns"})]})]})}),"\n",(0,n.jsx)(s.h3,{id:"props",children:"Props"}),"\n",(0,n.jsx)(s.h4,{id:"이벤트핸들링-빈도-및-애니메이션-옵션-활용",children:"이벤트핸들링 빈도 및 애니메이션 옵션 활용"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"delayTime"})," : 이벤트 핸들링을 지연시킬 값 (기본값: 1000/60ms)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"animationMode"})," : 부드러운 이동 혹은 애니메이션 효과를 위해 애니메이션 모드 활성화 여부 선택"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.h4,{id:"기본",children:"기본"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"viewX"})," : 뷰포트에서의 마우스 x 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"viewY"})," : 뷰포트에서의 마우스 y 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"pageX"})," : 페이지에서의 마우스 x 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"pageY"})," : 페이지에서의 마우스 y 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"screenX"})," : 화면에서의 마우스 x 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"screenY"})," : 화면에서의 마우스 y 좌표"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"element-지정-시",children:"Element 지정 시"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"elementX"})," : 지정된 Element left 기준의 마우스 x 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"elementY"})," : 지정된 Element top 기준의 마우스 y 좌표"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"refW"})," : 지정된 Element의 너비"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"refH"})," : 지정된 Element의 높이"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"targetRef"})," : 해당 엘리먼트 기준으로 마우스 좌표를 계산하기 위해 지정하는 참조 객체"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Element를 지정해서 상대 좌표 및 Element 크기 활용 예시"}),"\n",(0,n.jsx)(s.pre,{"data-language":"ts","data-theme":"default",filename:"TestComponent.tsx",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TestComponent"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"elementX"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"elementY"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"refW"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"refH"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},className:"highlighted",children:"targetRef"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useMousePosition"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ delayTime"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"div"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ref"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},className:"highlighted",children:"targetRef"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      style"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{ width"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'300px'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" height"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'200px'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" border"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'1px solid black'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Element X"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {elementX}</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Element Y"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {elementY}</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Element Width"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {refW}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"px"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Element Height"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {refH}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"px"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"div"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n","\n",(0,n.jsx)(c.UW,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"delayTime"}),"이 기본값(1000/60ms) 보다 커지면 훅의 성능이 개선될 수 있지만, 반응\n속도는 약간 느려질 수 있습니다."]})}),"\n",(0,n.jsx)(c.UW,{type:"warning",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"animationMode"})," 활성 시 delayTime 설정이 무시됩니다."]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/hooks/useMousePosition.mdx",route:"/hooks/useMousePosition",timestamp:1730793425e3,pageMap:[{kind:"Meta",data:{index:{title:"useReactHooks"},hooks:{title:"Hooks",theme:{collapsed:!1}}}},{kind:"Folder",name:"hooks",route:"/hooks",children:[{kind:"Meta",data:{useAsyncTasks:"useAsyncTasks",useClipboard:"useClipboard",useConfirm:"useConfirm",useDebounce:"useDebounce",useDeepCompareEffect:"useDeepCompareEffect",useDelayFlag:"useDelayFlag",useDetectDevice:"useDetectDevice",useEventListener:"useEventListener",useGeolocation:"useGeolocation",useHover:"useHover",useIntersectionObserver:"useIntersectionObserver",useInterval:"useInterval",useKeyCombination:"useKeyCombination",useKeyDown:"useKeyDown",useLocalStorage:"useLocalStorage",useLongPress:"useLongPress",useMockData:"useMockData",useMousePosition:"useMousePosition",useOnlineStatus:"useOnlineStatus",useOutsideClick:"useOutsideClick",usePermission:"usePermission",usePrefersColorScheme:"usePrefersColorScheme",usePreventCopy:"usePreventCopy",useScrollLock:"useScrollLock",useScrollY:"useScrollY",useSound:"useSound",useTimer:"useTimer",useToggle:"useToggle",useTranslation:"useTranslation",useUnmountEffect:"useUnmountEffect",useWindowSize:"useWindowSize",useWorker:"useWorker",_template:{display:"hidden",title:" Template"}}},{kind:"MdxPage",name:"_template",route:"/hooks/_template"},{kind:"MdxPage",name:"useAsyncTasks",route:"/hooks/useAsyncTasks"},{kind:"MdxPage",name:"useClipboard",route:"/hooks/useClipboard"},{kind:"MdxPage",name:"useConfirm",route:"/hooks/useConfirm"},{kind:"MdxPage",name:"useDebounce",route:"/hooks/useDebounce"},{kind:"MdxPage",name:"useDeepCompareEffect",route:"/hooks/useDeepCompareEffect"},{kind:"MdxPage",name:"useDelayFlag",route:"/hooks/useDelayFlag"},{kind:"MdxPage",name:"useDetectDevice",route:"/hooks/useDetectDevice"},{kind:"MdxPage",name:"useEventListener",route:"/hooks/useEventListener"},{kind:"MdxPage",name:"useGeolocation",route:"/hooks/useGeolocation"},{kind:"MdxPage",name:"useHover",route:"/hooks/useHover"},{kind:"MdxPage",name:"useIntersectionObserver",route:"/hooks/useIntersectionObserver"},{kind:"MdxPage",name:"useInterval",route:"/hooks/useInterval"},{kind:"MdxPage",name:"useKeyCombination",route:"/hooks/useKeyCombination"},{kind:"MdxPage",name:"useKeyDown",route:"/hooks/useKeyDown"},{kind:"MdxPage",name:"useLocalStorage",route:"/hooks/useLocalStorage"},{kind:"MdxPage",name:"useLongPress",route:"/hooks/useLongPress"},{kind:"MdxPage",name:"useMockData",route:"/hooks/useMockData"},{kind:"MdxPage",name:"useMousePosition",route:"/hooks/useMousePosition"},{kind:"MdxPage",name:"useOnlineStatus",route:"/hooks/useOnlineStatus"},{kind:"MdxPage",name:"useOutsideClick",route:"/hooks/useOutsideClick"},{kind:"MdxPage",name:"usePermission",route:"/hooks/usePermission"},{kind:"MdxPage",name:"usePrefersColorScheme",route:"/hooks/usePrefersColorScheme"},{kind:"MdxPage",name:"usePreventCopy",route:"/hooks/usePreventCopy"},{kind:"MdxPage",name:"useScrollLock",route:"/hooks/useScrollLock"},{kind:"MdxPage",name:"useScrollY",route:"/hooks/useScrollY"},{kind:"MdxPage",name:"useSound",route:"/hooks/useSound"},{kind:"MdxPage",name:"useTimer",route:"/hooks/useTimer"},{kind:"MdxPage",name:"useToggle",route:"/hooks/useToggle"},{kind:"MdxPage",name:"useTranslation",route:"/hooks/useTranslation"},{kind:"MdxPage",name:"useUnmountEffect",route:"/hooks/useUnmountEffect"},{kind:"MdxPage",name:"useWindowSize",route:"/hooks/useWindowSize"},{kind:"MdxPage",name:"useWorker",route:"/hooks/useWorker"}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"useMousePosition",headings:a},pageNextRoute:"/hooks/useMousePosition",nextraLayout:l.ZP,themeConfig:i.Z};s.default=(0,r.j)(d)},9770:function(e,s,o){"use strict";var n=o(5893);s.Z={logo:(0,n.jsx)("h3",{children:"useReactHooks"}),project:{link:"https://github.com/frontend-opensource-project/use-react-hooks"},docsRepositoryBase:"https://github.com/frontend-opensource-project/use-react-hooks/docs",useNextSeoProps:()=>({titleTemplate:"%s | URH"}),primaryHue:{dark:200,light:200},primarySaturation:{dark:80,light:80},sidebar:{titleComponent(e){let{title:s}=e;return(console.log(s),"소개"===s)?(0,n.jsxs)(n.Fragment,{children:["\uD83D\uDCA1 ",s]}):"설치하기"===s?(0,n.jsxs)(n.Fragment,{children:["\uD83D\uDEA9 ",s]}):(0,n.jsx)(n.Fragment,{children:s})}}}},5789:function(){}},function(e){e.O(0,[942,888,774,179],function(){return e(e.s=3291)}),_N_E=e.O()}]);