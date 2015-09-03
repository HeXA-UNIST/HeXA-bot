// Description:
//   holiday detector script
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot is it weekend ?  - returns whether is it weekend or not
//   hubot is it holiday ?  - returns whether is it holiday or not

module.exports = function(robot) {
    robot.hear(/주말(이냐|이니)?\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "응" : "아니");
    });
}
