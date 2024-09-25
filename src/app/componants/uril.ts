export function bgEpaisseur(epaisseur:number):string{

    const min=23
    const max=33

    if(epaisseur===0){
        return "bg-white"
    }

    if(epaisseur>=max || epaisseur<=min){
        return "bg-red-200"
    }else if( (epaisseur>=min && epaisseur<=min+0.5) || (epaisseur>=max-0.5 && epaisseur<=max )){
        return "bg-amber-300"
    }else {
        return "bg-white"
    }
}
export function bgHauteur(hauteur:number):string{

    const min=27.5
    const max=36
    if(hauteur===0){
        return "bg-white"
    }
    if(hauteur>=max || hauteur<=min){
        return "bg-red-200"
    }else if( (hauteur>=min && hauteur<=min+0.5) || (hauteur>=max-0.5 && hauteur<=max )){
        return "bg-amber-300"
    }else {
        return "bg-white"
    }
}
export function bgQR(hauteur:number):string{


    const min=6.5
    if(hauteur===0){
        return "bg-white"
    }

    if(hauteur<=min ){
        return "bg-red-200"
    }else if(hauteur>=min && hauteur<=min+0.5){
        return "bg-amber-300"
    }else {
        return "bg-white"
    }
}
export function bgEI(hauteur:number):string{

    const min=1357
    const max=1363

    if(hauteur===0){
        return "bg-white"
    }
    if(hauteur>=max || hauteur<=min){
        return "bg-red-200"
    }else if( (hauteur>=min && hauteur<=min+0.5) || (hauteur>=max-0.5 && hauteur<=max )){
        return "bg-amber-300"
    }else {
        return "bg-white"
    }
}
export function bgEA(hauteur:number):string{

    const min=1410
    const max=1426
    if(hauteur===0){
        return "bg-white"
    }

    if(hauteur>=max || hauteur<=min){
        return "bg-red-200"
    }else if( (hauteur>=min && hauteur<=min+0.5) || (hauteur>=max-0.5 && hauteur<=max )){
        return "bg-amber-300"
    }else {
        return "bg-white"
    }
}
