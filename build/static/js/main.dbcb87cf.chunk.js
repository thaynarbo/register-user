(this.webpackJsonpfinance=this.webpackJsonpfinance||[]).push([[0],{74:function(e,n,t){"use strict";t.r(n);var c,r,o,a,s,i,l,d,b,u,j,p,x,h,f,O,g,v,m,k,y,w,C,F,z,D,S,U,E,M,A,T,N,B,I,L,P,J=t(1),R=t.n(J),V=t(23),H=t.n(V),q=t(3),G=t(4),K=Object(G.a)(c||(c=Object(q.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  body {\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;\n\n  }\n"]))),Q=t(17),W=t(5),X=t(7),Y={zIndex:{z1:100,z2:200,z3:300,z4:400,z5:500,z6:600,z7:700,z8:800,z9:900},spacing:{space1:"4px",space2:"8px",space3:"16px",space4:"24px",space5:"32px",space6:"40px",space7:"48px",space8:"56px",space9:"64px"},shadow:{shad1:"0px 2px 5px 1px rgba(0, 0, 0, 0.05)"},colors:Object(X.a)(Object(X.a)(Object(X.a)(Object(X.a)(Object(X.a)(Object(X.a)({},{blue40:"#3A566E",blue30:"#61788B",blue20:"#A0AEB9",blue10:"#EFF1F3"}),{shade80:"#262930",shade70:"#4A4F58",shade60:"#727780",shade50:"#ABB0BA",shade40:"#CFD2D9",shade30:"#E5E7EB",shade20:"#F0F1F2",shade10:"#F0F1F2",shade05:"#f8f8f8"}),{red40:"#BA0000",red30:"#DC8080",red20:"#F1CCCC",red10:"#FCF5F5"}),{honey40:"#F97316",honey30:"#FDBA74",honey20:"#eee2d9",honey10:"#FFF7ED"}),{mint40:"#19A60D",mint30:"#8CD286",mint20:"#D1EDCF",mint10:"#F1FFF4"}),{},{white:"#FFFFFF",black:"#000000"}),fontSizes:{small:"1em",medium:"2em",large:"3em",h1:"36px",h2:"34px",h3:"32px",h4:"28px",h5:"24px",p0:"24px",p1:"16px",p2:"14px",p3:"13px",p4:"11px"}},Z=G.c.div(r||(r=Object(q.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n    padding: 24px;\n    background-color: ",";\n"])),Y.colors.shade10),$=t(2),_=function(e){var n=e.children;return Object($.jsx)(Z,{children:n})},ee=t(9),ne=t.n(ee),te=t(14),ce=t(6),re=t(41),oe=t.n(re).a.create({baseURL:"https://veggi-api.herokuapp.com/"}),ae=Object(J.createContext)(null),se=function(e){var n=e.children,t=Object(J.useState)(!1),c=Object(ce.a)(t,2),r=c[0],o=c[1],a=Object(J.useState)(!1),s=Object(ce.a)(a,2),i=s[0],l=s[1],d=Object(J.useState)(!1),b=Object(ce.a)(d,2),u=b[0],j=b[1],p=Object(J.useState)([]),x=Object(ce.a)(p,2),h=x[0],f=x[1],O=Object(J.useState)(null),g=Object(ce.a)(O,2),v=g[0],m=g[1],k=function(){l(!1)},y=function(){o(!1)},w=function(){var e=Object(te.a)(ne.a.mark((function e(){var n,t;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,oe.get("/users");case 4:n=e.sent,t=n.data,f(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("deu errado");case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(te.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,oe.delete("/users/".concat(v.id));case 4:return e.next=6,w();case 6:y(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("deu errado");case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(te.a)(ne.a.mark((function e(n){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,oe.post("/users",{name:n});case 4:k(),w(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("deu errado");case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();return Object($.jsx)(ae.Provider,{value:{selectUser:v,modalDelete:r,isFetching:u,users:h,setUser:f,modalCreate:i,deleteUser:C,openModalDelete:function(e){m(e),o(!0)},getUsers:w,closeModalDelete:y,createUser:F,openModalCreateUser:function(){l(!0)},closeModalCreateUser:k},children:n})},ie=function(){return Object(J.useContext)(ae)},le=Object(J.createContext)(null),de=function(e){var n=e.children,t=Object(J.useState)(""),c=Object(ce.a)(t,2),r=c[0],o=c[1],a=Object(J.useState)([]),s=Object(ce.a)(a,2),i=s[0],l=s[1],d=Object(J.useState)(!1),b=Object(ce.a)(d,2),u=b[0],j=b[1],p=Object(J.useState)(!1),x=Object(ce.a)(p,2),h=x[0],f=x[1],O=Object(J.useState)(!1),g=Object(ce.a)(O,2),v=g[0],m=g[1],k=Object(J.useState)(null),y=Object(ce.a)(k,2),w=y[0],C=y[1],F=Object(J.useState)(!1),z=Object(ce.a)(F,2),D=z[0],S=z[1],U=function(){m(!1)},E=function(){j(!1)},M=function(){f(!1)},A=function(){var e=Object(te.a)(ne.a.mark((function e(n,t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.post("/tasks",{userId:n,description:t,done:!1});case 3:return e.next=5,T(n);case 5:U(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("deu errado");case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,8,11,13]])})));return function(n,t){return e.apply(this,arguments)}}(),T=function(){var e=Object(te.a)(ne.a.mark((function e(n){var t,c;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.get("/tasks/".concat(n));case 3:t=e.sent,c=t.data,l(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("deu errado");case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,8,11,13]])})));return function(n){return e.apply(this,arguments)}}(),N=function(){var e=Object(te.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.delete("/tasks/".concat(w.id));case 3:return e.next=5,T(w.userId);case 5:E(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("deu errado");case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,8,11,13]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(te.a)(ne.a.mark((function e(n){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.patch("/tasks/".concat(w.id),{description:n,done:D});case 3:T(w.userId),o(w.description),M(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return Object($.jsx)(le.Provider,{value:{tasks:i,open:v,getTasksByUser:T,closeModalTask:U,openModalTask:function(){m(!0)},createTask:A,deleteTask:N,openModalDelete:function(e){C(e),j(!0)},closeModalDelete:E,modalDelete:u,selectTask:w,setTasks:l,editTask:B,openModalEdit:function(e){C(e),f(!0)},closeModalEdit:M,modalEdit:h,isDone:D,setIsDone:S,value:r,setValue:o},children:n})},be=function(){return Object(J.useContext)(le)},ue=function(e){var n=e.children;return Object($.jsx)(se,{children:Object($.jsx)(de,{children:n})})},je=t(16),pe={primary:Object(G.b)(o||(o=Object(q.a)(["\n        background-color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue40,Y.colors.blue30),secondary:Object(G.b)(a||(a=Object(q.a)(["\n        background-color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue40,Y.colors.blue30),error:Object(G.b)(s||(s=Object(q.a)(["\n        background-color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.red40,Y.colors.red30),default:Object(G.b)(i||(i=Object(q.a)(["\n        background-color: ",";\n    "])),Y.colors.shade30)},xe={primary:Object(G.b)(l||(l=Object(q.a)(["\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue10,Y.colors.blue40,Y.colors.blue40,Y.colors.blue20),secondary:Object(G.b)(d||(d=Object(q.a)(["\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue10,Y.colors.blue40,Y.colors.blue40,Y.colors.blue20),error:Object(G.b)(b||(b=Object(q.a)(["\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.red10,Y.colors.red40,Y.colors.red40,Y.colors.red20),default:Object(G.b)(u||(u=Object(q.a)(["\n        border: 1px solid ",";\n        background-color: ",";\n        color: ",";\n    "])),Y.colors.shade70,Y.colors.shade10,Y.colors.shade70)},he=G.c.button(j||(j=Object(q.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    border: none;\n    border-radius: 20%;\n    color: white;\n    ",";\n    ",";\n    :hover {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n        transform: scale(1.02);\n    }\n"])),(function(e){var n=e.variant;return pe[n||"primary"]}),(function(e){var n=e.variant;return e.outline&&xe[n||"primary"]})),fe=function(e){var n=e.icon,t=Object(je.a)(e,["icon"]);return Object($.jsx)(he,Object(X.a)(Object(X.a)({},t),{},{children:n}))},Oe=t(18),ge=t(44),ve=G.c.div(p||(p=Object(q.a)(["\n    margin: 8px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 16px;\n    border-radius: 4px;\n    background-color: ",";\n    height: 50px;\n\n    .description {\n        display: flex;\n        align-items: center;\n\n        svg {\n            cursor: pointer;\n        }\n\n        p {\n            margin-left: 8px;\n        }\n    }\n\n    .done {\n        display: flex;\n        align-items: center;\n        color: ",";\n    }\n\n    .action {\n        display: flex;\n        align-items: center;\n\n        button {\n            margin-left: 8px;\n        }\n    }\n\n    :hover {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n        transform: scale(1.01);\n        background-color: ",";\n    }\n"])),Y.colors.white,Y.colors.shade50,Y.colors.shade30),me=t(43),ke=function(e){var n=e.task,t=(Object(W.f)(),be()),c=t.openModalDelete,r=t.openModalEdit;return Object($.jsxs)(ve,{children:[Object($.jsx)("div",{className:"description",children:!n.done&&Object($.jsxs)($.Fragment,{children:[Object($.jsx)(me.a,{}),Object($.jsx)("p",{children:n.description})]})}),Object($.jsxs)("div",{className:"action",children:[Object($.jsx)(fe,{icon:Object($.jsx)(ge.a,{}),variant:"secondary",outline:!0,onClick:function(){return r(n)}}),Object($.jsx)(fe,{icon:Object($.jsx)(Oe.b,{}),variant:"error",outline:!0,onClick:function(){return c(n)}})]})]})},ye={primary:Object(G.b)(x||(x=Object(q.a)(["\n        background-color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue40,Y.colors.blue30),secondary:Object(G.b)(h||(h=Object(q.a)(["\n        background-color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue40,Y.colors.blue30),error:Object(G.b)(f||(f=Object(q.a)(["\n        background-color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.red40,Y.colors.red30),default:Object(G.b)(O||(O=Object(q.a)(["\n        background-color: ",";\n    "])),Y.colors.shade30)},we={primary:Object(G.b)(g||(g=Object(q.a)(["\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue10,Y.colors.blue40,Y.colors.blue40,Y.colors.blue20),secondary:Object(G.b)(v||(v=Object(q.a)(["\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.blue10,Y.colors.blue40,Y.colors.blue40,Y.colors.blue20),error:Object(G.b)(m||(m=Object(q.a)(["\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n        :active {\n            background-color: ",";\n        }\n    "])),Y.colors.red10,Y.colors.red40,Y.colors.red40,Y.colors.red20),default:Object(G.b)(k||(k=Object(q.a)(["\n        border: 1px solid ",";\n        background-color: ",";\n        color: ",";\n    "])),Y.colors.shade70,Y.colors.shade10,Y.colors.shade70)},Ce=G.c.button(y||(y=Object(q.a)(["\n    display: flex;\n    border: none;\n    align-items: center;\n    justify-content: center;\n    padding: "," ",";\n    border-radius: ",";\n    color: white;\n    font-weight: bold;\n    font-size: ",";\n    ",";\n    ",";\n\n    :hover {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n        transform: scale(1.02);\n    }\n\n    svg {\n        animation: rotate-in-center 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n            infinite both;\n        margin-right: ",";\n    }\n\n    @keyframes rotate-in-center {\n        0% {\n            -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n            opacity: 0;\n        }\n        100% {\n            -webkit-transform: rotate(0);\n            transform: rotate(0);\n            opacity: 1;\n        }\n    }\n"])),Y.spacing.space2,Y.spacing.space3,Y.spacing.space1,Y.fontSizes.p3,(function(e){var n=e.variant;return e.disabled?ye.default:ye[n||"primary"]}),(function(e){var n=e.variant;return e.outline&&we[n||"primary"]}),Y.spacing.space1),Fe=t(15),ze=function(e){var n=e.loading,t=e.children,c=Object(je.a)(e,["loading","children"]);return Object($.jsxs)(Ce,Object(X.a)(Object(X.a)({},c),{},{disabled:n,children:[n&&Object($.jsx)(Fe.b,{}),t]}))},De=G.c.div(w||(w=Object(q.a)(["\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: ",";\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    animation: 0.5s fadeIn ease-in-out forwards;\n\n    @keyframes fadeIn {\n        from {\n            background-color: rgba(0, 0, 0, 0);\n        }\n        to {\n            background-color: rgba(0, 0, 0, 0.7);\n        }\n    }\n"])),Y.zIndex.z6),Se=G.c.div(C||(C=Object(q.a)(["\n    display: flex;\n    background-color: ",";\n    width: 400px;\n    height: auto;\n    border-radius: 0 0 "," ",";\n    flex-direction: column;\n\n    .body {\n        overflow: auto;\n        padding: ",";\n        height: calc(100% - 60px);\n    }\n\n    header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: ",";\n        margin-top: -",";\n        border-radius: "," "," 0 0;\n        padding: ",";\n        background-color: ",";\n        height: ",";\n\n        .close {\n            border: none;\n            background: none;\n            cursor: pointer;\n            :hover {\n                font-weight: bold;\n                color: ",";\n            }\n        }\n    }\n\n    footer {\n        padding: ",";\n        width: 100%;\n        height: 60px;\n        display: flex;\n        flex-flow: row;\n        align-items: center;\n        justify-content: flex-end;\n        button {\n            margin-left: ",";\n        }\n    }\n"])),Y.colors.white,Y.spacing.space1,Y.spacing.space1,Y.spacing.space3,Y.colors.white,Y.spacing.space1,Y.spacing.space1,Y.spacing.space1,Y.spacing.space3,Y.colors.blue40,Y.spacing.space4,Y.colors.white,Y.spacing.space3,Y.spacing.space1),Ue=function(e){var n=e.actionClick,t=e.textAction,c=e.open,r=e.title,o=e.close,a=e.children,s=Object(je.a)(e,["actionClick","textAction","open","title","close","children"]);return H.a.createPortal(Object($.jsx)($.Fragment,{children:c&&Object($.jsx)(De,{children:Object($.jsxs)(Se,Object(X.a)(Object(X.a)({},s),{},{children:[Object($.jsxs)("header",{children:[Object($.jsx)("div",{className:"logo",children:r}),Object($.jsx)("button",{className:"close",onClick:o,children:"x"})]}),Object($.jsx)("div",{className:"body",children:a}),Object($.jsxs)("footer",{children:[t&&Object($.jsx)(ze,{color:"primary",onClick:n,children:t}),Object($.jsx)(ze,{onClick:o,outline:!0,children:"Fechar"})]})]}))})}),document.body)},Ee=G.c.span(F||(F=Object(q.a)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    svg {\n        position: relative;\n        top: 30px;\n        left: 14px;\n    }\n"]))),Me=G.c.input(z||(z=Object(q.a)(["\n    width: 100%;\n    height: 40px;\n    border: 1.5px solid ",";\n    border-radius: ",";\n    padding: ",";\n    font-size: ",";\n    padding-left: ",";\n    color: ",";\n\n    &:focus {\n        font-weight: bold;\n        border: 1.5px solid ",";\n    }\n"])),Y.colors.shade40,Y.spacing.space1,Y.spacing.space2,Y.fontSizes.p2,(function(e){return e.icon&&Y.spacing.space5}),Y.colors.shade80,Y.colors.blue40),Ae=function(e){var n=e.icon,t=Object(je.a)(e,["icon"]);return Object($.jsxs)(Ee,{children:[n,Object($.jsx)(Me,Object(X.a)(Object(X.a)({},t),{},{icon:n}))]})},Te=function(e){var n=e.id,t=Object(J.useState)(""),c=Object(ce.a)(t,2),r=c[0],o=c[1],a=be(),s=a.open,i=a.closeModalTask,l=a.createTask;return Object($.jsx)(Ue,{open:s,close:i,title:"Adicionar tarefa",textAction:"Cadastrar",actionClick:function(){return l(Number(n),r),void o("")},children:Object($.jsx)(Ae,{icon:Object($.jsx)(Fe.c,{}),type:"textarea",value:r,onChange:function(e){return o(e.target.value)}})})},Ne=G.c.div(D||(D=Object(q.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 600px;\n    height: 100%;\n    justify-content: center;\n    .back {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        margin-bottom: 16px;\n        p {\n            margin-left: 8px;\n            font-weight: bold;\n        }\n    }\n    .button {\n        width: 100%;\n    }\n"]))),Be=(G.c.div(S||(S=Object(q.a)(["\n    width: 100%;\n    display: flex;\n    height: 80%;\n    margin-top: 16px;\n    border-radius: 8px;\n    justify-content: center;\n"]))),function(){var e=be(),n=e.deleteTask,t=e.modalDelete,c=(e.selectTask,e.closeModalDelete);return Object($.jsx)(Ue,{open:t,close:c,title:"Deletar Task",textAction:"Confirmar",actionClick:n,children:"Deseja realmente excluir ?"})}),Ie=function(e){e.id;var n=be(),t=n.modalEdit,c=n.closeModalEdit,r=n.editTask,o=n.value,a=n.setValue,s=Object(J.useState)(o),i=Object(ce.a)(s,2),l=i[0],d=i[1];return Object($.jsx)(Ue,{open:t,close:c,title:"Editar Task",textAction:"Confirmar",actionClick:function(){r(o),d(o)},children:Object($.jsx)(Ae,{icon:Object($.jsx)(Fe.c,{}),type:"text",value:l,onChange:function(e){a(e.target.value),d(e.target.value)}})})},Le=function(){var e=Object(W.g)().id,n=be(),t=n.tasks,c=n.getTasksByUser,r=n.openModalTask;return Object(J.useEffect)((function(){c(e)}),[e]),Object($.jsxs)(Ne,{children:[Object($.jsxs)(Q.b,{to:"/",className:"back",children:[Object($.jsx)(fe,{icon:Object($.jsx)(Fe.a,{}),outline:!0}),Object($.jsx)("p",{children:"Lista de Usuarios"})]}),Object($.jsx)(ze,{onClick:function(){return r()},children:"Cadastrar Tarefa"}),Object($.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e,n){return Object($.jsx)(ke,{task:e},n)}))}),Object($.jsx)(Te,{id:e}),Object($.jsx)(Be,{id:e}),Object($.jsx)(Ie,{id:e})]})},Pe=G.c.div(U||(U=Object(q.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 600px;\n    height: 100%;\n    justify-content: center;\n\n    .button {\n        width: 100%;\n    }\n"]))),Je=G.c.div(E||(E=Object(q.a)(["\n    width: 100%;\n    display: flex;\n    height: 80%;\n    margin-top: 16px;\n    border-radius: 8px;\n    justify-content: center;\n"]))),Re=G.c.div(M||(M=Object(q.a)(["\n    width: 100%;\n    height: 100%;\n"]))),Ve=G.c.div(A||(A=Object(q.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n\n    .title {\n        display: flex;\n        align-items: center;\n    }\n    .name {\n        color: ",";\n        margin-left: 16px;\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    .action {\n        display: flex;\n        align-items: center;\n        button {\n            margin-left: 8px;\n        }\n    }\n"])),Y.colors.shade70),He={small:Object(G.b)(T||(T=Object(q.a)(["\n        height: 30px;\n        width: 30px;\n        font-size: ",";\n    "])),Y.fontSizes.p4),medium:Object(G.b)(N||(N=Object(q.a)(["\n        height: 60px;\n        width: 60px;\n    "]))),large:Object(G.b)(B||(B=Object(q.a)(["\n        height: 90px;\n        width: 90px;\n        font-size: ",";\n    "])),Y.fontSizes.p0)},qe=G.c.div(I||(I=Object(q.a)(["\n    width: auto;\n"]))),Ge=G.c.div(L||(L=Object(q.a)(["\n    background-color: ",";\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    font-weight: 600;\n    ",";\n    text-transform: uppercase;\n\n    :hover {\n        background-color: ",";\n    }\n"])),Y.colors.blue30,(function(e){var n=e.size;return He[n||"medium"]}),Y.colors.mint40),Ke=function(e){var n=e.name,t=e.size;return Object($.jsx)(qe,{children:Object($.jsx)(Ge,{size:t,children:function(){var e=n.split(" ");return e.length>1?e[0].substr(0,1)+e[1].substr(0,1):e[0].substr(0,2)}()})})},Qe=G.c.div(P||(P=Object(q.a)(["\n    margin: ",";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 ",";\n    border-radius: ",";\n    background-color: ",";\n    height: 50px;\n\n    :hover {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n        transform: scale(1.01);\n        background-color: ",";\n    }\n"])),Y.spacing.space2,Y.spacing.space2,Y.spacing.space1,Y.colors.white,Y.colors.shade30),We=function(e){var n=e.children;return Object($.jsx)(Qe,{children:n})},Xe=function(e){var n=e.user,t=Object(W.f)(),c=ie().openModalDelete;return Object($.jsx)(We,{children:Object($.jsxs)(Ve,{children:[Object($.jsxs)("div",{className:"title",children:[Object($.jsx)(Ke,{name:n.name,size:"small"}),Object($.jsxs)("p",{className:"name",children:[" ",n.name]})]}),Object($.jsxs)("div",{className:"action",children:[Object($.jsx)(fe,{icon:Object($.jsx)(Oe.a,{}),onClick:function(){return t.push("tasks/".concat(n.id))}}),Object($.jsx)(fe,{icon:Object($.jsx)(Oe.b,{}),variant:"error",outline:!0,onClick:function(){return c(n)}})]})]})})},Ye=function(){var e=ie(),n=e.users;e.getUsers;return Object(J.useEffect)((function(){}),[n]),Object($.jsx)(Re,{children:null===n||void 0===n?void 0:n.map((function(e){return Object($.jsx)(Xe,{user:e})}))})},Ze=function(){var e=ie(),n=e.deleteUser,t=e.modalDelete,c=e.selectUser,r=e.closeModalDelete;return Object($.jsxs)(Ue,{open:t,close:r,title:"Deletar Usuario",textAction:"Confirmar",actionClick:n,children:["Deseja excluir usuario ",Object($.jsx)("b",{children:null===c||void 0===c?void 0:c.name})," ?"]})},$e=function(){var e=ie(),n=e.modalCreate,t=e.closeModalCreateUser,c=e.createUser,r=Object(J.useState)(""),o=Object(ce.a)(r,2),a=o[0],s=o[1];return Object($.jsx)(Ue,{open:n,close:t,title:"Cadastrar Usuario",textAction:"Adicionar",actionClick:function(){c(a),s("")},children:Object($.jsx)(Ae,{icon:Object($.jsx)(Oe.c,{}),type:"textarea",value:a,placeholder:"Digite o nome do usuario...",onChange:function(e){return s(e.target.value)}})})},_e=function(){var e=ie(),n=e.getUsers,t=e.openModalCreateUser;e.users;return Object(J.useEffect)((function(){n()}),[]),Object($.jsxs)(Pe,{children:[Object($.jsx)(ze,{className:"button",onClick:t,children:"Cadastar Usuario"}),Object($.jsx)(Je,{children:Object($.jsx)(Ye,{})}),Object($.jsx)(Ze,{}),Object($.jsx)($e,{})]})};var en=function(){return Object($.jsxs)(Q.a,{children:[Object($.jsx)(K,{}),Object($.jsx)(ue,{children:Object($.jsx)(W.c,{children:Object($.jsxs)(_,{children:[Object($.jsx)(W.a,{exact:!0,path:"/",children:Object($.jsx)(_e,{})}),Object($.jsx)(W.a,{path:"/tasks/:id",children:Object($.jsx)(Le,{})})]})})})]})},nn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),o(e),a(e)}))};H.a.render(Object($.jsx)(R.a.StrictMode,{children:Object($.jsx)(en,{})}),document.getElementById("root")),nn()}},[[74,1,2]]]);
//# sourceMappingURL=main.dbcb87cf.chunk.js.map