(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{242:function(e,t,i){"use strict";i.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=i(5),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[i("h1",{attrs:{id:"accountability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accountability","aria-hidden":"true"}},[e._v("#")]),e._v(" Accountability")]),e._v(" "),i("blockquote",[i("p",[e._v("Directus stores detailed records of every change made to data through the App and API. This gives a comprehensive overview of who did what, and when.")])]),e._v(" "),i("h2",{attrs:{id:"system-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#system-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" System Fields")]),e._v(" "),i("p",[e._v("There are four system Interfaces (and their respective Field Types) that are important to accountability:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("created_by")]),e._v(" — Automatically saves the Directus User that created the item\n"),i("ul",[i("li",[e._v("This interface is required for "),i("router-link",{attrs:{to:"/guides/permissions.html#collection-level"}},[i("code",[e._v("mine")]),e._v(" and "),i("code",[e._v("role")]),e._v(" permissions")])],1)])]),e._v(" "),i("li",[i("code",[e._v("created_on")]),e._v(" — Automatically saves the UTC datetime when the item was created")]),e._v(" "),i("li",[i("code",[e._v("modified_by")]),e._v(" — Automatically saves the Directus User that last modified the item")]),e._v(" "),i("li",[i("code",[e._v("modified_on")]),e._v(" — Automatically saves the UTC datetime when the item was last modified")])]),e._v(" "),i("h2",{attrs:{id:"activity"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#activity","aria-hidden":"true"}},[e._v("#")]),e._v(" Activity")]),e._v(" "),i("p",[e._v("This is a log of all platform activity. You can see a listing of all "),i("em",[e._v("your")]),e._v(" activity within the App by opening the Activity page from the user menu. You can also see the full history for a specific item by opening the Info Sidebar on its Item Detail page.")]),e._v(" "),i("p",[e._v("There are several different types of activity that is tracked:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("create")]),e._v(" — An item is created")]),e._v(" "),i("li",[i("code",[e._v("update")]),e._v(" — An item is updated")]),e._v(" "),i("li",[i("code",[e._v("delete")]),e._v(" — An item is hard deleted")]),e._v(" "),i("li",[i("code",[e._v("revert")]),e._v(" — An item is reverted to a different revision")]),e._v(" "),i("li",[i("code",[e._v("soft-deleted")]),e._v(" — An item's status is changed to a soft deleted option")]),e._v(" "),i("li",[i("code",[e._v("authenticate")]),e._v(" — A Directus user signs in")]),e._v(" "),i("li",[i("code",[e._v("upload")]),e._v(" — A file is uploaded to the File Library")]),e._v(" "),i("li",[i("code",[e._v("comment")]),e._v(" — A comment was left on an item")])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Skip Activity Log")]),e._v(" "),i("p",[e._v("If you need to interact with data without saving to the activity log there is an API parameter to "),i("router-link",{attrs:{to:"/api/reference.html#skip-activity-logging"}},[i("em",[e._v("skip")]),e._v(" the activity log")]),e._v(". This bypasses accountability and should be used "),i("em",[e._v("judiciously")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"revisions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#revisions","aria-hidden":"true"}},[e._v("#")]),e._v(" Revisions")]),e._v(" "),i("p",[e._v("In addition to the activity log, every time an item is created or updated Directus creates a revision record. Each revision is stored within "),i("code",[e._v("directus_revisions")]),e._v(" and contains both a delta of changes and a full snapshot.")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("API Access")]),e._v(" "),i("p",[e._v("Item revision can be fetched from the API using the "),i("router-link",{attrs:{to:"/api/reference.html#get-item-revision"}},[e._v("revisions endpoint")]),e._v(". This is a 0-based index that allows for fetching revisions based on creation point or current state.")],1)]),e._v(" "),i("h2",{attrs:{id:"revert"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#revert","aria-hidden":"true"}},[e._v("#")]),e._v(" Revert")]),e._v(" "),i("p",[e._v('Revisions are stored within (and fetched from) the system schema. However to shift the actual database item to a different point in its revision history you would use "revert". While primarily used to roll-backwards in time, this can also be used to move forward. Whenever an item is reverted, '),i("em",[e._v("new")]),e._v(" activity and revision records are created with a "),i("code",[e._v("revert")]),e._v(" action instead of "),i("code",[e._v("update")]),e._v(".")]),e._v(" "),i("p",[e._v("You can use the API to revert an item, or you can revert through the App:")]),e._v(" "),i("ol",[i("li",[e._v("Go to the detail page of the item you want to revert")]),e._v(" "),i("li",[e._v("Open the Info Sidebar, expanding revisions it to see the diff")]),e._v(" "),i("li",[e._v('Click on the "Revert" button to preview the revision')]),e._v(" "),i("li",[e._v("Confirm the revert in the preview modal")])])])},[],!1,null,null,null);o.options.__file="accountability.md";t.default=o.exports}}]);