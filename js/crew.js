


    const profession = document.getElementById('profession');
    const crewMemberName = document.getElementById('name');
    const description = document.getElementById('description');
    const img = document.getElementById('crew-member-img');
    const options = document.querySelectorAll('.option');
    let autoCarrousel = true;
    
for (const option of options) {
    option.addEventListener('click',() => {
        deselectOptions();
        selectContent(parseInt(option.dataset.option));
        let selectedOption = document.querySelector(`[data-option="${option.dataset.option}"]`);
        selectedOption.dataset.active = 'true';
        autoCarrousel = false;
    });
}

setInterval(autoUpdate,5000);
setInterval(startCarrousel,15000);


function startCarrousel(){
    autoCarrousel = true;    
}

function autoUpdate(){
    if (autoCarrousel) {
        let currentOption = parseInt(document.querySelector(`[data-active="true"]`).dataset.option);
        let nextOption = (currentOption<4) ? currentOption + 1 : 1;
        deselectOptions();
        selectContent(nextOption);
        let selectedOption = document.querySelector(`[data-option="${nextOption}"]`);
        selectedOption.dataset.active = 'true';
    }
}


function selectContent(id){
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            switch(id) {
                case 1:
                    updateContent(json['crew'][3])           
                    break;
                case 2:
                    updateContent(json['crew'][1])           
                    break;
                case 3:
                    updateContent(json['crew'][2])           
                    break;
                default:
                    updateContent(json['crew'][0])           
                    break;
            }
        });
}

function updateContent(content){
    profession.innerHTML = content['role'];
    crewMemberName.innerHTML = content['name'];
    description.innerHTML = content['bio'];
    img.src = content['images']['png'];
}

function deselectOptions(){
    for (const option of options) {
        option.dataset.active = false;
    }
}