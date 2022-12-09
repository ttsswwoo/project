let content = document.querySelector('.content')

let mas1 = [
    { id: 1, sarlavha: "Sarvqomat dilbarim", hikoya: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, commodi exercitationem nostrum modi ad libero blanditiis nemo minima adipisci sapiente est aliquid hic aspernatur rem eum laborum quisquam reprehenderit temporibus ratione amet rerum repellendus, quam a? Repellat dignissimos aliquam minima, ipsum totam sequi labore, dolores tempore corrupti odit blanditiis facilis accusamus alias nesciunt, quae repudiandae quia! Placeat debitis corrupti labore rem suscipit, quidem hic sit cupiditate, laudantium, omnis odio non quasi. Iure ut debitis nobis ipsam nam provident, obcaecati natus. Alias, mollitia harum molestiae voluptatem ducimus voluptates fugit sapiente? Aspernatur exercitationem esse ad fugit rem dicta, distinctio consequatur sed quaerat.', avtor: 'Chingiz Aytmatov', yili: '(1961)' },
    { id: 2, sarlavha: "O\'tkan kunlar", hikoya: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, commodi exercitationem nostrum modi ad libero blanditiis nemo minima adipisci sapiente est aliquid hic aspernatur rem eum laborum quisquam reprehenderit temporibus ratione amet rerum repellendus, quam a? Repellat dignissimos aliquam minima, ipsum totam sequi labore, dolores tempore corrupti odit blanditiis facilis accusamus alias nesciunt, quae repudiandae quia! Placeat debitis corrupti labore rem suscipit, quidem hic sit cupiditate, laudantium, omnis odio non quasi. Iure ut debitis nobis ipsam nam provident, obcaecati natus. Alias, mollitia harum molestiae voluptatem ducimus voluptates fugit sapiente? Aspernatur exercitationem esse ad fugit rem dicta, distinctio consequatur sed quaerat.', avtor: 'Abdulla Qodiriy', yili: '(1928)' },
    { id: 3, sarlavha: "Mehrobdan chayon", hikoya: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, commodi exercitationem nostrum modi ad libero blanditiis nemo minima adipisci sapiente est aliquid hic aspernatur rem eum laborum quisquam reprehenderit temporibus ratione amet rerum repellendus, quam a? Repellat dignissimos aliquam minima, ipsum totam sequi labore, dolores tempore corrupti odit blanditiis facilis accusamus alias nesciunt, quae repudiandae quia! Placeat debitis corrupti labore rem suscipit, quidem hic sit cupiditate, laudantium, omnis odio non quasi. Iure ut debitis nobis ipsam nam provident, obcaecati natus. Alias, mollitia harum molestiae voluptatem ducimus voluptates fugit sapiente? Aspernatur exercitationem esse ad fugit rem dicta, distinctio consequatur sed quaerat.', avtor: 'Abdulla Qodiriy', yili: '(1926)' },
    { id: 4, sarlavha: "Гранатовый браслет", hikoya: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, commodi exercitationem nostrum modi ad libero blanditiis nemo minima adipisci sapiente est aliquid hic aspernatur rem eum laborum quisquam reprehenderit temporibus ratione amet rerum repellendus, quam a? Repellat dignissimos aliquam minima, ipsum totam sequi labore, dolores tempore corrupti odit blanditiis facilis accusamus alias nesciunt, quae repudiandae quia! Placeat debitis corrupti labore rem suscipit, quidem hic sit cupiditate, laudantium, omnis odio non quasi. Iure ut debitis nobis ipsam nam provident, obcaecati natus. Alias, mollitia harum molestiae voluptatem ducimus voluptates fugit sapiente? Aspernatur exercitationem esse ad fugit rem dicta, distinctio consequatur sed quaerat.', avtor: 'Александр Куприн', yili: '(1929)' },
    { id: 5, sarlavha: "Моя жизнь", hikoya: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, commodi exercitationem nostrum modi ad libero blanditiis nemo minima adipisci sapiente est aliquid hic aspernatur rem eum laborum quisquam reprehenderit temporibus ratione amet rerum repellendus, quam a? Repellat dignissimos aliquam minima, ipsum totam sequi labore, dolores tempore corrupti odit blanditiis facilis accusamus alias nesciunt, quae repudiandae quia! Placeat debitis corrupti labore rem suscipit, quidem hic sit cupiditate, laudantium, omnis odio non quasi. Iure ut debitis nobis ipsam nam provident, obcaecati natus. Alias, mollitia harum molestiae voluptatem ducimus voluptates fugit sapiente? Aspernatur exercitationem esse ad fugit rem dicta, distinctio consequatur sed quaerat.', avtor: 'Мохандaс Карамчанд Ганди', yili: '(1925-1929)' },
    { id: 6, sarlavha: "Герои нашего времени", hikoya: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, commodi exercitationem nostrum modi ad libero blanditiis nemo minima adipisci sapiente est aliquid hic aspernatur rem eum laborum quisquam reprehenderit temporibus ratione amet rerum repellendus, quam a? Repellat dignissimos aliquam minima, ipsum totam sequi labore, dolores tempore corrupti odit blanditiis facilis accusamus alias nesciunt, quae repudiandae quia! Placeat debitis corrupti labore rem suscipit, quidem hic sit cupiditate, laudantium, omnis odio non quasi. Iure ut debitis nobis ipsam nam provident, obcaecati natus. Alias, mollitia harum molestiae voluptatem ducimus voluptates fugit sapiente? Aspernatur exercitationem esse ad fugit rem dicta, distinctio consequatur sed quaerat.', avtor: 'Михаил Юрьевич Лермонтов', yili: '(1880)' }
]

function main() {

    let mavzu = document.querySelector('#mavzu').value;
    let hikoya = document.getElementById('hikoya').value;

    let newObject = {
        id: Math.round(Math.random() * 100),
        sarlavha: mavzu,
        hikoya: hikoya
    }
    console.log(newObject);

    if (mavzu != '' && hikoya != '') {
        mas1.map((item) => {
            console.log(`<li><h1>${item.sarlavha}</h1></li> <li>${item.hikoya}</li> <li><h5>${item.avtor} ${item.yili}</h5></li>`)
        })
        mas1 = [newObject, ...mas1]
        console.log(mas1);
    }
    content.innerHTML = mas1.map((item) => {
        return (`<li><h1>${item.sarlavha}</h1></li> <li> ${item.hikoya}</li> <li style="color: #ECAF46FF;"><h5>${item.avtor} ${item.yili}</h5></li>`)
    }).join('')

    document.querySelector('#mavzu').value = '';
    document.getElementById('hikoya').value = '';
    return mas1
}

join('')