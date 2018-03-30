var commonFunction = (function(){

    return {
        applyEffect: function() {
        // counts total number of td in a head so that we can can use it for label extraction
        var head_col_count1 =  $('#table2 thead td').size();
        // loop which replaces td
        for ( i1=0; i1 <= head_col_count1; i1++ )  {
            // head column label extraction
            var head_col_label1 = $('#table2 thead td:nth-child('+ i1 +')').text();
            // replaces td with <div class="column" data-label="label">
            $('#table2 tr td:nth-child('+ i1 +')').replaceWith(
                function(){
                    return $('<div class="column" data-label="'+ head_col_label1 +'">').append($(this).contents());
                }
            );
        }	
        // replaces table with <div class="table">
        $('#table2').replaceWith(
            function(){
                return $('<div class="table">').append($(this).contents());
            }
        );	
        // replaces thead with <div class="table-head">
        $('thead').replaceWith(
            function(){
                return $('<div class="table-head">').append($(this).contents());
            }
        );	
        // replaces tr with <div class="row">
        $('tr').replaceWith(
            function(){
                return $('<div class="row">').append($(this).contents());
            }
        );	
        // replaces th with <div class="column">
        $('#table2 th').replaceWith(
            function(){
                return $('<div class="column">').append($(this).contents());
            }
        );
    },
        loadVideo: function() {
            $.ajax({
                beforeSend:function () {
                    $(".video_holder").append('<iframe width="100" height="100" src="http://www.youtube.com/embed/jtOahTuWi1Y" frameborder="0" allowfullscreen=""></iframe>');
                }
            });
    }
    }
})();