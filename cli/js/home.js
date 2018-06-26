window.onload = function () {

    const homepage = {
        init() {
            axios.default.baseUrl = "http://localhost:3000/movies";
            homepage.func.render();
            document.addEventListener('click', homepage.func.handleDeleteListener, false);

        },
        func: {
            render() {
                let movieRow = document.getElementById("movie-row");
                movieRow.innerHTML = '';

                axios.get("http://localhost:3000/movies")
                    .then(function (response) {
                        let str = '', movies = response.data;
                        movies.forEach(movie => {
                            str += `<li class="movie-box">
        <div class="m-title">${movie.title}</div>
        <div class="m-score">${movie.date}</div>
        <div class="m-score">${movie.director}</div>
        <i class="delete" data-id=${movie.id}>-</i>
      
    </li>`
                        });

                        movieRow.innerHTML += str;


                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            },
            handleDeleteListener(e) {
                let movieId = e.target.getAttribute("data-id");
                if (movieId) {
                    let confireDel = confirm("确认删除？");
                    if (confireDel)
                        deleteMovieById(movieId)
                    else return
                } else return
            },
            deleteMovieById(movieId) {
                axios.delete(`http://localhost:3000/movies/${movieId}`)
                    .then(function (response) {
                        if (response.status === 200) {
                            render()

                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        }
    }

    homepage.init();
};