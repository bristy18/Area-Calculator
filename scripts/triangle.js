function triangle() {
    let base=document.getElementById('b');
    let height=document.getElementById('h');
    const b=base.value;
    const h=height.value;
    const area=0.5*b*h;
    let final="Triangle area is "+ area;
    base.value='';
    height.value='';
    let ans=document.getElementById('ans');
    let p=document.createElement('p');
    p.innerText=final;
    ans.appendChild(p);
}

function rectangle() {
    let length=document.getElementById('l');
    let width=document.getElementById('w');
    const l=length.value;
    const w=width.value;
    const area=l*w;
    let final="Rectangle area is "+ area;
    length.value='';
    width.value='';
    let ans=document.getElementById('ans');
    let p=document.createElement('p');
    p.innerText=final;
    ans.appendChild(p);
    
}

function square() {
    let squ=document.getElementById('s');
    const s=squ.value;
    const area=s*s;
    let final="Square area is "+ area;
    squ.value='';
    let ans=document.getElementById('ans');
    let p=document.createElement('p');
    p.innerText=final;
    ans.appendChild(p);
}

function rhombus() {
    let dia1=document.getElementById('d1');
    let dia2=document.getElementById('d2');
    const d1=dia1.value;
    const d2=dia2.value;
    const area=(d1*d2)/2;
    dia1.value='';
    dia2.value='';
    let ans=document.getElementById('ans');
    let p=document.createElement('p');
    p.innerText=area;
    ans.appendChild(p);
}

function trape() {
    let para1=document.getElementById('a');
    let a=para1.value;
    const a1=parseFloat(a)
    let para2=document.getElementById('c');
    var c=para2.value;
    const b1=parseFloat(c)
    let height=document.getElementById('h2');
    const h2=height.value;
    const c1=parseFloat(h2)
    const area=0.5*c1*(a1+b1);
    para1.value='';
    para2.value='';
    height.value='';
    let ans=document.getElementById('ans');
    let p=document.createElement('p');
    p.innerText=area;
    ans.appendChild(p);
}