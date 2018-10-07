// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = prop => prop;


const createNotEnumerableProperty = (NotEnumerableProperty) => {
    Object.defineProperty(Object.prototype, NotEnumerableProperty, { value: "value", enumerable: false });
    return NotEnumerableProperty;
};


const createProtoMagicObject = () => {
    var func = function() {};
    func._proto_ = func.prototype;
    return func;
};

var inc = 0;
const incrementor = () => {
    inc++;
    return incrementor;
};
incrementor.toString = () => inc;

const asyncIncrementor = () => {
    if (asyncIncrementor.counter === undefined) {
        asyncIncrementor.counter = 0;
    }
    asyncIncrementor.counter++;
    return asyncIncrementor.counter;
};


const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = (a) => {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function() { resolve(a); }, 1000);    
    });
    return promise;
};

const getDeepPropertiesCount = object => {
    var result = 0;
    const func = object => {
        for (key in object) {
            func(object[key]);
            result++;
        }
        return result;
    };
    return func(object);
};

const createSerializedObject = () => null;

const toBuffer = () => null;
const sortByProto = () => null;

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;