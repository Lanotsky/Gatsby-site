(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(t,e,a){"use strict";a.r(e);var i=a(0),r=a.n(i),n=a(142),s=a(149),o=a(161),l=a(162),d=a.n(l),c=function(){return r.a.createElement(n.StaticQuery,{query:"2011440971",render:function(t){return r.a.createElement(d.a,{fluid:t.placeholderImage.childImageSharp.fluid})},data:o})},u=a(147);e.default=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hola people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(c,null)),r.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2"))}},142:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return h}),a.d(e,"StaticQueryContext",function(){return f}),a.d(e,"StaticQuery",function(){return p});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(141),l=a.n(o);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return o.withPrefix}),a.d(e,"navigate",function(){return o.navigate}),a.d(e,"push",function(){return o.push}),a.d(e,"replace",function(){return o.replace}),a.d(e,"navigateTo",function(){return o.navigateTo});var d=a(143),c=a.n(d);a.d(e,"PageRenderer",function(){return c.a});var u=a(32);a.d(e,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(t){return r.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(t,e,a){var i;t.exports=(i=a(145))&&i.default||i},144:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},145:function(t,e,a){"use strict";a.r(e);a(33);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(52),l=a(2),d=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=d},146:function(t,e,a){},147:function(t,e,a){"use strict";var i=a(148),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(150),d=a.n(l),c=a(142);function u(t){var e=t.description,a=t.lang,r=t.meta,s=t.keywords,o=t.title;return n.a.createElement(c.StaticQuery,{query:f,render:function(t){var i=e||t.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=u;var f="1025518380"},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(t,e,a){"use strict";var i=a(144),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(142),d=function(t){var e=t.siteTitle;return n.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(146),function(t){var e=t.children;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:t.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})});u.propTypes={children:o.a.node.isRequired};e.a=u},161:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png",srcSet:"/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/0552a/gatsby-astronaut.png 75w,\n/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/fc3be/gatsby-astronaut.png 150w,\n/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png 300w,\n/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/24f49/gatsby-astronaut.png 450w,\n/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/5497d/gatsby-astronaut.png 600w,\n/https://github.com/Lanotsky/lanotsky.github.io.git/static/6d91c86c0fde632ba4cd01062fd9ccfa/483e1/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},162:function(t,e,a){"use strict";var i=a(8);e.__esModule=!0,e.default=void 0;var r,n=i(a(7)),s=i(a(51)),o=i(a(151)),l=i(a(152)),d=i(a(0)),c=i(a(4)),u=function(t){var e=(0,l.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},f={},p=function(t){var e=u(t),a=e.fluid?e.fluid.src:e.fixed.src;return f[a]||!1},h=[];var g=function(t,e){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),r).observe(t),h.push([t,e])},m=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',a=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+a+"/>":"",r=t.srcSet?'<source srcSet="'+t.srcSet+'" '+a+"/>":"",n=t.title?'title="'+t.title+'" ':"",s=t.alt?'alt="'+t.alt+'" ':'alt="" ',o=t.width?'width="'+t.width+'" ':"",l=t.height?'height="'+t.height+'" ':"",d=t.opacity?t.opacity:"1";return"<picture>"+i+r+"<img "+o+l+e+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(t,e){var a=t.style,i=t.onLoad,r=t.onError,n=(0,o.default)(t,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:e,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(t){function e(e){var a;a=t.call(this,e)||this;var i=!0,r=!1,n=e.fadeIn,o=p(e);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),e.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(e,t);var a=e.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},a.handleRef=function(t){var e=this;this.state.IOSupported&&t&&g(t,function(){e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:p(e.props)}),e.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var t,e,a;t=this.props,e=u(t),a=e.fluid?e.fluid.src:e.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var t=u(this.props),e=t.title,a=t.alt,i=t.className,r=t.style,n=void 0===r?{}:r,s=t.imgStyle,o=void 0===s?{}:s,c=t.placeholderStyle,f=void 0===c?{}:c,p=t.placeholderClassName,h=t.fluid,g=t.fixed,b=t.backgroundColor,w=t.Tag,v="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:e,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var R=h;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),v&&d.default.createElement(w,{title:e,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:e,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:e},R))}}))}if(g){var k=g,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete I.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},L)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},L)),v&&d.default.createElement(w,{title:e,style:{backgroundColor:v,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:e,width:k.width,height:k.height,src:k.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:e,width:k.width,height:k.height},k))}}))}return null},e}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=b;e.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-bcfcee4d916b7aaf1e56.js.map