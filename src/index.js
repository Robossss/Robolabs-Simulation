// import {directions} from "./Character.jsx"

window.globalVariable ='a'

function setGlobalVariable(value) {
    window.globalVariable = value;
  }

window.onload = function() {
  window.hello = hello;
};



let instructions=[];



window.blockly_loaded = function(blockly) {
window.Blockly = blockly;
defineActions();
};

console.log(globalVariable)
window.run_code = function() {
    instructions=[];
    var code = window.Blockly.JavaScript.workspaceToCode(window.Blockly.mainWorkspace);
    eval(code);
    setGlobalVariable(instructions[0]["type"]);
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