const e=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).then((t=>function(t){const o=t.map((({id:e,name:t})=>`<option value = ${e}>${t}</option>`)).join("");e.insertAdjacentHTML("beforeend",o)}(t)));
//# sourceMappingURL=index.a3b7377c.js.map
