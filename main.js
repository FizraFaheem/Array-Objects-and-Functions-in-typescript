var main = function () {
    var people = {
        friends: []
    };
    var friend1 = {
        firstName: "Qirat",
        lastName: "Faheem",
        id: 1
    };
    var friend2 = {
        firstName: "Nimra",
        lastName: "Fazal",
        id: 2
    };
    var friend3 = {
        firstName: "Fizra",
        lastName: "Faheem",
        id: 3
    };
    people.friends.push(friend1, friend2, friend3);
    console.log(people);
};
main();
