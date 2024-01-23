

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const img = document.getElementById('crew-member-img');
    const options = document.querySelectorAll('.option');

for (const option of options) {
    option.addEventListener('click',() => {
        deselectOptions();
        selectContent(option.dataset.option);
        let selectedOption = document.querySelector(`[data-option="${option.dataset.option}"]`);
        selectedOption.dataset.active = 'true';
    });
}


function selectContent(id){
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            switch(id) {
                case '1':
                    updateContent(json['technology'][0])           
                    break;
                case '2':
                    updateContent(json['technology'][1])           
                    break;
                default:
                    updateContent(json['technology'][2])           
                    break;
            }
        });
}

function updateContent(content){
    title.innerHTML = content['name'];
    description.innerHTML = content['description'];
    img.src = content['images']['portrait'];
}

function deselectOptions(){
    for (const option of options) {
        option.dataset.active = false;
    }
}