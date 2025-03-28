function Fun(){
    let mybucket = {
        "vegetables": {
            "tomato": 36,
            "beetroot": 35
        },
        "fruits": {
            "apple": 34,
            "banana": 34
        }
    };

    const list =["Rakesh","Ramesh", "Ganesh", "vignesh","Surendra"];
    const listMap = list.map((value,key)=><li key={key}>{value}</li>);
    const persons = [
        {id:12, name:"Rakes", age:24},
        {id:13,name:"Ramesh",age:25},
        {id:14, name:"Ganesh", age:17},
    ];
    return (
        <div>
        <h1>my daily customers</h1>
        <ul>
        {listMap}
        </ul>
        <h2> and there basket full of the </h2>
        <ul>
            {Object.entries(mybucket).map(([category, items]) => (
                <li key={category}>
                    {category}
                    <ul>
                        {Object.entries(items).map(([item, count]) => (
                            <li key={item}>
                                {item}: {count}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        <ul>
           {(persons.map((person) => (
             person.age >18 ?
                <li key={person.id}>{person.name} above 18plus.</li>
                :<li key={person.id}>{person.name} below 18plus.</li>
            )))} 
        </ul>
        </div>
    );
}

export default Fun;