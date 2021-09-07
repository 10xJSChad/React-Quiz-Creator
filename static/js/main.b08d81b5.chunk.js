(this["webpackJsonpQuiz-Creator"]=this["webpackJsonpQuiz-Creator"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(2),i=s.n(n),a=s(8),c=s.n(a),r=(s(13),s(1)),o=s(3),u=s(4),h=s(6),l=s(5),b=(s(14),s(0)),d=function(t){Object(h.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={screen:0},n}return Object(u.a)(s,[{key:"changeScreen",value:function(t){this.setState({screen:t})}},{key:"render",value:function(){var t=this;return 1==this.state.screen?Object(b.jsx)(j,{}):2==this.state.screen?Object(b.jsx)(x,{}):Object(b.jsx)("div",{class:"background-box",children:Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("p",{className:"title-text",children:"React Quiz by 10xJSChad"}),Object(b.jsx)("button",{className:"selection-button",onClick:function(){return t.changeScreen(1)},children:"Create a quiz"}),Object(b.jsx)("button",{className:"selection-button",onClick:function(){return t.changeScreen(2)},children:"Import a quiz"})]})})}}]),s}(i.a.Component),j=function(t){Object(h.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={questions:[],question:["Question",1,"Answer A","Answer B","Answer C","Answer D"],start:!1},n.onChange=n.onChange.bind(Object(r.a)(n)),n.InputBox=n.InputBox.bind(Object(r.a)(n)),n.addQuestion=n.addQuestion.bind(Object(r.a)(n)),n.setAnswer=n.setAnswer.bind(Object(r.a)(n)),n.startQuiz=n.startQuiz.bind(Object(r.a)(n)),n}return Object(u.a)(s,[{key:"onChange",value:function(t,e){var s=this.state.question;s[e]=t,this.setState({question:s})}},{key:"setAnswer",value:function(t){var e=this.state.question;e[1]=t,this.setState({question:e}),this.render()}},{key:"AnswerButton",value:function(t,e){var s=this,n={};return e==this.state.question[1]&&(n={backgroundColor:"greenyellow"}),Object(b.jsx)("button",{className:"question-button",style:n,onClick:function(t){return s.setAnswer(e)},children:this.state.question[e+1]})}},{key:"InputBox",value:function(t){var e=this;return Object(b.jsx)("input",{className:"question-create-input",type:"text",value:this.state.question[t],onChange:function(s){return e.onChange(s.target.value,t)},style:{fontSize:15}})}},{key:"addQuestion",value:function(){var t=this.state.questions;t.push(this.state.question),this.setState({questions:t,question:["Question",1,"Answer A","Answer B","Answer C","Answer D"]})}},{key:"createCode",value:function(){var t=this.state.questions,e="";return t.forEach((function(t){e+="\u2399",t.forEach((function(t){e+=t+"\u239a"}))})),e}},{key:"startQuiz",value:function(){this.setState({start:!0})}},{key:"render",value:function(){return this.state.start?Object(b.jsx)(x,{code:this.createCode(),start:!0}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"background-box",children:[Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("h1",{children:"Quiz Creator"}),this.InputBox(0)," ",Object(b.jsx)("br",{}),this.InputBox(2),this.InputBox(3),this.InputBox(4),this.InputBox(5)]}),Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("p",{className:"under-text",children:this.state.question[0]}),Object(b.jsxs)("div",{className:"question-button-box",children:[this.AnswerButton(this.state.question[2],1),this.AnswerButton(this.state.question[3],2),this.AnswerButton(this.state.question[4],3),this.AnswerButton(this.state.question[5],4)]}),Object(b.jsx)("p",{className:"under-text",style:{fontSize:20},children:"Click on an answer to mark it as correct"}),Object(b.jsx)("button",{className:"selection-button",style:{fontSize:20},onClick:this.addQuestion,children:"Add question"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("h1",{children:"Quiz code"}),Object(b.jsx)("textarea",{value:this.createCode()}),Object(b.jsx)("p",{className:"under-text",style:{fontSize:20},children:"Copy and import this quiz code to play your quiz"}),Object(b.jsx)("button",{className:"selection-button",onClick:this.startQuiz,children:"Import and start"})]})]})})}}]),s}(i.a.Component),x=function(t){Object(h.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={code:"",start:!1},n.startQuiz=n.startQuiz.bind(Object(r.a)(n)),n.props.start&&(n.state.code=n.props.code,n.state.start=!0),n}return Object(u.a)(s,[{key:"onChange",value:function(t){this.setState({code:t})}},{key:"parseImport",value:function(){var t=this.state.code,e=[],s=[];return t.split("\u2399").forEach((function(t){t.split("\u239a").forEach((function(t){""!=t&&s.push(t)})),""!=s&&e.push(s),s=[]})),e}},{key:"startQuiz",value:function(){this.setState({start:!0})}},{key:"render",value:function(){var t=this;return this.state.start?Object(b.jsx)(O,{quiz:this.parseImport()}):Object(b.jsx)("div",{className:"background-box",children:Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("h1",{children:"Enter a quiz code"}),Object(b.jsx)("textarea",{value:this.state.code,onChange:function(e){return t.onChange(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"selection-button",onClick:this.startQuiz,children:"Import and start"})]})})}}]),s}(i.a.Component),O=function(t){Object(h.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={current:0,questions:[["What color is red",1,"Red","Blue","Left","Right"],["What color is blue",2,"Red","Blue","Left","Right"]],correct:0},n.state.questions=n.props.quiz,n.checkAndIncrement=n.checkAndIncrement.bind(Object(r.a)(n)),n}return Object(u.a)(s,[{key:"checkAndIncrement",value:function(t){t==this.state.questions[this.state.current][1]&&this.setState({correct:this.state.correct+1}),this.setState({current:this.state.current+1})}},{key:"render",value:function(){return this.state.current==this.state.questions.length?Object(b.jsx)("div",{className:"background-box",children:Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("h1",{children:"The end"}),Object(b.jsxs)("h1",{children:["You scored ",this.state.correct," out of ",this.state.questions.length]})]})}):Object(b.jsx)(v,{checkAndIncrement:this.checkAndIncrement,data:this.state.questions[this.state.current]})}}]),s}(i.a.Component),v=function(t){Object(h.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={guess:0},n.GiveAnswer=n.GiveAnswer.bind(Object(r.a)(n)),n}return Object(u.a)(s,[{key:"AnswerButton",value:function(t,e){var s=this,n="question-button";if(this.props.data[1]==e&&0!=this.state.guess?n="question-button-right":this.props.data[1]!=e&&0!=this.state.guess&&(n="question-button-wrong"),""!=t)return Object(b.jsx)("button",{className:n,onClick:function(){return s.GiveAnswer(e)},children:t})}},{key:"GiveAnswer",value:function(t){var e=this;0==this.state.guess&&(this.setState({guess:1}),setTimeout((function(){e.props.checkAndIncrement(t),e.setState({guess:0})}),3e3))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"background-box",children:Object(b.jsxs)("div",{className:"question-box",children:[Object(b.jsx)("p",{className:"title-text",children:this.props.data[0]}),this.AnswerButton(this.props.data[2],1),this.AnswerButton(this.props.data[3],2),this.AnswerButton(this.props.data[4],3),this.AnswerButton(this.props.data[5],4)]})})}}]),s}(i.a.Component),p=d,f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;s(t),n(t),i(t),a(t),c(t)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.b08d81b5.chunk.js.map