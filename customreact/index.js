

function react(reactelement,container){
    const docelement=document.createElement(reactelement.type);
    docelement.innerHTML=reactelement.childern
    docelement.setAttribute('href',reactelement.props.href)
    docelement.setAttribute('target',reactelement.props.target)
    container.appendChild(docelement)
}

const reactelement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
   childern:"Tab for Visit"
}


const maincontainer=document.getElementById("root")
react(reactelement,maincontainer)