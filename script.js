const articles={
modesty:{label:"WARDROBE / EDITORIAL",title:"The Quiet Luxury of Modesty",img:"img1",paras:[
"Modesty is often treated as a limitation in fashion. It can be the opposite. When more of the body is covered, proportion, fabric and construction become more important.",
"Quiet luxury works especially well with modest dressing because both depend on restraint. A long coat does not need ten visible details. A beautifully cut kameez does not need embroidery from neckline to hem.",
"Start with silhouette. Choose one dominant shape: long and columnar, softly flared, architectural or fluid. Then let the fabric support it.",
"The final step is editing. Remove one accessory. Reduce one colour. Leave one surface quiet. Luxury is often created in the space where nothing is competing for attention."
]},
wardrobe:{label:"STYLING / WARDROBE",title:"The Architecture of a Wardrobe",img:"img2",paras:[
"A wardrobe becomes expensive-looking when its pieces understand one another. The goal is not a large number of garments. It is a small visual vocabulary that can be rearranged.",
"Begin with three silhouettes you genuinely wear. Repeat these shapes in different fabrics rather than buying completely different proportions every season.",
"Then establish a material family. Raw silk, cotton poplin, fine wool, linen and matte crepe can coexist beautifully when their surfaces are intentional.",
"Finally, create a colour spine. Black, ivory, warm taupe and deep olive can carry an entire wardrobe, while rust, emerald or muted rose can arrive as seasonal accents."
]},
texture:{label:"TEXTURE / MATERIAL",title:"When Fabric Becomes the Detail",img:"img3",paras:[
"There is a particular kind of elegance that comes from noticing the fabric before the embellishment. Texture gives clothing a quiet dimensionality.",
"Raw silk catches light irregularly. Linen carries a dry, architectural surface. Velvet absorbs light and makes colour appear deeper. Fine wool gives tailoring a calm authority.",
"For evening wear, contrast matte and shine instead of covering everything in sparkle. A matte black body with a narrow satin panel can feel more modern than an entire surface of sequins.",
"Think of fabric as part of the design drawing. The material should explain why the garment has that shape."
]},
beauty:{label:"BEAUTY / REAL SKIN",title:"Beauty Without the Mask",img:"img1",paras:[
"Modern beauty does not have to mean perfect skin. The most convincing beauty images often retain the small details that make a face human.",
"A useful beauty routine begins with care rather than coverage. Makeup can then become a layer of expression rather than camouflage.",
"For a refined editorial look, keep the skin fresh, define the eyes softly and let one feature carry the mood.",
"The MØNÉZA approach is simple: beauty should make a person more recognisable, not less."
]}
};

const nav=document.getElementById("nav");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>30));

document.querySelectorAll(".filters button").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;
 document.querySelectorAll(".article").forEach(a=>a.style.display=(f==="all"||a.dataset.category.includes(f))?"block":"none");
});

const modal=document.getElementById("modal"),content=document.getElementById("modalContent");
document.querySelectorAll(".read").forEach(btn=>btn.onclick=()=>{
 const a=articles[btn.closest(".article").dataset.id];
 content.innerHTML=`<small style="letter-spacing:.18em;color:#75624c">${a.label}</small><h2>${a.title}</h2><div class="modal-art ${a.img}"></div>`+a.paras.map(p=>`<p>${p}</p>`).join("");
 modal.classList.add("open");document.body.style.overflow="hidden";
});
document.getElementById("closeModal").onclick=()=>{modal.classList.remove("open");document.body.style.overflow=""};

document.getElementById("menu").onclick=()=>document.getElementById("mobileMenu").classList.add("open");
document.getElementById("closeMenu").onclick=()=>document.getElementById("mobileMenu").classList.remove("open");
document.querySelectorAll("#mobileMenu a").forEach(a=>a.onclick=()=>document.getElementById("mobileMenu").classList.remove("open"));

document.getElementById("subscribe").onsubmit=e=>{e.preventDefault();document.getElementById("success").textContent="You're on the list. Welcome inside the house.";e.target.reset()};
document.getElementById("year").textContent=new Date().getFullYear();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
