const containerVideos = document.querySelector('.videos__container');

const api = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos) => 
    videos.foreach((video) => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descircao-video">
                <img class="img-canal" src="${video.imgaem}" alt="Logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
            </li>
        `;
    })
)
.catch((error)=> {
    containerVideos.innerHTML = `
    <p> Houve um erro para carregar os vídeos: ${error}! </p>
    `;
})