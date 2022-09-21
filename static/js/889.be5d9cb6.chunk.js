"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{3889:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,i,o,s,c,d,p=t(5861),x=t(4687),l=t.n(x),u=t(2791),m=t(9434),h=t(168),g=t(6444),f=g.ZP.div(r||(r=(0,h.Z)(["\n    height: calc(100vh - 100px);\n    \n    color: rgba(255, 255, 255, 0.96);\n    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;\n    @media screen and (min-width:480px){\n        display: flex;\n    }\n"]))),b=g.ZP.h2(a||(a=(0,h.Z)(["\npadding-top: 20px;\nmargin-top: 20px;\ntext-align: center;\nfont-style: italic;\nfont-weight: 500;\nfont-size: 20px;\nwidth: 80vw;\ntext-shadow: 0px 0px 0.8em black, 0 0 0.4em black;\n"]))),v=t(5984),w=t(9485),Z=t(2449),k=t(5442),j=g.ZP.form(i||(i=(0,h.Z)(["\n  \n    display: flex;\n    flex-direction: column;\n    padding: 4px 20px;\n    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;\n    @media (min-width:480px){\n        padding: 4px;\n  };\n  \n"]))),C=(0,g.ZP)(k.z)(o||(o=(0,h.Z)(["\nmargin-top: 8px;\nwidth: 8em;\nmargin-left: auto;\nmargin-right: auto;\nfont-size: 0.8em;\n"]))),P=t(184),T=function(n){var e=n.addContact,t=(0,v.x0)(),r=(0,v.x0)(),a=(0,u.useContext)(w.Z),i=Z[a].phonebook;return(0,P.jsxs)(j,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.name.value,r=n.currentTarget.number.value;e(t,r),n.currentTarget.reset()},children:[(0,P.jsx)("label",{htmlFor:t,children:i.name}),(0,P.jsx)("input",{name:"name",type:"text",id:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,P.jsx)("label",{htmlFor:r,children:i.number}),(0,P.jsx)("input",{name:"number",type:"tel",id:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,P.jsx)(C,{type:"submit",name:"contacts",children:i.buttonText})]})},y=(0,u.memo)(T),z=g.ZP.div(s||(s=(0,h.Z)(["\n@media screen and (min-width:480px){\n    width: 85%;\n    max-width: ",";\n    min-width: ",";\n    padding: 4px 8px ;\n    }\npadding: 2px;\nwidth: 100%;\n\n    &:first-child{\n        box-shadow: inset 0 -2px 1px rgba(193,193,193,0.1), inset -2px -4px 4px rgba(0,0,0,0.2), 0 2px 1px rgba(193,193,193,0.1), 2px 4px 4px rgba(0,0,0,0.2);\n        background-color: rgba(0,0,0,0.1);\n        border-radius: 4px;\n        \n    };\n\n    &:last-child{\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        background-color: rgba(0,0,0,0.1);\n        border-radius: 4px;\n        padding: 4px 0 0 0;\n    };\n"])),(function(n){if("form"===n.element)return"20vw"}),(function(n){if("form"===n.element)return"160px"})),A=g.ZP.h2(c||(c=(0,h.Z)(["\n    text-align: center;\n    margin:  4px 0;\n"])));function H(n){var e=n.element,t=n.children;return(0,P.jsxs)(z,{element:e,children:[(0,P.jsx)(A,{children:t[0]}),t[1],t[2]]})}var I,N,S,U,B=g.ZP.ul(d||(d=(0,h.Z)(["\nmargin: 4px 0 0 0;\npadding:  4px 0 0 0;\noverflow-y: auto;\n"]))),F=g.ZP.li(I||(I=(0,h.Z)(["\n    display: grid;\n    grid-template-columns: 1.4fr 1fr 0.4fr;\n    padding: 4px 4px 4px 8px;\n    align-items: center;\n    height: 24px;\n    margin: 2px;\n    border-bottom:  rgba(0,0,0,0.1) 1px solid;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: #e9f1f2;\n    text-shadow: 0 0 0.8em black;\n    font-size: 0.8em;\n    @media screen and (min-width:640px){\n        padding: 8px;\n        font-size: 1em;\n    }\n"]))),_=g.ZP.p(N||(N=(0,h.Z)(["\nmargin-right: 8px;\n"]))),E=g.ZP.p(S||(S=(0,h.Z)(["\nmargin-right: 8px;\n"]))),L=(0,g.ZP)(k.z)(U||(U=(0,h.Z)(["\npadding: 4px 6px 4px 4px; \nfont-size: 0.8em;\nmax-width: 5.6em;\n"])));function q(n){var e=n.name,t=n.id,r=n.number,a=n.removeCard,i=(0,u.useContext)(w.Z),o=Z[i].contacts;return(0,P.jsxs)(F,{name:e,id:t,children:[(0,P.jsx)(_,{children:e}),(0,P.jsx)(E,{children:r}),(0,P.jsx)(L,{type:"button",onClick:a,name:t,children:o.buttonText})]})}var D,J,M=(0,u.memo)(q);function R(n){var e=n.removeConactApp,t=(0,m.v9)((function(n){return n})),r=t.contacts,a=t.filter,i=r.items,o=a.toLowerCase(),s=i.filter((function(n){return n.name.toLowerCase().includes(o)})),c=(0,u.useMemo)((function(){return s.map((function(n){return(0,P.jsx)(M,{id:n.id,name:n.name,number:n.phone,removeCard:function(n){return e(n.currentTarget.name,s.length)}},n.name+n.id)}))}),[e,s]);return(0,P.jsx)(B,{children:c})}var O=g.ZP.div(D||(D=(0,h.Z)(["\n    box-shadow: inset 0 -2px 2px rgba(193,193,193,0.1), inset -2px -4px 8px rgba(0,0,0,0.2), 0 2px 2px rgba(193,193,193,0.1), 2px 4px 8px rgba(0,0,0,0.2);\n    background-color: rgba(0,0,0,0.4);\n    background-color: rgba(0, 0, 0, 0.4);\n    text-shadow: 0 0 0.8em black;\n    color: #e9f1f2;\n    border-radius: 2px;\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),V=g.ZP.input(J||(J=(0,h.Z)(["\nwidth: 160px;\n"]))),X=t(5653);function $(){var n=(0,m.I0)(),e=(0,v.x0)(),t=(0,m.v9)((function(n){return n})).filter,r=(0,u.useContext)(w.Z),a=Z[r].contacts;return(0,P.jsxs)(O,{children:[(0,P.jsx)("label",{htmlFor:e,children:a.filtrText}),(0,P.jsx)(V,{id:e,type:"text",onChange:function(e){return n((0,X.T)(e.currentTarget.value.trim()))},value:t,placeholder:a.filtrPlaceholder})]})}var G,K=t(5927),Q=function(){var n=(0,m.v9)((function(n){return n})).contacts,e=n.items,t=n.loading,r=(0,u.useContext)(w.Z),a=Z[r],i=(0,m.I0)();(0,u.useEffect)((function(){i((0,K.Ez)())}),[i]);var o=(0,u.useCallback)((function(n,t){if(e.find((function(e){return e.name===n})))return alert(n+" "+a.notific);i((0,K.jX)({name:n,phone:t}))}),[e,a.notific,i]),s=(0,u.useCallback)(function(){var n=(0,p.Z)(l().mark((function n(e,t){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i((0,K.cl)(e));case 2:1===t&&i((0,X.T)(""));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[i]);return(0,P.jsxs)(f,{children:[(0,P.jsxs)(H,{element:"form",children:[a.phonebook.header,(0,P.jsx)(y,{addContact:o})]}),e.length>0&&(0,P.jsxs)(H,{element:"contacts",children:[a.contacts.header,(0,P.jsx)($,{}),(0,P.jsx)(R,{removeConactApp:s})]}),0===e.length&&!t&&(0,P.jsx)(b,{children:a.message})]})},W=g.ZP.div(G||(G=(0,h.Z)(["\n    \n"]))),Y=function(){return(0,P.jsx)(W,{children:(0,P.jsx)(Q,{})})}},5442:function(n,e,t){t.d(e,{z:function(){return g}});var r,a=t(168),i=t(6444),o={hoverBtn:"#e0e5ebf3",activeBtn:"#e0e5ebdd"},s=o.hoverBtn,c=o.activeBtn,d={shInset1:"rgba(0,0,0,0.3)",shInset2:"rgba(255,255,255,0.5)",shHover1:"rgba(193,193,193,0.1)",shHover2:"rgba(0,0,0,0.2)",shActive1:"rgba(193,193,193,0.15)",shActive2:"rgba(0,0,0,0.3)"},p=d.shInset1,x=d.shInset2,l=d.shHover1,u=d.shHover2,m=d.shActive1,h=d.shActive2,g=i.ZP.button(r||(r=(0,a.Z)(["\n    border:none;\n    // font:inherit;\n    cursor: pointer;\n    outline: none;\n    border-radius: 4px;\n    box-shadow: inset -2px -2px 2px ",", inset 2px 2px 2px ",", 0 2px 1px ",", 2px 4px 4px ",";\n    padding: 4px 6px 4px 4px;    \n\n    &:hover{\n        background-color: ",";\n    };\n\n    &:active{\n        background-color: ",";\n        box-shadow: inset -2px -2px 2px ",", inset 2px 2px 2px ",", 0 2px 0px ",", 2px 2px 2px ",";\n    }\n"])),p,x,l,u,s,c,p,x,m,h)},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}},2449:function(n){n.exports=JSON.parse('{"Ua":{"phonebook":{"header":"\u041a\u043d\u0438\u0433\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432","name":"\u0406\u043c\'\u044f","number":"\u041d\u043e\u043c\u0435\u0440","buttonText":"\u0414\u043e\u0434\u0430\u0442\u0438"},"contacts":{"header":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438","filtrText":"\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u0437\u0430 \u0456\u043c\u0435\u043d\u0435\u043c","filtrPlaceholder":"\u0406\u043c\'\u044f","buttonText":"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"},"userform":{"name":"\u041b\u043e\u0433\u0456\u043d","email":"\u041f\u043e\u0448\u0442\u0430","password":"\u041f\u0430\u0440\u043e\u043b\u044c","registerbuttonText":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f","loginbuttonText":"\u0412\u0445\u0456\u0434"},"pagesUser":{"registerHeader":"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430","loginHeader":"\u0412\u0438\u043a\u043e\u043d\u0430\u0439\u0442\u0435 \u0432\u0445\u0456\u0434 \u0430\u0431\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044c"},"message":"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u0456\u0439 \u043f\u0435\u0440\u0448\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442.","notific":" \u0432\u0436\u0435 \u0454 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445."},"En":{"phonebook":{"header":"Phonebook","name":"Name","number":"Number","buttonText":"Add contact"},"contacts":{"header":"Contacts","filtrText":"Find contacts by name","filtrPlaceholder":"Name","buttonText":"Delete"},"userform":{"name":"Login","email":"Email","password":"Password","registerbuttonText":"Registration","loginbuttonText":"Sign in"},"pagesUser":{"registerHeader":"User registration page","loginHeader":"Sign in or register"},"message":"No information.","notific":" is already in contacts."}}')}}]);
//# sourceMappingURL=889.be5d9cb6.chunk.js.map