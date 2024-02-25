

$(document).ready(function(){
    
    // SABIRANJE
    $('#btn2').click( function add(br1, br2) {
        
        br1 = $('#brJedan').val();
        br2 = $('#brDva').val();

        if (br1 === '' || br2 === '') {
            $('#rezultat').text('Unesite broj');
            return
        }

        $('#rezultat').text(+br1 + +br2);
    })

    // ODUZIMANJE
    $('#btn3').click( function sub(br1, br2) {
        
        br1 = $('#brJedan').val();
        br2 = $('#brDva').val();
        
        if (br1 === '' || br2 === '') {
            $('#rezultat').text('Unesite broj');
            return
        }
        
        $('#rezultat').text(br1 - br2)
    })

    // MNOZENJE
    $('#btn4').click( function multi(br1, br2) {
        
        br1 = $('#brJedan').val();
        br2 = $('#brDva').val()
        
        $('#rezultat').text(br1 * br2)
        
        if(br1 === '' || br2 === ''){
            $('#rezultat').text('Unesite broj');
            return;
        } else if (br1 == 0 || br2 == 0) {
            $('#rezultat').text('Nije moguce mnoziti sa 0');
        }
    })

    // DELJENJE
    $('#btn5').click( function divide(br1, br2) {
        
        br1 = $('#brJedan').val();
        br2 = $('#brDva').val();
        
        $('#rezultat').text(br1 / br2)
        
        if(br1 === '' || br2 === ''){
            $('#rezultat').text('Unesite broj');
            return;
        } else if(br1 == 0 || br2 == 0){
            $('#rezultat').text('Nije moguce deliti sa 0')
        }
    })


    // BRISANJE
    $('#brisi').click(function() {
        $('#brJedan, #brDva').val('');
        $('#rezultat').text('');
    })

})