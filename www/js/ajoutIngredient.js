/**
 * Created by Antoine on 04/04/2017.
 */
$(document).ready(function(){
    $('#sauvegarder').click(
    function onSubmit(event) {
        event.preventDefault();
        var produits = $('#produits').val();
        var poids = $('#poids').val();
        var codeBarre = $('#codeBarre').val();

        var produitInfo = {
            'Nom': produits,
            'Quantite': codeBarre,
            'Poids': poids,

        };

        localStorage.setItem('test', JSON.stringify(produitInfo));

        var test = localStorage.getItem('test');
        console.log('test : ', JSON.parse(test));
    })
});



/*function onSubmit(form){
    var data = JSON.stringify($("form").serialize());

    console.log(data);
    return false;
}*/


/*$(document).ready(function(){
    $("button").click(function(){

    })


})*/


/*function postForm(){

        var labels = document.getElementsByTagName('LABEL');
        for(var i = 0; i < labels.length ; i++){
            console.log(labels[i]);
        }

}*/