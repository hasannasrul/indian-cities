const list = document.getElementById('match-list');
const search = document.getElementById('search');

search.addEventListener('input',trace);

function trace() {
    fetch('cities.json')
    .then(res => res.json())
    .then(data => {
        let matches = data.filter(state => {
            const regex = new RegExp(`^${search.value}`,'gi');
            return state.City.match(regex)|| state.State.match(regex);
        });

        if(search.value.length === 0){
            matches = [];
        }

        let output = '';
        matches.forEach(element => {
            output += `
            <div class="card text-white bg-success mb-3 mt-5">
                <div class="card-body">
                    <h4 class> ${element.City} (${element.District})
                    <span class="text-primary"> ${element.State}</span></h4>
                </div>
            </div>
            `
        });
        list.innerHTML = output;
        
    })
}




// fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities')
//     .then(res => res.json())
//     .then(data => {
//         let output = '';
//         data.forEach(element => {
//             output += `
//             <div class="card text-white bg-success mb-3 mt-5">
//                 <div class="card-body">
//                     <ul class="mt-5">
//                         <li> City : ${element.City} </li>
//                         <li> State : ${element.State} </li>
//                         <li> District : ${element.District} </li>
//                     </ul>
//                 </div>
//             </div>
//             `
//         });
//         list.innerHTML = output;
//     })

    