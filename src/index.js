

window.globalVariable ='a'

function setGlobalVariable(value) {
    window.globalVariable = value;
  }


window.onload = function() {
  window.hello = hello;
};

window.a = true

let instructions=[];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function _StartConsume(instructions) {
    while (instructions.length > 0) {
      var currentInstruction = instructions.shift();
      // console.log(currentInstruction["type"]);
      var s = currentInstruction["value"]
      // console.log(s)
      setGlobalVariable(currentInstruction["type"]);
      // await delay(1000*(s/2));
      if (currentInstruction["type"]=="jump_forward"){
        await delay(1000*(s/2));
      }
      else if (currentInstruction["type"]=="move_forward") {
        await delay(1000*s);
      }
      else if (currentInstruction["type"]=="move_backward") {
        await delay(1000*s);
      }
      else {
        await delay(2000);

      }
    }
    setGlobalVariable("do_nothing")
    console.log("no instructions to execute");
  }
  

window.blockly_loaded = function(blockly) {
window.Blockly = blockly;
defineActions();
};

function getValue(name) {
    if (name === 'ppp') {
      // Return the name for 5 seconds
      const startTime = new Date().getTime();
      const endTime = startTime + 5000;
  
      while (new Date().getTime() < endTime) {
        // Return the name
        return name;
      }
  
      // Return the age
      const age = 25;
      return age;
    }
  }

// console.log(globalVariable)
window.run_code = function() {
    instructions=[];
    var code = window.Blockly.JavaScript.workspaceToCode(window.Blockly.mainWorkspace);
    eval(code);
    _StartConsume(instructions)
    // setGlobalVariable(instructions[0]["type"]);
};


window.reset_car = async function() {
  setGlobalVariable("move_forward");
  await delay(10);
  resetCharacterPosition()
  setGlobalVariable("do_nothing");
};



function defineActions(){
window.Blockly.JavaScript['actor_move_forward'] = function(block) {
    var dropdown_actor_move_forward_distance = block.getFieldValue('actor_move_forward_distance');
    var code = "instructions.push({type:'move_forward',value:"+dropdown_actor_move_forward_distance+"});";
    return code;
};
window.Blockly.JavaScript['actor_move_backward'] = function(block) {
  var dropdown_actor_move_backward_distance = block.getFieldValue('actor_move_backward_distance');
  var code = "instructions.push({type:'move_backward',value:"+dropdown_actor_move_backward_distance+"});";
  return code;
};

window.Blockly.JavaScript['actor_turn'] = function(block) {
    var direction = block.getFieldValue('actor_turn_direction');
    if (direction == "turnLeft"){
      var code = "instructions.push({type:'turnLeft',value:''});";
    }
    else{
      var code = "instructions.push({type:'turnRight',value:''});";
    }
    
    return code;
};

window.Blockly.JavaScript['actor_jump_forward'] = function(block) {
    var dropdown_actor_jump_forward_distance = block.getFieldValue('actor_jump_forward_distance');
    var code = "instructions.push({type:'jump_forward',value:"+dropdown_actor_jump_forward_distance+"});";
    return code;
};
}