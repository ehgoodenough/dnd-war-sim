import * as Preact from "preact"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <MainScreen/>
            </div>
        )
    }
}

class MainScreen {
    render() {
        if(window.skirmish.simulation == undefined) {
            window.skirmish.simulation = SimulateSkirmishOdds(window.skirmish.state)
        }
        return (
            <div class="MainScreen">
                <RerollButton/>
                <Background/>
                <Skirmish/>
            </div>
        )
    }
}

class RerollButton {
    render() {
        return (
            <button class="RerollButton" onClick={this.onClick}>
                Reroll
            </button>
        )
    }
    onClick() {
        window.skirmish.simulation = SimulateSkirmishOdds(window.skirmish.state)
    }
}

class Background {
    render() {
        return (
            <div class="Background" style={{
                "background-image": "url(" + this.art + ")",
            }}/>
        )
    }
    get art() {
        return require("images/backgrounds/forest.png")
    }
}

class Skirmish {
    render() {
        if(window.skirmish.simulation == undefined) return
        return (
            <div class="Skirmish">
                {window.skirmish.simulation.squads.map((squad, index) => {
                    return <Squad index={index}/>
                })}
            </div>
        )
    }
}

class Squad {
    render() {
        const simulation = window.skirmish.simulation
        const state = window.skirmish.state
        const index = this.props.index
        return (
            <div class="Squad">
                <div class="Status">
                    <div class="Name">
                        {state.squads[index].name}
                    </div>
                    <div class="Odds">
                        {Math[simulation.squads[index].winrate < 50 ? "floor" : "ceil"](simulation.squads[index].winrate * 100)}% victory
                    </div>
                </div>
                <div class="Units">
                    {state.squads[index].protounits.map((protounit) => {
                        return <Unit protounit={protounit} squadIndex={index}/>
                    })}
                </div>
            </div>
        )
    }
}

class Unit {
    render() {
        const protoclass = classes[this.props.protounit.classkey]
        if(this.props.protounit.isLocked) {
            return (
                <div class="Unit">
                    <div class="Image" isLocked={true} style={{
                        "background-image": "url(" + protoclass.image + ")",
                    }}/>
                </div>
            )
        }
        return (
            <div class="Unit">
                <div class="Image" style={{
                    "background-image": "url(" + protoclass.image + ")",
                }}/>
                <div class="Text">
                    <div class="Name">{protoclass.name}</div>
                    {this.count}
                </div>
            </div>
        )
    }
    get count() {
        const protosquad = this.props.protounit
        const protoclass = classes[this.props.protounit.classkey]
        if(protoclass.isSingleton) {
            return (
                <input class="Count" type="checkbox" onChange={this.onChange} checked={protosquad.count > 0}/>
            )
        } else {
            return (
                <input class="Count" type="number" onChange={this.onChange} defaultValue={protosquad.count}/>
            )
        }
    }
    get onChange() {
        return (event) => {
            const protoclass = classes[this.props.protounit.classkey]
            let count = 0
            if(protoclass.isSingleton) {
                if(event.target.checked == true) {
                    count = 1
                }
            } else {
                if(isNaN(event.target.value) == false) {
                    count = parseInt(event.target.value)
                    count = Math.min(count, 1000)
                }
            }

            this.props.protounit.count = count
            window.skirmish.simulation = SimulateSkirmishOdds(window.skirmish.state)
        }
    }
}

class Random {
    static sign() {
        return Math.random() < 0.5 ? -1 : +1
    }
    static range(a, b) {
        const min = Math.min(a, b)
        const max = Math.max(a, b)
        return min + (Math.random() * (max - min))
    }
    static element(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
}

function CloneSkirmish(skirmish) {
    return {
        "squads": skirmish.squads.map((squad) => {
            return {
                "name": squad.name,
                "protounits": squad.protounits.map((protounit) => {
                    return {
                        "count": protounit.count,
                        "classkey": protounit.classkey,
                    }
                })
            }
        })
    }
}

function SimulateSkirmishOdds(protoskirmish) {
    const simulatedSkirmishes = []
    const NUMBER_OF_SIMULATIONS = 200
    for(let i = 0; i < NUMBER_OF_SIMULATIONS; i += 1) {
        simulatedSkirmishes.push(SimulateSkirmish(protoskirmish))
    }

    const simulation = {
        "totalSkirmishes": 0,
        "squads": [
            {"failedSkirmishes": 0},
            {"failedSkirmishes": 0},
        ],
    }
    simulatedSkirmishes.forEach((simulatedSkirmish) => {
        simulation.totalSkirmishes += 1
        if(simulatedSkirmish.squads[0].survey.hasBeenDefeated) {
            simulation.squads[0].failedSkirmishes += 1
        }
        if(simulatedSkirmish.squads[1].survey.hasBeenDefeated) {
            simulation.squads[1].failedSkirmishes += 1
        }
    })
    simulation.squads[0].winrate = 1 - (simulation.squads[0].failedSkirmishes / simulation.totalSkirmishes)
    simulation.squads[1].winrate = 1 - (simulation.squads[1].failedSkirmishes / simulation.totalSkirmishes)

    return simulation
}

function SimulateSkirmish(skirmish) {
    skirmish = CloneSkirmish(skirmish)
    const NUMBER_OF_SIMULATED_ROUNDS = 30
    for(let r = 0; r < NUMBER_OF_SIMULATED_ROUNDS; r += 1) {
        SimulateSkirmishRound(skirmish)
        if(skirmish.squads[0].survey.hasBeenDefeated
        || skirmish.squads[1].survey.hasBeenDefeated) {
            break
        }
    }
    return skirmish
}

function SimulateSkirmishRound(skirmish) {
    skirmish.round = skirmish.round || 0
    skirmish.round += 1

    skirmish.squads.forEach((squad) => {
        if(squad.units == undefined) {
            squad.units = []

            squad.protounits.forEach((protounit) => {
                for(let i = 0; i < protounit.count; i += 1) {
                    squad.units.push({
                        "class": classes[protounit.classkey],
                        "health": classes[protounit.classkey].health,
                        "maxhealth": classes[protounit.classkey].health,
                    })
                }
            })
        }
    })

    if(skirmish.round > 1) {
        skirmish.squads.forEach((squad, index) => {
            squad.units.forEach((performerUnit) => {
                if(performerUnit.health <= 0) return
                if(performerUnit.class.heal != undefined) {
                    for(let i = 0; i < performerUnit.class.heal.count; i += 1) {
                        const targetSquad = skirmish.squads[index]
                        let targetUnit = undefined
                        targetSquad.units.forEach((unit) => {
                            if(unit.health <= 0) return
                            if(targetUnit == undefined) targetUnit = unit
                            if(targetUnit.health > unit.health) targetUnit = unit
                        })

                        targetUnit.health += performerUnit.class.heal.health
                        if(targetUnit.health > targetUnit.maxhealth) targetUnit.health = targetUnit.maxhealth
                    }
                }
                if(performerUnit.class.attack != undefined) {
                    for(let i = 0; i < performerUnit.class.attack.count; i += 1) {
                        const targetSquad = skirmish.squads[(index + 1) % 2]
                        const targetUnit = Random.element(targetSquad.units.filter((unit) => unit.health > 0))

                        if(targetUnit == undefined) {
                            return
                        }

                        let accuracyRoll = Random.range(1, 20)
                        if(performerUnit.class.attack.hasAdvantage) {
                            accuracyRoll = Math.max(accuracyRoll, Random.range(1, 20))
                        }
                        const accuracy = accuracyRoll + performerUnit.class.attack.accuracy
                        const isCriticalHit = (accuracyRoll == 20)
                        const isHit = (accuracy >= targetUnit.class.armor) || isCriticalHit

                        const damageRoll = performerUnit.class.attack.damage
                        let damage = damageRoll
                        if(isCriticalHit) {
                            damage += damageRoll
                        }

                        if(isHit == true) {
                            targetUnit.health -= damage
                        }
                    }
                }
            })
        })
    }

    // Survey who is alive and who isn't at the end of it all.
    skirmish.squads.forEach((squad) => {
        squad.survey = {
            "totalUnits": 0,
            "aliveUnits": 0,
            "deadUnits": 0,
            "totalHealth": 0,
        }
        squad.units.forEach((unit) => {
            squad.survey.totalUnits += 1
            if(unit.health <= 0) {
                squad.survey.deadUnits += 1
            } else {
                squad.survey.aliveUnits += 1
                squad.survey.totalHealth += unit.health
            }
        })

        if(squad.survey.aliveUnits == 0) {
            squad.survey.hasBeenDefeated = true
        }
    })
}


const classes = {
    "hoplite": { // akrosian hoplite
        "name": "Hoplite",
        "image": require("images/iroan/hoplite.png"),
        "level": 3,
        "health": 52, // 8d8+16
        "armor": 18,
        "speed": 30,
        "attack": {
            "count": 3,
            "accuracy": +5,
            "damage": 6,
            "range": 20,
            "maxrange": 60,
        },
        "abilities": {
            "strength": +3,
            "dexterity": +3,
            "constitution": +2,
            "intelligence": 0,
            "wisdom": +2,
            "charisma": +1,
        },
    },
    "myrmidon": { // meletian hoplite
        "level": 3,
        "name": "Myrmidon",
        "image": require("images/iroan/myrmidon.png"),
        "health": 49, // 9d8+9
        "armor": 18,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +5,
            "damage": 6,
        },
        "abilities": {
            "strength": +3,
            "dexterity": +2,
            "constitution": +1,
            "intelligence": +3,
            "wisdom": +1,
            "charisma": 0,
        },
    },
    "cavalier": { // akrosian hoplite
        "name": "Cavalier",
        "image": require("images/iroan/cavalier.png"),
        "level": 3,
        "health": 52, // 8d8+16
        "armor": 18,
        "speed": 30,
        "attack": {
            "count": 3,
            "accuracy": +5,
            "damage": 6,
            "range": 20,
            "maxrange": 60,
        },
        "abilities": {
            "strength": +3,
            "dexterity": +3,
            "constitution": +2,
            "intelligence": 0,
            "wisdom": +2,
            "charisma": +1,
        },
    },
    "archer": { // archer
        "name": "Archer",
        "image": require("images/iroan/archer.png"),
        "health": 36, // 9d8+18
        "armor": 16,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +6,
            "damage": 8,
        },
        "abilities": {
            "strength": 0,
            "dexterity": +4,
            "constitution": +0,
            "intelligence": 0,
            "wisdom": +1,
            "charisma": 0,
        },
    },
    "cleric": {
        "name": "Priest",
        "image": require("images/iroan/cleric.png"),
        "level": 4,
        "health": 44,
        "armor": 15,
        "speed": 30,
        "heal": {
            "count": 5,
            "health": 5,
        }
    },
    ///
    "rogue": {
        "name": "Rogue",
        "image": require("images/iroan/rogue.png"),
    },
    "harpy": {
        "name": "Harpy",
        "image": require("images/iroan/harpy.png"),
    },
    "othertriton": {
        "name": "Harpy",
        "image": require("images/iroan/triton.png"),
    },
    "ballista": {
        "name": "Ballista",
        "image": require("images/iroan/ballista.png"),
    },
    "wagon": {
        "name": "",
        "image": require("images/iroan/wagon.png"),
    },
    "balloon": {
        "name": "",
        "image": require("images/iroan/balloon.png"),
    },
    "iroas": {
        "name": "",
        "image": require("images/iroan/iroas.png"),
    },
    "archimedes": {
        "name": "",
        "image": require("images/iroan/archimedes.png"),
    },
    "uther": {
        "name": "",
        "image": require("images/iroan/uther.png"),
    },
    "zeross": {
        "name": "",
        "image": require("images/iroan/zeross.png"),
    },
    "champion": {
        "name": "",
        "image": require("images/iroan/champion.png"),
    },


    "ranger": { // setessan hoplite
        "name": "Ranger",
        "image": require("images/nessian/ranger.png"),
        "level": 4,
        "health": 58, // 9d8+18
        "armor": 16,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +5,
            "damage": 7,
            "minrange": 5,
            "range": 150,
            "maxrange": 600,
        },
        "abilities": {
            "strength": +2,
            "dexterity": +3,
            "constitution": +2,
            "intelligence": +1,
            "wisdom": +3,
            "charisma": 0,
        },
    },
    "peasant": { // commoner
        "name": "Peasant",
        "image": require("images/nessian/peasant.png"),
        "health": 10,
        "armor": 10,
        "speed": 30,
        "attack": {
            "count": 1,
            "accuracy": +2,
            "damage": 2,
            "hasAdvantage": true,
        }
    },
    "witch": { // oracle
        "name": "Witch",
        "image": require("images/nessian/witch.png"),
        "level": 4,
        "health": 44,
        "armor": 15,
        "speed": 30,
        "heal": {
            "count": 5,
            "health": 5,
        }
    },
    "cuthos": {
        "name": "Cuthos",
        "image": require("images/nessian/cuthos.png"),
        "isSingleton": true,
        "level": 11,
        "health": 58,
        "armor": 15,
        "speed": 30,
        "heal": {
            "count": 10,
            "health": 100,
        }
    },
    "aquilla": {
        "name": "Aquilla",
        "image": require("images/nessian/aquilla.png"),
        "isSingleton": true,
        "level": 10,
        "health": 63,
        "armor": 17,
        "speed": 35,
        "attack": {
            "count": 5,
            "accuracy": +100,
            "damage": 30,
        }
    },
    "ellis": {
        "name": "Ellis",
        "image": require("images/nessian/ellis2.png"),
        "isSingleton": true,
        "level": 10,
        "health": 52,
        "armor": 15,
        "speed": 30,
        "attack": {
            "count": 14 / 2,
            "accuracy": +10,
            "damage": 32,
        }
    },
    "taliesin": {
        "name": "Taliesin",
        "image": require("images/nessian/taliesin.png"),
        "isSingleton": true,
        "level": 10,
        "health": 73,
        "armor": 14,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +6,
            "damage": 6,
        },
        "heal": {
            "count": 10,
            "health": 100,
        }
    },
    "iris": {
        "name": "Iris",
        "image": require("images/nessian/iris.png"),
        "isSingleton": true,
        "level": 10,
        "health": 73,
        "armor": 14,
        "speed": 30,
        "attack": {
            "count": 8,
            "accuracy": +12,
            "damage": 19,
        },
    },
    "rhea": {
        "name": "Rhea",
        "image": require("images/nessian/rhea.png"),
        "isSingleton": true,
        "level": 5,
        "health": 300,
        "armor": 21,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +12,
            "damage": 19,
        },
    },
    //
    "owlbear": {
        "name": "???",
        "image": require("images/nessian/owlbear.png"),
    },
    "apprentice": {
        "name": "???",
        "image": require("images/nessian/apprentice.png"),
    },
    "goliath": {
        "name": "???",
        "image": require("images/nessian/goliath.png"),
    },
    "triton": {
        "name": "???",
        "image": require("images/nessian/triton.png"),
    },
    "dragon": {
        "name": "???",
        "image": require("images/nessian/dragon.png"),
    },
    "trebuchet": {
        "name": "???",
        "image": require("images/nessian/trebuchet.png"),
    },
    "thing": {
        "name": "???",
        "image": require("images/nessian/thing.png"),
    },
}

window.skirmish = {
    "state": {
        "squads": [
            {
                "name": "Iroan Forces",
                "protounits": [
                    {"count": 50, "classkey": "hoplite", "isTutorial": true},
                    {"count": 0, "classkey": "cavalier", "isTutorial": true},
                    {"count": 0, "classkey": "myrmidon", "isTutorial": true},
                    {"count": 0, "classkey": "archer", "isTutorial": true},
                    {"count": 0, "classkey": "cleric", "isTutorial": true},
                    {"count": 0, "classkey": "ballista", "isLocked": true},
                    {"count": 0, "classkey": "wagon", "isLocked": true},
                    {"count": 0, "classkey": "balloon", "isLocked": true},
                    {"count": 0, "classkey": "iroas", "isLocked": true},
                    {"count": 0, "classkey": "archimedes", "isLocked": true, "isTeased": true},
                    {"count": 0, "classkey": "uther", "isLocked": true, "isTeased": true},
                    {"count": 0, "classkey": "zeross", "isLocked": true, "isTeased": true},
                    {"count": 0, "classkey": "champion", "isLocked": true, "isTeased": true},
                    {"count": 0, "classkey": "harpy", "isLocked": true},
                    {"count": 0, "classkey": "othertriton", "isLocked": true},
                    {"count": 0, "classkey": "rogue", "isLocked": true},
                ]
            },
            {
                "name": "Nessian Forces",
                "protounits": [
                    {"count": 50, "classkey": "ranger", "isTutorial": true},
                    {"count": 0, "classkey": "witch", "isTutorial": true},
                    {"count": 0, "classkey": "peasant", "isTutorial": true},
                    {"count": 0, "classkey": "cuthos"},
                    {"count": 0, "classkey": "aquilla"},
                    {"count": 0, "classkey": "taliesin"},
                    {"count": 0, "classkey": "ellis"},
                    {"count": 0, "classkey": "iris"},
                    {"count": 0, "classkey": "rhea", "isLocked": true},
                    {"count": 0, "classkey": "owlbear", "isLocked": true},
                    {"count": 0, "classkey": "apprentice", "isLocked": true},
                    {"count": 0, "classkey": "dragon", "isLocked": true},
                    {"count": 0, "classkey": "triton", "isLocked": true},
                    {"count": 0, "classkey": "goliath", "isLocked": true},
                    {"count": 0, "classkey": "trebuchet", "isLocked": true},
                    {"count": 0, "classkey": "thing", "isLocked": true},
                ]
            },
        ]
    }
}
