(this.webpackJsonplistening_app=this.webpackJsonplistening_app||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(28),i=n.n(s),l=(n(39),n(14)),c=n(15),o=(n(40),n(2)),u=n(3),m=n(5),h=n(4),d=n(6),b=(n(41),n(42),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Welcome to the listening app"),r.a.createElement(l.b,{to:"/upward-intervals",className:"link-button start-quiz-button"},"Upward Intervals"),r.a.createElement(l.b,{to:"/downward-intervals",className:"link-button start-quiz-button"},"Downward Intervals"),r.a.createElement(l.b,{to:"/simultaneous-intervals",className:"link-button start-quiz-button"},"Simultaneous Intervals"),r.a.createElement("a",{href:"https://github.com/ruthie/listening-app",className:"source-link"},"Source Code"))}}]),t}(a.Component)),p=n(7),v=n(31);n(48);var f=function(e){var t=e.className,n=Object(v.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:"button ".concat(t)},n))},y=(n(49),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={currentExercise:0,answer:n.props.questionGenerator(),submittedAnswers:[],numFirstTry:0},n.handleAnswerClick=n.handleAnswerClick.bind(Object(p.a)(n)),n.handleContinueClick=n.handleContinueClick.bind(Object(p.a)(n)),n.handleFinishClick=n.handleFinishClick.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleAnswerClick",value:function(e){var t=e.currentTarget.value;0===this.state.submittedAnswers.length&&t===this.state.answer&&this.setState({numFirstTry:this.state.numFirstTry+1}),this.setState({submittedAnswers:this.state.submittedAnswers.concat([t])})}},{key:"handleContinueClick",value:function(){this.setState({submittedAnswers:[],answer:this.props.questionGenerator(),currentExercise:this.state.currentExercise+1})}},{key:"handleFinishClick",value:function(){this.props.onFinishClick(this.state.numFirstTry),this.setState({currentExercise:0,answer:this.props.questionGenerator(),submittedAnswers:[],numFirstTry:0})}},{key:"render",value:function(){var e=this.state.submittedAnswers.includes(this.state.answer),t=this.state.currentExercise===this.props.numExercises-1;return r.a.createElement("div",{className:"quiz"},r.a.createElement(this.props.exerciseClass,{answer:this.state.answer,submittedAnswers:this.state.submittedAnswers,onAnswerClick:this.handleAnswerClick}),e&&(t?r.a.createElement(f,{onClick:this.handleFinishClick,className:"finish-button"},"Finish"):r.a.createElement(f,{onClick:this.handleContinueClick,className:"continue-button"},"Continue")))}}]),t}(a.Component)),C=(n(50),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="You got ".concat(this.props.numFirstTry," out of ").concat(this.props.numExercises," on the first try!");return r.a.createElement("div",null,r.a.createElement("p",null,e),r.a.createElement(f,{className:"again-button",onClick:this.props.onAgainClick},"Try again"),r.a.createElement(l.b,{to:"/",className:"link-button home-button"},"Home"))}}]),t}(a.Component)),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={numExercises:2,finished:!1,numFirstTry:0},e.handleFinishClick=e.handleFinishClick.bind(Object(p.a)(e)),e.handleAgainClick=e.handleAgainClick.bind(Object(p.a)(e)),e.resetQuiz=e.resetQuiz.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleFinishClick",value:function(e){this.setState({finished:!0,numFirstTry:e})}},{key:"resetQuiz",value:function(){this.setState({numExercises:2,finished:!1,numFirstTry:0})}},{key:"handleAgainClick",value:function(){this.resetQuiz()}},{key:"render",value:function(){return this.state.finished?r.a.createElement(C,{onAgainClick:this.handleAgainClick,numExercises:this.state.numExercises,numFirstTry:this.state.numFirstTry}):r.a.createElement(y,{numExercises:this.state.numExercises,onFinishClick:this.handleFinishClick,exerciseClass:this.props.exerciseClass,questionGenerator:this.props.questionGenerator})}}]),t}(a.Component),w=n(11),j=n.n(w),E=n(9),O=n.n(E),N=n(33);n(59);function A(e){var t=e.text,n=e.onClick,a=e.value,s=e.color,i=e.layoutClassName;return r.a.createElement("button",{value:a,onClick:n,className:"answer-button ".concat(s," ").concat(i)},t)}var g={m2:{friendlyName:"Minor 2nd",layoutClassName:"minor2"},M2:{friendlyName:"Major 2nd",layoutClassName:"major2"},m3:{friendlyName:"Minor 3rd",layoutClassName:"minor3"},M3:{friendlyName:"Major 3rd",layoutClassName:"major3"},P4:{friendlyName:"Perfect 4th",layoutClassName:"perfect4"},d5:{friendlyName:"Diminished 5th",layoutClassName:"diminished5"},P5:{friendlyName:"Perfect 5th",layoutClassName:"perfect5"},m6:{friendlyName:"Minor 6th",layoutClassName:"minor6"},M6:{friendlyName:"Major 6th",layoutClassName:"major6"},m7:{friendlyName:"Minor 7th",layoutClassName:"minor7"},M7:{friendlyName:"Major 7th",layoutClassName:"major7"}},M=Object.keys(g),x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"answer-buttons-container"},Object.entries(g).map((function(t){var n=Object(N.a)(t,2),a=n[0],s=n[1].friendlyName,i="white";return e.props.submittedAnswers.includes(a)&&(i=a===e.props.correctAnswer.toString()?"green":"red"),r.a.createElement(A,{key:a,text:s,value:a,color:i,onClick:e.props.onAnswerClick,layoutClassName:g[a].layoutClassName})})))}}]),t}(a.Component),F=n(32);n(60);var I=function(e){var t=e.onClick;return r.a.createElement(f,{onClick:t,className:"play-button"},r.a.createElement("div",null,r.a.createElement(F.a,{className:"play-button-sound-icon"}),"Play Interval"))};n(61);var T=function(e){return r.a.createElement("p",Object.assign({className:"instructions-text"},e))};function S(){return M[(e=M.length,Math.floor(Math.random()*Math.floor(e)))];var e}var q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).playInterval=e.playInterval.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"playInterval",value:function(){var e=(new j.a.Synth).toMaster(),t=O.a.interval(O.a.note("C4"),O.a.interval(this.props.answer)),n=t.name()+t.accidental()+t.octave();e.triggerAttackRelease("C4","4n"),e.triggerAttackRelease(n,"4n",j.a.now()+j.a.Time("4n"))}},{key:"render",value:function(){var e=this.props,t=e.answer,n=e.submittedAnswers,a=e.onAnswerClick;return r.a.createElement("div",null,r.a.createElement(I,{onClick:this.playInterval}),r.a.createElement(T,null,"Identify the interval"),r.a.createElement(x,{onAnswerClick:a,correctAnswer:t,submittedAnswers:n}))}}]),t}(a.Component);function z(){return M[(e=M.length,Math.floor(Math.random()*Math.floor(e)))];var e}var G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).playInterval=e.playInterval.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"playInterval",value:function(){var e=O.a.interval(this.props.answer).direction("down"),t=(new j.a.Synth).toMaster(),n=O.a.interval(O.a.note("C5"),e),a=n.name()+n.accidental()+n.octave();t.triggerAttackRelease("C5","4n"),t.triggerAttackRelease(a,"4n",j.a.now()+j.a.Time("4n"))}},{key:"render",value:function(){var e=this.props,t=e.answer,n=e.submittedAnswers,a=e.onAnswerClick;return r.a.createElement("div",null,r.a.createElement(I,{onClick:this.playInterval}),r.a.createElement(T,null,"Identify the interval"),r.a.createElement(x,{onAnswerClick:a,correctAnswer:t,submittedAnswers:n}))}}]),t}(a.Component);function P(){return M[(e=M.length,Math.floor(Math.random()*Math.floor(e)))];var e}var R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).playInterval=e.playInterval.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"playInterval",value:function(){var e=O.a.interval(this.props.answer).direction("down"),t=new j.a.PolySynth(2,j.a.Synth).toMaster(),n=O.a.interval(O.a.note("C5"),e),a=n.name()+n.accidental()+n.octave();t.triggerAttackRelease(["C5",a],"2n")}},{key:"render",value:function(){var e=this.props,t=e.answer,n=e.submittedAnswers,a=e.onAnswerClick;return r.a.createElement("div",null,r.a.createElement(I,{onClick:this.playInterval}),r.a.createElement(T,null,"Identify the interval"),r.a.createElement(x,{onAnswerClick:a,correctAnswer:t,submittedAnswers:n}))}}]),t}(a.Component);var Q=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/upward-intervals"},r.a.createElement(k,{exerciseClass:q,questionGenerator:S})),r.a.createElement(c.a,{path:"/downward-intervals"},r.a.createElement(k,{exerciseClass:G,questionGenerator:z})),r.a.createElement(c.a,{path:"/simultaneous-intervals"},r.a.createElement(k,{exerciseClass:R,questionGenerator:P})),r.a.createElement(c.a,{path:"/"},r.a.createElement(b,null)))))};i.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2f010edc.chunk.js.map