import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

 function allOlder(f: Friend) : string {
    const result = friends.map(friends => `${friends.name} is now ${friends.age + 1}`).join(" ,")
    return result
 }

console.log(older(friends[0]))
console.log(allOlder)

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

function addColleague (array: Colleague[],     name: string, department: string, email: string, extension: number ) {
    const newColleague: Colleague = { name, department, contact: {email, extension}};
    array.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com", 123);
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));