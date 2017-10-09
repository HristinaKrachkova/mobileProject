$(function() {
    $(document).on('click', '#userName',function() {
        var user = JSON.parse(localStorage.getItem('users')).find(x => x.username == $('#userName').html())
        var result = user.likes.slice()
        console.log(result)
        var searchTemplate = $('#search-template').html();
        var template = Handlebars.compile(searchTemplate);
        var resultRandom = { results: result };
        console.log(resultRandom)
        var resulta = template(resultRandom);
        console.log(resulta)
        
         $('#searchResult').html(resulta);
        $('#searchResult').css('display', 'block');
         $('.hiddenDiv').css('display', 'none');
    })
})