import { evaluate, pow, sqrt, pi, round } from 'mathjs';

export default function calculation(obj, buttonName) {

    let objectContent = obj;

    console.log('inside the function: ' + objectContent.result);

    if (buttonName === "=") {
        return calculate(objectContent);
    }

    else if (buttonName === "AC") {
        return reset();
    }
    else if (buttonName === "CE" && objectContent.result != 'error') {
        return backspace(objectContent);
    }
    else if (buttonName === "percentage") {
        return {
            result: evaluate(`${objectContent.result}/100`),
            reset: true
        }
    }

    else if (buttonName === "power-two") {
        return {
            result: pow(objectContent.result, 2),
            reset: true
        }
    }
    else if (buttonName === "power-three") {
        return {
            result: pow(objectContent.result, 3),
            reset: true
        }
    }

    else if (buttonName === "square-root") {
        return {
            result: sqrt(objectContent.result),
            reset: true
        }
    }

    else if (buttonName === "pi") {
        return {
            result: pi,
            reset: true
        }
    }
    else {
        if (obj.reset == false) {
            return { result: objectContent.result + buttonName }
        }
        else {
            return {
                result: '',
                reset: false
            }
        }
    }
}

const calculate = (objectContent) => {
    try {
        return {
            result: (round(evaluate(objectContent.result).toFixed(17)) + '' || ''),
            reset: true,
        };

    } catch (e) {
        return {
            result: "error",
            reset: true,
        };
    }
};

const reset = () => {
    return {
        result: '',
        reset: false
    }
};

const backspace = (objectContent) => {
    return {
        result: objectContent.result.slice(0, -1)
    }
};

