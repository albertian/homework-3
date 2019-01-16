/*
When we call function as method of object team this-word points to the object so this.members is a proper array.
Anonymous function doesnt inherit this-context, so this points to global object and probably without teamName property.
Easiest way is to use arrow function expression. It support context binding.
*/

const team = {
    members: ['Superman', 'Batman', 'Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function() {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
team.teamSummary();
