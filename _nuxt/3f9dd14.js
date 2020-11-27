(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1256:function(t,e,o){"use strict";o.r(e);o(44);var r=o(1285),n=o.n(r),c=o(91),l={components:{Identicon:n.a},props:{address:{type:String,default:function(){return""}},size:{type:Number,default:function(){return 20}}},data:function(){return{config:c.a}},methods:{showToast:function(){this.$bvToast.toast(this.address,{title:"Address copied to clipboard!",variant:"secondary",autoHideDelay:5e3,appendToast:!1})}}},d=o(129),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline",attrs:{title:"Click to copy validator address to clipboard"},on:{click:this.showToast}},[e("Identicon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:this.address,expression:"address",arg:"copy"}],key:this.address,staticClass:"identicon",attrs:{size:this.size,theme:this.config.identiconTheme,value:this.address}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Identicon:o(1256).default})},1262:function(t,e,o){"use strict";o.r(e);var r={},n=o(129),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"loading text-center"},[this._v("\n    data collection may take around 2 minutes to complete, please be patient\n  ")]),this._v(" "),e("text-typing",{staticClass:"pt-3 text-center",attrs:{texts:["Fetching chain data..."],speed:100,delay:3e3,"fixed-text-class":"text-white","dynamic-text-class":"text-teal-200","caret-class":"text-white"}})],1)}),[],!1,null,null,null);e.default=component.exports},1554:function(t,e,o){"use strict";o.r(e);o(48),o(254),o(70),o(182);var r=o(77),n=o(1256),c=o(1262),l=o(403),d=o(91),m={components:{Identicon:n.default,Loading:c.default},mixins:[l.a],data:function(){return{accountId:this.$route.params.id,data:{architecture:"",automation:"",metrics:"",monitoring:!0,monitoringDescription:"",keyHandling:"",highAvailability:"",upgradeProcedure:"",providers:["Azure","AWS"],RBAC:"",stakeAutomation:"",DDoSProtection:"",communication:"",education:"",regions:["Asia","Europe","North America"],supportChannels:"",contributions:[{name:"Project name",url:"Repository URL"}]}}},head:function(){return{title:"Edit ".concat(this.accountId," qualitative data | ").concat(d.a.title," for ").concat(this.capitalize(d.a.name)),meta:[{hid:"description",name:"description",content:"Validator ".concat(this.accountId," metrics")}]}},computed:{loading:function(){return this.$store.state.ranking.loading},validator:function(){var t=this,e=this.$store.state.ranking.list.find((function(e){return e.stashAddress===t.accountId}));return e}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.$store.state.ranking.list.length){e.next=3;break}return e.next=3,t.$store.dispatch("ranking/update");case 3:case"end":return e.stop()}}),e)})))()},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.data))}}},v=o(129),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page validator-page container pt-3"},[t.loading?o("div",[o("Loading")],1):o("div",[o("h1",{staticClass:"mt-3 mb-4"},[o("Identicon",{attrs:{address:t.accountId,size:64}}),t._v(" "),t.validator.name?o("span",[t._v("\n        "+t._s(t.validator.name)+"\n        "),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Verified identity"}},[t.validator.verifiedIdentity?o("font-awesome-icon",{staticClass:"text-success",attrs:{icon:"check"}}):t._e()],1)]):o("span",[t._v("\n        "+t._s(t.shortAddress(t.accountId))+"\n      ")])],1),t._v(" "),o("h5",{staticClass:"mb-5"},[t._v("Edit qualitative information")]),t._v(" "),o("b-form",{on:{submit:t.onSubmit}},[o("label",{attrs:{for:"architecture"}},[t._v("Validator architecture")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"architecture",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.architecture,callback:function(e){t.$set(t.data,"architecture",e)},expression:"data.architecture"}}),t._v(" "),o("label",{attrs:{for:"automation"}},[t._v("How do you automate things / what tools do you use?")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"automation",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.automation,callback:function(e){t.$set(t.data,"automation",e)},expression:"data.automation"}}),t._v(" "),o("label",{attrs:{for:"metrics"}},[t._v("\n        What approaches does the validator use for logging, metrics,\n        monitoring, and observability\n      ")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"metrics",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.metrics,callback:function(e){t.$set(t.data,"metrics",e)},expression:"data.metrics"}}),t._v(" "),o("label",{attrs:{for:"monitoringDescription"}},[t._v("\n        Monitoring and alert system in place?\n      ")]),t._v(" "),o("b-form-radio-group",{staticClass:"mb-4",attrs:{options:["Yes","No"],name:"radio-inline"},model:{value:t.data.monitoring,callback:function(e){t.$set(t.data,"monitoring",e)},expression:"data.monitoring"}}),t._v(" "),o("label",{attrs:{for:"monitoringDescription"}},[t._v("\n        How does the validator alert when things go wrong: monitoring system\n      ")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"monitoringDescription",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.monitoringDescription,callback:function(e){t.$set(t.data,"monitoringDescription",e)},expression:"data.monitoringDescription"}}),t._v(" "),o("label",{attrs:{for:"keyHandling"}},[t._v("Keyhandling policies")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"keyHandling",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.keyHandling,callback:function(e){t.$set(t.data,"keyHandling",e)},expression:"data.keyHandling"}}),t._v(" "),o("label",{attrs:{for:"highAvailability"}},[t._v("Failover and or high availability approaches")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"highAvailability",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.highAvailability,callback:function(e){t.$set(t.data,"highAvailability",e)},expression:"data.highAvailability"}}),t._v(" "),o("label",{attrs:{for:"upgradeProcedure"}},[t._v("Scenario runbooks (how do they upgrade, how do they migrate\n        servers)")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"upgradeProcedure",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.upgradeProcedure,callback:function(e){t.$set(t.data,"upgradeProcedure",e)},expression:"data.upgradeProcedure"}}),t._v(" "),o("label",{attrs:{for:"providers"}},[t._v("Which providers does the validator use?")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"providers",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.providers,callback:function(e){t.$set(t.data,"providers",e)},expression:"data.providers"}}),t._v(" "),o("label",{attrs:{for:"RBAC"}},[t._v("Role Based Access Control Policies (who has access to the\n        infrastructure, who can make changes, etc)")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"RBAC",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.RBAC,callback:function(e){t.$set(t.data,"RBAC",e)},expression:"data.RBAC"}}),t._v(" "),o("label",{attrs:{for:"stakeAutomation"}},[t._v("Stake management automation (how does the validator determine the\n        efficiency of their own stake)")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"stakeAutomation",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.stakeAutomation,callback:function(e){t.$set(t.data,"stakeAutomation",e)},expression:"data.stakeAutomation"}}),t._v(" "),o("label",{attrs:{for:"DDoSProtection"}},[t._v("DDoS Protection")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"DDoSProtection",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.DDoSProtection,callback:function(e){t.$set(t.data,"DDoSProtection",e)},expression:"data.DDoSProtection"}}),t._v(" "),o("label",{attrs:{for:"communication"}},[t._v("Communication - how does the validator actively communicate with its\n        nominators, what channels / platforms do they use")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"communication",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.communication,callback:function(e){t.$set(t.data,"communication",e)},expression:"data.communication"}}),t._v(" "),o("label",{attrs:{for:"communication"}},[t._v("Communication - how does the validator actively communicate with its\n        nominators, what channels / platforms do they use")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"communication",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.communication,callback:function(e){t.$set(t.data,"communication",e)},expression:"data.communication"}}),t._v(" "),o("label",{attrs:{for:"education"}},[t._v("Does the validator produce education content? (blog posts and\n        tutorials)")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"education",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.education,callback:function(e){t.$set(t.data,"education",e)},expression:"data.education"}}),t._v(" "),o("label",{attrs:{for:"regions"}},[t._v("Which regions does the validator operate in?")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"regions",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.regions,callback:function(e){t.$set(t.data,"regions",e)},expression:"data.regions"}}),t._v(" "),o("label",{attrs:{for:"supportChannels"}},[t._v("Does the validator offer support in Riot / Telegram / other\n        platforms?")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"supportChannels",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.supportChannels,callback:function(e){t.$set(t.data,"supportChannels",e)},expression:"data.supportChannels"}}),t._v(" "),o("label",{attrs:{for:"contributions"}},[t._v("Does the validator contribute with open source tools? Must include\n        links to the repositories")]),t._v(" "),o("b-form-textarea",{staticClass:"mb-4",attrs:{id:"contributions",placeholder:"Please describe...",rows:"3","max-rows":"6"},model:{value:t.data.contributions,callback:function(e){t.$set(t.data,"contributions",e)},expression:"data.contributions"}}),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"outline-primary",block:""}},[t._v("Submit")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:o(1262).default,Identicon:o(1256).default})}}]);