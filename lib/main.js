var h = window.innerHeight;
var output = function (input) {
    switch (input) {
        case 'hi': return 'hi'; break;
        case 'help': return 'available commands \n - hi \n - ls \n'; break;
        case 'ls': return "help                     about                     contact\nlinks                     blog\n\ "; break;
        default: return input + ' Command not found, Try \'help\'\n';
    }
}
$('#console').css('height', h);
var jqconsole = $('#console').jqconsole('Hi welcome to Shadab\'s personal website\n', '> ');
var startPrompt = function () {
    // Start the prompt with history enabled.
    jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        // jqconsole.Write(output(input) + '\n', 'jqconsole-output',false);
        if (input) jqconsole.Write(output(input) + '\n', 'jqconsole-output', false);
        // jqconsole.Write('\033[5m');
        startPrompt();
    });
};
startPrompt();
