!function(e){function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1),n(4)},function(e,t,n){"use strict";var l=n(2),o=(n.n(l),n(3)),__=(n.n(o),wp.i18n.__),a=wp.blocks.registerBlockType,r=wp.components,i=r.BaseControl,c=r.Button,u=r.RadioControl,s=r.ToggleControl,d=r.TextControl,m=r.ColorPalette,b=r.PanelBody,p=r.PanelRow,g=wp.blockEditor,C=g.RichText,f=g.InspectorControls,E=g.MediaUploadCheck,w=g.MediaUpload,x=["video"],y=[{color:"#0072ce",name:"Corteva Blue",slug:"corteva-blue"},{color:"#459aff",name:"Candy Blue",slug:"candy-blue"},{color:"#88c9ff",name:"Sky Blue",slug:"sky-blue"},{color:"#F1F3F5",name:"Fill 1",slug:"fill-1"},{color:"#ECF6FF",name:"Fill 2",slug:"fill-2"},{color:"#88C9FF",name:"Fill 3",slug:"fill-3"},{color:"#7A9ECD",name:"Fill 4",slug:"fill-4"},{color:"#464A54",name:"Fill 5",slug:"fill-5"},{color:"#C4C9D4",name:"Fill 6",slug:"fill-6"},{color:"#FFFFFF",name:"Fill 7",slug:"fill-7"},{color:"#000000",name:"Fill 8",slug:"fill-8"},{color:"radial-gradient(#F1F3F5, #C4C9D4)",name:"Radial Grey Gradient",slug:"radial-grey-gradient"},{color:"linear-gradient(to bottom, #C4C9D4, #C4C9D4)",name:"Linear Grey Gradient",slug:"linear-grey-gradient"},{color:"linear-gradient(to bottom, #F5FAFE, #FFFFFF)",name:"Blue White Linear Gradient",slug:"blue-white-linear-gradient"},{color:"linear-gradient(to bottom, #ECF6FF, #F5FAFE)",name:"Light Blue Linear Gradient",slug:"light-blue-linear-gradient"},{color:"linear-gradient(to bottom, #FFFFFF, #D8EBFD)",name:"White Blue Linear Gradient",slug:"white-blue-linear-gradient"},{color:"linear-gradient(to bottom, #FFFFFF, #E1E5EA)",name:"Light Grey Linear Gradient",slug:"light-grey-linear-gradient"}];a("cgb/image-content-block",{title:__("Image Content Block"),icon:"cover-image",category:"corteva",keywords:[__("corteva-blocks")],attributes:{backgroundColor:{type:"string",default:"#FFFFFF"},textContentIcon:{type:"boolean"},textContentHeadlineEnabled:{type:"boolean",default:!0},textContentHeadline:{type:"string",source:"html",selector:"h1"},textContentSubHeadingEnabled:{type:"boolean",default:!0},textContentSubHeading:{type:"string",source:"html",selector:"h5"},textContentBodyEnabled:{type:"boolean",default:!0},textContentBody:{type:"string",source:"html",selector:"p"},callToActionEnabled:{type:"boolean",default:!0},callToActionText:{type:"string",default:"Call To Action"},callToActionLocation:{type:"string",default:""},callToActionButtonColor:{type:"string",default:"#0072ce"},callToActionButtonTextColor:{type:"string",default:"#FFFFFF"},mediaAlignment:{type:"string",default:"left"},media:{type:"string",source:"attribute",selector:"img",attribute:"src"},src:{type:"string",default:""},video:{type:"string",default:""},inlineBlockStyle:{type:"object"}},edit:function(e){var t={border:"black solid 1px",width:"100%","border-radius":"2px",background:e.attributes.backgroundColor},n={display:"flex"},l={"flex-grow":1};return e.attributes.inlineBlockStyle={display:"inline-flex",margin:0,border:0,cursor:"pointer","-webkit-appearance":"none",background:"none",transition:"box-shadow 0.1s linear","align-items":"center","box-sizing":"border-box",padding:"6px 12px","border-radius":"4px","background-color":e.attributes.callToActionButtonColor,color:e.attributes.callToActionButtonTextColor,"text-decoration":"none"},wp.element.createElement("div",null,wp.element.createElement(f,null,wp.element.createElement(b,{title:"General",initialOpen:!0},wp.element.createElement(p,null,wp.element.createElement(i,{id:"id",label:"Background Color"},wp.element.createElement(m,{colors:y,value:e.attributes.backgroundColor,onChange:function(t){return e.setAttributes({backgroundColor:t})}})))),wp.element.createElement(b,{title:"Text Content",initialOpen:!1},wp.element.createElement(s,{label:"Toggle Icon",checked:e.attributes.textContentIcon,onChange:function(t){return e.setAttributes({textContentIcon:t})}}),wp.element.createElement(s,{label:"Toggle Headline",checked:e.attributes.textContentHeadlineEnabled,onChange:function(t){return e.setAttributes({textContentHeadlineEnabled:t})}}),wp.element.createElement(s,{label:"Toggle Sub Heading",checked:e.attributes.textContentSubHeadingEnabled,onChange:function(t){return e.setAttributes({textContentSubHeadingEnabled:t})}}),wp.element.createElement(s,{label:"Toggle Body",checked:e.attributes.textContentBodyEnabled,onChange:function(t){return e.setAttributes({textContentBodyEnabled:t})}})),wp.element.createElement(b,{title:"Media Content",initialOpen:!1},wp.element.createElement(u,{label:"Media Alignment",selected:e.attributes.mediaAlignment,options:[{label:"Left",value:"left"},{label:"Right",value:"right"}],onChange:function(t){return e.setAttributes({mediaAlignment:t})}})),wp.element.createElement(b,{title:"Call To Action",initialOpen:!1},wp.element.createElement(s,{label:"Enable Call To Action",checked:e.attributes.callToActionEnabled,onChange:function(t){return e.setAttributes({callToActionEnabled:t})}}),wp.element.createElement(d,{label:"Text",value:e.attributes.callToActionText,onChange:function(t){return e.setAttributes({callToActionText:t})}}),wp.element.createElement(d,{label:"Link",value:e.attributes.callToActionLocation,onChange:function(t){return e.setAttributes({callToActionLocation:t})}}),wp.element.createElement(i,{label:"Background Color"},wp.element.createElement(m,{colors:y,value:e.attributes.callToActionButtonColor,onChange:function(t){return e.setAttributes({callToActionButtonColor:t})}})),wp.element.createElement(i,{label:"Text Color"},wp.element.createElement(m,{colors:y,value:e.attributes.callToActionButtonTextColor,onChange:function(t){return e.setAttributes({callToActionButtonTextColor:t})}}))),wp.element.createElement(b,{title:"Links",initialOpen:!1})),"left"===e.attributes.mediaAlignment?wp.element.createElement("div",{style:t},wp.element.createElement("app-hello-world",{title:e.attributes.textContentHeadline}),wp.element.createElement("div",{style:n},wp.element.createElement("div",{style:l},wp.element.createElement(E,null,wp.element.createElement(w,{onSelect:function(t){e.attributes.src=t.url},allowedTypes:x,render:function(e){var t=e.open;return wp.element.createElement(c,{onClick:t},"Select Image")}})),wp.element.createElement("div",{style:l},wp.element.createElement("img",{src:e.attributes.src}))),wp.element.createElement("div",{style:l},e.attributes.textContentHeadlineEnabled?wp.element.createElement(C,{key:"textContentHeadline",tagName:"h1",onChange:function(t){return e.setAttributes({textContentHeadline:t})},value:e.attributes.textContentHeadline,placeholder:"Headline"}):"",e.attributes.textContentSubHeadingEnabled?wp.element.createElement(C,{key:"textContentSubHeading",tagName:"h5",onChange:function(t){return e.setAttributes({textContentSubHeading:t})},value:e.attributes.textContentSubHeading,placeholder:"Sub Heading"}):"",e.attributes.textContentBodyEnabled?wp.element.createElement(C,{key:"textContentBody",tagName:"p",onChange:function(t){return e.setAttributes({textContentBody:t})},value:e.attributes.textContentBody,placeholder:"Body"}):"",e.attributes.callToActionEnabled?wp.element.createElement("a",{style:e.attributes.inlineBlockStyle,href:"#"},e.attributes.callToActionText):""))):wp.element.createElement("div",null))},save:function(e){return e.attributes.inlineBlockStyle={display:"inline-flex",margin:0,border:0,cursor:"pointer","-webkit-appearance":"none",background:"none",transition:"box-shadow 0.1s linear","align-items":"center","box-sizing":"border-box",padding:"6px 12px","border-radius":"4px","background-color":e.attributes.callToActionButtonColor,color:e.attributes.callToActionButtonTextColor,"text-decoration":"none"},wp.element.createElement("div",{className:e.className},wp.element.createElement("app-hello-world",{title:e.attributes.textContentHeadline}),wp.element.createElement("h1",null,e.attributes.textContentHeadline),wp.element.createElement("h5",null,e.attributes.textContentSubHeading),wp.element.createElement("p",null,e.attributes.textContentBody),wp.element.createElement("a",{style:e.attributes.inlineBlockStyle},e.attributes.textContentBody))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(5),o=(n.n(l),n(6)),__=(n.n(o),wp.i18n.__),a=wp.blocks.registerBlockType,r=wp.blockEditor,i=r.RichText;r.title;console.log(wp.editor),a("cgb/block-my-block",{title:__("PE Sample Block"),icon:"buddicons-replies",category:"common",keywords:[__("corteva-blocks"),__("Sample Block"),__("create-guten-block")],attributes:{inputValue:{type:"string",default:""}},edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("h3",null,"\u2014 Hello from the backend."),wp.element.createElement("p",null,"Add text to the input below and preview the page to get a sense for how information is posted"),wp.element.createElement(i,{autoFocus:"false",className:"btn btn--primary",value:e.attributes.inputValue,placeholder:"Place Sample Text",onChange:function(t){return e.setAttributes({inputValue:t})}}),wp.element.createElement("title",{value:e.attributes.inputTitle}))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("p",null,"\u2014 Hello from the frontend."),wp.element.createElement("p",null,e.attributes.inputValue))}})},function(e,t){},function(e,t){}]);