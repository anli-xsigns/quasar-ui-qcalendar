(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e420e4b0"],{"078d":function(e,t,a){"use strict";a.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"scheduler\"\n    :resources=\"resources\"\n    :resource-width=\"160\"\n    locale=\"en-us\"\n    style=\"height: 500px;\"\n  >\n    \x3c!-- eslint-disable vue/no-unused-vars --\x3e\n    <template #scheduler-resource=\"{ resource, index }\">\n      <div class=\"col-12\">\n        <q-btn flat class=\"fit\" :icon=\"getResourceImage(resource)\" :label=\"resource.label\"/>\n      </div>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      resources: [\n        { label: 'John', avatar: 'https://cdn.quasar.dev/img/avatar4.jpg' },\n        { label: 'Mary', avatar: 'https://cdn.quasar.dev/img/avatar2.jpg' },\n        { label: 'Susan', avatar: 'https://cdn.quasar.dev/img/avatar1.jpg' },\n        { label: 'Olivia', avatar: 'https://cdn.quasar.dev/img/avatar6.jpg' },\n        { label: 'Board Room', icon: 'meeting_room' },\n        { label: 'Room-1', icon: 'meeting_room' },\n        { label: 'Room-2', icon: 'meeting_room' }\n      ]\n    }\n  },\n\n  methods: {\n    getResourceImage (resource) {\n      if (resource.icon) {\n        return resource.icon\n      }\n      if (resource.avatar) {\n        return 'img:' + resource.avatar\n      }\n      return ''\n    }\n  }\n}\n<\/script>\n\n<style lang=\"stylus\">\nimg.q-icon.on-left\n  border-radius 50%\n</style>\n"},"1ea7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-markdown"},[n("example-title",{attrs:{title:"Basic"}}),n("example-card",{attrs:{title:"Scheduler View - Basic",name:"SchedulerViewBasic","tag-parts":e.getTagParts(a("dde7").default)}}),n("example-title",{attrs:{title:"Disabled Days"}}),n("example-card",{attrs:{title:"Scheduler View - Disabled Days",name:"SchedulerViewDisabledDays","tag-parts":e.getTagParts(a("c0bc").default)}},[n("q-markdown",[e._v("\nWhen the property `disabled-days` has an array of disabled days, you can hook into the `resource-style` property to change the background color of the disabled day.\n      ")])],1),n("example-title",{attrs:{title:"Previous/Next"}}),n("example-card",{attrs:{title:"Scheduler View - Prev/Next",name:"SchedulerViewPrevNext","tag-parts":e.getTagParts(a("cba0").default)}}),n("example-title",{attrs:{title:"Swipe Navigation"}}),n("example-card",{attrs:{title:"Scheduler View - Swipe",name:"SchedulerViewSwipe","tag-parts":e.getTagParts(a("6601").default)}}),n("example-title",{attrs:{title:"Working with Slots"}}),n("q-markdown",[e._v("\nFor slots that return `day` or `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-mm-dd\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false   // if timestamp is in the future (based on `now` property)\n}\n```\n    ")]),n("example-card",{attrs:{title:"Scheduler View - Slots (scheduler-resources-header)",name:"SchedulerViewSlotResourcesHeader","tag-parts":e.getTagParts(a("a225").default)}},[n("q-markdown",[e._v("\nBelow, the slot receives an array of `timestamp`s for the days that are being displayed.\n      ")])],1),n("example-card",{attrs:{title:"Scheduler View - Slots (scheduler-day-header)",name:"SchedulerViewSlotDayHeader","tag-parts":e.getTagParts(a("9579").default)}},[n("q-markdown",[e._v("\nBelow, the slot receives the `timestamp` for the day being displayed.\n      ")])],1),n("example-card",{attrs:{title:"Scheduler View - Slots (scheduler-resource-day)",name:"SchedulerViewSlotResourceDay","tag-parts":e.getTagParts(a("f695").default)}},[n("q-markdown",[e._v("\nBelow, the slot receives the `timestamp` for the day being displayed, an index, and the resource.\n      ")])],1),n("example-card",{attrs:{title:"Scheduler View - Slots (scheduler-resource)",name:"SchedulerViewSlotResource","tag-parts":e.getTagParts(a("078d").default)}},[n("q-markdown",[e._v("\nBelow, the slot receives the `resource` to be displayed. In this case, an avatar (or icon) is being displayed along with the resource name.\n      ")])],1)],1)},r=[],l=a("fe7d"),s=a("74ba"),o=a("8669"),i=a("9c31"),c={name:"SchedulerView",components:{ExampleTitle:l["a"],ExampleCard:s["a"]},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Basic"),this.addToToc("Scheduler View - Basic",2),this.addToToc("Disabled Days"),this.addToToc("Scheduler View - Disabled Days",2),this.addToToc("Previous/Next"),this.addToToc("Scheduler View - Prev/Next",2),this.addToToc("Swipe Navigation"),this.addToToc("Scheduler View - Swipe",2),this.addToToc("Working with Slots"),this.addToToc("Scheduler View - Slots (scheduler-resources-header)",2),this.addToToc("Scheduler View - Slots (scheduler-day-header)",2),this.addToToc("Scheduler View - Slots (scheduler-resource-day)",2),this.addToToc("Scheduler View - Slots (scheduler-resource)",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:i["a"],addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=Object(o["b"])(e);this.tempToc.push({children:[],id:a,label:e,level:t})}}},d=c,u=(a("c729"),a("2877")),p=Object(u["a"])(d,n,r,!1,null,null,null);t["default"]=p.exports},6601:function(e,t,a){"use strict";a.r(t),t["default"]="<template>\n  <div>\n    <q-calendar\n      ref=\"calendar\"\n      v-model=\"selectedDate\"\n      view=\"scheduler\"\n      locale=\"en-us\"\n      :resources=\"resources\"\n      v-touch-swipe.mouse.left.right=\"handleSwipe\"\n      animated\n      transition-prev=\"slide-right\"\n      transition-next=\"slide-left\"\n      style=\"height: 400px; overflow: hidden\"\n    />\n  </div>\n</template>\n\n<script>\nimport { stopAndPrevent } from 'quasar/src/utils/event'\n\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ],\n      dragging: false, // used for drag-and-drop\n      ignoreNextSwipe: false // used for drag-and-drop\n    }\n  },\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n    handleSwipe ({ evt, ...info }) {\n      if (this.dragging === false) {\n        if (info.duration >= 30 && this.ignoreNextSwipe === false) {\n          if (info.direction === 'right') {\n            this.calendarPrev()\n          } else if (info.direction === 'left') {\n            this.calendarNext()\n          }\n        } else {\n          this.ignoreNextSwipe = false\n        }\n      }\n      stopAndPrevent(evt)\n    }\n  }\n}\n<\/script>\n"},"74ba":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[a("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[a("q-toolbar",[a("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[a("q-toolbar-title",{staticClass:"example-title",on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[a("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),this.$slots.default?a("q-separator"):e._e(),this.$slots.default?a("q-card-section",[e._t("default")],2):e._e(),a("q-separator"),a("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?a("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?a("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?a("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?a("q-tab-panel",{attrs:{name:"template"}},[a("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?a("q-tab-panel",{attrs:{name:"script"}},[a("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?a("q-tab-panel",{attrs:{name:"style"}},[a("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),a("q-separator"),a(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},r=[],l=(a("ac6a"),a("cadf"),a("06db"),a("456d"),a("8669")),s={name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"],updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==e.tagParts[t]&&(e.parts[t]="```\n"+e.tagParts[t]+"\n```")}))}}},o=s,i=a("2877"),c=Object(i["a"])(o,n,r,!1,null,null,null);t["a"]=c.exports},8252:function(e,t,a){},8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));a("a481");function n(e){var t=window.location.origin+window.location.pathname+"#"+e,a=document.createElement("textarea");a.className="fixed-top",a.value=t,document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function r(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},9579:function(e,t,a){"use strict";a.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"scheduler\"\n    :resources=\"resources\"\n    locale=\"en-us\"\n    style=\"height: 500px;\"\n  >\n    <template #scheduler-day-header=\"{ day }\">\n      <div class=\"row justify-center items-center\">\n        <q-btn class=\"fit\">Day: {{ day.day }}</q-btn>\n      </div>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ]\n    }\n  }\n}\n<\/script>\n"},"9c31":function(e,t,a){"use strict";t["a"]=function(e){var t,a={},r=n(e);r&&r.length>0&&(a.template=r);var l=document.createElement("html");return l.innerHTML=e,t=l.getElementsByTagName("script"),t.length>0&&(a.script=t[0].outerHTML),t=l.getElementsByTagName("style"),t.length>0&&(a.style=t[0].outerHTML),a};var n=function(e){var t="";if(e&&e.length>0){var a="<template",n="</template>",r=e.indexOf(a),l=e.lastIndexOf(n);r>-1&&l>-1&&(t=e.substring(r,l+n.length))}return t}},a225:function(e,t,a){"use strict";a.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"scheduler\"\n    :resources=\"resources\"\n    locale=\"en-us\"\n    style=\"height: 500px;\"\n  >\n    \x3c!-- eslint-disable vue/no-unused-vars --\x3e\n    <template #scheduler-resources-header=\"days\">\n      <div class=\"full-height row justify-center items-center\">\n        <q-btn label=\"here\" />\n      </div>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ]\n    }\n  }\n}\n<\/script>\n"},c0bc:function(e,t,a){"use strict";a.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"scheduler\"\n    :resources=\"resources\"\n    :disabled-days=\"disabledDays\"\n    :resource-style=\"modifiedStyle\"\n    locale=\"en-us\"\n    style=\"height: 400px;\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01',\n      disabledDays: [\n        '2019-04-02',\n        '2019-04-03',\n        '2019-04-04',\n        '2019-04-05'\n      ],\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ]\n    }\n  },\n  methods: {\n    modifiedStyle (scope) {\n      if (scope.day.disabled === true) {\n        return {\n          backgroundColor: '#ffcb9c!important'\n        }\n      }\n      return {}\n    }\n  }\n}\n<\/script>\n"},c729:function(e,t,a){"use strict";var n=a("8252"),r=a.n(n);r.a},cba0:function(e,t,a){"use strict";a.r(t),t["default"]='<template>\n  <div>\n    <q-toolbar>\n      <q-btn stretch flat label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn stretch flat label="Next" @click="calendarNext" />\n      <q-space />\n    </q-toolbar>\n    <q-separator />\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="scheduler"\n      :resources="resources"\n      locale="en-us"\n      animated\n      transition-prev="slide-right"\n      transition-next="slide-left"\n      style="height: 400px; overflow: hidden"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      resources: [\n        { label: \'John\' },\n        { label: \'Mary\' },\n        { label: \'Susan\' },\n        { label: \'Olivia\' },\n        { label: \'Board Room\' },\n        { label: \'Room-1\' },\n        { label: \'Room-2\' }\n      ]\n    }\n  },\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    }\n  }\n}\n<\/script>\n'},dde7:function(e,t,a){"use strict";a.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"scheduler\"\n    :resources=\"resources\"\n    :resource-height=\"50\"\n    locale=\"en-us\"\n    style=\"height: 400px;\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ]\n    }\n  }\n}\n<\/script>\n"},f695:function(e,t,a){"use strict";a.r(t),t["default"]='<template>\n  <q-calendar\n    v-model="selectedDate"\n    view="scheduler"\n    :resources="resources"\n    locale="en-us"\n    style="height: 500px;"\n  >\n    <template #scheduler-resource-day="{ day, index, resource }">\n      <q-btn class="fit"><span class="ellipsis" style="font-size: 10px;">{{ resource.label }}:{{ day.day }}</span></q-btn>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      resources: [\n        { label: \'John\' },\n        { label: \'Mary\' },\n        { label: \'Susan\' },\n        { label: \'Olivia\' },\n        { label: \'Board Room\' },\n        { label: \'Room-1\' },\n        { label: \'Room-2\' }\n      ]\n    }\n  }\n}\n<\/script>\n'},fe7d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},r=[],l=a("8669"),s={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"]}},o=s,i=a("2877"),c=Object(i["a"])(o,n,r,!1,null,null,null);t["a"]=c.exports}}]);