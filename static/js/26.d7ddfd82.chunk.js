(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[26],{238:function(n,e,t){"use strict";t.r(e);var o,r=t(68),i=t(2),l=t(0),a=t.n(l),c=t(64),d=t(739),s=t(8),u=t(1),p=t(5),b=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},f=u.l.div(o||(o=b(["\n  /* This is required to make the table full-width */\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  min-height: 120px;\n  background-color: ",";\n\n  table {\n    table-layout: fixed;\n    width: auto;\n    min-width: 100%;\n    border-spacing: 0;\n    position: relative;\n\n    thead {\n      tr {\n        min-height: 40px;\n\n        th {\n          position: sticky;\n          top: 0;\n          background-color: ",";\n          border-bottom: 1px solid ",";\n          border-right: 1px solid ",";\n          min-height: 40px;\n          z-index: 200;\n\n          margin: 0;\n          text-align: left;\n          padding: ",";\n\n          :last-child {\n            border-right: 0;\n          }\n\n          &.fixedColumnStart,\n          &.fixedColumnEnd {\n            position: sticky;\n            z-index: 250;\n          }\n          &.fixedColumnStart {\n            left: 0;\n          }\n          &.fixedColumnEnd {\n            right: 0;\n          }\n\n          .table-header-sort {\n            /* position: absolute;\n            right: ",";\n            top: ","; */\n            color: ",";\n            opacity: 0.5;\n            cursor: pointer;\n\n            :hover {\n              opacity: 1;\n            }\n          }\n        }\n      }\n\n      .filterRow {\n        th {\n          position: sticky;\n          top: 40px;\n          padding: ",";\n          background-color: ",";\n          z-index: 250;\n\n          input,\n          button,\n          select {\n            font-family: inherit;\n            color: ",";\n            background-color: ",";\n            border-radius: ",";\n            height: 28px;\n            border: 1px solid ",";\n            padding: 0 4px;\n          }\n\n          button {\n            width: 28px;\n          }\n        }\n      }\n    }\n\n    tbody tr {\n      position: relative;\n      z-index: 100;\n      cursor: ",";\n\n      td {\n        margin: 0;\n        text-align: left;\n        padding: ",";\n        background-color: ",";\n\n        :last-child {\n          border-right: 0;\n        }\n\n        &.fixedColumnStart,\n        &.fixedColumnEnd {\n          position: sticky;\n          z-index: 150;\n        }\n        &.fixedColumnStart {\n          left: 0;\n        }\n        &.fixedColumnEnd {\n          right: 0;\n        }\n      }\n\n      &:nth-of-type(odd),\n      &:nth-of-type(odd) td {\n        background-color: ",";\n      }\n\n      &:last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n\n      &.selected,\n      &.selected td {\n        background-color: "," !important;\n      }\n\n      &:hover,\n      &:hover td,\n      &:focus,\n      &:focus td {\n        background-color: "," !important;\n      }\n\n      &.subComponent td {\n        padding: 0;\n        margin: 0;\n        background-color: "," !important;\n      }\n    }\n\n    tfoot {\n      position: sticky;\n      z-index: 200;\n      bottom: 0;\n      background-color: ",";\n      z-index: 200;\n\n      tr:first-of-type {\n        td {\n          border-top: 1px solid ",";\n          border-right: 1px solid ",";\n          :last-child {\n            border-right: 0;\n          }\n        }\n      }\n    }\n  }\n"],["\n  /* This is required to make the table full-width */\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  min-height: 120px;\n  background-color: ",";\n\n  table {\n    table-layout: fixed;\n    width: auto;\n    min-width: 100%;\n    border-spacing: 0;\n    position: relative;\n\n    thead {\n      tr {\n        min-height: 40px;\n\n        th {\n          position: sticky;\n          top: 0;\n          background-color: ",";\n          border-bottom: 1px solid ",";\n          border-right: 1px solid ",";\n          min-height: 40px;\n          z-index: 200;\n\n          margin: 0;\n          text-align: left;\n          padding: ",";\n\n          :last-child {\n            border-right: 0;\n          }\n\n          &.fixedColumnStart,\n          &.fixedColumnEnd {\n            position: sticky;\n            z-index: 250;\n          }\n          &.fixedColumnStart {\n            left: 0;\n          }\n          &.fixedColumnEnd {\n            right: 0;\n          }\n\n          .table-header-sort {\n            /* position: absolute;\n            right: ",";\n            top: ","; */\n            color: ",";\n            opacity: 0.5;\n            cursor: pointer;\n\n            :hover {\n              opacity: 1;\n            }\n          }\n        }\n      }\n\n      .filterRow {\n        th {\n          position: sticky;\n          top: 40px;\n          padding: ",";\n          background-color: ",";\n          z-index: 250;\n\n          input,\n          button,\n          select {\n            font-family: inherit;\n            color: ",";\n            background-color: ",";\n            border-radius: ",";\n            height: 28px;\n            border: 1px solid ",";\n            padding: 0 4px;\n          }\n\n          button {\n            width: 28px;\n          }\n        }\n      }\n    }\n\n    tbody tr {\n      position: relative;\n      z-index: 100;\n      cursor: ",";\n\n      td {\n        margin: 0;\n        text-align: left;\n        padding: ",";\n        background-color: ",";\n\n        :last-child {\n          border-right: 0;\n        }\n\n        &.fixedColumnStart,\n        &.fixedColumnEnd {\n          position: sticky;\n          z-index: 150;\n        }\n        &.fixedColumnStart {\n          left: 0;\n        }\n        &.fixedColumnEnd {\n          right: 0;\n        }\n      }\n\n      &:nth-of-type(odd),\n      &:nth-of-type(odd) td {\n        background-color: ",";\n      }\n\n      &:last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n\n      &.selected,\n      &.selected td {\n        background-color: "," !important;\n      }\n\n      &:hover,\n      &:hover td,\n      &:focus,\n      &:focus td {\n        background-color: "," !important;\n      }\n\n      &.subComponent td {\n        padding: 0;\n        margin: 0;\n        background-color: "," !important;\n      }\n    }\n\n    tfoot {\n      position: sticky;\n      z-index: 200;\n      bottom: 0;\n      background-color: ",";\n      z-index: 200;\n\n      tr:first-of-type {\n        td {\n          border-top: 1px solid ",";\n          border-right: 1px solid ",";\n          :last-child {\n            border-right: 0;\n          }\n        }\n      }\n    }\n  }\n"])),u.m.color.background.default,u.m.color.background.secondary,u.m.color.border.default,u.m.color.border.default,u.m.spacing.md,u.m.spacing.sm,u.m.spacing.md,u.m.color.text.disabled,u.m.spacing.sm,u.m.color.background.disabled,u.m.color.text.primary,u.m.color.background.default,u.m.radius[100],u.m.color.border.default,(function(n){return n.handleRowClick||n.handleRowDblClick?"pointer":"initial"}),u.m.spacing.md,u.m.color.background.default,u.m.color.background.rowAlt,u.m.color.background.selected,u.m.color.background.hover,u.m.color.background.primary,u.m.color.background.default,u.m.color.border.default,u.m.color.border.default),g=t(741),h=t(9),v=function(n){var e=n.row.original,t=n.tableProps.singleRowActions,o=t&&t(e)||[];return Object(i.jsx)(p.c,{icon:h.B,spacing:"xs",popoverMenuItems:o.map((function(n){return{id:n.id,label:n.tooltip||"",icon:n.icon,onClick:function(){return n.onClick},tint:n.variant}}))},void 0)},m=t(78),x=function(){return(x=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},j=function(n){var e=n.onChange,t=n.checked,o=n.indeterminate,r=n.title,l=n.style;return Object(i.jsx)("div",x({onClick:function(n){n.preventDefault(),n.stopPropagation(),e&&e(n)},title:r,style:l},{children:Object(i.jsx)(p.f,{icon:o?m.f:t?m.c:h.Z},void 0)}),void 0)},y=function(){return(y=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},O=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},w=function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(O(arguments[e]));return n},k=["rowActions","selection","expander"],C=function(n,e){e.disableSubRowSelect&&(n.getToggleAllRowsSelectedProps=[function(n,e){var t=e.instance;return[n,{onChange:function(){t.rows.forEach((function(n){return n.toggleRowSelected(!t.rows.every((function(n){return n.isSelected})))}))},checked:t.rows.length>0&&t.rows.every((function(n){return n.isSelected})),title:"Toggle All Rows Selected",indeterminate:Boolean(!t.isAllRowsSelected&&Object.keys(t.state.selectedRowIds).length)}]}]),n.visibleColumns.push((function(n){var t=[],o=[];return e.enableMultipleRowSelect&&t.push({id:"selection",width:40,disableSortBy:!0,disableFilters:!0,className:"fixedColumnStart",Header:function(n){return Object(i.jsx)(j,y({},n.getToggleAllRowsSelectedProps()),void 0)},Cell:function(n){var t=n.row;return e.disableSubRowSelect&&t.depth>0?null:Object(i.jsx)(j,y({},t.getToggleRowSelectedProps()),void 0)}}),e.singleRowActions&&o.push({id:"rowActions",width:40,disableSortBy:!0,disableFilters:!0,className:"fixedColumnEnd",Cell:function(n){var t=n.row;return Object(i.jsx)(v,{row:t,tableProps:e},void 0)}}),w(t,n,o)}))};var S=function(n){return(n.all?"all-":"")+"data"},R=function(n){var e=n.Header;return"object"!==typeof e&&"function"!==typeof e||(e=n.id),e},P=function(n,e){return n.values[e.id]};function E(n){var e=n.data,t=n.fileName,o=n.type,r=null;"csv"===o?r=function(n){var e=Object(g.unparse)(n);return new Blob([e],{type:"text/csv"})}(e):"xlsx"===o||"pdf"===o||console.warn("Not Supported File Type"),r&&function(n,e,t){if(n){var o=URL.createObjectURL(n),r=document.createElement("a");r.download=e+"."+t,r.href=o,r.click()}}(r,t,o)}function A(n){var e=n.rows,t=n.initialRows,o=n.allColumns,r=n.disableExport,i=n.getExportFileName,l=void 0===i?S:i;o.forEach((function(n){var e=!!n.id&&function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0;t<n.length;t+=1)if("undefined"!==typeof n[t])return n[t]}(!0!==n.disableExport&&void 0,!0!==r&&void 0,!0);n.canExport=e}));var c=a.a.useCallback((function(n){var r=void 0===n?{}:n,i=r.all,a=void 0!==i&&i,c=r.type,d=void 0===c?"csv":c,s=r.fileName,u=void 0===s?"":s,p=o.filter((function(n){return n.canExport&&(a||n.isVisible)&&!k.includes(n.id)})).map((function(n){var e=n.getExportHeaderValue,t=void 0===e?R:e;return{id:n.id,name:t(n),columnObj:n}}));0===p.length&&console.warn("No exportable columns are available");var b=e;a&&(b=t);var f=b.map((function(n){return p.map((function(e){var t=e.columnObj.getExportCellValue;return(void 0===t?P:t)(n,e)}))}));E({data:{fields:p.map((function(n){return n.name})),data:f},fileName:""!==u?u:l({fileType:d,all:a}),type:d})}),[l,t,e,o]);Object.assign(n,{exportData:c})}var T=function(n){n.useInstance.push(A)};T.pluginName="useExportData";var F,I=T,M={spacing:"sm",outline:!0},N=function(){return(N=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},H=function(n){var e=n.tableInstance,t=n.tableProps,o=t.exportTable,r=void 0!==o&&o,l=t.tableHeading,a=e.exportData,c=[];return(!0===r||Array.isArray(r)&&-1!==r.indexOf("csv"))&&c.push({id:"csv",label:"Download CSV",onClick:function(){return a({type:"csv",fileName:l})},icon:h.H}),Object(i.jsx)("div",{children:Object(i.jsx)(p.c,N({icon:h.V,tooltip:"Export"},M,{popoverMenuItems:c}),void 0)},"exportAction")},D=function(){return(D=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},z=function(n){var e=n.tableInstance,t=n.tableProps,o=e.selectedFlatRows,r=void 0===o?[]:o,l=e.state.selectedRowIds,a=t.multipleRowActions,c=t.singleRowActions,d=t.enableMultipleRowSelect,s=Object.entries(l),b=s.length>0,f=r.map((function(n){return n.original})),g=d?a&&a(f)||[]:c&&c(f[0])||[],h=[];return g.length>0&&(b&&d&&h.push(Object(i.jsx)("div",D({style:{paddingTop:u.m.spacing.sm}},{children:Object(i.jsx)(p.l,{value:s.length+" selected",color:"disabled"},void 0)}),"rowSelectedText")),g.map((function(n){return h.push(Object(i.jsx)(p.c,D({},n,M,{disabled:!b,variant:b?n.variant:"default"}),n.id))})),h.push(Object(i.jsx)(p.e,{vertical:!0},"actionDivider"))),h},B=t(145),V=function(){return(V=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},L=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},W=function(n){var e=n.tableInstance,t=e.state,o=e.toggleHideColumn,r=e.visibleColumns,a=e.allColumns,d=t.hiddenColumns,s=L(Object(p.o)(),3),b=s[0],f=s[1],g=s[2],v=Object(l.useMemo)((function(){return d?a.filter((function(n){return d.some((function(e){return e===n.id}))&&!k.includes(n.id)})).map((function(n){var e;return{id:n.id.toString(),value:(null===(e=n.Header)||void 0===e?void 0:e.toString())||""}})):[]}),[a,d]),m=Object(l.useMemo)((function(){return r?r.filter((function(n){return!k.includes(n.id)})).map((function(n){var e;return{id:n.id.toString(),value:(null===(e=n.Header)||void 0===e?void 0:e.toString())||""}})):[]}),[r]);return Object(i.jsxs)("div",{children:[Object(i.jsx)(p.b,V({icon:h.x,tooltip:"Select visible columns"},M,{onClick:f}),void 0),Object(i.jsx)(b,{children:Object(i.jsx)(c.a,V({headerTitle:"Select columns",headerActions:Object(i.jsx)(p.b.Close,{onClick:g},void 0)},{children:Object(i.jsx)("div",V({style:{padding:u.m.spacing.md,height:"360px"}},{children:Object(i.jsx)(B.k,{shuttle1:{heading:"Available columns",items:v,handleAcceptTransfer:function(n){n.forEach((function(n){return o(n.id,!0)}))}},shuttle2:{heading:"Visible columns",items:m,handleAcceptTransfer:function(n){n.forEach((function(n){return o(n.id,!1)}))}}},void 0)}),void 0)}),void 0)},void 0)]},"columnSelectAction")},G=function(){return(G=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},K=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},U=function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(K(arguments[e]));return n},q=function(n){var e=n.tableInstance,t=n.tableProps,o=t.enableFiltering,r=void 0!==o&&o,c=t.tableActions,d=void 0===c?[]:c,s=t.exportTable,u=t.enableColumnVisibilitySelector,b=void 0!==u&&u,f=e.setAllFilters,g=K(a.a.useState(!1),2),v=g[0],x=g[1],j=H({tableInstance:e,tableProps:t}),y=W({tableInstance:e,tableProps:t});Object(l.useEffect)((function(){f([])}),[v]);var O=U(z({tableInstance:e,tableProps:t}));return d&&Array.isArray(d)&&d.map((function(n){return O.push(Object(l.createElement)(p.c,G({},n,M,{key:n.id})))})),s&&O.push(j),b&&O.push(y),r&&O.push(Object(i.jsx)(p.b,G({icon:v?m.e:h.I,tooltip:"Filter",onClick:function(){return x((function(n){return!n}))}},M),"Filter")),{actions:O,enableFilter:v}},J=function(){return(J=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},X=function(n){var e=n.tableInstance,t=n.tableProps,o=n.enableFilter,r=e.headerGroups,l=e.toggleAllRowsExpanded,c=e.isAllRowsExpanded,d=t.enableSorting,b=void 0!==d&&d,f=t.enableMultipleRowSelect,g=t.data,v=t.renderRowSubComponent,x=g.filter((function(n){return!!n.subRows})).length>0||v;return Object(i.jsx)("thead",{children:r.map((function(n){return Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)("tr",J({},n.getHeaderGroupProps(),{children:n.headers.map((function(n,e){var t=b&&!n.disableSortBy;return Object(i.jsx)("th",J({},n.getHeaderProps(),{title:"",style:{width:150!==n.width?n.width+"px":"auto",minWidth:n.minWidth+"px",maxWidth:n.maxWidth+"px",textAlign:e===(f?1:0)?void 0:n.align}},{children:Object(i.jsxs)(u.d,J({gridTemplate:"auto / 1fr max-content",className:n.className},{children:[Object(i.jsx)("div",J({className:"h5"},{children:x&&(f&&1===e||!f&&0===e)?Object(i.jsxs)(u.d,J({gridTemplate:"1fr / max-content 1fr"},{children:[Object(i.jsx)("div",J({style:{cursor:"pointer"},onClick:function(n){n.stopPropagation(),l()}},{children:Object(i.jsx)(p.f,{icon:c?m.a:m.b},void 0)}),void 0),n.render("Header")]}),void 0):n.render("Header")}),void 0),t&&Object(i.jsx)("div",J({className:"table-header-sort",title:"Sort column",onClick:function(){return function(n){n.isSorted?n.isSortedDesc?n.clearSortBy():n.toggleSortBy(!0,!1):n.toggleSortBy(!1,!1)}(n)}},{children:n.isSorted?Object(i.jsx)(p.f,{icon:n.isSortedDesc?h.X:h.Y,color:u.m.color.text.primary},void 0):Object(i.jsx)(p.f,{icon:h.W},void 0)}),void 0)]}),void 0)}),void 0)}))}),void 0),o?Object(i.jsx)("tr",J({className:"filterRow"},{children:n.headers.map((function(n){return Object(i.jsx)("th",{children:n.canFilter?n.render("Filter"):null},Object(s.y)())}))}),"filterRow"):null]},Object(s.y)())}))},void 0)},Y=function(){return(Y=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},Z=function(n){var e,t=n.tableInstance,o=n.tableProps,r=t.getTableBodyProps,l=t.rows,c=t.page,d=t.prepareRow,b=t.toggleAllRowsSelected,f=t.toggleRowSelected,g=t.toggleRowExpanded,h=t.visibleColumns,v=o.isLoading,x=o.handleRowDblClick,j=o.handleRowClick,y=o.handleRowContextClick,O=o.enablePagination,w=o.enableMultipleRowSelect,k=o.data,C=o.renderRowSubComponent,S=a.a.useRef(null),R=O?c:l,P=k.filter((function(n){return!!n.subRows})).length>0||C,E=0;return Object(i.jsx)("tbody",Y({},r(),{ref:S},{children:R.map((function(n){return d(n),Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)("tr",Y({},n.getRowProps(),{id:n.id,onClick:function(){return!v&&function(n){1===++E?e=setTimeout((function(){E=0,w||(b(!1),f(n.id)),j&&j(n.original)}),400):2===E&&(clearTimeout(e),E=0,x&&x(n.original))}(n)},onContextMenu:function(e){!v&&y&&(e.preventDefault(),e.stopPropagation(),y(n.original))},className:n.isSelected?"selected":"",tabIndex:0,onKeyDown:function(e){return function(n,e){var t,o,r;n.stopPropagation();var i=null===(t=S.current)||void 0===t?void 0:t.children.namedItem(e.id);switch(n.key){case"Enter":v||(n.shiftKey?null===x||void 0===x||x(e.original):n.altKey?null===y||void 0===y||y(e.original):null===j||void 0===j||j(e.original));break;case" ":n.shiftKey?g([e.id],!e.isExpanded):(w||b(!1),f(e.id));break;case"ArrowUp":null===(o=null===i||void 0===i?void 0:i.previousElementSibling)||void 0===o||o.focus();break;case"ArrowDown":null===(r=null===i||void 0===i?void 0:i.nextElementSibling)||void 0===r||r.focus()}}(e,n)}},{children:n.cells.map((function(e,t){return Object(i.jsx)("td",Y({},e.getCellProps(),{style:Y(Y({},e.getCellProps().style),{minWidth:e.column.minWidth,maxWidth:e.column.maxWidth})},{children:P&&(w&&1===t||!w&&0===t)?n.canExpand||C?Object(i.jsxs)(u.d,Y({gridTemplate:"auto / max-content auto",style:{paddingLeft:"calc("+n.depth+" * "+u.m.spacing.xl+")"}},{children:[Object(i.jsx)("span",Y({style:{cursor:"pointer"},onClick:function(e){e.stopPropagation(),g([n.id],!n.isExpanded)}},{children:Object(i.jsx)(p.f,{icon:n.isExpanded?m.a:m.b},void 0)}),void 0),Object(i.jsx)("span",Y({style:{paddingTop:u.m.spacing.xs}},{children:e.render("Cell")}),void 0)]}),void 0):Object(i.jsx)("div",Y({style:{paddingLeft:"calc("+(n.depth+2)+" * "+u.m.spacing.xl+")"}},{children:e.render("Cell")}),void 0):Object(i.jsx)("div",Y({style:{textAlign:t===(w?1:0)?void 0:e.column.align}},{children:e.render("Cell")}),void 0)}),void 0)}))}),void 0),C&&!n.canExpand&&n.isExpanded&&Object(i.jsx)("tr",Y({className:"subComponent",tabIndex:0},{children:Object(i.jsx)("td",Y({colSpan:h.length},{children:C(n.original)}),void 0)}),"subComponent")]},n.id||Object(s.y)())}))}),void 0)},Q=function(){return(Q=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},$=function(n){var e=n.tableInstance,t=n.tableProps,o=t.columns,r=t.enableMultipleRowSelect,a=e.footerGroups;return function(n){var e=!0;return n.forEach((function(n){void 0!==n.Footer&&(e=!1)})),e}(o)?null:Object(i.jsx)("tfoot",{children:a.map((function(n){return Object(l.createElement)("tr",Q({},n.getFooterGroupProps(),{key:Object(s.y)()}),n.headers.map((function(n,e){return Object(l.createElement)("td",Q({},n.getFooterProps(),{key:Object(s.y)()}),Object(i.jsx)("div",Q({style:{textAlign:e===(r?1:0)?void 0:n.align,padding:u.m.spacing.md}},{children:n.render("Footer")}),void 0))})))}))},Object(s.y)())},_=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},nn=function(){return(nn=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},en=function(n,e,t){var o=e*n+n;return e*n+1+" - "+(o>t?t:o)},tn=function(n){var e=n.tableInstance,t=n.tableProps,o=e.canPreviousPage,r=e.canNextPage,a=e.pageOptions,c=e.pageCount,d=e.gotoPage,b=e.nextPage,f=e.previousPage,g=e.rows,v=e.state,m=v.pageIndex,x=v.pageSize,j=t.isLoading,y=Object(l.useRef)(null),O=Object(s.n)(y).width>550,w=u.l.div(F||(F=_(["\n    display: ",";\n    background-color: ",";\n    grid-template-columns: auto max-content;\n    justify-content: space-between;\n\n    .InputField.inputContainer {\n      width: 140px;\n    }\n  "],["\n    display: ",";\n    background-color: ",";\n    grid-template-columns: auto max-content;\n    justify-content: space-between;\n\n    .InputField.inputContainer {\n      width: 140px;\n    }\n  "])),O?"grid":"block",u.m.color.background.default);return Object(i.jsxs)(w,nn({className:"pagination",ref:y},{children:[O&&Object(i.jsx)(u.b,nn({style:{paddingTop:u.m.spacing.sm}},{children:j?Object(i.jsx)(p.l,{value:"Loading...",color:"disabled"},void 0):g.length>0?Object(i.jsx)(p.l,{value:"Showing "+en(x,m,g.length)+" of "+g.length+" entries",color:"secondary"},void 0):Object(i.jsx)(p.l,{value:"There are 0 entries",color:"disabled"},void 0)}),void 0),Object(i.jsxs)(u.b,nn({justifyContent:O?"flex-end":"space-around"},{children:[Object(i.jsxs)(u.b,nn({justifyContent:"flex-start",width:"auto"},{children:[Object(i.jsx)(p.b,{icon:h.e,onClick:function(){return d(0)},disabled:!o,spacing:"sm",outline:!0},void 0),Object(i.jsx)(p.b,{icon:h.h,onClick:function(){return f()},disabled:!o,spacing:"sm",outline:!0},void 0)]}),void 0),Object(i.jsx)(B.g,{min:1,disabled:!r&&!o,spacing:"sm",value:m+1,max:a.length,prefixText:"Page",suffixText:"of "+a.length.toString(),defaultValue:1,precision:0,onChange:function(n){var e=n?Number(n)-1:0;d(e)}},void 0),Object(i.jsxs)(u.b,nn({justifyContent:"flex-end",width:"auto"},{children:[Object(i.jsx)(p.b,{icon:h.i,onClick:function(){return b()},disabled:!r,spacing:"sm",outline:!0},void 0),Object(i.jsx)(p.b,{icon:h.f,onClick:function(){return d(c-1)},disabled:!r,spacing:"sm",outline:!0},void 0)]}),void 0)]}),void 0)]}),void 0)};t(742);function on(n){var e=n.column,t=e.filterValue,o=e.setFilter;return Object(i.jsx)(B.i,{autoFocus:t,defaultValue:t||"",onChange:function(n){return o(n.target.value||void 0)},spacing:"sm",placeholder:"Filter...",textAlign:e.align},void 0)}var rn=function(){return(rn=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},ln=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},an=function(n){var e=n.columns,t=n.data,o=n.enableMultipleRowSelect,r=void 0!==o&&o,l=n.defaultRowsOnPage,b=void 0===l?100:l,g=n.enablePagination,h=void 0!==g&&g,v=n.tableHeading,m=void 0===v?"":v,x=n.borderless,j=void 0!==x&&x,y=n.hideHeader,O=void 0!==y&&y,w=n.disableSubRowSelect,k=void 0!==w&&w,S=n.isLoading,R=void 0!==S&&S,P=a.a.useMemo((function(){return R?Array(30).fill({}):t}),[R,t]),E=a.a.useMemo((function(){return R?e.map((function(n){return rn(rn({},n),{Cell:Object(i.jsx)(p.j,{height:"20px"},void 0)})})):e}),[R,e]),A=a.a.useMemo((function(){return{Filter:on}}),[]),T=a.a.useMemo((function(){return e.filter((function(n){return!0===n.hidden})).map((function(n){return n.id||""}))}),[e]),F=Object(d.useTable)({columns:E,data:P,defaultColumn:A,selectMultipleRows:r,selectSubRows:!k,initialState:{pageIndex:0,pageSize:b,hiddenColumns:T},getSubRows:function(n){return n.subRows}},d.useFilters,d.useSortBy,d.useExpanded,d.usePagination,d.useRowSelect,I,(function(e){return C(e,n)}));a.a.useEffect((function(){F.toggleHideColumn("selection",!r)}),[r]);var M=q({tableProps:n,tableInstance:F}),N=M.actions,H=M.enableFilter,D=ln(a.a.useState(Object(s.y)()),1)[0],z=Object(i.jsx)(f,rn({style:rn({},n.customStyle),id:D,className:"Table",handleRowClick:n.handleRowClick,handleRowDblClick:n.handleRowDblClick},{children:Object(i.jsxs)("table",rn({},F.getTableProps(),{children:[Object(i.jsx)(X,{tableInstance:F,tableProps:n,enableFilter:H},void 0),Object(i.jsx)(Z,{tableInstance:F,tableProps:n},void 0),Object(i.jsx)($,{tableInstance:F,tableProps:n},void 0)]}),void 0)}),void 0);return j?z:Object(i.jsx)(c.a,rn({headerTitle:m||"",headerHidden:O,headerActions:Object(i.jsx)(u.b,rn({style:{paddingTop:u.m.spacing.xs}},{children:N}),void 0),footerContent:h&&Object(i.jsx)(tn,{tableInstance:F,tableProps:n},void 0),overflow:R?"hidden":"auto"},{children:z}),void 0)},cn=function(){var n=a.a.useState(!1),e=Object(r.a)(n,2),t=e[0],o=e[1];Object(s.w)((function(){return o(!0)}),1e3);var l=a.a.useMemo((function(){return t?[{name:"Siddhant Gupta",age:25,category:"Developer",subRows:[{name:"Shobhit Gupta",age:25,category:"Developer"},{name:"Other person",age:35,category:"Misc"}]},{name:"Other person",age:35,category:"Misc",subRows:[{name:"Shobhit Gupta",age:25,category:"Developer"},{name:"Other person",age:35,category:"Misc"}]}]:[]}),[t]),c=a.a.useMemo((function(){return[{accessor:"name",Header:"Full name",disableFilter:!1},{accessor:"category",Header:"Category",disableFilter:!0,Cell:function(n){var e=n.value;return Object(i.jsx)(p.k,{children:e})}},{accessor:"age",Header:"Age",disableFilter:!0,align:"right"}]}),[]);return Object(i.jsx)(an,{tableHeading:"Table",data:l,columns:c,handleRowClick:function(n){return console.log(n)},handleRowDblClick:function(n){return alert(n)},singleRowActions:function(n){return[{id:"log",icon:h.cb,tooltip:"Log",onClick:function(){return console.log(n)}}]},enableSorting:!0,enableFiltering:!0,enablePagination:!0,enableMultipleRowSelect:!0,enableColumnVisibilitySelector:!0,exportTable:!0,isLoading:!t})};e.default=function(){return Object(i.jsx)(c.c,{heading:"Table",children:Object(i.jsx)(cn,{})})}}}]);
//# sourceMappingURL=26.d7ddfd82.chunk.js.map