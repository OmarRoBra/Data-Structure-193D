function f (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function p(n,r){  
    let resultado;
    let arriba;
    let abajo;
    arriba = f(n);
    abajo = f(n-r);
    resultado = arriba/abajo;
    return resultado;
}

console.log(p(4,5));