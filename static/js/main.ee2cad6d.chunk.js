(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),o=a.n(c),s=a(16),i=a(14),r=a(15),m=a(2),u=a(18),d=a(17),p=a(3),f=a.n(p),h=(a(41),a(42),function(e){var t=e.pokemonInfo;return l.a.createElement("div",{className:"info_inner"},l.a.createElement("img",{className:"info-img",src:t.sprites.front_default,alt:"info"}),l.a.createElement("h1",{className:"capitalize"},t.name),l.a.createElement("table",{className:"info-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Type"),l.a.createElement("td",{className:"capitalize"},t.types[0].type.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Attack"),l.a.createElement("td",null,t.stats[4].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"Defence"),l.a.createElement("td",null,t.stats[3].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"HP"),l.a.createElement("td",null,t.stats[5].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"SP Attack"),l.a.createElement("td",null,t.stats[2].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"SP Defence"),l.a.createElement("td",null,t.stats[1].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"Speed"),l.a.createElement("td",null,t.stats[0].base_stat)),l.a.createElement("tr",null,l.a.createElement("td",null,"Weight"),l.a.createElement("td",null,t.weight)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total moves"),l.a.createElement("td",null,t.moves.length)))))}),k={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",psychic:"#f366b9",steel:"#9eb7bd",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:"",pokemonData:[],pokemonInfo:[],limit:12,isClicked:!1,type:"",isFiltered:!1,options:[]},n.getPokemonInfo=n.getPokemonInfo.bind(Object(m.a)(n)),n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.handleSelect=n.handleSelect.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.loadPokemons(),this.handleOptions()}},{key:"loadPokemons",value:function(){var e=this;f.a.get("https://pokeapi.co/api/v2/pokemon?limit=12&offset=".concat(this.state.limit-12)).then((function(t){e.setState({data:t.data.results},(function(){return e.getPokemon(e.state.data)}))})).catch((function(e){console.log(e)}))}},{key:"getPokemon",value:function(e){var t=this;e.map((function(e){return f.a.get(e.url).then((function(e){t.setState({pokemonData:[].concat(Object(s.a)(t.state.pokemonData),[e.data]).sort((function(e,t){return e.id-t.id}))})}))}))}},{key:"getPokemonInfo",value:function(e){var t=this;f.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.target.id)).then((function(e){t.setState({pokemonInfo:e.data,isClicked:!0})})).catch((function(e){console.log(e)}))}},{key:"handleClick",value:function(){var e=this;this.setState({limit:this.state.limit+12},(function(){return e.loadPokemons()}))}},{key:"handleOptions",value:function(){var e=this;f.a.get("https://pokeapi.co/api/v2/type").then((function(t){e.setState({options:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"handleSelect",value:function(e){this.setState({type:e.target.value,isFiltered:"Showall"!==e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pokemonData,n=t.pokemonInfo,c=t.isClicked,o=t.type,s=t.isFiltered,i=t.options;return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("select",{value:o,className:"select capitalize",onChange:this.handleSelect},l.a.createElement("option",{hidden:!0},"Choose type"),l.a.createElement("option",{value:"Showall"},"Show all"),i?i.map((function(e){return l.a.createElement("option",{key:e.name,className:"capitalize",value:e.name},e.name)})):null),l.a.createElement("h1",null,"Pokedex")),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"cards"},a[0]?a.filter((function(e){return s?void 0!==e.types[1]&&e.types[1].type.name===o||e.types[0].type.name===o:e})).map((function(t,a){return l.a.createElement("div",{className:"card",key:t.id},l.a.createElement("img",{className:"image",src:t.sprites.front_default,alt:t.name}),l.a.createElement("p",{className:"name"},t.name),t.types.sort((function(e,t){return e.slot-t.slot})).map((function(e){return l.a.createElement("p",{style:{background:k[e.type.name]},key:e.type.name,className:"type capitalize"},e.type.name+" ")})),l.a.createElement("button",{className:"info-btn",id:t.id,onClick:e.getPokemonInfo},"Show info"))})):null,l.a.createElement("button",{onClick:this.handleClick,className:"loadMore-btn"},"Load more")),l.a.createElement("div",{className:"info"},c?l.a.createElement(h,{pokemonInfo:n}):null)))}}]),a}(l.a.Component);o.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ee2cad6d.chunk.js.map