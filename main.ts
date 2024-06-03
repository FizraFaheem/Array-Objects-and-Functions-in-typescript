// Define an interface for the friend object
interface Friend {
    firstName:string;
    lastName:string;
    id?: number;
}
type People ={
friends :Friend[];
}
const main =() =>{
    const people : People ={
        friends:[]
    }
    const friend1 : Friend ={
        firstName: "Qirat",
        lastName: "Faheem",
        id : 1
    }
    const friend2:Friend = {
        firstName: "Nimra",
        lastName: "Fazal",
        id : 2
    };
    const friend3: Friend = {
        firstName: "Fizra" ,
        lastName: "Faheem" ,
        id: 3
    }
    people.friends.push(friend1,friend2,friend3);
    console.log(people);
};
main();
