let inputDirection = {x:0, y:0};
let LastinputDirection = {x:0, y:0};

window.addEventListener('keydown', e =>{
    switch (e.key) {
        case 'ArrowUp':
            if(LastinputDirection.y != 0) break;
            inputDirection = {x: 0, y: -1};
            break;
            case 'ArrowDown':
                if(LastinputDirection.y != 0) break;
                inputDirection = {x: 0, y:1};
                break;
                case 'ArrowLeft':
                    if(LastinputDirection.x != 0) break;
                    inputDirection = {x: -1, y: 0};
                    break;
                    case 'ArrowRight':
                        if(LastinputDirection.x != 0) break;
                        inputDirection = {x: 1, y: 0};
                        break;            
    
    }
});

export function getInputDirection()
{
    LastinputDirection = inputDirection;
    return inputDirection;
}