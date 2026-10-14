
//the bulk of the program is a nested while loop
//the first while basically allows the entire program to
//reset and run again if the user desires
//if they don't, they can stop the program and it won't prompt them again

//this program essentially creates a multiplication table where
//the user can decide how many rows they want to generate

userContinue='y';//default value is set so where the program can run at least once on its own
while(userContinue=='y'){
    //starting variables
    let one = 1;
    let two = 2;
    let three = 3;
    let four = 4;
    let five = 5;
    let six = 6;
    let seven = 7;
    let eight = 8;
    let nine = 9;

    let start = 1;
    let border = '--------------------';

    let userNum = Number(prompt('How many rows do you want the multiplication table to have?:'));


    //table generation
    while(userNum >= start){
        //variable definitions
        let oneT=one*start;
        let twoT=two*start;
        let threeT=three*start;
        let fourT=four*start;
        let fiveT=five*start;
        let sixT=six*start;
        let sevenT=seven*start;
        let eightT=eight*start;
        let nineT=nine*start;

        //combines all chart entries here instead of in a stupid long print
        let combination =  '|' + oneT + '|' + twoT + '|' + threeT + '|' + fourT + '|' + fiveT + '|' + sixT + '|' + sevenT + '|' + eightT + '|' + nineT + '|';
    
        //allows for a somewhat flexible border even if it sucks
        if(start%2==1){//basically adds border every odd number
            border = border + '--';
        }

        //print and increment
        console.log(border + '\n'+ combination + '\n' + border);
        start++;
    

        //stop the table from being generated early
        let choice = prompt('Do you wish to continue? Type n for no:');
        if(choice=='n'){
            start = userNum+1;
        }
    }

    //creates a break so multiple tables dont blend
    console.log('\n\n[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]\n\n');

    //prompts user if they wish to create another table
    userContinue=prompt('\n\nWould you like to try again?\n\n\n Type y to go again:');
}