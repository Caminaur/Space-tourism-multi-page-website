    
    options = document.querySelectorAll('.option');

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const distance = document.getElementById('distance');
    const estimatedTravel = document.getElementById('estimatedTravel');
    const planetImg = document.getElementById('planet-img');
    

    for (let seledtedOption of options) {
        seledtedOption.addEventListener('click',()=>{
            setOptions();
            document.getElementById(seledtedOption.id).dataset.option = 'selected';
            selectContent(seledtedOption.id);
        });
    }

    function setOptions(){
        for (option of options) {
            option.dataset.option = 'unselected';
        }
    }
    

    function selectContent(id){
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                switch(id) {
                    case 'Moon':
                        updateContent(json['destinations'][0])           
                        break;
                    case 'Mars':
                        updateContent(json['destinations'][1])           
                        break;
                    case 'Europa':
                        updateContent(json['destinations'][2])           
                        break;
                    default:
                        updateContent(json['destinations'][3])           
                        break;
                }
            });
    }

    function updateContent(content){
        title.innerHTML = content['name'];
        description.innerHTML = content['description'];
        distance.innerHTML = content['distance'];
        estimatedTravel.innerHTML = content['travel'];
        planetImg.src = content['images']['png'];
    }