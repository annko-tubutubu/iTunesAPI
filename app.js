
const Card = ({img,title,detail}) =>`
    
    <div class="col-4 mb-5">

        <div class="card">
            <img src="${img}" class="card-img-top" alt="...">

            <div class="card-body">

                <h5 class="card-title">${title}</h5>
                <p class="card-text"></p>
                <a href = "${detail}">
                <button type="button" class="article-btn">Detail</button></a>
            
            </div>
        </div>
        
    </div>

`;

$('#search-btn').on('click', () => {

    $('#results').empty();



    const word = $('#seach-word').val()

    $.ajax({
        url:'https://itunes.apple.com/search?parameterkeyvalue',
        type:'GET',
        data:{
            lang:'ja_jp',
            entry:'music',
            media:'music',
            country:'JP',
            term:word,
            limit:'50',
        },
        dataType: 'jsonp',
    }).done((response) => {
        console.log(response)
        for (let i = 0; i < response.results.length; i++) {
            let imgText =response.results[i].artworkUrl100;
            let name =response.results[i].collectionName;
            let detail= response.results[i].collectionViewUrl
            let imgUp = imgText.replace(/100x100bb/g,'600x600bb')
            $('#results').append(
             Card({img:imgUp,title:name,detail:detail})
            );
    }
    }).fail((error) => {
        console.log(error)
    })
})


