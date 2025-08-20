import { AbstractControl } from "@angular/forms";

// return true if the word is found in the string that we pass in.
export function avoidWord(control: AbstractControl){
    // when word 'hack' is foundm retrun avoidWord: true
    if(control.value && control.value.includes('hack')){
        return { avoidWord: true };
    }
    // when word 'hack' is not found, return null
    return null;
}