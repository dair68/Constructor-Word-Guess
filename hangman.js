//prints hangman
function printHangman(guesses) {
    
    //creating this!
    //   3____     
    //   |    |4    
    //   |    0 5   
    //   |  7/|6\\8  
    //  2|  9/ \\10  
    //   |         
    // __|_________1

    var segments = 10 - guesses;

    switch (segments) {
        case 0:
            console.log("\n\n\n\n\n\n\n");
            break;
        case 1:
            console.log("\n\n\n\n\n\n");
            console.log("____________");
            break;
        case 2:
            console.log("\n");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 3:
            console.log("   ____     ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 4:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 5:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |    0    ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 6:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |    0    ");
            console.log("  |    |    ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 7:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |    0    ");
            console.log("  |   /|    ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 8:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |    0    ");
            console.log("  |   /|\\  ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 9:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |    0    ");
            console.log("  |   /|\\  ");
            console.log("  |   /     ");
            console.log("  |         ");
            console.log("__|_________");
            break;
        case 10:
            console.log("   ____     ");
            console.log("  |    |    ");
            console.log("  |    0    ");
            console.log("  |   /|\\  ");
            console.log("  |   / \\  ");
            console.log("  |         ");
            console.log("__|_________");
    }
}

module.exports = printHangman;