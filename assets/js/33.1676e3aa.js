(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{218:function(e,t,v){"use strict";v.r(t);var d={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=v(5),_=Object(a.a)(d,function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[v("h1",{attrs:{id:"legacy-upgrades"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#legacy-upgrades","aria-hidden":"true"}},[e._v("#")]),e._v(" Legacy Upgrades")]),e._v(" "),v("blockquote",[v("p",[e._v("One does not simply "),v("code",[e._v("git pull origin master")]),e._v(" to upgrade from Directus 6.")])]),e._v(" "),v("p",[e._v("Directus 7 is a major release with significant breaking changes from previous versions. Therefore there is no automated way to migrate your settings and configuration from v6 to v7. However, because Directus stores your content as pure SQL, that data is always portable between versions. Below we will cover the "),v("em",[e._v("general")]),e._v(" steps you'd need to take to upgrade from Directus 6 to Directus 7.")]),e._v(" "),v("h2",{attrs:{id:"your-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#your-content","aria-hidden":"true"}},[e._v("#")]),e._v(" Your Content")]),e._v(" "),v("p",[e._v("Let's start with the good news. Directus stores all of "),v("em",[e._v("your")]),e._v(" data (the important stuff) as pure, unaltered SQL data... separate from any system data. So "),v("strong",[e._v("all")]),e._v(" of your content can be 100% migrated over. Some of the specific ways you saved data before might have slightly new formatting/syntax... so please confirm a few of those possibilities below:")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("WYSIWYG")]),e._v(" — We're using different interfaces that may format HTML in a slightly different way.")]),e._v(" "),v("li",[v("strong",[e._v("Status")]),e._v(" — You can still use integer-based statuses, but we now use string-based values by default.")]),e._v(" "),v("li",[v("strong",[e._v("Files")]),e._v(" — You'll want to make sure files are moved to match the storage path in your v7 config.")]),e._v(" "),v("li",[v("strong",[e._v("Custom Extensions")]),e._v(" — We've moved from Backbone.js to Vue.js... and therefore previous extensions will no longer work in the new Directus. The good news is that Vue is FAR easier to work with... so you'll have no problem creating new interfaces, layouts, and pages in v7.")])]),e._v(" "),v("h2",{attrs:{id:"your-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#your-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Your API")]),e._v(" "),v("p",[e._v("Decoupling the API from the App was one of the main undertakings of this refactor, and the API's URL structure in v7 is also quite different. We've removed the version number (we're versionless now) and have cleaned up almost all of the endpoint and parameter names to be clear and consistent. Mapping previous names to new ones here would be an enormous task – but all previous features (and way more) exist in the Directus API 2.")]),e._v(" "),v("h2",{attrs:{id:"directus-codebase"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-codebase","aria-hidden":"true"}},[e._v("#")]),e._v(" Directus Codebase")]),e._v(" "),v("p",[e._v("It goes without saying that the codebase in this ground-up rewrite is totally different. Do not attempt to pull changes from git to upgrade. Instead, you should effectively create a duplicate project and manually migrate things over based on this guide.")]),e._v(" "),v("h2",{attrs:{id:"directus-6-system-data"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-6-system-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Directus 6 System Data")]),e._v(" "),v("h3",{attrs:{id:"directus-activity"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-activity","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_activity")])]),e._v(" "),v("p",[e._v("While the table name hasn't changed, the v7 fields are quite different and revisions have been decoupled into "),v("code",[e._v("directus_revisions")]),e._v(", so there is no realistic way to migrate. After upgrading, your item history will be reset.")]),e._v(" "),v("h3",{attrs:{id:"directus-bookmarks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-bookmarks","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_bookmarks")])]),e._v(" "),v("p",[e._v("Bookmarks have been replaced by "),v("code",[e._v("directus_collection_presets")]),e._v(". Again, this schema is significantly different and migrating would be difficult. However in v7 you can now set Global or Role level bookmarks.")]),e._v(" "),v("h3",{attrs:{id:"directus-columns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-columns","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_columns")])]),e._v(" "),v("p",[e._v("This has been replaced by "),v("code",[e._v("directus_fields")]),e._v(". Previously all relationships were contained within this column info (now decoupled to "),v("code",[e._v("directus_relations")]),e._v("), so there is a significant architectual difference making migrations difficult.")]),e._v(" "),v("h3",{attrs:{id:"directus-files"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-files","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_files")])]),e._v(" "),v("p",[e._v("This table is fairly similar between versions. Below is a column mapping:")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("v6")]),e._v(" "),v("th",[e._v("v7")]),e._v(" "),v("th",[e._v("Details")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("status")])]),e._v(" "),v("td",[e._v("--")]),e._v(" "),v("td",[e._v("Removed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("name")])]),e._v(" "),v("td",[v("code",[e._v("filename")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("title")])]),e._v(" "),v("td",[v("code",[e._v("title")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("location")])]),e._v(" "),v("td",[v("code",[e._v("location")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("caption")])]),e._v(" "),v("td",[v("code",[e._v("description")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("type")])]),e._v(" "),v("td",[v("code",[e._v("type")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("charset")])]),e._v(" "),v("td",[v("code",[e._v("charset")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("tags")])]),e._v(" "),v("td",[v("code",[e._v("tags")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("width")])]),e._v(" "),v("td",[v("code",[e._v("width")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("height")])]),e._v(" "),v("td",[v("code",[e._v("height")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("size")])]),e._v(" "),v("td",[v("code",[e._v("filesize")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("embed_id")])]),e._v(" "),v("td",[v("code",[e._v("embed")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("user")])]),e._v(" "),v("td",[v("code",[e._v("uploaded_by")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("date_uploaded")])]),e._v(" "),v("td",[v("code",[e._v("uploaded_on")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("storage_adapter")])]),e._v(" "),v("td",[v("code",[e._v("storage")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("duration")])]),e._v(" "),v("td",[e._v("Add this new v7 field: "),v("code",[e._v("INT(11)")])])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("folder")])]),e._v(" "),v("td",[e._v("Add this new v7 field: "),v("code",[e._v("INT(11)")])])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("metadata")])]),e._v(" "),v("td",[e._v("Add this new v7 field: "),v("code",[e._v("TEXT")])])])])]),e._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("You'll also want to make sure all files are moved to match the storage path in your v7 api.php config file.")])]),e._v(" "),v("h3",{attrs:{id:"directus-groups"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-groups","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_groups")])]),e._v(" "),v("p",[e._v("Simple O2M user groups have been replaced by a M2M user roles ("),v("code",[e._v("directus_roles")]),e._v(" and "),v("code",[e._v("directus_user_roles")]),e._v("). Even though these are functionally the same now, we've made this schema change to allow users to have "),v("em",[e._v("multiple")]),e._v(" roles (with merged permissions) in the future without a breaking change in the schema.")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("v6")]),e._v(" "),v("th",[e._v("v7")]),e._v(" "),v("th",[e._v("Details")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("name")])]),e._v(" "),v("td",[v("code",[e._v("name")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("description")])]),e._v(" "),v("td",[v("code",[e._v("description")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("restrict_to_ip_whitelist")])]),e._v(" "),v("td",[v("code",[e._v("ip_whitelist")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("nav_override")])]),e._v(" "),v("td",[v("code",[e._v("nav_blacklist")])]),e._v(" "),v("td",[e._v("New name and structure")])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("external_id")])]),e._v(" "),v("td",[e._v("Add this new v7 field: "),v("code",[e._v("VARCHAR(255)")])])])])]),e._v(" "),v("h3",{attrs:{id:"directus-messages"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-messages","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_messages")])]),e._v(" "),v("p",[e._v('We felt that Messages were not a true "core" feature, and that they would be better suited within an Extension. Comments (a form of message that '),v("em",[e._v("is")]),e._v(" still in core) now live inside "),v("code",[e._v("directus_activity")]),e._v(". You can remove this table during migration, but will lose an Item Comments.")]),e._v(" "),v("h3",{attrs:{id:"directus-messages-recipients"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-messages-recipients","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_messages_recipients")])]),e._v(" "),v("p",[e._v("Removed.")]),e._v(" "),v("h3",{attrs:{id:"directus-preferences"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-preferences","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_preferences")])]),e._v(" "),v("p",[e._v("Just like bookmarks, preferences in v7 are now stored in "),v("code",[e._v("directus_collection_presets")]),e._v(". The data structure here is completely different and we do not recommend trying to migrate these values. The good news is that simply opening a collection in v7 will automatically save new defaults.")]),e._v(" "),v("h3",{attrs:{id:"directus-privileges"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-privileges","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_privileges")])]),e._v(" "),v("p",[e._v("This has been renamed to "),v("code",[e._v("directus_permissions")]),e._v(" and we've replaced the INTEGER based privilege values with an easier-to-read STRING permissions in v7. While you could try updating columns (see below) we'd recommend re-creating permissions in v7. There are several new permissions allowed to take advantage of, and permissions isn't something you want to mess up in migration.")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("v6")]),e._v(" "),v("th",[e._v("v7")]),e._v(" "),v("th",[e._v("Details")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("table_name")])]),e._v(" "),v("td",[v("code",[e._v("collection")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("allow_view")])]),e._v(" "),v("td",[v("code",[e._v("read")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("allow_add")])]),e._v(" "),v("td",[v("code",[e._v("create")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("allow_edit")])]),e._v(" "),v("td",[v("code",[e._v("update")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("allow_delete")])]),e._v(" "),v("td",[v("code",[e._v("delete")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("allow_alter")])]),e._v(" "),v("td",[e._v("--")]),e._v(" "),v("td",[e._v("Removed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("group_id")])]),e._v(" "),v("td",[v("code",[e._v("role")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("read_field_blacklist")])]),e._v(" "),v("td",[v("code",[e._v("read_field_blacklist")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("write_field_blacklist")])]),e._v(" "),v("td",[v("code",[e._v("write_field_blacklist")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("nav_listed")])]),e._v(" "),v("td",[e._v("--")]),e._v(" "),v("td",[e._v("Removed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("status_id")])]),e._v(" "),v("td",[v("code",[e._v("status")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("comment")])]),e._v(" "),v("td",[e._v("Added in v7")])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("explain")])]),e._v(" "),v("td",[e._v("Added in v7")])]),e._v(" "),v("tr",[v("td",[e._v("--")]),e._v(" "),v("td",[v("code",[e._v("status_blacklist")])]),e._v(" "),v("td",[e._v("Added in v7")])])])]),e._v(" "),v("h3",{attrs:{id:"directus-schema-migrations"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-schema-migrations","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_schema_migrations")])]),e._v(" "),v("p",[e._v("Renamed to "),v("code",[e._v("directus_migrations")]),e._v(". The data model has changed here, but you should "),v("strong",[e._v("not")]),e._v(" migrate this utility table from previous versions. Please use whatever boilerplate is installed by v7.")]),e._v(" "),v("h3",{attrs:{id:"directus-settings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_settings")])]),e._v(" "),v("p",[e._v("These Settings are still simple key-value-pairs, but we've renamed "),v("code",[e._v("collection")]),e._v(' (meaning "group") to '),v("code",[e._v("scope")]),e._v(". Most of these should migrate over without issue, but since there are only a handful of simple Settings in v7 we recommend just using the default v7 table values.")]),e._v(" "),v("h3",{attrs:{id:"directus-tables"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-tables","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_tables")])]),e._v(" "),v("p",[e._v("Has been renamed to "),v("code",[e._v("directus_collections")]),e._v(". We won't be listing the column differences here, as we wouldn't want anyone to think they should migrate this manually. Simply use the new v7 defaults and keep the following in mind:")]),e._v(" "),v("ul",[v("li",[e._v("All status options ("),v("code",[e._v("default_status")]),e._v(", "),v("code",[e._v("status_column")]),e._v(", and "),v("code",[e._v("status_mapping")]),e._v(") have been moved into the "),v("code",[e._v("status")]),e._v(" interface")]),e._v(" "),v("li",[v("code",[e._v("primary_column")]),e._v(" has been moved to the "),v("code",[e._v("primary key")]),e._v(" interface")]),e._v(" "),v("li",[v("code",[e._v("sort_column")]),e._v(" has been moved to the "),v("code",[e._v("sort")]),e._v(" interface")]),e._v(" "),v("li",[v("code",[e._v("user_create_column")]),e._v(", "),v("code",[e._v("user_update_column")]),e._v(", "),v("code",[e._v("date_create_column")]),e._v(", and "),v("code",[e._v("date_update_column")]),e._v(" have been moved to interfaces as well (under "),v("code",[e._v("user")]),e._v(" and "),v("code",[e._v("datetime")]),e._v(" respectively).")]),e._v(" "),v("li",[v("code",[e._v("preview_url")]),e._v(" has been moved to the "),v("code",[e._v("preview")]),e._v(" interface")])]),e._v(" "),v("p",[e._v("Other fields have been removed, but "),v("code",[e._v("hidden")]),e._v(" and "),v("code",[e._v("single")]),e._v(" are the main options still available.")]),e._v(" "),v("h3",{attrs:{id:"directus-users"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#directus-users","aria-hidden":"true"}},[e._v("#")]),e._v(" "),v("code",[e._v("directus_users")])]),e._v(" "),v("p",[e._v("Same name and basic structure, below are the main differences:")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("v6")]),e._v(" "),v("th",[e._v("v7")]),e._v(" "),v("th",[e._v("Details")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[v("code",[e._v("id")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("status")])]),e._v(" "),v("td",[v("code",[e._v("status")])]),e._v(" "),v("td",[e._v("Now uses a string-based status")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("first_name")])]),e._v(" "),v("td",[v("code",[e._v("first_name")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("last_name")])]),e._v(" "),v("td",[v("code",[e._v("last_name")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("email")])]),e._v(" "),v("td",[v("code",[e._v("email")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("password")])]),e._v(" "),v("td",[v("code",[e._v("password")])]),e._v(" "),v("td",[e._v("Same in v7. Confirm that both use bcrypt algorithm")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("token")])]),e._v(" "),v("td",[v("code",[e._v("token")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("position")])]),e._v(" "),v("td",[v("code",[e._v("title")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("email_messages")])]),e._v(" "),v("td",[v("code",[e._v("email_notifications")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("last_access")])]),e._v(" "),v("td",[v("code",[e._v("last_access_on")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("last_page")])]),e._v(" "),v("td",[v("code",[e._v("last_page")])]),e._v(" "),v("td",[e._v("Same in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("group")])]),e._v(" "),v("td",[e._v("--")]),e._v(" "),v("td",[e._v("Replaced by M2M roles")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("avatar_file_id")])]),e._v(" "),v("td",[v("code",[e._v("avatar")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("location")])]),e._v(" "),v("td",[v("code",[e._v("company")])]),e._v(" "),v("td",[e._v("Renamed in v7")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("language")])]),e._v(" "),v("td",[v("code",[e._v("locale")])]),e._v(" "),v("td",[e._v("From "),v("code",[e._v("en")]),e._v(" to "),v("code",[e._v("en-US")]),e._v(" format")])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("timezone")])]),e._v(" "),v("td",[v("code",[e._v("timezone")])]),e._v(" "),v("td",[e._v("Same as in v7")])])])]),e._v(" "),v("p",[v("strong",[e._v("All other v6 fields have been removed")])])])},[],!1,null,null,null);_.options.__file="legacy-upgrades.md";t.default=_.exports}}]);