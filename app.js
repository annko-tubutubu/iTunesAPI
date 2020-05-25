
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
            let imgMore = collectionViewUrl.indexOf
            $('#results').append(
             Card({img:imgText,title:name,detail:detail})
            );
    }
    }).fail((error) => {
        console.log(error)
    })
})

https://is3-ssl.mzstatic.com/image/thumb/Music20/v4/d4/6c/af/d46caf98-ff6c-1707-135d-58d6ed9ea6a2/source/100x100bb.jpg

