$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const InputActivityName = $('#activity-name').val();
        const newItem = $('<li></li>');

        newItem.text(InputActivityName);
        newItem.appendTo('ul');
        $('#activity-name').val('');

        $('ul').on('click', 'li', function() {
            $(this).toggleClass('completed');
        });
    });
});