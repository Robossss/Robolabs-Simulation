import { useThree } from 'react-three-fiber';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export class CharacterControls {
    model: THREE.Group
    mixer: THREE.AnimationMixer
    animationsMap: Map<string, THREE.AnimationAction> = new Map() // walk , run , idle
    orbitControl: OrbitControls
    
    toggleRun: boolean = true
    currentAction:string


    constructor(model:THREE.Group,
        mixer:THREE.AnimationMixer,
        animationsMap: Map<string,THREE.AnimationAction>,
        orbitcontrol:OrbitControls,
        currentAction:string) {
            this.model = model
            this.mixer = mixer
            this.animationsMap = animationsMap;
            this.currentAction = currentAction
            this.animationsMap.forEach((value,key)=>{
                if (key == currentAction){
                    value.loop
           
                    value.play()
                }

            })
            this.orbitControl = orbitcontrol
    

        }

    public SwitchRunToggle (){
        this.toggleRun = !this.toggleRun

    }

    public update (delta:number, keysPressed:any){
        this.mixer.update(delta)
        
    }
}