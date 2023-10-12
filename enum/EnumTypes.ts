
//numeric enum
enum Positions{
    UP=1,
    DOWN,
    LEFT,
    RIGHT
}
console.log(Positions)
console.log(Positions.LEFT)

//numeric enum with random value assigned which is not sequential
enum Directions{
    EAST=5,
    WEST=4,
    NORTH=8,
    SOUTH=10
}

console.log(Directions);

//string enum
enum AppStatus{
    ACTIVE='ACT',
    DEACTIVE='DEACT',
    PAUSED='PAUSE',
    STOPPED='STOP'
}

console.log(AppStatus)
console.log(AppStatus.PAUSED)

//Heterogeneous enum
enum EngineStatus{
    IGNITION=1,
    OFF=0,
    POWER='BATTERY MODE'
}

console.log(EngineStatus)
console.log(EngineStatus.IGNITION)
console.log(EngineStatus.POWER)

//Reverse mapping
console.log(AppStatus['DEACTIVE']);
console.log(Directions[8]);
console.log(Positions[2]);
console.log(EngineStatus[0]);
console.log(EngineStatus['POWER'])


