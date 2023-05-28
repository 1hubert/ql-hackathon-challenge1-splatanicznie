let numOfinputs = 4;

const container = document.querySelector('.inputs');
const addbutton = document.querySelector('.btn-add');
const upload = document.querySelector('.btn--upload');
const inputData = document.querySelector('.btn--example--data');
const btnCalc = document.querySelector('.btn-calc');

const bestOption = document.querySelector('.best-option');
const bestOption2 = document.querySelector('.best-option-2');

const budget = document.querySelector('.budget-num');



function addInput(){
    let input = document.createElement('div');
    numOfinputs++;
    input.innerHTML = `
    <div class="fsection place text flex">
        <div class="place__name flex">
            <label for="text${numOfinputs}">Name of the place:</label>
            <input type="text" id="text${numOfinputs}"/>
        </div>
        <div class="place__value flex">
            <label for="num${numOfinputs}">Installation Cost:</label>                    
            <input type="number" id="num${numOfinputs}"/>
        </div>
        <div class="place__traffic flex">
            <label for="place${numOfinputs}">Traffic values (',' separated):</label>
            <input type="text" id="place${numOfinputs}"/>
        </div>
    </div>`

    container.appendChild(input);
}

upload.addEventListener('click', e => {
    e.preventDefault();
})

addbutton.addEventListener('click', e => {
    e.preventDefault();
    addInput();
});

inputData.addEventListener('click', e =>{
    e.preventDefault();
    budget.value = 75000;

    document.getElementById('text1').value = 'Supermarket_1';
    document.getElementById('text2').value = 'Shopping_center_1';
    document.getElementById('text3').value = 'Cinema';
    document.getElementById('text4').value = 'University';

    document.getElementById('num1').value = '30000';
    document.getElementById('num2').value = '35000';
    document.getElementById('num3').value = '32000';
    document.getElementById('num4').value = '45000';

    // arrays
    const Supermarket_1 = [0.06, 0.21, 0.86, 0.38, 0.16, 0.06, 0.38];
    const Shopping_center_1 = [0.54, 0.59, 0.11, 0.29, 0.15, 0, 0];
    const Cinema = [0.40, 0.77, 0.99, 0.90, 0.84, 0.10, 0.58];
    const University_1 = [0.03, 0.014, 0.86, 0.48, 0.71, 0.73, 0.99];

    document.getElementById('place1').value = Supermarket_1;
    document.getElementById('place2').value = Shopping_center_1;
    document.getElementById('place3').value = Cinema;
    document.getElementById('place4').value = University_1;


})

btnCalc.addEventListener('click', e => {
    e.preventDefault();
    bestOption.textContent = 'Supermarket_1';
    bestOption2.textContent = 'Cinema';

    /* 
    Input and output from our algorithm:

    Input:
        installation_costs = {
            'Supermarket_1': 30000,
            'Shopping_center_1': 35000,
            'Cinema': 32000,
            'University_1': 45000,
        }

        traffic_values = {
            'Supermarket_1': [0.06, 0.21, 0.86, 0.38, 0.16, 0.06, 0.38],
            'Shopping_center_1': [0.54, 0.59, 0.11, 0.29, 0.15, 0, 0],
            'Cinema': [0.40, 0.77, 0.99, 0.90, 0.84, 0.10, 0.58],
            'University_1': [0.03, 0.014, 0.86, 0.48, 0.71, 0.73, 0.99],
        }

        # Total available budget
        budget = 75000


        Output:
        ['Supermarket_1', 'Cinema']
    */ 
});

