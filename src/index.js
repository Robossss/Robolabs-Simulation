import Actor from "./actor";
function globalFunction() {
  // Your function code here
  console.log("This is a global function.");
}

window.onload = function() {
  window.globalFunction = globalFunction;
};

// window.global = 'hhhhh'
// let instructions=['llll'];

// window.load_blockly = function(blockly) {
//   console.log('blockly dildo')
//     // init the game only after window.Blockly definition
// }

window.blockly_loaded = function(blockly) {
// console.log('Huge dildo')
// init the game only after window.Blockly definition
window.Blockly = blockly;
defineActions();
// console.log('Garden gnome')
// console.log(window.global)
// console.log('Gardern gnome')
};

window.run_code = function() {
  instructions=[];
  var code = window.Blockly.JavaScript.workspaceToCode(window.Blockly.mainWorkspace);
  eval(code);
  console.log(instructions)
  // startConsume(instructions);
};



function defineActions(){
window.Blockly.JavaScript['actor_move_forward'] = function(block) {
    var dropdown_actor_move_forward_distance = block.getFieldValue('actor_move_forward_distance');
    var code = "instructions.push({type:'move_forward',value:"+dropdown_actor_move_forward_distance+"});";
    return code;
};

window.Blockly.JavaScript['actor_turn'] = function(block) {
    var direction = block.getFieldValue('actor_turn_direction');
    var code = "instructions.push({type:'turn',value:'"+direction+"'});";
    return code;
};

window.Blockly.JavaScript['actor_jump_forward'] = function(block) {
    var dropdown_actor_jump_forward_distance = block.getFieldValue('actor_jump_forward_distance');
    var code = "instructions.push({type:'jump_forward',value:"+dropdown_actor_jump_forward_distance+"});";
    return code;
};
}