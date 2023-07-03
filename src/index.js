import * as THREE from 'three';
import TestCharacter from './testcharacter.js';
var testchar = new TestCharacter();


const timeID = setInterval(testchar._consumeCommandsNew, 1000);

function timeAndDate() {
    console.log(new Date());
}

let instructions = [];
window.blockly_loaded = function(blockly) {
    // init the game only after window.Blockly definition
    window.Blockly = blockly;
    // console.log(blockly);
    defineActions();
    

};

window.reset_car = function() {
    // game.actor.reset();
    testchar.reset()
};

window.run_code = function() {
    // instructions=[];
    var code = window.Blockly.JavaScript.workspaceToCode(window.Blockly.mainWorkspace);
    eval(code);
    testchar.startConsume(instructions);
    // console.log('setting position...')
    // testchar.mesh.position.setY(5.6)
    // console.log('position set!')

    // requestAnimationFrame(updateCharacter);

};

function updateCharacter() {
  testchar.update(); // Call the update method of the TestCharacter class
  requestAnimationFrame(updateCharacter); // Schedule the next frame update
}


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
