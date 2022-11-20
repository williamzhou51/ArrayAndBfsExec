
let first=[
    {uuid: 2, name: 'Darling'},
    {uuid: 3, name: 'Cry-Baby'},
    {uuid: 4, name: 'Snitch'},
    {uuid: 5, name: 'Pawn'}
];

let second= [ {uuid: 1, role: 'admin'},
    {uuid: 2, role: 'contributor'},
    {uuid: 3, role: 'owner'},
    {uuid: 4, role: 'contributor'}
];

const mergeObjects = (arr1, arr2) => {
    const res= [];

    for (const obj of arr1) {
        const dup = arr2.find(
            a => a['uuid'] === obj['uuid'],
        );
        if (dup) {
            res.push(Object.assign(obj, dup));
        } else {
            res.push(obj);
        }
    }
    for (const obj of arr2) {
        const dup = res.find(
            a => a['uuid'] === obj['uuid'],
        );
        if (!dup) {
            res.push(obj);
        }
    }

    res.forEach(element => {
        if(!element.hasOwnProperty('name')) {
            element.name=null;
        }
        if(!element.hasOwnProperty('role')) {
            element.role =null;
        }
    });
    res.sort(function(a, b) {
        return a.uuid - b.uuid;
    });
    console.log(res);

    return res;
}

mergeObjects(first, second);

