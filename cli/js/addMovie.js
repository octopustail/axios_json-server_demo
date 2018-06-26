window.onload = function () {
    let addButton = document.getElementById("addButton")
    const form = document.getElementById("addMovie");


    addButton.addEventListener('click', e => {
        e.preventDefault();
        const movie = getAddedMovie("addMovie");
        axios.post('http://localhost:3000/movies',movie).then(
            function (response) {
                if (response.data) {
                    console.log('succeed');
                    form.reset();

                }
            }
        ).catch(function (error) {
            console.log(error)
        })

    });

    function getAddedMovie(formId) {
        const form = document.getElementById(formId);
        let tagElem = form.getElementsByTagName('input');

        let movieData = {};
        for (let item of tagElem) {
            console.log('item', item);
            movieData[item.name] = item.value;
        }
        return movieData;

    }
};