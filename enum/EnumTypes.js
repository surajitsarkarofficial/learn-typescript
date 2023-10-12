//numeric enum
var Positions;
(function (Positions) {
    Positions[Positions["UP"] = 1] = "UP";
    Positions[Positions["DOWN"] = 2] = "DOWN";
    Positions[Positions["LEFT"] = 3] = "LEFT";
    Positions[Positions["RIGHT"] = 4] = "RIGHT";
})(Positions || (Positions = {}));
console.log(Positions);
console.log(Positions.LEFT);
//numeric enum with random value assigned which is not sequential
var Directions;
(function (Directions) {
    Directions[Directions["EAST"] = 5] = "EAST";
    Directions[Directions["WEST"] = 4] = "WEST";
    Directions[Directions["NORTH"] = 8] = "NORTH";
    Directions[Directions["SOUTH"] = 10] = "SOUTH";
})(Directions || (Directions = {}));
console.log(Directions);
//string enum
var AppStatus;
(function (AppStatus) {
    AppStatus["ACTIVE"] = "ACT";
    AppStatus["DEACTIVE"] = "DEACT";
    AppStatus["PAUSED"] = "PAUSE";
    AppStatus["STOPPED"] = "STOP";
})(AppStatus || (AppStatus = {}));
console.log(AppStatus);
console.log(AppStatus.PAUSED);
//Heterogeneous enum
var EngineStatus;
(function (EngineStatus) {
    EngineStatus[EngineStatus["IGNITION"] = 1] = "IGNITION";
    EngineStatus[EngineStatus["OFF"] = 0] = "OFF";
    EngineStatus["POWER"] = "BATTERY MODE";
})(EngineStatus || (EngineStatus = {}));
console.log(EngineStatus);
console.log(EngineStatus.IGNITION);
console.log(EngineStatus.POWER);
//Reverse mapping
console.log(AppStatus['DEACTIVE']);
console.log(Directions[8]);
console.log(Positions[2]);
console.log(EngineStatus[0]);
console.log(EngineStatus['POWER']);
